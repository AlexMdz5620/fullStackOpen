import ButtonDelete from "./ButtonDelete";

const Persons = ({ findPerson, deletePhone }) => {
  return (
    <div>
      {findPerson.map((person) => (
        <div key={person.id}>
          <p>
            {person.name} {person.phone}
          </p>
          < ButtonDelete
            person={person}
            deletePhone={deletePhone}
          />
        </div>
      ))}
    </div>
  );
};

export default Persons;
