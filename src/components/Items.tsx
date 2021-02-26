import React, { Component } from 'react';
import { DataView } from 'primereact/dataview';
import ProductService from '../services/ProductService';
import { Button } from 'primereact/button';
import { Rating } from 'primereact/rating';
import '../App.css';
// import { MdAddBox } from 'react-icons/md';
// import { AiFillMinusSquare } from 'react-icons/ai';
// import { Badge } from 'primereact/badge';
import { connect } from 'react-redux';
import { addToCart } from './redux/index';

interface MyState {
    products: any
}

export class Items extends Component<any, MyState> {

    productService = new ProductService();

    constructor(props: any) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        this.productService.getProducts().then(res => {
            this.setState({
                products: res
            });
        });
    }

    itemTemplate = (data: any) => {

        let newData = {
            ...data,
            quantity: 1
        };

        return (
            <div key={newData.id} className="p-col-12">
                <div className="product-list-item">
                    <div className="product-list-detail">
                        <div className="product-name">{newData.name}</div>
                        <div className="product-description">{newData.description}</div>
                        <Rating value={newData.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{newData.category}</span>
                    </div>
                    {/* <div className="quantity">
                        <Button className="p-button-rounded" onClick={() => { newData.quantity = newData.quantity + 1 }}>
                            <MdAddBox />
                        </Button>
                        <Badge value={newData.quantity} className="p-mr-2" size="large" severity="success">{newData.quantity}</Badge>
                        <Button className="p-button-rounded p-button-danger" onClick={() => { newData.quantity = newData.quantity - 1 }}>
                            <AiFillMinusSquare />
                        </Button>
                    </div> */}
                    <div className="product-list-action">
                        <span className="product-price">${newData.price}</span>
                        <Button icon="pi pi-shopping-cart" label="Add to Cart" disabled={newData.inventoryStatus === 'OUTOFSTOCK'} onClick={() => this.props.addToCart(newData)}></Button>
                        <span className={`product-badge status-${newData.inventoryStatus.toLowerCase()}`}>{newData.inventoryStatus}</span>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        return (
            <div className="dataview-demo">
                <div className="card">
                    <DataView value={this.state.products} itemTemplate={this.itemTemplate} paginator={this.state.products.length > 5} rows={5}></DataView>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addToCart: (product: any) => { dispatch(addToCart(product)) }
    }
}

export default connect(null, mapDispatchToProps)(Items); 
