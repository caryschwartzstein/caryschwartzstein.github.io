import React from 'react';
import TopicsComponent from './TopicsComponent';
import BerkeleyPic from '../Assets/berkeley.png'


class Education extends React.Component {

    render() {
        return (
            <TopicsComponent topic="Education" experiences={Experiences}/>
        )
    }
}

const Experiences = [
    { 
    company: "UC Berkeley",
    position: "Double Major",
    endDate: "December 2017",
    summary: "B.A. Computer Science - College of Letters and Sciences \n B.S. Business Administration - Haas School of Business",
    picture: BerkeleyPic
    },
    
]

 export default Education;