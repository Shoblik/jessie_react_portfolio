import React, {Component} from 'react';

class PortfolioSamples extends Component {

    generateList() {
        let jsxArr = [];
        for (let i=0; i < 6; i++) {
            let jsx =
                <div key={i} className='portfolioContainer'>
                    <div className='btnContainer'>
                        <button className='aboutBtn'>About</button>
                        <button className='viewBtn'>View</button>
                    </div>
                </div>;
            jsxArr.push(jsx);
        }
        return jsxArr;
    }
    render() {
        return (
            <div className='coverContainer'>
                {this.generateList()}
            </div>
        )
    }
}

export default PortfolioSamples;