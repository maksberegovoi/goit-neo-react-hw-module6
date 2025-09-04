import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.filters.name);

  const handleSearch = (e) => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div style={{ marginTop: 25 }}>
      <label htmlFor="search"></label>
      <input
        type="text"
        name='search'
        placeholder='Enter the name...'
        value={name}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBox;