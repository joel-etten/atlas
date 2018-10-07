/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 17:26:51
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 15:57:43
 */
import {compose, withHandlers} from 'recompose'
import {Alert} from 'react-native'
import {withNavigation} from 'react-navigation'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';

import {connectActionSheet} from '@expo/react-native-action-sheet';
import SettingsButton from './SettingsButton.component'
import {isEventOwnerSelector} from '../../../reducers/event/detail';
import {deleteEvent as deleteEventAction} from '../../../actions/event';

const OPTIONS = ['Report Event', 'Cancel']

const OWNER_OPTIONS = ['Update Event', 'Delete Event', 'Cancel']

const mapStateToProps = (state, ownProps) => ({
  isEventOwner: isEventOwnerSelector(ownProps.eventId)(state),
})

const mapDispatchToProps = (dispatch) => ({
  deleteEvent: bindActionCreators(deleteEventAction, dispatch),
  dispatch,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  connectActionSheet,
  withHandlers({
    deleteData: ({deleteEvent, navigation, eventId}) => () => {
      Alert.alert('Delete Event', "By deleting this event you're gonna lose all its data.", [
        {text: 'Cancel', style: 'cancel', onPress: () => {}},
        {
          text: 'Confirm',
          onPress: () => deleteEvent(eventId)
            .then(() => navigation.goBack())
            .catch(() => Alert.alert('Something went wrong')),
        },
      ])
    },
  }),
  withHandlers({
    showActionSheet: ({
      showActionSheetWithOptions, navigation, deleteData, isEventOwner, eventId,
    }) => () => {
      const options = isEventOwner ? OWNER_OPTIONS : OPTIONS;
      const destructiveButtonIndex = options.length;
      const cancelButtonIndex = options.length - 1;
      showActionSheetWithOptions({
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      }, (buttonIndex) => {
        if (!isEventOwner) {
          switch (buttonIndex) {
            case 0: {
              navigation.navigate({routeName: 'ReportEvent', params: {eventId}})
              break
            }
            default: {
              console.log('Canceled')
            }
          }

        } else {
          switch (buttonIndex) {
            case 0: {
              navigation.navigate({routeName: 'UpdateEvent', params: {eventId}})
              break
            }
            case 1: {
              deleteData()
              break
            }
            default: {
              console.log('Canceled')
            }
          }
        }
      })

    },
  }),
)(SettingsButton)
