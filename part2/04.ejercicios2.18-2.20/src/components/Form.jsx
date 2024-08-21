
const Form = ({ searchCountry, handleSearchCountry }) => {
  return (
    <form>
        <label>
          Find Countries
          <input
            placeholder="Country"
            value={searchCountry}
            onChange={handleSearchCountry}
          />
        </label>
      </form>
  )
}

export default Form