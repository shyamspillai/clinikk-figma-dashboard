import { Avatar, Button } from 'antd'
import { ArrowLeftOutlined, ArrowRightOutlined, UserOutlined } from '@ant-design/icons'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import styled from 'styled-components'

const CurrentCourse = () => {

    const percentage = 84

    return (
        <div className="row full-width space-between flex-wrap hideable">
                    
            <CurrentCourseBar>
                <StyledAvatar shape="square" size={50} icon={<UserOutlined />} />
                <div className="flex column">
                    <span className="baloo size-16 weight-600">Spanish B2</span>
                    <span className="roboto size-13 weight-400">by Alejandro Velazquez</span>
                </div>
                <CircularProgressContainer>
                    <CircularProgressbar 
                        styles={buildStyles({
                            // Colors
                            pathColor: `#000000`,
                            textColor: '#000000'
                        })}
                        value={percentage}
                        text={`${percentage}%`}
                    />
                </CircularProgressContainer>

                <Button 
                    style={{
                        background: 'black',
                        borderRadius: "10px",
                        color: "#ffffff"
                    }}
                    className="roboto size-13 weight-700"
                >
                    Continue
                </Button>
            </CurrentCourseBar>

            <ToggleCourseBar>
                <Button style={{border: "1px solid black"}} shape={"circle"} icon={<ArrowLeftOutlined />}></Button>
                <Button style={{border: "1px solid black"}} shape={"circle"} icon={<ArrowRightOutlined />}></Button>
            </ToggleCourseBar>

        </div>
    )
}

const StyledAvatar = styled(Avatar)`
    @media only screen and (max-width: 600px) {
        height: 40px;
        width: 40px;
    }
`;

const CurrentCourseBar = styled.div`
    flex: 0.8;
    background-color: #f5f5f7;
    min-height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;

    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
        width: 300px;
        margin-bottom: 20px;
    }
`;

const ToggleCourseBar = styled.div`
    flex: 0.15;
    display: flex;
    justify-content: space-around;
    align-items: center;
    @media only screen and (max-width: 600px) {
        width: 50%;
        justify-content: space-around;
    }
`;

const CircularProgressContainer = styled.div`
    height: 50px;
    width: 50px;
    color: black;

    @media only screen and (max-width: 600px) {
        display: none;
    }
`;

export default CurrentCourse
