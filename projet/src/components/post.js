import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/data')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/data', {
        name,
        price,
        description
      });
      setData([...data, response.data]);
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/data/${id}`);
      setData(data.filter(item => item._id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdate = async (id) => {
    try {
      const response = await axios.patch(`http://localhost:3000/data/${id}`, {
        name,
        price,
        description
      });
      setData(data.map(item => item._id === id ? response.data : item));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Data</h1>
      <ul>
        {data.map(item => (
          <li key={item._id}>
            {item.name} - {item.price} - {item.description}
            <button onClick={() => handleDelete(item._id)}>Delete</button>
            <button onClick={() => handleUpdate(item._id)}>Update</button>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={event => setName(event.target.value)} />
        </label>
        <label>
          Price:
          <input type="number" value={price} onChange={event => setPrice(event.target.value)} />
        </label>
        <label>
          Description:
          <input type="text" value={description} onChange={event => setDescription(event.target.value)} />
        </label>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default App;