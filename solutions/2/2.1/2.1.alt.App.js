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
    const [first, second, third] = props.course.parts;
    return (
      <>
        <Part parts={first} />
        <Part parts={second} />
        <Part parts={third} />
      </>
    );
  };
  
  const Total = (props) => {
    const [first, second, third] = props.course.parts;
    return (
      <>
        <p>
          Number of exercises{' '}
          {first.exercises + second.exercises + third.exercises}
        </p>
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
      ],
    };
  
    return <Course course={course} />;
  };
  
  export default App;
  