import React, {Component} from 'react';
import VerticalNavBar from './vertical_navbar';
import Dynamic_Attribute from './dynamic_attributes';
import TunedIn from './tunedIn';
import PortfolioSamples from './portfolioSamples';
import menu from '../assets/images/hamburger_menu.svg';
import Resume from './resume';
import Skills from './skills';
import Contact from './contact';

class Homepage extends Component {
    showNavBar() {
        let body = document.querySelector('body');
        if (body.style.left === '0px' || body.style.left === '') {
            body.style.left = '250px';
        } else {
            body.style.left = 0;
        }
        // let body = document.querySelector('body');
        // console.log(body.style.transform);
        // if (body.style.transform === 'none' || body.style.transform === '') {
        //     body.style.transform = 'translateX(250px)';
        // } else {
        //     body.style.transform = 'none';
        // }
        // let menu = document.querySelector('.menuDiv');
        // console.log(menu.style.transform);
        // if (menu.style.transform === 'translateX(-100%)' || menu.style.transform === '') {
        //     menu.style.transform = 'translateX(-100%)';
        // } else {
        //     menu.style.transform = 'translateX(-100%)';
        // }
        // let menu = document.querySelector('.menuDiv');
        // console.log(menu.style.transform);
        // if (menu.style.transform === 'translateX(-100%)' || menu.style.transform === '') {
        //     menu.style.transform = 'translateX(0%)';
        // } else {
        //     menu.style.transform = 'translateX(-100%)';
        // }
    }

    render() {
        return (
            <div>
                <div className='menuContainer' onClick={this.showNavBar}>
                    <img src={menu} />
                </div>
                <div className='menuDiv'>
                    <ul>
                        <li><span>Homepage</span></li>
                        <li><span>About</span></li>
                        <li><span>Portfolio</span></li>
                        <li><span>Resume</span></li>
                        <li><span>Contact</span></li>
                    </ul>
                </div>

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
                        <div className="rightColumn">
                            <TunedIn />
                        </div>
                    </section>
                </div>
                <div className='portfolioSection'>
                    <h1>Portfolio</h1>
                    <PortfolioSamples />
                </div>
                <Resume />
                <Skills />
                <Contact />
            </div>
        )
    }
}

export default Homepage;