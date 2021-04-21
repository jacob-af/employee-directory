const Person = props => {
  return (
    <tr>
      <td>{props.person.name.title}</td>
      <td>{props.person.name.first}</td>
      <td>{props.person.name.last}</td>
      <td>{props.person.dob.age}</td>
      <td>{props.person.location.city}</td>
      <td>{props.person.location.country}</td>
    </tr>
  );
};

export default Person;
