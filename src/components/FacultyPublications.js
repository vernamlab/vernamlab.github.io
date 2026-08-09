import React from 'react';
import publications from '@site/src/data/facultyPublications.json';

export default function FacultyPublications({faculty}) {
  const facultyPublications = publications[faculty] || [];

  return (
    <div className="faculty-publications">
      {facultyPublications.map((publication, index) => (
        <div className="faculty-publication" key={`${publication.title}-${publication.year || 'unknown'}-${index}`}>
          <div className="faculty-publication__title">{publication.title}</div>
          {publication.authors && <div>{publication.authors}</div>}
          {(publication.venue || publication.year) && (
            <div className="faculty-publication__details">
              {[publication.venue, publication.year].filter(Boolean).join(', ')}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
