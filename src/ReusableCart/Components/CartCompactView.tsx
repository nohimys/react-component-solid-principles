import CartComponent, {ICartViewProps} from "./CartComponent";
import {getTotalWithDiscount} from "../Utils/Calculations";

interface ICartCompactViewProps extends ICartViewProps{
    onExpandedViewTrigger: Function;
}

//Responsibilities:
//Render Total Amount
//Render Show Full Cart Button
const CartCompactView = (props: ICartCompactViewProps) => {
    return (
        <CartComponent {...props} >
            {
                () => {
                    return (
                        <div>
                            <span>Total: {getTotalWithDiscount(props.itemList, 0)}</span>

                            <button onClick={() => console.log('You will be redirected to Full Cart View')}>Show Full Cart</button>
                        </div>
                    )
                }

            }
        </CartComponent>
    );
}
export default CartCompactView;