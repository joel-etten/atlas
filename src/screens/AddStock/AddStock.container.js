import {compose} from 'recompose'
import {connect} from 'react-redux'

import AddStockComponent from './AddStock.component'

// import {bindActionCreators} from '../../../../../Library/Caches/typescript/3.1/node_modules/redux';
// import {addStock} from '../../actions/stocks'


const mapStateToProps = () => ({

})

const mapDispatchToProps = () => ({
  // addStock: bindActionCreators(addStock, dispatch),
})


export default compose(connect(mapStateToProps, mapDispatchToProps))(AddStockComponent)
