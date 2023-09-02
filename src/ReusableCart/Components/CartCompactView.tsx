import CartComponent, {ICartViewProps} from "./CartComponent";

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
                (totalAmount: number) => {
                    return (
                        <div>
                            <span>Total: {totalAmount}</span>

                            <button onClick={() => console.log('You will be redirected to Full Cart View')}>Show Full Cart</button>
                        </div>
                    )
                }

            }
        </CartComponent>
    );
}
export default CartCompactView;