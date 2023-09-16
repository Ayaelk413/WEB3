import React from 'react';

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);

  return <p>Nombre d'exercices {totalExercises}</p>;
};

export default Total;
