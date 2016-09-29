const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

class FruitBasket extends Component {
  constructor() {
    super();

    this.state = {
      filters: [],
      selectedFilter: null
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e) {
    console.log('new filter: ', e.target.value);
    this.setState({ selectedFilter: e.target.value });
  }

  render() {
    return (
      <div className="fruit-basket">
        <Filter handleChange={this.handleFilterChange} />
        <FilteredFruitList
          filter={this.state.selectedFilter} />
      </div>
    );
  }
}

module.exports = FruitBasket;
