import React from 'react';

const Total = ({ courses }) => {
  const totalExercises = courses.reduce((sum, course) => sum + course.exercises, 0);

  return <p>Nombre d'exercices {totalExercises}</p>;
};

export default Total;
