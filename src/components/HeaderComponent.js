import React from 'react';
import styled from 'styled-components';

import Cary_Pic from '../Assets/Cary_focus.png'
import {Link} from 'react-scroll'
import Fade from 'react-reveal/Fade';


class HeaderComponent extends React.Component {
    render() {
      return (
        <div>
            <div style={OuterHeaderStyle}>
                <WhiteStyle>
                    <Fade delay={500}>
                    <img src={Cary_Pic} alt="Cary Pic" style={PicStyle}></img>
                    </Fade>
                </WhiteStyle>
                <OrangeStyle>
                    <Fade delay={500}>
                    
                        <span id="Greeting" style={Greeting}>Hi there, I'm Cary!</span>
                        <img src={Cary_Pic} alt="Cary Pic" style={PicStyle}></img>
                        <span id="Welcome" style={Welcome}>Welcome to my online profile & resume.</span>
                    </Fade>
                </OrangeStyle>
            </div>
            <ArrowDown>
                <Link to="About" smooth={true} duration={600} style= {{paddingBottom: '20px'}}>

                    <svg version="1.1" id="Ebene_2_1_" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="53px" height="20px" viewBox="0 0 53 20" enable-background="new 0 0 53 20">
                        <g>
                            <polygon points="26.5,17.688 9.114,3.779 10.303,2.312 26.5,15.269 42.697,2.313 43.886,3.779 	"></polygon>
                        </g>
                    </svg>
                </Link>
            </ArrowDown>
        </div>
      );
    }
  }

const PicStyle = {
    maxWidth: 280, 
    height: 'auto', 
    borderRadius: '50%'
}

const ArrowDown = styled.div`
    cursor: pointer;
    position: absolute;
    bottom: 2px;
    z-index: 1;
    margin: 0 auto;
    display: flex;
    width: 100%;
    min-width: 900px;
    justify-content: center;
    fill: #fff;

    @media (max-width: 768px) {
        display: none;
      }
`

const Welcome = {
    justifyContent: 'center',
    textAlign: 'right',
    marginTop: '100px',
    fontWeight: 900,
    fontSize: '25px'

}

const Greeting = {
    marginRight: '30%',
    textAlign: 'left',
    fontWeight: 900,
    fontSize: '45px'
}

const OrangeStyle = styled.div`
    background-color: #EE6352;
    width: 62.5%;
    display: flex;
    flex-direction: column;
    align-items: left;
    font-size: calc(10px + 2vmin);
    color: white;
    padding: 40px;
    justify-content: center;

    > img {
        display: none
    }

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;
        align-items: center;

        > img {
            display: block;
            margin: 0 auto;
            border: 2px solid white ;
        }

        > #Greeting {
            margin: 0px 0px 50px 0px !important;
            
        }

        > #Welcome {
            margin-top: 50px !important;
        }
    }


   
`

const WhiteStyle = styled.div`
    width: 37.5%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px;

    @media (max-width: 768px) {
        display: none;
    }
`

const OuterHeaderStyle = {
    fontFamily: 'Avenir',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'row',
    width: '100%'

}
export default HeaderComponent;