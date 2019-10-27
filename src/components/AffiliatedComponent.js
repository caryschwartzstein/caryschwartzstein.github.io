import React from 'react';
import styled from 'styled-components';

import aepi from '../Assets/aepi.png'
import code_for_america from '../Assets/code_for_america.png'
import berkeley_haas from '../Assets/berkeley_haas.png'
import Fade from 'react-reveal/Fade';

class AffiliatedComponent extends React.Component {
    render() {

        return (
            <div>
            <div style={TitleIntro}>
                <div>Affiliations</div>
                <div style={Rectangle}></div>
            </div>
            <div style={OuterExperience}>
                <Orgs>
                    <ImageOuter>
                        <Fade delay={500}>
                            <PicStyle src={berkeley_haas} alt="haas"></PicStyle>
                        </Fade>
                    </ImageOuter>
                    <ImageOuter>
                        <Fade delay={800}>
                            <PicStyle src={code_for_america} alt="code_for_america"></PicStyle>
                        </Fade>
                    </ImageOuter>
                    <ImageOuter>
                        <Fade delay={1100}>         
                            <PicStyle src={aepi} style ={{marginTop: '7%'}} id="aepi" alt="aepi"></PicStyle> 
                        </Fade>
                    </ImageOuter>
                </Orgs>
            </div>
            </div>
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
    color: '#686963',
    fontFamily: 'Avenir, Helvetica',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',

}

const OuterExperience = {
    backgroundColor: '#FFFFFF',
    paddingLeft: '10%',
    paddingRight: '10%',
    paddingBottom: '30px'
}

const Rectangle = {
    background: '#686963',
    height: '3px',
    width: '20%',
    marginBottom: '15px'

}

const Orgs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin-top: 40px;
    margin-bottom: 40px;
    align-items: center;

    

    @media (max-width: 768px) {
        flex-direction: column
    }
`
    


const PicStyle = styled.img`
    
    text-align: center;
    width: 60%;
    height: auto;

    #aepi {
        margin-top: 15% !important;
        margin-bottom: 15% !important;
    }

    @media (max-width: 768px) {
        margin-bottom: 20px;
        width: 40% !important;
    }
`
    


const ImageOuter = styled.div`
    text-align: center;
    width: 33.333%;

    

    @media (max-width: 768px) {
        width: 100% !important;
    }
`


export default AffiliatedComponent;
