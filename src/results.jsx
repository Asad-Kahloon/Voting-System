// Results.js
import React from 'react';

const Results = ({ candidates }) => {
  return (
    <div className="results">
      <h2>Voting Results</h2>
      <ul>
        {candidates.map(candidate => (
          <li key={candidate.name}>
            <h1>{candidate.name} {candidate.party}</h1> 
            : {candidate.votes} votes
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Results;
