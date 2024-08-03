const Persons = ({ findPerson }) => {
  return (
    <div>
      {findPerson.map((person) => (
        <p key={person.id}>
          {person.name} {person.phone}
        </p>
      ))}
    </div>
  );
};

export default Persons;
