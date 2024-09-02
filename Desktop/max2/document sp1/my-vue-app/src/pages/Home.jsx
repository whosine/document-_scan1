// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Ensure you import your CSS

// import img from '../property/doc.png';

// const Home = () => {
//   const navigate = useNavigate();

//   const handleCreate = () => {
//     navigate('/create');
//   };

//   return (
//     <div className="home-container">
//       <div className='home-card'>
//         <div className='box1'>
//           <h1>Documentation Processing Engine...</h1>
//           <p>This is a documentation processing one.......</p>
//           <button onClick={handleCreate} className='button'>Create</button>
//         </div>
//         <div className='box2'>
//           <img src={img} alt="Document Icon" className='large-icon' />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;






// Home.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Home.css'; // Ensure you import your CSS
// import img from '../property/doc.png';
// import Modal from './Modal';

// const Home = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [collectionData, setCollectionData] = useState({ name: '', collectionName: '', title: '' });

//   const navigate = useNavigate();

//   const handleCreate = () => {
//     setShowModal(true);
//   };

//   const handleChange = (e) => {
//     setCollectionData({ ...collectionData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = () => {
//     // Save collectionData to local storage or state management library
//     localStorage.setItem('collectionData', JSON.stringify(collectionData));
//     setShowModal(false);
//     navigate('/create');
//   };

//   return (
//     <div className="home-container">
//       <div className='home-card'>
//         <div className='box1'>
//           <h1>Documentation Processing Engine...</h1>
//           <p>This is a documentation processing one.......</p>
//           <button onClick={handleCreate} className='button'>Create</button>
//         </div>
//         <div className='box2'>
//           <img src={img} alt="Document Icon" className='large-icon' />
//         </div>
//       </div>

//       {showModal && (
//         <Modal onClose={() => setShowModal(false)}>
//           <h2>Create Collection</h2>
//           <input type="text" name="name" placeholder="Name" value={collectionData.name} onChange={handleChange} />
//           <input type="text" name="collectionName" placeholder="Collection Name" value={collectionData.collectionName} onChange={handleChange} />
//           <input type="text" name="title" placeholder="Title" value={collectionData.title} onChange={handleChange} />
//           <button onClick={handleSubmit} className="button">Submit</button>
//         </Modal>
//       )}
//     </div>
//   );
// };

// export default Home;




import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import img from '../property/doc.png';
import Modal from './Modal';

const Home = () => {
  const [showModal, setShowModal] = useState(false);
  const [collectionData, setCollectionData] = useState({ name: '', collectionName: '', title: '' });

  const navigate = useNavigate();

  const handleCreate = () => {
    setShowModal(true);
  };

  const handleChange = (e) => {
    setCollectionData({ ...collectionData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const collections = JSON.parse(localStorage.getItem('collections')) || [];
    collections.push(collectionData);
    localStorage.setItem('collections', JSON.stringify(collections));
    setShowModal(false);
    navigate('/create');
  };

  return (
    <div className="home-container">
      <div className='home-card'>
        <div className='box1'>
          <h1>Documentation Processing Engine...</h1>
          <p>This is a documentation processing one.......</p>
          <button onClick={handleCreate} className='button'>Create</button>
        </div>
        <div className='box2'>
          <img src={img} alt="Document Icon" className='large-icon' />
        </div>
      </div>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <h2>Create Collection</h2>
          <input type="text" name="name" placeholder="Name" value={collectionData.name} onChange={handleChange} />
          <input type="text" name="collectionName" placeholder="Collection Name" value={collectionData.collectionName} onChange={handleChange} />
          <input type="text" name="title" placeholder="Title" value={collectionData.title} onChange={handleChange} />
          <button onClick={handleSubmit} className="button">Submit</button>
        </Modal>
      )}
    </div>
  );
};

export default Home;




