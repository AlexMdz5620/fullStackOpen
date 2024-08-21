
const SelectedCountry = ({ country, handleSelectCountry }) => {
  return (
    <div>
        <p>{country.name.common}</p>
        <button onClick={() => handleSelectCountry(country)} >
            Show
        </button>
    </div>
  )
}

export default SelectedCountry