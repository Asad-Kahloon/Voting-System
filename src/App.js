import { BrowserRouter } from 'react-router-dom';
import './App.css'
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Rout from './components/Rout/rout';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Rout />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;






// // App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import Candidate from './candidate';
// import Results from './results';
// import Admin from './admin';

// const App = () => {
//   const [candidates, setCandidates] = useState([]);

//   const handleVote = (index) => {
//     const updatedCandidates = [...candidates];
//     updatedCandidates[index].votes++;
//     setCandidates(updatedCandidates);
//   };

//   const handleAddCandidate = (newCandidate) => {
//     setCandidates([...candidates, newCandidate]);
//   };
//   const getLeadingCandidateIndex = () => {
//     let leadingIndex = 0;
//     for (let i = 1; i < candidates.length; i++) {
//       if (candidates[i].votes > candidates[leadingIndex].votes) {
//         leadingIndex = i;
//       }
//     }
//     return leadingIndex;
//   };

//   return (
//     <Router>
//       <div className="app">
//         <h1>Voting App</h1>
//         <Link to="/admin">
//           <button>Admin</button>
//         </Link>
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <div className="candidates">
//                   {candidates.map((candidate, index) => (
//                     <Candidate
//                       key={candidate.name}
//                       name={candidate.name}
//                       votes={candidate.votes}
//                       onVote={() => handleVote(index)}
//                       isLeading={index === getLeadingCandidateIndex()}
//                     />
//                   ))}
//                 </div>
//                 <Results candidates={candidates} />
//               </>
//             }
//           />
//           <Route
//             path="/admin"
//             element={<Admin onAddCandidate={handleAddCandidate} />}
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;




// import React from 'react'
// import Rout from './rout'
// import { BrowserRouter } from 'react-router-dom'

// export default function App() {
//   return (
    
//     <BrowserRouter>
//     <Rout />
//     </BrowserRouter>

//   )
// }

