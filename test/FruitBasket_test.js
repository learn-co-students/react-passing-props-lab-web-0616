import React from 'react';
import { shallow } from 'enzyme';

const Noop = () => (<p>Noop</p>);
import FruitBasket from '../components/FruitBasket';

describe('<FruitBasket />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !FruitBasket.prototype ? shallow(<Noop />) :
      shallow(<FruitBasket  />);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  it('should have defaultProp "fruit"', () => {
    expect(FruitBasket.defaultProps).toExist('defaultProps not defined.');
    expect(FruitBasket.defaultProps).toIncludeKey('fruit');
  });

  it('should have defaultProp "filters"', () => {
    expect(FruitBasket.defaultProps).toExist('defaultProps not defined.');
    expect(FruitBasket.defaultProps).toIncludeKey('filters');
  });

  it('should have defaultProp "currentFilter"', () => {
    expect(FruitBasket.defaultProps).toExist('defaultProps not defined.');
    expect(FruitBasket.defaultProps).toIncludeKey('currentFilter');
  });

  it('should have defaultProp "updateFilterCallback"', () => {
    expect(FruitBasket.defaultProps).toExist('defaultProps not defined.');
    expect(FruitBasket.defaultProps).toIncludeKey('updateFilterCallback');
  });

  it('should have a top-level div with class "fruit-basket"', () => {
    expect(wrapper.find('div').hasClass('fruit-basket')).toBeTruthy();
  });

});
