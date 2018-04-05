import React, {Component} from 'react';
import VerticalNavBar from './vertical_navbar';
import Dynamic_Attribute from './dynamic_attributes';
class Homepage extends Component {
    render() {
        return (
            <div>
                <div className="homepage_bg">
                    <div className="filter">
                        <div className='titleFilter'>
                            <h1>Jessie Yount</h1>
                            <VerticalNavBar />
                        </div>
                        <Dynamic_Attribute />
                    </div>
                </div>
                    <div className="about">
                    <h1>About</h1>
                    <section>
                        <div className="leftColumn">
                            <div className="profilePhoto"></div>
                            <div className="profileContent">
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam assumenda at consectetur dolores eos et harum illum inventore iusto libero magnam minus nam neque, nihil, non nulla odit possimus praesentium sed sunt unde, voluptatibus? Alias asperiores consequuntur doloremque dolorum est hic impedit inventore minus molestiae molestias nam nostrum officia, omnis perspiciatis praesentium quas quia ullam veniam voluptas voluptatem voluptatibus.</p>
                            </div>
                        </div>
                        <div className="rightColumn"></div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Homepage;