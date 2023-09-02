//Responsibilities:
//Specialized API functions for Cart

import post from "./CoreApi";
import IProduct from "../modals/IProduct";

const CartApi = {
    saveCart: async (productList: IProduct[]) => {
        const URL = '/save-cart';

        const response = await post(URL, productList);
        console.log(`${URL}: ${response}`);
    },
    checkoutCart: async (productList: IProduct[]) => {
        const URL = '/checkout';

        const response = await post(URL, productList);
        console.log(`${URL}: ${response}`);
    }
}
export default CartApi;