export const Person = ({ person = {} }) => {
  let isAge = null;
  let marriedPargraph = <p className="Person__partner">I am not married</p>;

  if ('age' in person) {
    isAge = <p className="Person__age">I am {person.age}</p>;
  }

  if (person.isMarried) {
    if (person.sex === 'm') {
      marriedPargraph = (
        <p className="Person__partner">{person.partnerName} is my wife</p>
      );
    } else {
      marriedPargraph = (
        <p className="Person__partner">{person.partnerName} is my husband</p>
      );
    }
  }

  return (
    <section>
      <h2 className="Person__name">My name is {person.name}</h2>
      {isAge}
      {marriedPargraph}
    </section>
  );
};
