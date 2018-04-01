import React, {Component} from 'react';
import VerticalNavBar from './vertical_navbar';

class Homepage extends Component {
    render() {
        return (
            <div className="homepage_bg">
                <div className="filter">
                    <div className='titleFilter'>
                        <h1>Jessie Yount</h1>
                        <VerticalNavBar />
                    </div>

                    <div className="attrContainer">
                        <h3>Hello I'm Jessie, I like to write</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default Homepage;