import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import Link from './index';

describe('Link', () => {
  it('should render correctly', () => {
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    expect(shallowToJson(output)).toMatchSnapshot();
  });

  it('should handle the click event', () => {
    window.alert = jest.fn();
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    output.simulate('click');
    expect(window.alert).toHaveBeenCalledWith('Link was clicked');
  });

  it('should handle state changes', () => {
    const output = shallow(
      <Link title="mockTitle" url="mockUrl" />
    );
    expect(output.state().clicked).toEqual(false);
    output.simulate('click');
    expect(output.state().clicked).toEqual(true);
 });
});
