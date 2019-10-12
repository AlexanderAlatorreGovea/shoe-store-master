import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
//import qs from 'query-string';

import Pagination from '../../components/Pagination/Pagination';
import Spinner from './../../components/Spinner/Spinner';
import Brands from './../../components/Brands/Brands';
import Checkbox from './../../components/Checkbox/Checkbox';
import available_sizes from './../../data/Sizes';
import { updateFilters } from './../../redux/filters/filter-actions';

import './Products.scss';

class Products extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            products: [],
            filteredData: [],
            activeBrand: 'all',
            isLoading: true,
            productsPerPage: 7,
            currentPage: 1,

            isChecked: false,
            sizes: [],

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
                    isLoading: false
                })   
            })
            .catch(function (error) {
                console.log(error);
        })
        console.log(this.state.sizes)
    }

    componentWillMount  = () => {
        this.selectedCheckboxes = new Set();
    }

    productSize = () => {
        this.state.size.map((item) => {
            if (console.log(item.stock) !== 0 )
                this.setState({
                    inStock: true
                })
        })
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

    handleFormSubmit = formSubmitEvent => {
       formSubmitEvent.preventDefault();

       let values = [];

       var size = 0;

       let arr = [];

    //    const mapped = this.state.products.map((product) => {
    //        return product.map((item) => {
    //             return () => {
    //                 if (item.stock === 0) {
    //                         item.size = false
    //                     for (let checkbox of this.selectedCheckboxes) {
    //                         if (item.size.has(checkbox) && checkbox !== undefined) {
    //                             return arr.push(product)
    //                         }
    //                     }
    //                 }
    //             }
    //        })
    //    })

       const mapped = this.state.products.map((product) => {
           const allProducts = product.stock;
           console.log(allProducts)
           console.log(product)
           return allProducts.map((item) => {
                    if (item.stock === 0 ) {
                        return item.size === false
                    } else if (item.size !== 0 ) {
                        for (let checkbox of this.selectedCheckboxes) {
                            if (item.size.includes(checkbox) && checkbox !== undefined) {
                                return arr.push(product)
                            }
                        }
                    }
            })
       })

       console.log(mapped)

        // if (values) {
        //     this.state.products.filter((product) => {
        //     return product.stock.filter((item) => {
        //         if (item.stock !== 0)  {
        //             return console.log(values.includes(item.size))//[item.size].includes(values)
        //         } else {
        //             return this.state.products
        //         }
        //     })
        // }) 
    } 

       //    const val = values.map((value) => value)

    //     //    if (val) {
    //     //        this.state.products.filter((product) => {
    //     //            return product.stock.filter((item) => {
    //     //                return item.stock > 0 && console.log([item.size].includes(val)) ? product : this.state.products
    //     //            })
    //     //        })
    //     //    } 
    //  }
      

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
    const { products, currentPage, productsPerPage, activeBrand, isLoading } = this.state;
    const totalProducts = products.length;
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
    const { location } = this.props;
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
                        {this.createCheckboxes()}
                    </div>
                </div> 
                </div>

                <button onClick={this.handleFormSubmit}>Filter</button>
            </div>
            { isLoading && <Spinner /> }
            <div className="all-products-grid">
            {currentProducts.map((item) => {
            const { image, title, price } = item;
            let brand = [item.brand];
            if (brand.indexOf(activeBrand) < 0 && activeBrand !== 'all') return null;
            return (
                <div className="product-wrap" key={title}>
                    <Link  
                        to={{
                            pathname: `${location.pathname}/${item.title}`,
                            state: {
                                item: item
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

const mapStateToProps = state => ({
    filters: state.filters.items
});

export default connect(
    mapStateToProps,
    { updateFilters }
)(Products);

/*
name="brand" 
 value={brand} 

<option name="brand" type="checkbox" onClick={this.handleChange} value={brand} className="option">
    {brand}
</option>	
*/
