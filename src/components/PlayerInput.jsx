import React, { useState } from 'react';
import './PlayerInput.css';
import { MdPerson } from "react-icons/md";
import { useNavigate } from 'react-router-dom'; 

const PlayerInput = () => {
  const [formData, setFormData] = useState({
    pointGuard: '',
    shootingGuard: '',
    smallForward: '',
    center: '',
    guard: '',
    forward: '',
    utility1: '',
    utility2: '',
    utility3: '',
    bench1: '',
    bench2: '',
    bench3: ''
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    const playerNames = Object.values(formData).filter(name => name.trim() !== '');

    try {
      const responses = await Promise.all(
        playerNames.map(name =>
          fetch(`http://localhost:8080/api/v1/players/${name}`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      )
      );

      const isSuccessful = responses.every(response => response.ok);

      if (isSuccessful) {
        const stats = await Promise.all(responses.map(response => response.json()));
        console.log('Stats being passed to Roster:', stats);

        navigate('/Roster', { state: {stats, formData} });
        

      } else {
        throw new Error('Some players could not be found.');
      }
    } catch (error) {
      console.error('Error fetching player stats:', error);
      setError('Could not retrieve player statistics. Please try again.');
    }
  };

  return (
    <div className='body'>
      <section className='form-container mt-32'>
        <form onSubmit={handleSubmit} className="space-y-6">
          <h1 className='text-4xl mb-2 text-center text-white'>Player Input Form</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { label: 'Point Guard', name: 'pointGuard' },
              { label: 'Shooting Guard', name: 'shootingGuard' },
              { label: 'Small Forward', name: 'smallForward' },
              { label: 'Center', name: 'center' },
              { label: 'Guard', name: 'guard' },
              { label: 'Forward', name: 'forward' },
              { label: 'Utility Player 1', name: 'utility1' },
              { label: 'Utility Player 2', name: 'utility2' },
              { label: 'Utility Player 3', name: 'utility3' },
              { label: 'Bench Player 1', name: 'bench1' },
              { label: 'Bench Player 2', name: 'bench2' },
              { label: 'Bench Player 3', name: 'bench3' }
            ].map((position, index) => (
              <div className='inputbox' key={index}>
                <input
                  type="text"
                  name={position.name}
                  value={formData[position.name]}
                  onChange={handleChange}
                  className='input'
                  placeholder={`Enter ${position.label}`}
                />
                <label className='label'>{position.label}</label>
                <MdPerson className='icon' />
              </div>
            ))}
          </div>

          <button className='button' type='submit'>Submit</button>
        </form>

        {error && <p className="text-red-500">{error}</p>}
        
      </section>
    </div>
  );
};

export default PlayerInput;
