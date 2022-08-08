
const Total = (props) => {
    return (
      <>
        <strong>
          total of{' '}
          {props.course.parts.reduce((sum, part) => {
            return sum + part.exercises;
          }, 0)}{' '}
          exercises
        </strong>
      </>
    );
  };

  export default Total