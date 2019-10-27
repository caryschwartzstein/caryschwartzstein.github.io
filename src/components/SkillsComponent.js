import React from 'react';
import styled from 'styled-components';

import technicalImage from '../Assets/Technical.svg'
import professionalImage from '../Assets/Handshake.svg'



class SkillsComponent extends React.Component {
    render() {

        return (
            <OuterExperience>
                <div style={TitleIntro}>Skills</div>
                <div style={Rectangle}></div>
                <SkillTypeDesktop>
                    <Caption>
                        Technical
                    </Caption>
                    <Skills>
                    Python &#9679; SQL &#9679; Java &#9679; HTML/CSS/JS &#9679; React &#9679;
                     MS Office &#9679; Sketch &#9679; Data Visualization &#9679; UI Design
                    </Skills>
                    <ImageOuter>
                        <img src={technicalImage} style={PicStyle} alt="Technical Image"></img>
                    </ImageOuter>
                </SkillTypeDesktop>
                <SkillTypeDesktop>
                    <Caption>
                        Professional
                    </Caption>
                    <Skills>
                    Product Management &#9679; Business Analysis &#9679; Data Analysis &#9679; Agile &#9679; Scrum &#9679; 
                    Kanban &#9679; Marketing 
                    </Skills>
                    <ImageOuter>
                        <img src={professionalImage} style={PicStyle} alt="Professional Image"></img>
                    </ImageOuter>
                </SkillTypeDesktop>
                <SkillTypeMobile>
                    <Caption>
                        Technical
                    </Caption>
                    <ImageOuter>
                    <img src={technicalImage} style={PicStyle} alt="Technical Image"></img>
                    </ImageOuter>
                    <Skills>
                    Python &#9679; SQL &#9679; Java &#9679; HTML/CSS/JS &#9679; React &#9679;
                     MS Office &#9679; Sketch &#9679; Data Visualization &#9679; UI Design
                    </Skills>
                </SkillTypeMobile>
                
                <SkillTypeMobile>
                    <Caption>
                        Professional
                    </Caption>
                    <ImageOuter>
                    <img src={professionalImage} style={PicStyle} alt="Professional Image"></img>
                    </ImageOuter>
                    <Skills>
                    Product Management &#9679; Business Analysis &#9679; Data Analysis &#9679; Agile &#9679; Scrum &#9679; 
                    Kanban &#9679; Marketing 
                    </Skills>
                </SkillTypeMobile>
            </OuterExperience>

        
        );
    }
}

const TitleIntro = {
    marginTop: '70px',
    marginBottom: '10px',
    fontStyle: 'normal',
    fontSize: '45px',
    fontWeight: '900',
    lineHeight: '68px',
    textAlign: 'center',
}

const OuterExperience = styled.div`
    background-color: #3F7CAC;
    font-family: Avenir;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 10%;
    padding-right: 10%;
    padding-bottom: 30px;
`

const Rectangle = {
    background: '#FFFFFF',
    height: '3px',
    width: '20%',
    marginBottom: '15px'

}

const SkillTypeDesktop = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;

    @media (max-width: 768px) {
        display: none;
    }
`

const SkillTypeMobile = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;

    @media (min-width: 769px) {
        display: none;
    }
`



const PicStyle = {
    margin: '0 auto',
    textAlign: 'center',
    width: '30%',
    height: 'auto',
}

const Caption = styled.div`
    width: 33.333%;
    font-size: 30px;
    font-weight: 900;

    @media (max-width: 768px) {
        width: initial;
    }
`

const ImageOuter = styled.div`
    text-align: center;
    width: 33.333%;

    @media (max-width: 768px) {
        width: initial;
        margin-top: 20px !important;

    }
`

const Skills = styled.div`
    width: 33.333%;

    @media (max-width: 768px) {
        width: 100%;
        margin-top: 20px !important;
    }
`

export default SkillsComponent;
