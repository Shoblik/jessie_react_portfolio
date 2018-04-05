import React, {Component} from 'react';

class Dynamic_Attribute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            innerWordCount: 0,
            word: '',
        };
    }
    componentDidMount() {
        const attrArray = ['create', 'write', 'innovate'];
        console.log('word, ' + this.state.word + attrArray[this.state.count][this.state.innerWordCount]);

                setInterval(function() {
                    this.setState({
                        word: this.state.word + attrArray[this.state.count][this.state.innerWordCount],
                });
                    console.log('letter ' + )
                    if (this.state.innerWordCount < attrArray[this.state.count].length) {
                        //if we aren't at the end of the word
                        this.setState({
                            innerWordCount: this.state.innerWordCount++,
                        });
                    } else {
                        //We are at the end of the word
                        if (this.state.count < attrArray) {
                            //not at the end of the attribute array
                            this.setState({
                                count: this.state.count++,
                                innerWordCount: 0,
                            });
                        } else {
                            //at the end of the attribute array
                            this.setState({
                                count: 0,
                                innerWordCount: 0,
                            });
                        }
                    }

                }, 500);
        }

    render() {

        return (
            <div className="attrContainer">
                <h3>Hello I'm Jessie,</h3>
                <h3 className="attributeH3">I like to <span className='changingWord'>{this.state.word}</span></h3>
            </div>
        )
    }
}

export default Dynamic_Attribute;