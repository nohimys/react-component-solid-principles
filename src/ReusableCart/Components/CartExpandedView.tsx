import CartComponent, {ICartViewProps} from "./CartComponent";
import {getTotalWithDiscount} from "../Utils/Calculations";
import CartApi from "../Utils/CartApi";

interface ICartExpandedViewProps extends ICartViewProps{
    onCheckoutCompleted: Function;
    onSaveCartCompleted: Function;
}

//Responsibilities:
//Render Total Amount
//Render Item list
//Render Save Cart Button
//Render Checkout Button
const CartExpandedView = (props: ICartExpandedViewProps) => {
    return (
        <CartComponent {...props} >
            {
                (totalAmount: number) => {
                    return (
                        <div>
                            <ol>
                                {
                                    props.itemList.map(product => {
                                        return <li key={product.name}> {`${product.name} --- ${product.price}`}</li>
                                    })
                                }
                            </ol>

                            <div>Total: {totalAmount}</div>

                            <button onClick={() => {CartApi.saveCart(props.itemList)}}>Save Cart</button>
                            <button onClick={() => {CartApi.checkoutCart(props.itemList)}}>Checkout</button>
                        </div>
                    )
                }

            }
        </CartComponent>
    );
}
export default CartExpandedView;