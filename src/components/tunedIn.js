import React, {Component} from 'react';


class TunedIn extends Component {

    generateList() {
        let jsxArray = [];
        for (let i=0; i<5; i++) {
            let jsx = <div key={i}>
                <img className='tunedInImg' src='https://i.stack.imgur.com/veQDC.png' />
                <p className='tunedInImgCaption'>Lorem ipsum dolor sit amet, consectetur nam obcaecati officiis perspiciatis quae temporibus voluptate.</p>
            </div>;
            jsxArray.push(jsx);
        }
        return jsxArray;
    }
    render() {
        return (
            <div className='tunedInContainer'>
                <h3>Tuned In</h3>
                <div>
                {this.generateList()}
                </div>
            </div>
        )
    }
}
export default TunedIn;