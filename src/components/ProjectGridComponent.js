import React from 'react';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';

class ProjectGridComponent extends React.Component {
    render() {

        return (
            <OuterGridComponent>
                
                <Square onClick={()=> window.open(this.props.link, "_blank")}>
                    <Fade delay={this.props.fade}>
                    <Header><span>{this.props.projectTitle}</span></Header>
                    <OuterImage >
                        <Overlay />
                        <Teaser src={this.props.imageSource}/>
                    </OuterImage>
                    </Fade>
                </Square>

            </OuterGridComponent>
        
        );
    }
}

const OuterGridComponent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 33.333%;

    @media (max-width: 1300px) {
        width: 50%;
    }
    @media (max-width: 775px) {
        width: 100%;
    }
    height: 450px;
`
const Square = styled.div`
    height: 380px;
    width: 380px;
    display: flex;
    flex-direction: column;
    :hover {
        cursor: pointer;
    }
`
const Header = styled.div`
    background-color: #828081;
    height: 96px;
    font-weight: bold;
    font-size: 30px;
    text-align: left;
    padding-left: 27.5px;
    padding-top: 30px;
    box-sizing: border-box;
`

const Teaser = styled.img`
    width: 325px;
    height: auto;
    align-self: center;
    border: 1px solid #828081;

`
const OuterImage = styled.div`
    background-color: #FFF;
    height: 284px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
`
const Overlay = styled.div`
    background-color: #828081;
    width: 100%;
    height: 100%;
    position: absolute;
    opacity: 0%;

    ${Square}:hover & {
        opacity: 15%;
    }
`

export default ProjectGridComponent;
