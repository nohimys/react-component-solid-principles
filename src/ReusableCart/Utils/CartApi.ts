import {IProduct} from "../Components/CartComponent";
import post from "./CoreApi";

const CartApi = {
    saveCart: async (productList: IProduct[]) => {
        const URL = '/save-cart';

        const response = await post(URL,productList);
        console.log(`${URL}: ${response}`);
    },
    checkoutCart: async (productList: IProduct[]) => {
        const URL = '/checkout';

        const response = await post(URL,productList);
        console.log(`${URL}: ${response}`);
    }
}
export default CartApi;