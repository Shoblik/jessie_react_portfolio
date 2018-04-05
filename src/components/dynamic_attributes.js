import React, {Component} from 'react';

class Dynamic_Attribute extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            innerWordCount: 0,
            word: '',
            deleting: false,
        };
    }

    deleteIndividialWords(attrArray) {
        let incrementor = 100;
        for (let i = attrArray[this.state.count].length - 1; i >= 0; i--) {
            let wordOnScreen = this.state.word;
            let tmpNewWord = wordOnScreen.substring(0, i);
            setTimeout(() => {
                this.setState({
                    word: tmpNewWord,
                })
            }, incrementor);
            incrementor += 100;
        }

        setTimeout(() => {
            if (this.state.count < attrArray.length - 1) {
                this.setState({
                    innerWordCount: 0,
                    deleting: false,
                    count: this.state.count + 1,
                })
            } else {
                this.setState({
                    innerWordCount: 0,
                    deleting: false,
                    count: 0,
                })
            }
        }, incrementor);
    }

    wordIncrementor() {
        const attrArray = ['create', 'write', 'innovate'];

        if (this.state.innerWordCount < attrArray[this.state.count].length) {
            //if it isn't the end of the word
            console.log(attrArray[this.state.count][this.state.innerWordCount]);
            this.setState({
                word: this.state.word + attrArray[this.state.count][this.state.innerWordCount],
                innerWordCount: this.state.innerWordCount + 1,
            })
        } else {
            setTimeout(() => {
                this.setState({
                    deleting: true,
                });
                this.deleteIndividialWords(attrArray);
            }, 500);
        }

    }
    componentDidMount() {
       this.wordIncrementor();
    }
    componentDidUpdate() {
        if (!this.state.deleting) {
            setTimeout(() => {
                this.wordIncrementor();
            }, 200);
        }
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