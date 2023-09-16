import React from 'react';
import Part from './Part';

const Content = ({ courses }) => {
  return (
    <>
      {courses.map((course, index) => (
        <Part key={index} part={course.part} exercises={course.exercises} />
      ))}
    </>
  );
};

export default Content;
