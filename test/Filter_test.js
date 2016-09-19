const React = require('react');
const { shallow } = require('enzyme');
const sinon = require('sinon');

const Noop = () => (<p>Noop</p>);
const Filter = require('../components/Filter');

const filters = [ 'filter1', 'filter2', 'filter3' ];

describe('<Filter />', () => {
  let spy = sinon.spy();
  let wrapper;

  beforeEach(() => {
    wrapper = !Filter.prototype ?
      shallow(<Noop />) : shallow(<Filter filters={filters} handleChange={spy}/>);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  // it('should have a defaultProp "filters"', () => {
  //   expect(wrapper.defaultProps).toExist('defaultProps is not defined.');
  //   expect(wrapper.defaultProps.filters).toExist(
  //     'Missing defaultProp "filters".'
  //   );
  // });
  //
  // it('should have a defaultProp "handleChange"', () => {
  //   expect(wrapper.defaultProps).toExist('defaultProps is not defined.');
  //   expect(wrapper.defaultProps.handleChange).toExist(
  //     'Missing defaultProp "handleChange".'
  //   );
  // });

  it('should call "handleChange" callback when there is a change', () => {
    wrapper.find('select').simulate('change');
    expect(spy.calledOnce).toBeTruthy();
  });

  it('should render a select element with a default option "all"', () => {
    expect(wrapper.find('select').childAt(0).prop('value')).toBe('all');
  });

  it('should render all the provided "filters"', () => {
    const options = wrapper.find('option');
    expect(options.length).toBe(4, 'Did not render all the filters.');
  });

});
