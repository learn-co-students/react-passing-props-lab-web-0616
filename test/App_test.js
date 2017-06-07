import React from'react';
import { expect } from 'chai';
import { shallow } from'enzyme';

import '../src/fetch-setup';
import App from'../src/components/App';


const Noop = () => (<p>Noop</p>);

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !App.prototype ? shallow(<Noop />) :
      shallow(<App />);
  });

  it('should be a class component with state', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).to.not.throw(undefined,
      'Component should be class-based.');
  });

  it('should have a state property "fruit" initiated to empty array', () => {
    expect(wrapper.state().fruit).to.deep.equal([]);
  });

  it('should have a state property "filters" initiated to empty array', () => {
    expect(wrapper.state().filters).to.deep.equal([]);
  });

  it('should have a state property "currentFilter" iniated to null', () => {
    expect(wrapper.state().currentFilter).to.deep.equal(null);
  });
});
