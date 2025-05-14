import React from 'react';

export default function MemberCard({ name, title, imageUrl, email }) {
  // The email prop is included for potential future use, but not displayed in the compact card.
  // The mailto link construction could be added here if an email icon/link is desired.
  return (
    <div className="member-entry">
      {imageUrl && <img src={imageUrl} alt={name} />}
      <div className="member-entry-details">
        {name && (
          <strong>
            {name}
            {email && <a href={`mailto:${email}`} title={`Email ${name}`} style={{ textDecoration: 'none', marginLeft: '0.25em' }}>📧</a>}
          </strong>
        )}
        {title && <em>{title}</em>}
      </div>
    </div>
  );
} 