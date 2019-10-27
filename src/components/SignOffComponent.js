import React from 'react';

import Fade from 'react-reveal/Fade';

class SignOffComponent extends React.Component {
    render() {

        return (
            <div style={OuterSignOff}>
                <span style={{width: '300px'}}>Webpage designed and developed by  
                    <a href="https://www.linkedin.com/in/caryschwartzstein" target="blank" style={{color: '#686963'}}> Cary Schwartzstein</a>
                </span>
            </div>
        );
    }
}

const OuterSignOff = {
    backgroundColor: '#FFFFFF',
    display: 'flex',
    justifyContent: 'center',
    padding: '35px',
    color: '#686963',
    fontWeight: 600

}

export default SignOffComponent;
