import React from 'react';
import styled from 'styled-components';
import ProjectGridComponent from './ProjectGridComponent'
import MessageBoard from '../Assets/MessageBoard.png'
import Dashboard from '../Assets/Dashboard.png'
import IBV from '../Assets/IBV.png'




class ProjectsComponent extends React.Component {
    render() {

        return (
            <OuterProjects>
                <div style={TitleIntro}>Projects</div>
                <div style={Rectangle}></div>
                <InnerProjects>
                    <ProjectGridComponent projectTitle={"MessageBoard"} imageSource={MessageBoard} link={"https://still-eyrie-60449.herokuapp.com/"} fade={500}/>
                    <ProjectGridComponent projectTitle={"Dashboard"} imageSource={Dashboard} link={"https://ibm.com/ibv"} fade={600}/>
                    <ProjectGridComponent projectTitle={"IBV"} imageSource={IBV} link={"https://ibm.com/ibv"} fade={700}/>

                </InnerProjects>
            </OuterProjects>

        
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

const OuterProjects = styled.div`
    background-color: #EE6352;
    font-family: Avenir;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 70px;
`

const Rectangle = {
    background: '#FFFFFF',
    height: '3px',
    width: '20%',
    marginBottom: '25px'

}

const InnerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
`

export default ProjectsComponent;
