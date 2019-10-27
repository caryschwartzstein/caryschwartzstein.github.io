import React from 'react';
import styled from 'styled-components';



function FullDate(props) {
    console.log(props.startDate)
    if (props.startDate && props.endDate) {
        return <Date>{props.startDate + " - " + props.endDate}</Date>
    } else {
        return props.startDate ? <Date>{props.startDate}</Date> : <Date>{props.endDate}</Date>
    }
}

class ExperienceCard extends React.Component {
    
    render() {
        return (
            <div>
                <DesktopExperienceCard>
                    <img src={this.props.picture} alt="Berkeley Pic" style={PicStyle}></img>
                    <div style={VerticalLine}>
                    </div>
                    <div style={TextSide}>
                        <div style={CoAndDate}>
                            <div style={Company}>{this.props.company}</div>
                            <FullDate startDate={this.props.startDate}
                                        endDate={this.props.endDate}
                            />
                        </div>
                        <div style={Position}>{this.props.position}</div>
                        
                        <div style={Summary}>
                            {this.props.summary.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                            })}
                        </div>
                    </div>
                </DesktopExperienceCard>
                <MobileExperienceCard>
                    <div style={Company}>{this.props.company}</div>
                    <FullDate startDate={this.props.startDate}
                                        endDate={this.props.endDate}/>
                    <img src={this.props.picture} alt="Berkeley Pic" style={PicStyle}></img>
                    <div style={Position} id="position">{this.props.position}</div>
                    <div style={Summary} id="summary">
                            {this.props.summary.split('\n').map((item, key) => {
                            return <span key={key}>{item}<br/></span>
                            })}
                    </div>
                    
                </MobileExperienceCard>
            </div>
        )
    }
};

const VerticalLine = {
    background: '#686963',
    height: '100%',
    width: '3px',
    marginBottom: '15px'
}


const PicStyle = {
    maxWidth: 140, 
    height: 'auto', 
    maxHeight: 140,
    borderRadius: '50%',
    // marginRight: '72px',
    opacity: '50%',
    border: '1px solid rgb(104,105,99,.5)'
}

const CoAndDate = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'

}

const Company = {
    marginBottom: '10px',
    fontSize: '20px',
    fontWeight: '900',
    textAlign: 'left',
}
const DesktopExperienceCard = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;

    > img {
        margin-right: 72px;
    }

    @media (max-width: 768px) {
        display: none;
    }
`
const TextSide = {
    // paddingTop: '30px',
    paddingLeft: '72px',
    width: '100%',
    borderLeft: '1px solid #686963'
    
}

const Summary = {
    marginBottom: '10px',
    fontWeight: '500',
    fontSize: '15px',
    textAlign: 'left',
    maxWidth: '40vw'
}

const Position = {
    marginBottom: '10px',
    fontWeight: '600',
    fontSize: '17px',
    textAlign: 'left',
}

const Date = styled.div`
    padding-left: 50px;
    margin-bottom: 10px;
    font-weight: 900;
    font-size: 17px;
    text-align: right;
    

    @media (max-width: 768px) {
        padding-left: 0px !important;
        margin-top: 15px;
    }
`

const MobileExperienceCard = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    align-items: center;

    > #position {
        margin-top: 15px !important;
    }
    > #summary {
        max-width: initial !important;
        text-align: center !important;
    }

    @media (min-width: 769px) {
        display: none;
    }
`

export default ExperienceCard;