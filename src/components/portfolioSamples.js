import React, {Component} from 'react';

class PortfolioSamples extends Component {

    generateList() {
        let jsxArr = [];
        for (let i=0; i < 6; i++) {
            let jsx =
                <div key={i} className='portfolioContainer'>
                    <div className="portfolioFilter">
                        <div className='btnContainer'>
                            <div className ="coverImgContainer"></div>
                            <div className ="coverTextContainer"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur culpa dolorem harum ipsam laudantium minus nemo sequi tenetur. At cum cupiditate dolore eaque fugiat iste nobis pariatur vel, vero? Alias architecto consequatur ea, eligendi eveniet inventore modi quibusdam sed. Aliquam aspernatur itaque minus nesciunt, nobis pariatur praesentium reiciendis sequi sit sunt tempore unde. Ducimus.</div></div>
                            <button className='viewBtn'>View</button>
                        </div>
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