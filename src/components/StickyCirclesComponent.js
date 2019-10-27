import React from 'react';
import styled from 'styled-components';
import GreyDownload from '../Assets/GreyDownload.svg'
import GreyMail from '../Assets/GreyMail.svg'
import GreyLinkedin from '../Assets/GreyLinkedin.png'
import resume from '../Assets/resume.pdf'

import Fade from 'react-reveal/Fade';

class StickyCirclesComponent extends React.Component {
    render() {

        return (
            <div style={StickyStyle}>
                <Fade delay={500}>
                    <Circle>
                        <a href="https://linkedin.com/in/caryschwartzstein">
                            <img src={GreyLinkedin} style={PicStyle}></img>
                        </a>
                    </Circle>
                </Fade>
                <Fade delay={600}>
                    <Circle>
                        <a class="mailto" href="mailto:cary.schwartzstein@gmail.com">
                            <img src={GreyMail} style={PicStyle}></img>
                        </a>
                    </Circle>
                </Fade>
                <Fade delay={700}>
                    <Circle>
                        <a href={resume} target="blank">
                            <img src={GreyDownload} style={PicStyle}></img>
                        </a>
                    </Circle>
                </Fade>
            </div>
        );
    }
}

const StickyStyle = {
    position: 'fixed',
    width: '100%',
    top: '27px',
    right: '27px',
    zIndex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
}

const Circle = styled.div`
    width: 45px;
    height: 45px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 50%;
    margin-left: 10px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    :hover {
        width: 46px;
        height: 46px;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }
`




const PicStyle = {
    
}

export default StickyCirclesComponent