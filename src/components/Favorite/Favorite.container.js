/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-10 15:45:37
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-14 08:40:34
 */
import {compose, withHandlers, withStateHandlers} from 'recompose'
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux'
import Favorite from './Favorite.component'
import {isEventFavoriteSelector} from '../../reducers/user/favorites';
import {favoriteEvent as favoriteEventAction} from '../../actions/event';
import saveToCalendarHoc from '../../hocs/saveToCalendarHoc';

const mapStateToProps = (state, {eventId}) => ({
  isFavorite: isEventFavoriteSelector(state)(eventId),
})

const mapDispatchToProps = (dispatch) => ({
  favoriteEvent: bindActionCreators(favoriteEventAction, dispatch),
})


export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withStateHandlers({loading: false}, {
    setLoadingStatus: () => (status) => ({
      loading: status,
    }),
  }),
  saveToCalendarHoc,
  withHandlers({
    setFavorite: ({
      eventId, favoriteEvent, setLoadingStatus, askUserForSaving, isFavorite, deleteFromCalendar,
    }) => async () => {
      setLoadingStatus(true)
      if (!isFavorite) {
        askUserForSaving()
      } else {
        await deleteFromCalendar()
      }
      await favoriteEvent(eventId)
      
      setLoadingStatus(false)
    },
  }),
)(Favorite)
