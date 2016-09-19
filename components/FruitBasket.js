const React = require('react');
const { Component } = require('react');

const Filter = require('./Filter');
const FilteredFruitList = require('./FilteredFruitList.js');

const FruitBasket = ({
  fruit,
  filters,
  currentFilter,
  updateFilterCallback
}) => {
  return (
    <div>
      <Filter
        filters={filters}
        handleChange={updateFilterCallback} />
      <FilteredFruitList
        fruit={fruit}
        filter={currentFilter} />
    </div>
  );
};

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: null,
  updateFilterCallback: () => {}
};

module.exports = FruitBasket;
