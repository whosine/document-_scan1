import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ViewCollection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const fetchCollections = async () => {
      const response = await axios.get('/api/collections');
      setCollections(response.data);
    };
    fetchCollections();
  }, []);

  return (
    <div>
      <h1>View Collections</h1>
      <ul>
        {collections.map(collection => (
          <li key={collection._id}>{collection.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ViewCollection;
