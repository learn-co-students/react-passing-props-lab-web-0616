import React from'react';
import { shallow } from'enzyme';

const Noop = () => (<p>Noop</p>);
import App from'../components/App';

describe('<App />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !App.prototype ? shallow(<Noop />) :
      shallow(<App />);
  });

  it('should be a class component with state', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toNotThrow(undefined,
      'Component should be class-based.');
  });

  it('should have a state property "fruit" initiated to empty array', () => {
    expect(wrapper.state().fruit).toEqual([]);
  });

  it('should have a state property "filters" initiated to empty array', () => {
    expect(wrapper.state().filters).toEqual([]);
  });

  it('should have a state property "currentFilter" iniated to null', () => {
    expect(wrapper.state().currentFilter).toEqual(null);
  });

});
