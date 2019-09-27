import React from 'react';

import './Spinner.scss'; 

class Spinner extends React.Component{
    componentDidMount() {
        setTimeout(() => {
    
          document.querySelector('.loader-container').style.transition = 'opacity 5s';
          document.querySelector('.loader-container').style.opacity = '0';
    
          setTimeout(() => {
            document.querySelector('.loader-container').remove();
          }, 1000);
    
        }, 2000);
      }

    render() {
        return(
            <div className="loader-container">
                <div className="spinner-overlay">
                    <div className="spinner-container" />
                </div>
            </div>
        )
    }
}

export default Spinner;