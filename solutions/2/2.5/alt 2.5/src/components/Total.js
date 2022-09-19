import React from 'react'

const Total = ({ course }) => {

    return (
      <>
        <strong>
          Total of{' '}
          {course.parts.reduce((sum, part) => {
            return sum + part.exercises;
          }, 0)}{' '}
          exercises
        </strong>
      </>
    );
  };
  

export default Total