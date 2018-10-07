/*
 * @Author: Matheus Rezende
 * @Date: 2018-08-17 17:26:51
 * @Last Modified by: @matheusrezende
 * @Last Modified time: 2018-08-18 10:15:11
 */
import {compose, withHandlers} from 'recompose'
import {withNavigation} from 'react-navigation'
import {connect} from 'react-redux'
import {connectActionSheet} from '@expo/react-native-action-sheet';
import SettingsButton from './SettingsButton.component'
import {eventDetailSelector} from '../../../reducers/event/detail';

const OPTIONS = ['Change Password', 'Delete Account', 'Cancel']


const mapStateToProps = (state, ownProps) => ({
  event: eventDetailSelector(ownProps.eventId)(state),
})

const mapDispatchToProps = () => ({
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withNavigation,
  connectActionSheet,
  withHandlers({
    showActionSheet: ({showActionSheetWithOptions, navigation, deleteAccount}) => () => {
      const options = OPTIONS;
      const destructiveButtonIndex = 2;
      const cancelButtonIndex = 2;
      showActionSheetWithOptions({
        options,
        destructiveButtonIndex,
        cancelButtonIndex,
      }, (buttonIndex) => {
        switch (buttonIndex) {
          case 0: {
            navigation.navigate('ChangePassword')
            break
          }
          case 1: {
            deleteAccount()
            break
          }
          default: {
            console.log('Canceled')
          }
        }
      })

    },
  }),
)(SettingsButton)
