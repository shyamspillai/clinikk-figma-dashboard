import React from 'react';
import CourseStat from '../components/CourseStat';

import Enzyme, { render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe('Course Stat component', () => {

  const props = {
    statNumber: 5,
    statType: 'course',
    statStatus: 'in progress'
  }

  it('should match snapshot', () => {
    const CourseStatComponent = shallow(<CourseStat />);
    expect(toJson(CourseStatComponent)).toMatchSnapshot();
  })

  it('should render the course stat props correctly', () => {
    const wrapper = render(
      <CourseStat {...props} />
    );

    const numberSpan = wrapper.find('span.size-60').first()
    const typeSpan = wrapper.find('span.size-16').first()
    const statusSpan = wrapper.find('span.size-16').last()

    expect(numberSpan.text()).toEqual('5')
    expect(typeSpan.text()).toEqual('course')
    expect(statusSpan.text()).toEqual('in progress')
  });

  it('should render the course stat props correctly in mobile view', () => {
    const wrapper = render(
      <CourseStat {...props} />
    );

    // Change the viewport to 500px.
    global.innerWidth = 500;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));

    const numberSpan = wrapper.find('span.size-60').first()
    const typeSpan = wrapper.find('span.size-16').first()
    const statusSpan = wrapper.find('span.size-16').last()

    expect(numberSpan.text()).toEqual('5')
    expect(typeSpan.text()).toEqual('course')
    expect(statusSpan.text()).toEqual('in progress')
  });

});