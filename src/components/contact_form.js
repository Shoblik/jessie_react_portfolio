import React, {Component} from 'react';
import axios from 'axios';

class Contact_Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        }
    }

    handleSubmit(e) {
        console.log('SUBMITTING');
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost/php_mailer/mail_handler.php',
            data: {
                name: this.state.name,
                email: this.state.email,
                message: this.state.message,
            }
        }).then(function(data) {
            console.log('DATA from mailer', data);
        })
    }
    handleInputChange(e, input) {
        this.setState({
            [input] : e.target.value,
        });
    }
    render() {
        return (
            <div className='contactRight'>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className='innerLeft'>
                        <input onInput={(e) => this.handleInputChange(e, 'name')} value={this.state.name} className='nameInput' name='name' placeholder='name'/>
                        <div>
                            <input onInput={(e) => this.handleInputChange(e, 'email')} value={this.state.email} className='emailInput' name='email' placeholder='email'/>
                        </div>
                    </div>
                    <div className='innerRight'>
                        <textarea onInput={(e) => this.handleInputChange(e, 'message')} value={this.state.message} name='message' className='messageInput' placeholder='message'/>
                    </div>
                    <button type='submit' className='contactSubmitBtn'>Submit</button>
                </form>
            </div>
        )
    }
}
export default Contact_Form;