import React from 'react';
import styled from 'styled-components';
import pdf from '../Assets/resume.pdf'

import arrow from '../Assets/arrow.svg'
import email from '../Assets/email.svg'
import download from '../Assets/download.svg'

import Fade from 'react-reveal/Fade';

class ContactComponent extends React.Component {
    render() {

        return (
            <OuterContact>
                <TitleIntro>
                    <div>Get in touch!</div>
                </TitleIntro>
                <LinkRow>
                    <div style={{marginRight: '50px'}}>
                        <a href="https://linkedin.com/in/caryschwartzstein" style={Link}>
                            LinkedIn
                            <Arrow src={arrow}></Arrow>
                        </a>
                    </div>
                    <div style={{marginRight: '50px', fontColor: '#FFFFFF'}}>
                        <a class="mailto" href="mailto:cary.schwartzstein@gmail.com" style={Link}>
                            Email
                            <Arrow src={arrow}></Arrow>
                        </a>
                    </div>
                    <div >
                        <a href={pdf} target="blank" style={Link}>
                            Download Resume
                            <Arrow src={arrow}></Arrow>
                        </a>
                    </div>
                    
                </LinkRow>
            </OuterContact>
        );
    }
}

const Arrow = styled.img`
    width: 15px;
    height: auto;
    margin-left: 10px;
`


const LinkRow = styled.div`
    width: 60%; 
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        > div {
            margin: 0px 0px 15px 0px !important;
            left: 0px;

        }
        
    }

`
    


const TitleIntro = styled.div`
    font-size: 30px;
    font-weight: 900;
    line-height: 68px;
    text-align: left;
    width: 40%;

    @media (max-width: 768px) {
        width: 100%;
        text-align: center;

    }
`

    


const Link = {
    color: 'white', 
    textDecoration:'none'
}


const OuterContact = styled.div`
    padding-left: 40px;
    padding-right: 40px;
    padding-top: 70px;
    padding-bottom: 70px;
    background-color: #686963;
    display: flex;
    flex-direction: row;
    color: #FFFFFF;
    align-items: center;
    font-family: Avenir, Helvetica;

    @media (max-width: 768px) {
        flex-direction: column
    }
`
    


export default ContactComponent;
