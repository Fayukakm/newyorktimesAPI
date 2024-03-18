import { useEffect, useState } from 'react';
import { format, parseISO } from 'date-fns';

const Card = ({ url, index }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setResults(data.results);
      });
  }, [url]);

  if (!results.length) {
    return <article aria-busy="true"></article>;
  }

  return (
    <article>
      <header style={{ padding: 30, paddingBottom: 0 }}>
        <hgroup>
          <h3>{results[index].title}</h3>
          <p>
            {format(parseISO(results[index].published_date), 'MMMM do, yyyy')}
          </p>
        </hgroup>
      </header>
      <div className="grid">
        <img
          src={
            results[index].multimedia[0].url
              ? results[index].multimedia[0].url
              : ''
          }
          alt={
            results[index].multimedia[0].caption
              ? results[index].multimedia[0].caption
              : 'error loading the image'
          }
        />
        <section
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <p>{results[index].abstract}</p>
          <p>{results[index].byline}</p>
          <a href={results[index].url}>Read full article</a>
          <br />
          <br />
          <i style={{ marginTop: 'auto' }}>
            Image caption: {results[index].multimedia[0].caption}
          </i>
        </section>
      </div>
    </article>
  );
};

export default Card;
