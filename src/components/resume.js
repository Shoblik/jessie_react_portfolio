import React, {Component} from 'react';
import uciLogo from '../assets/images/uci_logo.png';

class Resume extends Component {
    renderEductionList() {
        let jsxArr = [];
        let workplaceArr = ['Engaged Media, Inc', 'Adventures in Writing Camp', 'Sender One Climbing'];
        let roleArr = ['Editorial Intern', 'Adventure Guide', 'Youth Instructor & Front Desk'];
        let dateArr = ['October 2017 - March 2018', 'July 2017 - August 2017', 'April 2015 - November 2017'];
        let itemObj = {
            0 : [<li>Wrote over 30 published articles for home décor titles including American Farmhouse Style, Atomic Ranch, Cottages & Bungalows and Romantic Homes</li>, <li>Managed Cottages & Bungalows social media development</li>],
            1 : [<li>Led two troops of 15-30 kids throughout their camp days</li>, <li>Assisted with daily writing and grammar lessons</li>, <li>Helped kids ages 6-12 to create and edit their own e-books </li>],
            2 : [<li>Coached kids ages 5-17 in the disciplines of bouldering, sport and speed</li>, <li>Instructed adults in daily “Intro to Climbing” classes</li>, <li>Ensured the safe and proper use of all gym equipment and accessories </li>],

        };
        for (let i=0; i<3; i++) {
            let jsx =
                <div className='workNode'>
                    <div className='leftSnippet'>
                        <div className='workRole'>{roleArr[i]}</div>
                        <div className='workDate'>{dateArr[i]}</div>
                    </div>
                    <div className='mainContentSnippet'>
                        <div className='workTitle'>{workplaceArr[i]}</div>
                        <ul>
                            {itemObj[i]}
                        </ul>
                    </div>
                </div>;
            jsxArr.push(jsx);
        }
        return jsxArr;
    }

    render() {
        return (
            <div className='resumeSection'>
                <h1>Resume</h1>
                <div className="workSection">
                    <div>
                    {this.renderEductionList()}
                    </div>
                </div>
                <div className="educationSection">
                    <img src={uciLogo}/>
                    <h2>UNIVERSITY OF CALIFORNIA, IRVINE</h2>
                    <h4>2015 - Present</h4>
                    <ul>
                        <li>Bachelor of Arts in Literary Journalism expected June 2019</li>
                        <li>GPA: 3.7</li>
                        <li>Relevant Coursework: Intro to Literary Journalism (LJ), Intro to Reporting, History & Ethics of LJ, English Literature, Foreign Literature, Intro to Fiction Writing, Graphic Design</li>
                    </ul>
                </div>
            </div>
        )
    }
}
export default Resume;