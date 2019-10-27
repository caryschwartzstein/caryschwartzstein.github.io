import React from 'react';
import TopicsComponent from './TopicsComponent';
import IBMPic from '../Assets/IBM Logo.png'
import WDPic from '../Assets/WDSanDisk.png'



class Work extends React.Component {

    render() {
        return (
            <TopicsComponent topic="Work" experiences={Experiences}/>
        )
    }
}

const Experiences = [
    { 
    company: "IBM",
    position: "Digital Strategy Consultant",
    startDate: "July 2018",
    endDate: "Present",
    summary: "Performed roles ranging from Business/Data Analyst, Product Manager, and UI Developer",
    picture: IBMPic
    },
    { 
    company: "Western Digital",
    position: "Associate Product Manager Intern",
    startDate: "June 2017",
    endDate: "August 2017",
    summary: "Analyzed market competition for the SanDisk iXpand. Created a detailed roadmap and product strategy for the next two quarters. Led usability testing to validate new product features.",
    picture: WDPic
    },
]

 export default Work;