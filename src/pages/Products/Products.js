import React from 'react';
import { Link } from 'react-router-dom';

import Pagination from '../../components/Pagination/Pagination';
import SHOP_DATA from '../../data/Data';

import './Products.scss';

class Products extends React.Component {
    state = {
        SHOP_DATA,
        productsPerPage: 7,
        currentPage: 1,
        populateFormsData: ''
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }

    populateBrands = () => {
        if(SHOP_DATA != undefined) {
            let _brands = SHOP_DATA.map(item => item.brand)
            _brands = new Set(_brands)
            _brands = [..._brands]
            return _brands.map((brand) => {
                return (
                    <option type="button" placeholder={brand} name={brand} className="option">{brand}</option>
                )
            })
        }
    }
    

    populateSizes = () => {
        if(SHOP_DATA != undefined) {
            let _sizes = SHOP_DATA.flatMap(item => item.available_sizes)
            _sizes = new Set(_sizes)
            _sizes = [..._sizes]
            return _sizes.map((size) => {
                return (
                    <div value={size} key={size} className="option">{size}</div>
                )
            })
        }
    }
 
    render() {
    const { SHOP_DATA, currentPage, productsPerPage } = this.state;
    const totalProducts = SHOP_DATA.length;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = SHOP_DATA.slice(indexOfFirstProduct, indexOfLastProduct);
    console.log(SHOP_DATA)
    return (
        <div className="content-area products-all-page">
            <div className="filter-section">
                <div className="filter">
                <input type="checkbox" id="gender-options" className="toggle"></input>
                <label className="title" htmlFor="gender-options">Gender</label>
                <div className="content">
                    <div className="gender">
                        <option className="option">Men</option>
                        <option className="option">Women</option>
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="brand-options" className="toggle"></input>
                <label className="title" htmlFor="brand-options">Brand</label>
                <div className="content">
                    <div className="brand">
                        {this.populateBrands()}
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="price-options" className="toggle" ></input>
                <label className="title" htmlFor="price-options">Price</label>
                <div className="content">
                    <div className="price">
                        <input type="text" name="min" placeholder="min" className="option" ></input>
                        <input type="text" name="max" placeholder="max" className="option" ></input>
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="size-options" className="toggle" ></input>
                <label className="title" htmlFor="size-options">Size</label>
                <div className="content">
                    <div className="size">
                        {this.populateSizes()}
                    </div>
                </div>
                </div>

                <button>Filter</button>
            </div>
            <div className="all-products-grid">
            {currentProducts.map((item) => {
                const { image, title, price, routeName } = item;
                return (
                    <div className="product-wrap" key={title}>
                        <Link 
                            to={{
                                pathname: `/product/${routeName.toLowerCase()}`,
                                state: {
                                    item: item,
                                }}}
                        >
                            <div className="product">
                                <div className="circle">
                                <img src={image} />
                                </div>
                            </div>
                        </Link>
                        <div style={{ textDecoration: 'none', color: 'black' }} className="title">{title}</div>
                        <div style={{ textDecoration: 'none', color: 'black' }} className="price">${price}</div>
                    </div>
                )
            })}
            <Pagination 
                paginate={this.paginate}
                productsPerPage={productsPerPage}
                totalProducts={totalProducts}
            /> 
            </div>
        </div>
    )
  }
};

export default Products;
