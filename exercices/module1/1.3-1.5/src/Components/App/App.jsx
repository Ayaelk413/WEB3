import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Total from '../Total/Total';
import './App.css';

const App = () => {
  const course = 'Développement d\'applications Half Stack';
  const courses = [
    { part: 'Fondamentaux de React', exercises: 10 },
    { part: 'Utilisation des props pour passer des données', exercises: 7 },
    { part: 'État d\'un composant', exercises: 14 },
  ];

  return (
    <div>
      <Header course={course} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
};

export default App;
