import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'

import Drawer from './Drawer.component'
import {clearAuthInfo} from '../../helpers/authHelper';


const mapStateToProps = () => ({
  
})

const mapDispatchToProps = (dispatch) => ({
  dispatch,
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    navigate: ({navigation}) => (route) => () => navigation.navigate(route),
    logout: ({navigation, dispatch}) => () => clearAuthInfo(navigation, dispatch),
  }),
)(Drawer)
