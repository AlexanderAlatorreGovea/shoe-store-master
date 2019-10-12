import React, { Component } from 'react';
import './domi.scss';
import axios from 'axios';

const postTypes = [
    'department',
    'major',
    'faculty',
    'news',
    'human-resources',
    'minor',
    'staff',
    'event',
    'about-page'
]

class domi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searchTerm: '',
            searchType: '',
            sortBy: 'alphaAsc',
            checkboxes: {
                department: false,
                major: false,
                faculty: false,
                news: false,
                event: false
            },
            resultsCount: 0,
            open: false,
            baseSearchString: ''
        };
    };


    // handleChange = (e) => {
    //     const name = e.target.name;
    //     const value = (e.target.type === 'checkbox') ?  e.target.checked : e.target.value;

    //     this.setState({
    //         [name] : value
    //     }, () => {
    //         console.log(value)
    //     })
    // }

    createBaseSearch = () => {
        let searchString = '';

        postTypes.map(type => {
            searchString = searchString + `&type[]=${type}`
        })

        this.setState({ baseSearchString: searchString })
    }

    handleChange = (value) => {
        this.setState({ value })
    }

    fetchSearchTerm = () => {
        const searchType = this.state.searchType || this.state.baseSearchString;
        const apiUrl = 'https://wp.franciscan.university/wp-json/wp/v2/';
        const params = `multiple-post-type?per_page=100&search=${this.state.searchTerm + searchType}`
        axios
             .get(apiUrl + params)
             .then(data => {
                 this.setState({ 
                     data
                 });
             })
             .catch(err => {
                 console.log(err)
             })
    }

    ////********************JOE ******************** */
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

    // submitFilters = () => {
    //     const { min_price, max_price, sort, male, female, brand, size } = this.state;
    //     document.location.href = `/?min_price=${min_price}
    //     &max_price=${max_price}&sort=${sort}&male=${male}&female=${female}
    //     &brand=${brand}&size=${size}`;
    // }

    render() {
        return (
            <div style={{paddingTop: '10rem', paddingLeft: '10rem'}}>

             <li class="grid-filter-item">
                <option class="tile-input grid-filter-input" data-state="">
                    <input onClick={(e) => console.log('clicked')} id="ads_f43002_ntk_cs-large-screen-xxs-1" name="ads_f43002_ntk_cs" type="checkbox" value="XXS" />
                    <label data-variant="light" class="tile-content" for="ads_f43002_ntk_cs-large-screen-xxs-1">
                    <span class="tile-text">XXS</span>
                    </label>
                </option>										
            </li>

            <label for="toggle-1">I'm a toggle</label>
                <input type="checkbox" id="toggle-1" />
            <div>I'm controlled by toggle. No JavaScript!</div>

            {
                Object.entries(this.state.checkboxes).map((key, value) => {
                    console.log(key)
                    console.log(value)
                    return (
                        <div>
                            <label key={key} for="toggle-1">{value}</label>
                            <input 
                                type="checkbox" 
                                id="toggle-1" 
                                checked={this.state[key]}
                                onChange={this.handleChange(key)}
                                value={key}
                            />
                        </div>
                    )
                })
            }
            
            </div>
        );
    }
}

export default domi;