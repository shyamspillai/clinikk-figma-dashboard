import { Button } from 'antd';

import HomeWell from './components/HomeWell';
import UserInfoWell from './components/UserInfoWell';
import CurrentCourse from './components/CurrentCourse';
import CourseInfoList from './components/CourseInfoList';
import LineChart from './components/LineChart';

import styled from "styled-components"
import { statisticCategories } from '../../data/categoryData';
import { useState } from 'react';
import { Space } from 'antd';
import { BookOutlined } from '@ant-design/icons';


const Home = () => {

    const [statCategoryIndex, setStatCategoryIndex] = useState(0);

    const showStatCategories = () => {
        return statisticCategories.map((statCategory, index) => <TabLink
            isActive={index === statCategoryIndex}
            onClick={() => setStatCategoryIndex(index)}
            key={index}
            className="baloo weight-600 size-16">
                {statCategory.title}
        </TabLink>
        );
    }

    return (
        <section className="main full-width">

            <div className="row space-around flex-wrap hideable">
                
                <HomeWell/>

                <UserInfoWell/>

            </div>

            <div className="row space-around flex-wrap" style={{height: "100%", marginTop: "20px"}}>
                
                <div className="flex column" style={{flex: "0.5"}}>

                    <CurrentCourse></CurrentCourse>

                    <StyledHeader className="baloo weight-600 size-24">Courses</StyledHeader>

                    <CourseInfoList></CourseInfoList>

                </div>

                <div className="flex column" style={{height: "100%", flex: "0.4", maxWidth: "525px"}}>

                    <StyledHeader className="baloo weight-600 size-24">Your statistics</StyledHeader>
                    
                    <div className="flex row flex-wrap">
                        <Space size="large">
                            {showStatCategories()}
                        </Space>
                    </div>

                    <LineChart />

                    <SubscriptionBanner>
                        <div style={{flex: 1}} className="column space-between">
                            <span className="baloo size-24 weight-600">Learn even more!</span>
                            <span className="roboto size-16 weight-600">Unlock premium features only for $9.99 per month.</span>
                            <StyledButton>Go Premium</StyledButton>
                        </div>

                        <SubscriptionIconColumn className="column">
                           <StyledBookOutlined />
                        </SubscriptionIconColumn>
                        
                    </SubscriptionBanner>              
                    
                </div>

            </div>

        </section>
    )
}

export default Home

const StyledBookOutlined = styled(BookOutlined)`
    font-size: 60px;
`;

const SubscriptionIconColumn = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledButton = styled(Button)`
    background-color: #000000;
    color: #ffffff;
    border-radius: 10px;
`;

const SubscriptionBanner = styled.div`
    display: flex;
    width: 100%;
    background-color: #F5F5F7;
    margin-top: 50px;
    padding: 20px 20px;

    div {
        min-height:200px;
    }
`;

const TabLink = styled.span`
    color: ${props => props.isActive ? '#000000' : '#BFBFBF'};
    cursor: ${props => props.isActive ? 'default' : 'pointer'}
`

const StyledHeader = styled.span`
    margin-top: 25px;
    margin-bottom: 20px;
    display: block;
`
