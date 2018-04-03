import React, {Component} from 'react';

class Dynamic_Attribute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
        };
    }
    spell() {
        const attrArray = ['Write', 'Design', 'Create'];

    }
    render() {

        return (
            <div className="attrContainer">
                <h3>Hello I'm Jessie,</h3>
                <h3 className="attributeH3">I like to <span className='changingWord'>{this.spell}</span></h3>
            </div>
        )
    }
}

export default Dynamic_Attribute;