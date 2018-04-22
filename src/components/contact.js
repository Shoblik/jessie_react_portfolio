import React, {Component} from 'react';
import facebook from '../assets/images/017-facebook.png';
import pinterest from '../assets/images/015-pinterest.png';
import instagram from '../assets/images/016-instagram.png';
import email from '../assets/images/001-envelope.png';
import linkedin from '../assets/images/004-linkedin.png';
import twitter from '../assets/images/012-twitter.png';
import Contact_Form from './contact_form';


class Contact extends Component {
    render() {
        return (
            <div className="contactSection">
                <h1>Say Hi!</h1>
                <div className='contactLeft'>
                    <div className='letsChatCircle'>
                        <h2>Lets Chat!</h2>
                        <div className='socialMediaWrapper'>
                            <img onClick = {() => {window.location.href = "mailto:jessienyount@gmail.com?subject=Web Portfolio Inquiry"}}
                            src={email} alt="Email"/>
                            <img src={linkedin} alt="LinkedIn"/>
                            <img src={facebook} alt="Facebook"/>
                            <img src={twitter} alt="Twitter"/>
                            <img src={instagram} alt="Instagram"/>
                            <img src={pinterest} alt="Pinterest"/>
                        </div>
                    </div>
                </div>
                <Contact_Form />
            </div>
        )
    }
}
export default Contact;