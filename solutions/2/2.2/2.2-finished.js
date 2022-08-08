const Header = (props) => {
    return (
      <>
        <h1>{props.course.name}</h1>
      </>
    );
  };
  
  const Part = (props) => {
    const { name, exercises } = props.parts;
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };
  
  const Content = (props) => {
    return (
      <>
        {props.course.parts.map((part) => (
          <Part key={part.id} parts={part} />
        ))}
      </>
    );
  };
  
  const Total = (props) => {
  
    let total = 0;
  
    props.course.parts.forEach(part => {
      total += part.exercises
    })
    
    return (
      <>
        <strong>
          total of{' '}
            {total}
          {' '}exercises
        </strong>
      </>
    );
  };
  
  const Course = (props) => {
    return (
      <>
        <Header course={props.course} />
        <Content course={props.course} />
        <Total course={props.course} />
      </>
    );
  };
  
  const App = () => {
    const course = {
      id: 1,
      name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    };
  
    return <Course course={course} />;
  };
  
  export default App;
  