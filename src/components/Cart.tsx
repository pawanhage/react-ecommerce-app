import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { AiFillDelete } from 'react-icons/ai';
import { removeFromCart } from './redux/index';

export class Cart extends Component<any, any> {

    item = (newData: any) => {
        return (
            <div key={newData.id} className="p-col-12">
                <div className="product-list-item">
                    <div className="product-list-detail">
                        <div className="product-name">{newData.name}</div>
                        <div className="product-description">{newData.description}</div>
                        <Rating value={newData.rating} readOnly cancel={false}></Rating>
                        <i className="pi pi-tag product-category-icon"></i><span className="product-category">{newData.category}</span>
                    </div>
                    <div className="product-list-action">
                        <span className="product-price">${newData.price}</span>
                        <Button label="Delete" onClick={() => this.props.removeFromCart(newData.id)}>
                            <AiFillDelete />
                        </Button>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        if (this.props.products && this.props.products.length > 0) {
            return (
                <div className="dataview-demo">
                    <div className="card">
                        {
                            this.props.products.map((data: any) => {
                                return this.item(data);
                            })
                        }
                    </div>
                </div>
            )
        }
        return (
            <div>No Item Found</div>
        );
    }
}


const mapStateToProps = (state: any) => {
    return {
        products: state.products.products
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        removeFromCart: (id: string) => dispatch(removeFromCart(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
