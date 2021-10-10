import { Avatar, Button } from 'antd'
import { ClockCircleFilled, FireFilled } from '@ant-design/icons'

import styled from 'styled-components'

const CourseInfo = ({title, author, rating, time, icon}) => {

    return (
        <CourseInfoBar>
            <StyledAvatar shape="square" size={50} icon={icon} />
            <div className="flex column" style={{width: "100px"}}>
                <StyledCourseTitle className="baloo size-16 weight-600">{title}</StyledCourseTitle>
                <StyledCourseAuthor className="roboto size-13 weight-400">by {author}</StyledCourseAuthor>
            </div>
            
            <TimeIconHolder><ClockCircleFilled /><span> {time}</span></TimeIconHolder>
            
            <RatingIconHolder><FireFilled /> <span>{rating}</span></RatingIconHolder>

            <Button 
                style={{
                    border: '1px solid #000000',
                    borderRadius: "10px",
                    color: "#000000"
                }}
                className="roboto size-13 weight-700"
            >
                Continue
            </Button>
        </CourseInfoBar>
    )
}

const StyledAvatar = styled(Avatar)`
    @media only screen and (max-width: 600px) {
        height: 30;
        width: 30;
    }
`;

const CourseInfoBar = styled.div`
    width: 100%;
    background-color: #f5f5f7;
    height: 75px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border-radius: 15px;
    margin-top: 20px;

    @media only screen and (max-width: 600px) {
        flex-wrap: wrap;
        width: 300px;
    }
`;

const StyledCourseAuthor = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const StyledCourseTitle = styled.span`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const TimeIconHolder = styled.div`
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

const RatingIconHolder = styled.div`
    @media only screen and (max-width: 600px) {
        display: none;
    }
`

export default CourseInfo
