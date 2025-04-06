import React from 'react';

function Work({ title, description, image, link, tech }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '1rem', marginBottom: '1rem' }}>
      <h3>{title}</h3>
      <img src={image} alt={title} style={{ width: '200px' }} />
      <p>{description}</p>
      <p><strong>Technologies:</strong> {tech.join(', ')}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default Work;
