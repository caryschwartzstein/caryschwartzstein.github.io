import React from 'react';
import styled from 'styled-components';
import ExperienceCard from './ExperienceCard.js'

class TopicsComponent extends React.Component {

    render() {
        const experiencesData = this.props.experiences;

        return (
            <OuterTopics>
                <Title>{this.props.topic}</Title>
                <ExperiencesStyle>
                    {experiencesData.map((experiences) => {
                        return <ExperienceCard {...experiences}/>
                    })}
                </ExperiencesStyle>
            </OuterTopics>
        )
    }
}

const Title = styled.div`
    margin-top: 40px;
    margin-bottom: 40px;
    font-size: 30px;
    font-weight: 900;
    text-align: left;
    color: #686963;
    width: 20%;
    padding-left: 40px;

    @media (max-width: 768px) {
        width: calc(100% - 40px);
        margin-top: initial !important;
    }
    
`


const OuterTopics = styled.div`
    display: flex;
    flex-direction: row;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const ExperiencesStyle = styled.div `
    width: 80%;
    padding-right: 40px;
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    @media (max-width: 768px) {
        padding-left: 40px;
        width: calc(100% - 80px);
    }
    
`
    


export default TopicsComponent