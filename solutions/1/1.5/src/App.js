const Header = (props) => {
  return (
    <>
      <h1>{props.course.name}</h1>
    </>
  );
};

const Part = (props) => {
  const {name, exercises} = props.parts
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = (props) => {
  const [first, second, third] = props.course.parts
  return (
    <>
      <Part parts={first} />
      <Part parts={second} />
      <Part parts={third} />
    </>
  );
};

const Total = (props) => {
  const [first, second, third] = props.course.parts
  return (
    <>
      <p>
        Number of exercises{" "}
        {first.exercises + second.exercises + third.exercises}
      </p>
    </>
  );
};

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course} /> 
      <Total course={course} /> 
    </div>
  );
};

export default App;