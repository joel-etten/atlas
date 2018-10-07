import {compose, lifecycle} from 'recompose';
import {connect} from 'react-redux';
import RootNavigator from './navigation/RootNavigator';
import {getLocation} from './actions/location';


const mapStateToProps = () => ({

})

const mapDispatchToProps = (dispatch) => ({
  getCurrentPosition: () => dispatch(getLocation()),
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  lifecycle({
    componentDidMount() {
      this.props.getCurrentPosition()
    },
  }),
)(RootNavigator)
