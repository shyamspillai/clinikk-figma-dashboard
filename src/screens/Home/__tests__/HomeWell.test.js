import React from 'react';
import HomeWell from '../components/HomeWell'

import Enzyme, { render, shallow } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

import toJson from "enzyme-to-json";

Enzyme.configure({ adapter: new Adapter() });

describe('Home Well', () => {

  it('should match snapshot', () => {
    const HomeWellComponent = shallow(<HomeWell />);
    expect(toJson(HomeWellComponent)).toMatchSnapshot();
  })

  it('renders the main title', () => {
    const wrapper = render(
      <HomeWell />
    );
    const element = wrapper.find('span.baloo').first();
    expect(element.text()).toEqual('Hello Josh!');

  });

  it('renders the subtitle messaging', () => {
    const wrapper = render(
      <HomeWell />
    );
    const element = wrapper.find('span.roboto').first()
    expect(element.text()).toEqual("It's good to see you again");

  });

  it('should render the main title even on resize', () => {

    const wrapper = render(
      <HomeWell />
    );

    // Change the viewport to 500px.
    global.innerWidth = 500;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));

    const element = wrapper.find('span.baloo').first();
    expect(element.text()).toEqual('Hello Josh!');
  })

  it('should render the subtitle even on resize', () => {

    const wrapper = render(
      <HomeWell />
    );

    // Change the viewport to 500px.
    global.innerWidth = 500;

    // Trigger the window resize event.
    global.dispatchEvent(new Event('resize'));

    const element = wrapper.find('span.roboto').first()
    expect(element.text()).toEqual("It's good to see you again");
  })

});