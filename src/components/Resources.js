import React from 'react';

function Resources() {
  const resources = [
    {
      title: 'React Docs',
      image: 'https://reactjs.org/logo-og.png',
      summary: 'The official React documentation.',
      link: 'https://reactjs.org/',
    },
    {
      title: 'Docker Documentation',
      image: 'https://www.docker.com/wp-content/uploads/2022/03/Moby-logo.png',
      summary: 'Guide to containerize your app.',
      link: 'https://docs.docker.com/',
    },
  ];

  return (
    <div>
      {resources.map((res, idx) => (
        <div key={idx} style={{ marginBottom: '1rem' }}>
          <h4>{res.title}</h4>
          <img src={res.image} alt={res.title} width="100" />
          <p>{res.summary}</p>
          <a href={res.link} target="_blank" rel="noopener noreferrer">Visit</a>
        </div>
      ))}
    </div>
  );
}

export default Resources;
