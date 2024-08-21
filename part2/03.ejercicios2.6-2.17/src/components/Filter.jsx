const Filter = ({ searchName, handleSearchName }) => {
  return (
    <label>
      Filter shown with
      <input value={searchName} onChange={handleSearchName} />
    </label>
  );
};

export default Filter;
