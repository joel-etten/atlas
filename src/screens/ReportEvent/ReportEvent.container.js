import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'
import {Alert} from 'react-native'
import {bindActionCreators} from 'redux';
import {SubmissionError} from 'redux-form'
import ReportEvent from './ReportEvent.component'
import {reportEvent} from '../../actions/event';
import {loadingSelector} from '../../reducers/loading';
import {REPORT_EVENT} from '../../constants/Actions';


const mapStateToProps = (state) => ({
  loading: loadingSelector(state, REPORT_EVENT),
})

const mapDispatchToProps = (dispatch) => ({
  reportSubmit: bindActionCreators(reportEvent, dispatch),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onSubmit: ({reportSubmit, navigation}) => (values) => reportSubmit({...values, event: navigation.getParam('eventId')})
      .then(() => Alert.alert('Event reported.', 'Thank you for your feedback, the event will be verified and reported to the creator', [
        {
          text: 'OK', onPress: () => navigation.goBack(),
        },
      ]))
      .catch((err) => {
        if (err.errors) {
          throw new SubmissionError(err.errors)
        }
      }),
  }),
)(ReportEvent)
