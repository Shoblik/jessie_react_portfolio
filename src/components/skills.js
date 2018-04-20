import React, {Component} from 'react';
import powerPoint from '../assets/images/001-powerpoint.png';
import outlook from '../assets/images/002-outlook.png';
import excel from '../assets/images/003-excel.png';
import word from '../assets/images/004-word.png';
import photoshop from '../assets/images/005-photoshop.png';
import indesign from '../assets/images/006-indesign.png';
import illustrator from '../assets/images/007-illustrator.png';
import acrobat from '../assets/images/008-acrobat.png';
import youtube from '../assets/images/009-youtube.png';
import wordpress from '../assets/images/010-wordpress-logo.png';
import tumblr from '../assets/images/011-tumblr.png';
import twitter from '../assets/images/012-twitter.png';
import snapchat from '../assets/images/013-snapchat.png';
import slack from '../assets/images/014-slack.png';
import pinterest from '../assets/images/015-pinterest.png';
import instagram from '../assets/images/016-instagram.png';
import facebook from '../assets/images/017-facebook.png';


class Skills extends Component {
    render() {
        return (
            <div className="skillsSection">
                <h1>Skills</h1>
                <div className='skillIconContainer'>
                    <img src={acrobat} alt="adobe acrobat"/>
                    <img src={illustrator} alt="adobe illustrator"/>
                    <img src={photoshop} alt="adobe photoshop"/>
                    <img src={indesign} alt="adobe indesign" />
                    <img src={powerPoint} alt="Microsoft PowerPoint"/>
                    <img src={excel} alt="Microsoft Excel"/>
                    <img src={outlook} alt="Microsoft Outlook"/>
                    <img src={word} alt="Microsoft Word"/>
                    <img src={youtube} alt="Youtube"/>
                    <img src={wordpress} alt="WordPress"/>
                    <img src={tumblr} alt="Tumblr"/>
                    <img src={twitter} alt="Twitter"/>
                    <img src={snapchat} alt="Snapchat"/>
                    <img src={slack} alt="slack"/>
                    <img src={pinterest} alt="Pinterest"/>
                    <img src={instagram} alt="Instagram"/>
                    <img src={facebook} alt="Facebook"/>
                </div>
            </div>
        )
    }
}

export default Skills;