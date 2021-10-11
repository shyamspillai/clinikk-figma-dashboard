import React from 'react';
import CourseInfoList from '../components/CourseInfoList';

import Enzyme, { shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe('Course List component', () => {

  it('should match snapshot', () => {
    const CourseInfoListComponent = shallow(<CourseInfoList />);
    expect(toJson(CourseInfoListComponent)).toMatchSnapshot();
  })

  it('should render the course info list correctly', () => {
    const wrapper = shallow(
      <CourseInfoList />
    );

    expect(wrapper.find("[data-test='catalog-0']").text()).toBe("All Courses");
    expect(wrapper.find("[data-test='catalog-1']").text()).toBe("The Newest");
    expect(wrapper.find("[data-test='catalog-2']").text()).toBe("Top Rated");
    expect(wrapper.find("[data-test='catalog-3']").text()).toBe("Most Popular");

    expect(wrapper.find("[data-test='course-0']").exists()).toBe(true)
    expect(wrapper.find("[data-test='course-1']").exists()).toBe(true)
    expect(wrapper.find("[data-test='course-2']").exists()).toBe(true)
    expect(wrapper.find("[data-test='course-3']").exists()).toBe(true)
    expect(wrapper.find("[data-test='course-4']").exists()).toBe(true)

  });

});