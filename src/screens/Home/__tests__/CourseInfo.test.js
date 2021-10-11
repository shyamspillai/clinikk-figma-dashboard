import React from 'react';
import CourseInfo from '../components/CourseInfo';

import Enzyme, { render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe('Course Info component', () => {

  const props = {
    title: 'Sample title',
    author: 'Sample author',
    rating: 'Sample rating',
    time: 'Sample time'
  }

  it('should match snapshot', () => {
    const CourseInfoComponent = shallow(<CourseInfo />);
    expect(toJson(CourseInfoComponent)).toMatchSnapshot();
  })

  it('should render the course stat props correctly', () => {
    const wrapper = render(
      <CourseInfo {...props} />
    );

    expect(wrapper.find("[data-test='course-title']").text()).toBe(props.title);
    expect(wrapper.find("[data-test='course-author']").text()).toBe("by " + props.author);
    expect(wrapper.find("[data-test='course-rating']").text()).toBe(props.rating);
    expect(wrapper.find("[data-test='course-time']").text()).toBe(" " + props.time);

  });

});