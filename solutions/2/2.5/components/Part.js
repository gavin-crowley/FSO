const Part = (props) => {
    const { name, exercises } = props.parts;
    return (
      <p>
        {name} {exercises}
      </p>
    );
  };
  
export default Part