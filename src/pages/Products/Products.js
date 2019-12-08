import React from 'react';
import { Link } from 'react-router-dom';
import uuid from "uuid";
import axios from 'axios';
//import qs from 'query-string';

import Pagination from '../../components/Pagination/Pagination';
import Spinner from './../../components/Spinner/Spinner';
import Brands from './../../components/Brands/Brands';
import Checkbox from './../../components/Checkbox/Checkbox';
import available_sizes from './../../data/Sizes';

import './Products.scss';

class Products extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredData: [],

            gender: [],

            filteredProducts: this.products,

            activeBrand: 'all',
            isLoading: true,
            productsPerPage: 7,
            currentPage: 1,
            populateFormsData: '',
            updateFilters: [],
            sort: 'newest',
            min_price: 0,
            max_price: 300,
            male: true,
            female: true,
            brand: '', 
            size: '',
            stock: ''
        };
    };

    componentDidMount () {
        axios
            .get('http://localhost:4000/api/v1/products')
            .then((res) => {
                let products = res.data.data.data;
                this.setState({
                    products,
                    filteredProducts: products,
                    isLoading: false
                })   
            })
            .catch(function (error) {
                console.log(error);
        })
    }

    componentWillMount () {
        this.selectedCheckboxes = new Set();
        this.selectedGender = '';
    }

    paginate = (pageNumber) => {
        this.setState({
            currentPage: pageNumber
        })
    }



    toggleCheckbox = label => {
        if (this.selectedCheckboxes.has(label)) {
          this.selectedCheckboxes.delete(label);
        } else {
          this.selectedCheckboxes.add(label);
        }
    }

    createCheckbox = label => {
        return (
            <Checkbox
                label={label}
                handleCheckboxChange={this.toggleCheckbox}
                key={label}
            />
        ) 
    };

    createCheckboxes = () => available_sizes.map(this.createCheckbox);

    handleGenders = (gender) => {
        this.selectedGender = gender;
        console.log(gender)
        console.log(this.selectedGender)

        const filteredGender = this.state.filteredProducts.filter((product) => {
            return product.gender.some((item, idx, arr) => {
              return item[this.selectedGender] === false ? null : product 
            })
        });

        this.setState({
            products: filteredGender
        })
    }

    sortByPrice = (price) => {
        let sortedPrice = this.state.products.sort((a,b) => {
            return price === 'min' ? a.price - b.price : b.price - a.price
        })

        this.setState({
            sortBy: sortedPrice 
        })
    }

    handleFormSubmit = event => {
        //4) this button updates the filters on the sizes, which I think I need to fix to update the brands, the price and the gender
        event.preventDefault();
        //5) right here I am storing the selected checkboxes whic is what I was doing before by pushing the checkboxes
        const selectedSizes = [...this.selectedCheckboxes];
        console.log("selected Sizes: " + selectedSizes);
    

        //6) on her I am filtering the array based on the size
        const filteredProducts = this.state.filteredProducts.filter(product =>
          selectedSizes.every(size =>
            product.stock.some(s => s.stock > 0 && s.size === size)
          ) 
        );

        //6 A) filtered Gender

        // const filteredGender = this.state.filteredProducts.filter((product) => {
        //     return product.gender.some((item, idx, arr) => {
        //       console.log(item[this.selectedGender])
        //       return item[this.selectedGender] === false ? null : product 
        //     })
        // });

        //7) I think this is totally wrong but I am updating products witht the filteredproducts
        this.setState({
           products: filteredProducts,
           //gender: filteredGender
        });
    
        //console.log("filteredProducts: ", filteredProducts);
        //console.log(selectedSizes);
        //console.log(this.state.gender);
        //console.log(this.state.filteredProducts);
    };


    filterBrand = (category) => {
        this.setState({
            activeBrand: category
        })
    }

    // submitFilters = () => {
    //     const { min_price, max_price, sort, male, female, brand, size } = this.state;
    //     document.location.href = `/?min_price=${min_price}
    //     &max_price=${max_price}&sort=${sort}&male=${male}&female=${female}
    //     &brand=${brand}&size=${size}`;
    // }

    // // populateSizes = (label) => {
    // //     return available_sizes.map((size) => {
    // //         return (
    // //             <Checkbox
    // //                 label={label}
    // //                 handleCheckboxChange={this.toggleCheckbox}
    // //                 key={label}
    // //             />
    // //         )
    // //     })
    // // }

    // populateSizes = () => {
    //     const { products } = this.state;
    //     if(products != undefined) {
    //         let _sizes = products.flatMap(item => item.available_sizes)
    //         _sizes = new Set(_sizes)
    //         _sizes = [..._sizes]
    //         return _sizes.map((size) => {
    //             return (
    //                 <div type="checkbox" value={size} key={size} className="option">{size}</div>
    //             )
    //         })
    //     }
    // }

    // UNSAFE_componentWillMount() {
    // //     let  { products } = this.state;
    // //     this.setState({
    // //         filteredData: products
    // //     })
    // // }

    // populateBrands = () => {
    //     const { products } = this.state;
    //     if(products != undefined) {
    //         let _brands = products.map(item => item.brand)
    //         _brands = new Set(_brands)
    //         _brands = [..._brands]
    //         return _brands.map((brand, event) => {
    //             return (
    //                 <div className="option">
    //                     {brand}
    //                 </div>					
    //             )
    //         })
    //     } 
    // }

    // UNSAFE_componentWillMount() {

    //     const queryParms = qs.parse(this.props.location.search);

    //     const { min_price, max_price, sort, male, female, brand, size } = this.state;

    //     if(queryParms.min_price != undefined) {
    //         axios
    //         .get(`/api/v1/products/?min_price=${min_price}
    //         &max_price=${max_price}&sort=${sort}&male=${male}&female=${female}
    //         &brand=${brand}&size=${size}`)
    //         .then(res => {
    //             const products = res.data;
    //             this.setState({ 
    //                 products
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     } else {
    //         axios
    //         .get(`/api/v1/products`)
    //         .then(res => {
    //             const products = res.data;
    //             this.setState({ 
    //                 products
    //             });
    //         })
    //         .catch(err => {
    //             console.log(err)
    //         })
    //     }
    // }

    //  handleChange = event => {
    //      const target = event.target;
    //      const value = target.type === 'checkbox' ? target.checked : target.value;
    //      const name = target.name;
    
    //      this.setState({ 
    //          [name]: value 
    //      }, () => {
    //          let newData = [...this.state.products];
    //          //console.log(newData);
    //          if(value !== false) {
    //             newData = newData.filter((item) => {
    //                //console.log(item.brand)
    //                //console.log([name])
    //                return item.brand === name
    //              })
    //          }
    //          console.log(newData)
    //          this.setState({
    //              filteredData: newData
    //          });
    //        });
    //  };


     // // populateBrands = () => {
    // //    return Object.entries(this.state.checkboxes).map(([key, value]) => {
    // //        return (
    // //            <div key={key} className="option">
    // //                <label for="toggle-1">{key}</label>
    // //                <input 
    // //                    name={key}
    // //                    checked={this.state[key]}
    // //                    onChange={this.handleChange}
    // //                    id="toggle-1" 
    // //                    type="checkbox"
    // //                />	
    // //            </div>					
    // //        )
    // //    })
    // // }


    // handleChange = event => {
    //     const target = event.target;
    //     const value = target.type === "checkbox" ? target.checked : target.value;
    //     const name = target.name;
    
    //     this.setState(
    //       {
    //         [name]: value
    //       },
    //       () => {
    //             this.filteredData(name, value)
    //             //func//
    //                 // let newData = [...this.state.products];
    //                 // //console.log(name, value)
    //                 // //console.log(newData);              


    //                 // if(value !== false) {
    //                 //     newData = newData.filter((item) => {
    //                 //     return item.brand === this.convertString(name)
    //                 //     })
    //                 // }
    //                 // console.log(newData)

    //                 // this.setState({
    //                 //     filteredData: newData
    //                 // });
    //             //func//
    //         });
    // };

    // // convertString = (str) => {
    // //     if (str === 'New_Balance') {
    // //         return str.split('_').join(' ');
    // //     } else if (str === 'Dolce_Gabbana') {
    // //         return str.replace(/Dolce_Gabbana/g, 'Dolce & Gabbana');
    // //     } else if (str === 'Gucci') {
    // //         return str.replace(/Gucci/g, 'gucci');
    // //     } else {
    // //         return str;
    // //     }
    // // }  

    // filteredData = (name, value) => {
    //     let newData = [...this.state.products];
    //     //console.log(name, value)
    //     //console.log(newData);              

    //     if((value != false) && name) {
    //         newData = newData.filter((item) => {
    //             return item.brand === this.convertString(name)
    //         })
    //     }
    //     console.log(newData)

    //     this.setState({
    //         filteredData: newData
    //     });
    // }
 
    render() {
    const {
        filteredProducts,
        products,
        currentPage,
        productsPerPage,
        activeBrand,
        isLoading
    } = this.state;
    const totalProducts = products.length;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
    const { location } = this.props;
    //console.log(this.state.products)
    //console.log(this.state.gender)
    console.log(this.state.gender)
    return (
        <div className="content-area products-all-page">
            <div className="filter-section">
                <div className="filter">
                <input type="checkbox" id="gender-options" className="toggle"></input>
                <label className="title" htmlFor="gender-options">Gender</label>
                <div className="content">
                    <div className="gender">
                        <option value="male" onClick={(e) => this.handleGenders(e.target.value)} className="option">Men</option>
                        <option value="female" onClick={(e) => this.handleGenders(e.target.value)} className="option">Women</option>
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="brand-options" className="toggle"></input>
                <label className="title" htmlFor="brand-options">Brand</label>
                <div className="content">
                    <Brands 
                        products={currentProducts}
                        filterBrand={this.filterBrand}
                        activeBrand={activeBrand} 
                    />
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="price-options" className="toggle" ></input>
                <label className="title" htmlFor="price-options">Price</label>
                <div className="content">
                    <div className="price">
                        <option 
                            onClick={(e) => this.sortByPrice(e.target.value)} 
                            value="min" name="min" placeholder="min" className="option" >min
                        </option>
                        <option 
                            onClick={(e) => this.sortByPrice(e.target.value)} 
                            value="max" name="max" placeholder="max" className="option" >max
                        </option>
                    </div>
                </div>
                </div>

                <div className="filter">
                <input type="checkbox" id="size-options" className="toggle" ></input>
                <label className="title" htmlFor="size-options">Size</label>
                <div className="content">
                    <div className="size">
                        {this.createCheckboxes()}
                    </div>
                </div> 
                </div>

                <button type="submit" onClick={this.handleFormSubmit}>Filter</button>
            </div>
            { isLoading && <Spinner /> }
            <div className="all-products-grid">
            {currentProducts.map((item) => {
            const { image, title, price, stock } = item;
            let brand = [item.brand];
            if (brand.indexOf(activeBrand) < 0 && activeBrand !== 'all') return null;
            return (
                <div className="product-wrap" key={uuid()}>
                    <Link  
                        to={{
                            pathname: `${location.pathname}/${item.title}`,
                            state: {
                                item: item,
                                inStock: stock
                        }}}
                    >
                        <div className="product">
                            <div className="circle">
                            <img alt="item" src={image} />
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
