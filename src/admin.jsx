// Admin.js
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom'

const Admin = ({ onAddCandidate }) => {

    const navigate=useNavigate();

  const [newCandidate, setNewCandidate] = useState({
    name: '',
    party: '',
    seatType: 'MPA', // Default seat type
    votes: 0,
  });

  const handleAddCandidate = () => {
    if (newCandidate.name.trim() !== '' && newCandidate.party.trim() !== '') {
      onAddCandidate(newCandidate);
      setNewCandidate({
        name: '',
        party: '',
        seat: 'MPA',
        votes: 0,
      });
      navigate('/');
    }
  };

  return (
    <div className="admin">
      <h2>Add Candidate</h2>
      <input
        type="text"
        placeholder="Candidate name"
        value={newCandidate.name}
        onChange={(e) =>
          setNewCandidate({ ...newCandidate, name: e.target.value })
        }
      />
      <input
        type="text"
        placeholder="Party name"
        value={newCandidate.party}
        onChange={(e) =>
          setNewCandidate({ ...newCandidate, party: e.target.value })
        }
      />
      <label>
        <input
          type="radio"
          value="MPA"
          checked={newCandidate.seatType === 'MPA'}
          onChange={() => setNewCandidate({ ...newCandidate, seatType: 'MPA' })}
        />
        MPA
      </label>
      <label>
        <input
          type="radio"
          value="MNA"
          checked={newCandidate.seatType === 'MNA'}
          onChange={() => setNewCandidate({ ...newCandidate, seatType: 'MNA' })}
        />
        MNA
      </label>
      <button onClick={handleAddCandidate}>Add</button>
    </div>
  );
};

export default Admin;
