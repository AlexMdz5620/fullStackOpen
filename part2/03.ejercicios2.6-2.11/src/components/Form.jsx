import Input from "./Input";

const Form = ({
  addPerson,
  newName,
  handleNameChange,
  newPhone,
  handlePhoneChange,
}) => {
  return (
    <form onSubmit={addPerson}>
      <Input title={"Name"} value={newName} handle={handleNameChange} />
      <Input title={"Phone"} value={newPhone} handle={handlePhoneChange} />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
