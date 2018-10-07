/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-05 19:58:07
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 10:11:03
 */
import {Location} from 'expo'
import {bindActionCreators} from 'redux';
import _ from 'lodash'
import {compose, lifecycle, withHandlers, withStateHandlers} from 'recompose';
import {connect} from 'react-redux'
import {formValueSelector, change as changeAction, SubmissionError, clearFields} from 'redux-form'

import {categoryArraySelector} from '../../reducers/category';
import {createEvent} from '../../actions/event';
import {formatEventForSubmission} from '../../helpers/formatEventHelper';
import {locationSelector} from '../../reducers/location';
import NewEventComponent from './NewEvent.component'


const mapStateToProps = (state) => ({
  picture: formValueSelector('newEvent')(state, 'picture'),
  categories: categoryArraySelector(state),
  selectedCategories: formValueSelector('newEvent')(state, 'categories'),
  beginningDate: formValueSelector('newEvent')(state, 'beginning'),
  endingDate: formValueSelector('newEvent')(state, 'ending'),
  location: locationSelector(state),
  formLatitude: formValueSelector('newEvent')(state, 'latitude'),
  formLongitude: formValueSelector('newEvent')(state, 'longitude'),
})

const mapDispatchToProps = (dispatch) => ({
  changeField: bindActionCreators(changeAction, dispatch),
  createNewEvent: bindActionCreators(createEvent, dispatch),
  clear: bindActionCreators(clearFields, dispatch),
})

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const asyncValidate = (values, dispatch) => sleep(3000).then(async () => {
  // simulate server latency

  const {addressString} = values
  if (addressString.length > 5) {
    const result = await Location.geocodeAsync(addressString)
  
    if (result && result[0]) {
      const {latitude, longitude} = result[0]
      dispatch(changeAction('newEvent', 'latitude', latitude))
      dispatch(changeAction('newEvent', 'longitude', longitude))
      const reversedData = await Location.reverseGeocodeAsync({latitude, longitude})
      dispatch(changeAction('newEvent', 'address', reversedData[0]))
    } else if (addressString.length > 5) {
      throw {addressString: 'Couldnt find address location'} // eslint-disable-line
    }
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers(({showStartingTimePicker = false, showEndingTimePicker = false}) => ({
    showStartingTimePicker,
    showEndingTimePicker,
  }), {
    showStarting: () => () => ({
      showStartingTimePicker: true,
    }),
    showEnding: () => () => ({
      showEndingTimePicker: true,
    }),
  }),
  withHandlers({
    onSubmit: ({createNewEvent, navigation}) => (values) => createNewEvent(formatEventForSubmission(values))
      .then(() => navigation.replace({routeName: 'EventSuccess'}))
      .catch((err) => {
        const errorData = err || {}
        if (errorData.message === 'validation error') {
          const errors = {
            ...errorData.errors,
          }
          if (errorData.errors['address,street']) {
            errors.addressString = 'Could not find location address.'
          }
          throw new SubmissionError(errors)
        }
      }),

    openModal: ({navigation}) => (params) => () => navigation.navigate('Modal', params),

    reverseGeocode: ({changeField}) => async ({latitude, longitude}) => {
      const reversedData = await Location.reverseGeocodeAsync({
        latitude,
        longitude,
      })
      const title = reversedData[0].name
      changeField('newEvent', 'addressString', title)
      changeField('newEvent', 'latitude', latitude)
      changeField('newEvent', 'longitude', longitude)
      changeField('newEvent', 'address', reversedData[0])
    },
    resetField: ({clear, navigation}) => (fields) => () => {
      navigation.pop()

      _.debounce(() => clear('newEvent', false, false, fields), 1000)()
    },
  
  }),
  withHandlers({
    getCurrentLocation: ({location, reverseGeocode}) => () => reverseGeocode(location.coords),
    getLocationFromMap: ({reverseGeocode}) => (event) => reverseGeocode(event.nativeEvent.coordinate),
  }),
  lifecycle({
    componentWillReceiveProps(nextProps) {
      if (nextProps.beginningDate !== this.props.beginningDate && (nextProps.beginningDate > this.props.endingDate || !nextProps.endingDate)) {
        this.props.changeField('newEvent', 'ending', nextProps.beginningDate)
      }
    },
  }),
)(NewEventComponent)
