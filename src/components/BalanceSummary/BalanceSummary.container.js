import {compose} from 'recompose'
import {connect} from 'react-redux'

import BalanceSummary from './BalanceSummary.component'

const mapStateToProps = (state) => ({
  stocks: state.stock.list,
})

const mapDispatchToProps = () => ({

})

export default compose(connect(mapStateToProps, mapDispatchToProps))(BalanceSummary)
