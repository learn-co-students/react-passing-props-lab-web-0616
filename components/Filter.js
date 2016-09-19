const React = require('react');
const { Component } = require('react');

const Filter = ({
  filters,
  handleChange
}) => (
  <select onChange={handleChange} defaultValue='all'>
    <option value='all'>All</option>
    {filters.map(filter =>
      <option key={filter} value={filter}>{filter}</option>
    )}
  </select>
);

module.exports = Filter;
