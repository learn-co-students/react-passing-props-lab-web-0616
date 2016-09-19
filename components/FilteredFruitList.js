const React = require('react');
const { Component } = require('react');

const FilteredFruitList = ({
  fruit,
  filter
}) => {
  const fruitList = !filter ?
    fruit : fruit.filter(i => i.fruit_type == filter);

  return (
    <ul>
      {fruitList.map((fruit, idx) => <li key={idx}>{fruit.char}</li>)}
    </ul>
  );
};
FilteredFruitList.defaultProps = {
  fruit: [],
  filter: null
};

module.exports = FilteredFruitList;

