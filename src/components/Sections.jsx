import React from 'react';
import Card from './Card';

const Sections = ({ sections }) => {
  return (
    <>
      {sections.map((section, index) => (
        <React.Fragment key={index}>
          <h1>{section.title}</h1>
          <Card url={section.url} index={0}></Card>
          <Card url={section.url} index={1}></Card>
          <Card url={section.url} index={2}></Card>
        </React.Fragment>
      ))}
    </>
  );
};

export default Sections;
