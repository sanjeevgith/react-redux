import { connect } from "react-redux";
import Home from "../components/Home";
import  {AddToCart} from '../services/Actions/actions'

const mapStateToProps=state=>({
    // data:state.cardItems
})

const mapDispatchToProps=dispatch=>({
    addToCartHandler:data=>dispatch(AddToCart(data))

})

export default  connect(mapStateToProps,mapDispatchToProps)(Home);