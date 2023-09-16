import React from 'react';
import Header from './Components/Header';
import Content from './Components/Content';
import Total from './Components/Total';

const App = () => {
  const course = 'Développement d\'applications Half Stack';
  const parts = [
    { name: 'Fondamentaux de React', exercises: 10 },
    { name: 'Utilisation des props pour passer des données', exercises: 7 },
    { name: 'État d\'un composant', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </div>
  );
};

export default App;
