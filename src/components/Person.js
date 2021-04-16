const Person = props => {
  return (
    <tr>
      <td>{props.person.name.title}</td>
      <td>{props.person.name.first}</td>
      <td>{props.person.name.last}</td>
      <td>{props.person.gender}</td>
    </tr>
  );
};

export default Person;
