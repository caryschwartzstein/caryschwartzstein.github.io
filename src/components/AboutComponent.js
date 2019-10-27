import React from 'react';
import styled from 'styled-components';
import goldenGatePic from '../Assets/goldenGate.svg';
import Fade from 'react-reveal/Fade';




class AboutComponent extends React.Component {
    render() {
        return (
                <OuterAboutStyle name="About">
                        <div id="blue" style ={BlueAreaStyle}>
                            <Fade>
                                <div style={PromptStyle}>
                                I am a...
                                </div>
                                <div style={DescriptionStyle}>
                                working professional looking for opportunities in product strategy. I have experience in consulting for automotive, 
                                telecommunication, and technology companies.
                                </div>
                            </Fade>
                        </div>
                        <Fade delay={500}>
                            <div id="grey" style={GreyAreaStyle}>
                                <img src={goldenGatePic} style={PicStyle} alt="Golden Gate"></img>
                                <div style={BayTextStyle}>
                                I’ve been studying and working in the California Bay Area for the past 5 years.
                                </div>
                            </div>
                        </Fade>
                </OuterAboutStyle>
            
        )
        
    }
}
const BayTextStyle = {
    fontSize: '25px',
    textAlign: 'left',
}

const DescriptionStyle = {
    fontSize: '25px',
    textAlign: 'left',
    width: '90%'
}

const PromptStyle = {
    fontSize: '45px',
    marginTop: '10px',
    marginBottom: '40px',
}

const BlueAreaStyle = {
    backgroundColor: '#87BCDE',
    width: '62.5%',
    minHeight: '50vh',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    textAlign: 'left',
    fontWeight: 900,
    justifyContent: 'center',
 
}

const GreyAreaStyle = {
    backgroundColor: '#686963',
    minHeight: '50vh',
    width: '37.5%',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',

}

const OuterAboutStyle = styled.div`
    display: flex;
    min-height: 30%;
    flex-direction: row;
    font-size: 25px;
    font-family: Avenir;
    font-weight: 600;
    color: white;

    @media (max-width: 768px) {
        flex-direction: column;

        > #blue {
            width: calc(100% - 80px) !important;
            min-height: initial !important;
        }
        > #grey {
            padding-top: 50px !important;
            width: calc(100% - 80px) !important;
            min-height: initial !important;

        }
    }
`


const PicStyle = {
    margin: '0 auto',
    paddingBottom: '30px',
    textAlign: 'center',
    width: '230px',
    height: 'auto'
}

export default AboutComponent;

