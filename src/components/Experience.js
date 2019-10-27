import React from 'react';
import Education from './Education';
import Work from './Work';
import Fade from 'react-reveal/Fade';



class Experience extends React.Component {
    render() {

        return (
            <div style={OuterExperience}>
                    {/* <Fade delay={1000}> */}
                    <div style={TitleIntro}>
                        Here's what I've done so far
                        <div style={Rectangle}>
                    </div>
                    </div>
                    {/* </Fade> */}
                    <Education/>
                    <Work/>
            </div>
        );
    }
}

const TitleIntro = {
    marginTop: '70px',
    marginBottom: '70px',
    fontStyle: 'normal',
    fontSize: '45px',
    fontWeight: '900',
    lineHeight: '68px',
    textAlign: 'center',
    color: '#686963',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px 40px 0px 40px'

}

const OuterExperience = {
    // backgroundColor: '#f9f9f9',
    fontFamily: 'Avenir',
    color: '#686963',
    // width: 'calc(100% - 288px)',
    // display: 'flex',
    // flexDirection: 'column',
    // justifyContent: 'center',
    // alignItems: 'center',
    // paddingLeft: '72px',
    // paddingRight: '72px',
    // marginLeft: '72px',
    // marginRight: '72px',
    // marginBottom: '70px'
}

const Rectangle = {
    background: '#686963',
    height: '3px',
    width: '20%',
    marginBottom: '15px'

}


export default Experience;
