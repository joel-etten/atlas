/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 16:34:28
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-19 15:33:14
 */
import {compose, withHandlers, lifecycle, flattenProp} from 'recompose'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import EventDetail from './EventDetail.component'
import {getEventDetail as getEventDetailAction, clearEventDetail} from '../../actions/event';
import {loadingSelector} from '../../reducers/loading';
import {EVENT_DETAIL} from '../../constants/Actions';
import {eventDetailFormattedSelector} from '../../reducers/event/detail';

const mapStateToProps = (state, {navigation}) => ({
  loading: loadingSelector(state, EVENT_DETAIL),
  event: eventDetailFormattedSelector(navigation.getParam('eventId'))(state),
})

const mapDispatchToProps = (dispatch) => ({
  getEventDetail: bindActionCreators(getEventDetailAction, dispatch),
  clearEventDetail: bindActionCreators(clearEventDetail, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),

  withHandlers({
    getEvent: ({getEventDetail, navigation}) => () => { // get the id through the navigation params and fetch for the specific event.
      const eventId = navigation.getParam('eventId')
      getEventDetail(eventId)
    },
    openMap: ({navigation, event}) => () => {
      navigation.navigate({routeName: 'MapModal', params: {eventId: event._id}, key: event._id})
    },
      
  }),
  lifecycle({
    componentDidMount() {
      this.props.getEvent()
    },
  }),
  flattenProp('event'),
)(EventDetail)
