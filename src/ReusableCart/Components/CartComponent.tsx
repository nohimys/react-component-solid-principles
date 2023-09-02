//Responsibilities:
//Render base skeleton sharing common capabilities to all components
//Provide Total Amount to associated components

import {getTotalWithDiscount} from "../Utils/Calculations";
import IProduct from "../modals/IProduct";

export interface IConsumerStyleProps {
    backgroundColour: string;
    font: string;
    height: number
}

export interface ICartViewProps {
    cartName: string;
    clientId: number;
    consumerStyleProps: IConsumerStyleProps;
    itemList: IProduct[];
    children?: Function
}

const CartComponent = (props: ICartViewProps) => {
    const styles = {
        backgroundColor: props.consumerStyleProps.backgroundColour,
        fontFamily: props.consumerStyleProps.font,
        height: `${props.consumerStyleProps.height}px`
    };

    return (
        <div style={styles}>
            <h6> {props.cartName + ' : ' + props.clientId} </h6>
            {
                props.children &&
                props.children(getTotalWithDiscount(props.itemList, 0))
            }
        </div>
    );
}
export default CartComponent;