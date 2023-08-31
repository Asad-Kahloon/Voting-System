// Candidate.js
import React from 'react';

const Candidate = ({ name, votes, onVote, isLeading }) => {
  return (
    <div className="candidate">
      <h3>
        {name} {isLeading && <span className="leading-tag">Leading Candidate</span>}
      </h3>
      <p>Votes: {votes}</p>
      <button onClick={onVote}>Vote</button>
    </div>
  );
};

export default Candidate;
