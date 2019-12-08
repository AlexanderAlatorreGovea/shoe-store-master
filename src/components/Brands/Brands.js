import React from 'react';
import './brand.scss';

const Brands = ({ products, filterBrand, activeBrand }) => {
    const categoryArray = [];

    const handleChange = (category) => {
        filterBrand(category);
    }

    // // products.map((product) => {
    // //     let brandArray = [product.brand];
    // //     return (
    // //         // eslint-disable-next-line array-callback-return
    // //         brandArray.map((category) => {
    // //             //if (categoryArray.indexOf(category) < 0) {
    // //                 categoryArray.push(category);
    // //            // }
    // //         })
    // //     )
    // // })

    let _brands = products.map(item => item.brand)
    _brands = new Set(_brands)
    _brands = [..._brands]

    return (
        <div className="brand">
            {_brands.map(category => 
                <div 
                    id={category === activeBrand ? 'active-category' : '' }
                    onClick={() => handleChange(category)} 
                    className="option"
                >
                    {category}
                </div>
            )}
        </div>
    );
};

export default Brands;