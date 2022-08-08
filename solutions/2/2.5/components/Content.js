import Part from './Part'

const Content = (props) => {
    return (
      <>
        {props.course.parts.map((part) => (
          <Part key={part.id} parts={part} />
        ))}
      </>
    );
  };

  export default Content