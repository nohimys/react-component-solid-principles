import './DemoPageComponent.css'
import CartCompactView from "../ReusableCart/Components/CartCompactView";
import CartExpandedView from "../ReusableCart/Components/CartExpandedView";
import {IProduct} from "../ReusableCart/Components/CartComponent";

const DemoPageComponent = () => {

    const bookList: IProduct[] = [
        {name: 'Atomic Habits', price: 1080},
        {name: 'Power of Now', price: 800},
        {name: 'Rich Dad Poor Dad', price: 1000},
    ];
    const foodList: IProduct[] = [
        {name: 'Fish', price: 980},
        {name: 'Rice', price: 210},
        {name: 'Bread', price: 160},
        {name: 'Mutton', price: 2160}
    ];

    return (
        <div className={'demo-page-component'}>
            <h1>Demo Page</h1>

            <div className={'consumers'}>
                <div>
                    <h3>Consumer 1</h3>
                    <div className={'views'}>
                        <div>
                            <h5>View 1: Compact</h5>
                            <CartCompactView
                                cartName={'Book List'}
                                clientId={1}
                                consumerStyleProps={{backgroundColour:'AliceBlue', font:'Times New Roman', height:150}}
                                itemList={bookList}
                                onExpandedViewTrigger={ () => {console.log('Redirecting to Expanded View.')}}
                            />
                        </div>
                        <div>
                            <h5>View 2: Expanded</h5>
                            <CartExpandedView
                                cartName={'Book List'}
                                clientId={1}
                                consumerStyleProps={{backgroundColour:'AliceBlue', font:'Times New Roman', height:300}}
                                itemList={bookList}
                                onCheckoutCompleted={ () => {console.log('Checkout Completed Callback.')}}
                                onSaveCartCompleted={ () => {console.log('Save Cart Completed Callback.')}}
                            />
                        </div>
                    </div>
                </div>

                <div>
                    <h3>Consumer 2</h3>
                    <div className={'views'}>
                        <div>
                            <h5>View 1: Compact</h5>
                            <CartCompactView
                                cartName={'Food List'}
                                clientId={1}
                                consumerStyleProps={{backgroundColour:'Cornsilk', font:'Cursive', height:150}}
                                itemList={foodList}
                                onExpandedViewTrigger={ () => {console.log('Redirecting to Expanded View.')}}
                            />
                        </div>
                        <div>
                            <h5>View 2: Expanded</h5>
                            <CartExpandedView
                                cartName={'Food List'}
                                clientId={1}
                                consumerStyleProps={{backgroundColour:'Cornsilk', font:'Cursive', height:300}}
                                itemList={foodList}
                                onCheckoutCompleted={ () => {console.log('Checkout Completed.')}}
                                onSaveCartCompleted={ () => {console.log('Save Cart Completed Callback.')}}
                            />
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
}
export default DemoPageComponent;