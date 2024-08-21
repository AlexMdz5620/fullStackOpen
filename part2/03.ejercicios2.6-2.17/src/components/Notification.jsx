const Notification = ({ message }) => {
    if (message === null) {
      return null
    }
    const alertStyles = {
        color: 'green',
        background: 'lightgray',
        fontSize: 20,
        borderStyle: 'solid',
        borderRadius: 5,
        padding: 10,
        marginBottom: 10
    }
    return (
      <div style={alertStyles}>
        {message}
      </div>
    )
}

export default Notification