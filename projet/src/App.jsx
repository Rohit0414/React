import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import FavoriteColor from './components/Body';
import MyForm from './components/form';
import Form from './components/form';
// import Timer from './components/Content';
import axios from 'axios';
import Table from './components/get';
import Post from './components/post';

function App() {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const grocery = { name, price, description }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/data', JSON.stringify({ grocery: grocery }), {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.data);
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={e => setName(e.target.value)} />
      </label>
      <label>
        Price:
        <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
      </label>
      <label>
        Description:
        <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
<Table/>
{/* <Post/> */}


</>

  );

}
export default App;

