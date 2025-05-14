import React from 'react';
import MemberCard from '@site/src/components/MemberCard';

// Data will be passed as props

const chunkArray = (array, size) => {
  const chunked_arr = [];
  for (let i = 0; i < array.length; i += size) {
    chunked_arr.push(array.slice(i, i + size));
  }
  return chunked_arr;
};

const MemberSection = ({ members }) => (
  <>
    {chunkArray(members, 3).map((rowMembers, rowIndex) => (
      <div className="row" key={`row-${rowIndex}`}>
        {rowMembers.map((member, memberIndex) => (
          <div className="col col--4" key={`member-${memberIndex}-${member.name}`}>
            <MemberCard name={member.name} title={member.title} imageUrl={member.imageUrl} email={member.email} />
          </div>
        ))}
        {/* Add empty columns if the last row is not full to maintain layout */}
        {rowMembers.length < 3 &&
          Array(3 - rowMembers.length)
            .fill(null)
            .map((_, emptyColIndex) => (
              <div className="col col--4" key={`empty-col-${rowIndex}-${emptyColIndex}`} />
            ))}
      </div>
    ))}
  </>
);

export default function MembersList({ members }) {
  return (
    <>
      {members && members.length > 0 && <MemberSection members={members} />}
    </>
  );
} 