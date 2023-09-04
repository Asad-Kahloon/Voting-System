import React,{useState} from 'react'
import './createElection.css'
import { useNavigate } from 'react-router-dom';


export default function CreateElection() {

    const [election , setElection] = useState([]);
    const [electionType , setElectionType] = useState('');
    const [electionArea , setElectionArea] = useState('');
    const [electionYear , setElectionYear] = useState('');

    const navigate = useNavigate();

    const handleChange = (setState) => (event) => {
        setState(event.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!electionType || !electionArea || !electionYear){
            alert('Please Fill the Form..');
        }
        else{
            const newElection = {
                Election_Type : electionType,
                Election_Area : electionArea,
                Election_Year : electionYear,
            };
            setElection((prevElection) => [...prevElection, newElection]);
            localStorage.setItem('Elections', JSON.stringify([...election , newElection]));
    
            alert('Election Created Successfully')
    
            setElectionArea('');
            setElectionType('');
            setElectionYear('');
        }

       
    }
    

  return (
    <div className="adminMain">
        <form onSubmit={handleSubmit}>

        <div className="adminInput">
            <select
                value={electionType}
                onChange={handleChange(setElectionType)}
                className="input_text"
            >
                <option value="">Selet Election Type</option>
                <option value="parliamentary">Parliamentary Election</option>
                <option value="presidential">Presidential Election</option>
                <option value="local-government">local Government Election</option>
                <option value="senate">Senate Election</option>
                <option value="zimni">Zimni Election</option>
            </select>
        </div>

        <div className="adminInput">
            <select
                value={electionArea}
                onChange={handleChange(setElectionArea)}
                className="input_text"
            >
                <option value="">Selet Election Area</option>
                <option value="punjab">Punjab</option>
                <option value="sindh">Sindh</option>
                <option value="balochistan">balochistan</option>
                <option value="khyberpakhtunkhwa">khyber Pakhtunkhwa</option>
                <option value="gilgitbaltistan">Gilgit Baltistan</option>
                <option value="kashmir">Kashmir</option>
            </select>
        </div>

        <div className="adminInput">
            <input
                value={electionYear}
                onChange={handleChange(setElectionYear)}
                className="input_text"
                type='date'
            />           
        </div>
        <button type='submit'>Create Election Profile</button>

        </form>
    </div>
  )
}
