import { useState, useEffect } from 'react';
import { Space } from 'antd'

import CourseInfo from './CourseInfo';
import { courseCategories } from '../../../data/categoryData';
import { generateFakeCourses } from '../../../data/courseData';

import styled from 'styled-components'

const CourseInfoList = () => {
    
    const [currentCategory, setCategory] = useState(0);
    const [courseCatalog, setCourseCatalog] = useState(generateFakeCourses());
    
    useEffect(() => {
        setCourseCatalog(generateFakeCourses())
    }, [currentCategory])

    const showCourseCategories = () => {
        return courseCategories.map((courseCategory, index) => <TabLink
            isActive={index === currentCategory}
            onClick={() => setCategory(index)}
            key={index}
            className="baloo weight-600 size-16">
                {courseCategory.title}
        </TabLink>
        );
    }

    const showCourseCatalog = () => {
        return courseCatalog.map(({title, author, time, rating, icon}) => {
          return  <CourseInfo icon={icon} title={title} author={author} time={time} rating={rating} />;
        })
    }
    
    return (
        <>
            <div className="flex row" >
            <Space size="large"> 
                {showCourseCategories()}
            </Space>
            </div>

            <div className="flex column">
                {showCourseCatalog()}
            </div>
        </>
    )
}

const TabLink = styled.span`
    color: ${props => props.isActive ? '#000000' : '#BFBFBF'};
    cursor: ${props => props.isActive ? 'default' : 'pointer'}
`

export default CourseInfoList
