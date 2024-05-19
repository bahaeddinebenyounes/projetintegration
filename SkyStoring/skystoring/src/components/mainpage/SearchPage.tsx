import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SearchPage: React.FC = () => {
  const [babysitters, setBabysitters] = useState<any[]>([]);

  useEffect(() => {
    // Fetch babysitters data from API
    axios.get('/api/babysitters')
      .then(response => {
        setBabysitters(response.data);
      })
      .catch(error => {
        console.error('Error fetching babysitters data:', error);
      });
  }, []);

  return (
    <div>
      <h1>Search/Browse Babysitters</h1>
      <ul>
        {babysitters.map(babysitter => (
          <li key={babysitter.id}>
            {babysitter.name} - {babysitter.age} years old
            {/* Additional babysitter details */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
