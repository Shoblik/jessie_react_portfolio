import React, {Component} from 'react';
import article_2 from '../assets/images/article_2.png';
import cover_1 from '../assets/images/cover_1.png';
import cover_2 from '../assets/images/cover_2.jpg';
import cover_3 from '../assets/images/cover_3.png';
import cover_4 from '../assets/images/cover_4.jpg';

class PortfolioSamples extends Component {

    openArticle() {
        window.open(article_2);
    }

    generateList() {
        let jsxArr = [];
        let imgArr = [cover_1, cover_2, cover_3, cover_4];
        for (let i=0; i < 6; i++) {
            if (i < 4) {
                let jsx =
                    <div key={i} className='portfolioContainer'>
                        <div className="portfolioFilter">
                            <div className='btnContainer'>
                                <div className ="coverImgContainer"><img src={imgArr[i]}/></div>
                                <div className ="coverTextContainer"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur culpa dolorem harum ipsam laudantium minus nemo sequi tenetur. At cum cupiditate dolore eaque fugiat iste nobis pariatur vel, vero? Alias architecto consequatur ea, eligendi eveniet inventore modi quibusdam sed. Aliquam aspernatur itaque minus nesciunt, nobis pariatur praesentium reiciendis sequi sit sunt tempore unde. Ducimus.</div></div>
                                <button onClick={this.openArticle} className='viewBtn'>Full Page View!</button>
                            </div>
                        </div>
                    </div>;
                jsxArr.push(jsx);

            } else {
                let jsx =
                    <div key={i} className={'portfolioContainer ' + 'container' + i}>
                        <div className="portfolioFilter">
                            <div className='btnContainer'>
                                <div className ="noCoverTextContainer"><div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi consequuntur culpa dolorem harum ipsam laudantium minus nemo sequi tenetur. At cum cupiditate dolore eaque fugiat iste nobis pariatur vel, vero? Alias architecto consequatur ea, eligendi eveniet inventore modi quibusdam sed. Aliquam aspernatur itaque minus nesciunt, nobis pariatur praesentium reiciendis sequi sit sunt tempore unde. Ducimus.</div></div>
                                <button className='viewBtn noCoverPortfolioBtn'>View the Live Site!</button>
                            </div>
                        </div>
                    </div>;
                jsxArr.push(jsx);
            }
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