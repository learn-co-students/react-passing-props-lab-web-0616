const React = require('react');
const { shallow } = require('enzyme');

const Noop = () => (<p>Noop</p>);
const FilteredFruitList = require('../components/FilteredFruitList');

const fruit = [
  { name: 'grapes',
    keywords: [ 'fruit', 'food', 'wine' ],
    char: '🍇',
    fruit_type: 'berry' },
  { name: 'green_apple',
    keywords: [ 'fruit', 'nature' ],
    char: '🍏',
    fruit_type: 'pome' },
  { name: 'apple',
    keywords: [ 'fruit', 'mac', 'school' ],
    char: '🍎',
    fruit_type: 'pome' },
  { name: 'peach',
    keywords: [ 'fruit', 'nature', 'food' ],
    char: '🍑',
    fruit_type: 'drupe' }
];

describe('<FilteredFruitList />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = !FilteredFruitList.prototype ? shallow(<Noop />) :
      shallow(<FilteredFruitList fruit={fruit} filter={null} />);
  });

  it('should be a stateless functional component', () => {
    const tryToGetState = () => { wrapper.state(); }
    expect(tryToGetState).toThrow(
      'ShallowWrapper::state() can only be called on class components',
      'Component should not have state.'
    );
  });

  it('should have a defaultProp "fruit"', () => {
    const defaultProps = FilteredFruitList.defaultProps;
    expect(defaultProps).toExist('defaultProps is not defined.');
    expect(defaultProps).toIncludeKey('fruit');
  });

  it('should have a defaultProp "filter"', () => {
    const defaultProps = FilteredFruitList.defaultProps;
    expect(defaultProps).toExist('defaultProps is not defined.');
    expect(defaultProps).toIncludeKey('filter');
  });

  it('should have a top-level ul element with class "fruit-list"', () => {
    expect(wrapper.find('ul').hasClass('fruit-list')).toBeTruthy(); 
  });

  it('should render entire fruit list when filter is null', () => {
    expect(wrapper.find('li').length).toBe(4, 'Failed to render full list.');
  });

  it('should render list of correct length when "pome" filter applied', () => {
    wrapper = !FilteredFruitList.prototype ? shallow(<Noop />) :
      shallow(<FilteredFruitList fruit={fruit} filter='pome' />);
    expect(wrapper.find('li').length).toEqual(2,
      'Fruit list wrong length given filter "pome".'
    );
  });

  it('should only list fruit of type pome when pome filter applied', () => {
    wrapper = !FilteredFruitList.prototype ? shallow(<Noop />) :
      shallow(<FilteredFruitList fruit={fruit} filter='pome' />);
    expect(wrapper.find('li').length).toBe(2, 'No fruit in list.');
    wrapper.find('li').forEach(n => {
      expect(n.text()).toMatch(/🍏|🍎/,
        'One of the fruits listed did not fit the filter.')
    });
  });

});
