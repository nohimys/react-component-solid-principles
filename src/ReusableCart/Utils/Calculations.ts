//Responsibilities:
//Calculate total

import IProduct from "../modals/IProduct";

export const getTotalWithDiscount = (
    items: IProduct[],
    discountPercentage: number
): number => {
    const total = items.reduce((result, item) => {
        return result + item.price;
    }, 0)

    if (discountPercentage === 0) {
        return total;
    }

    return total * (discountPercentage / 100);
}