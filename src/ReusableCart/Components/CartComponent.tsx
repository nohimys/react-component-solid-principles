import {getTotalWithDiscount} from "../Utils/Calculations";

export interface IConsumerStyleProps {
    backgroundColour: string;
    font: string;
    height: number
}

export interface IProduct {
    name: string;
    price: number
}

export interface ICartViewProps {
    cartName: string;
    clientId: number;
    consumerStyleProps: IConsumerStyleProps;
    itemList: IProduct[];
    children?:any
}

//Responsibilities:
//Render Base Skeleton
//Provide Total Amount to Child Components
const CartComponent = (props: ICartViewProps) => {
    const styles = {
        backgroundColor:props.consumerStyleProps.backgroundColour,
        fontFamily:props.consumerStyleProps.font,
        height: `${props.consumerStyleProps.height}px`
    };

    return (
        <div style={styles}>
            <h6> {props.cartName + ' : ' + props.clientId} </h6>
            {
                 props.children(getTotalWithDiscount(props.itemList, 0))
            }
        </div>
    );
}
export default CartComponent;