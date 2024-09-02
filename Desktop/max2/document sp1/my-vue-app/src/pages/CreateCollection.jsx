
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CreateCollection.css';

const CreateCollection = () => {
  const [collections, setCollections] = useState([]);

  useEffect(() => {
    const savedCollections = JSON.parse(localStorage.getItem('collections')) || [];
    setCollections(savedCollections);
  }, []);

  const navigate = useNavigate();

  const handleUpload = () => {
    navigate('/upload');
  };

  return (
    <div className="create-container">
      <div className="header">
        <h1>Create Collection</h1>
        <button onClick={handleUpload} className="button_2">Upload</button>
      </div>
      <div className="collections-grid">
        {collections.map((collection, index) => (
          <div key={index} className="collection-card">
            <h2>{collection.collectionName}</h2>
            <p>Name: {collection.name}</p>
            <p>Title: {collection.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreateCollection;
