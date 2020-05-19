import * as React from 'react';
import { render, mount, shallow } from 'enzyme';

import { PageHeader } from './PageHeader';

describe('<PageHeader /> Enzyme Static HTML', () => {

  test('<PageHeader /> renders', () => {
    
    const component = JSON.stringify(render(
      <PageHeader />
    ).html());
    
    expect(component).toMatchSnapshot();
  });

});

describe('<PageHeader /> Enzyme Mock DOM', () => {

  let component;
  let componentDOMNode;

  beforeEach(() => {
    component = mount(<PageHeader />);
    componentDOMNode = component.find('h1');
  });

  test('<PageHeader /> renders', () => {
    expect(componentDOMNode.text()).toBe('Cool Company, Inc.');
  });

});

describe('<PageHeader /> Shallow with Enzyme', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<PageHeader />);
  });

  test('<PageHeader /> renders', () => {
    const h1Content = wrapper.find('h1').text();
    expect(h1Content).toBe('Cool Company, Inc.');
  });

});
