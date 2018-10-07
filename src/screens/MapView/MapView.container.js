/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-16 11:05:25
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-16 14:33:15
 */
import {connect} from 'react-redux';
import {compose, withHandlers, lifecycle, withStateHandlers} from 'recompose';
import {bindActionCreators} from 'redux';
import getDirections from 'react-native-google-maps-directions'
import {NEAR_EVENT} from '../../constants/Actions';
import {loadingSelector} from '../../reducers/loading';
import {locationSelector} from '../../reducers/location';
import MapView from './MapView.component';
import {getAllNearEvents} from '../../actions/event';
import {eventNearArraySelector} from '../../reducers/event/list/near';
import {regionCalculator} from '../../helpers/regionCalculatorHelper';
import {getEventsLocationList} from '../../helpers/formatEventHelper';

const mapStateToProps = (state) => ({
  loading: loadingSelector(state, NEAR_EVENT),
  location: locationSelector(state),
  events: eventNearArraySelector(state),
})

const mapDispatchToProps = (dispatch) => ({
  getEvents: bindActionCreators(getAllNearEvents, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({
    selected: null,
    sliderValue: 5,
  }, {
    selectEvent: () => (event) => ({
      selected: event,
    }),

    clearSelection: () => () => ({selected: null}),

    changeSliderValue: () => (value) => ({sliderValue: Math.round(value)}),
  }),
  withHandlers({
    getCurrentLocation: ({location}) => () => ({longitude: location.coords.longitude, latitude: location.coords.latitude}),
    getEventLocation: () => ({location}) => ({latitude: location.coordinates[1], longitude: location.coordinates[0]}),
  }),

  withHandlers({
    calculateRegion: ({events, getCurrentLocation}) => () => {
      const locations = [getCurrentLocation()]
      const eventLocations = getEventsLocationList(events)
      if (eventLocations.length <= 1) {
        return {
          ...getCurrentLocation(),
          latitudeDelta: 0.0099,
          longitudeDelta: 0.0217,

        }
      }
      return regionCalculator([...locations, ...eventLocations])
    },

    openGoogleMapsNavigation: ({getEventLocation, getCurrentLocation}) => (event) => () => {
      const navigationObj = {
        source: getCurrentLocation(),
        destination: getEventLocation(event),
        params: [
          {
            key: 'travelmode',
            value: 'driving', // may be "walking", "bicycling" or "transit" as well
          },
          {
            key: 'dir_action',
            value: 'navigate', // this instantly initializes navigation using the given travel mode
          },
        ],
      }
      getDirections(navigationObj)
    },
    onClose: ({navigation}) => () => {
      navigation.goBack()
    },

    refetchBasedOnRadius: ({sliderValue, getCurrentLocation, getEvents}) => () => {
      getEvents({...getCurrentLocation(), maxDistance: sliderValue})
    },
  }),
  lifecycle({
    componentDidMount() {
      this.props.getEvents(this.props.location.coords)
    },

  }),
)(MapView)
