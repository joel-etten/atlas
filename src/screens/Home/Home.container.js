import {compose, withHandlers} from 'recompose'
import {connect} from 'react-redux'

import Home from './Home.component'

const mapStateToProps = (state) => ({
  stocks: state.stock.list,
})

const mapDispatchToProps = () => ({

})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    onAddButtonPress: ({navigation}) => () => {
      navigation.navigate('AddStock')
    },
  }),
)(Home)
