import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Table() {
    const [data, setData] = useState([]);
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [description, setDescription] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8000/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    const deleteItem = async (id) => {
        try {
            await fetch(`http://localhost:8000/data/${id}`, {
                method: 'DELETE',
            });
            setData(data.filter(item => item._id !== id));
        } catch (error) {
            console.error(`Error deleting item: ${error}`);
        }
    };
    
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/data', {
        name,
        price,
        description
      });
      setData([setdata, response.data]);
      setName('');
      setPrice('');
      setDescription('');
    } catch (error) {
      console.error(error);
    }
  };

    const updateitem = async (id) => {
        try {
          const response =  await axios.patch(`http://localhost:3000/data/${id}`, {
            name,
            price,
            description
          });
          setData(data.map(item => item._id === id ? response.data : item));
        } 
            // const newData = data.map(item => item._id === id ? updatedData : item);
            // setData(newData);
        catch (error) {
            console.error(`Error updating item: ${error}`);
        }
    };

    return (
        <div className="table">
            <table className="table-auto">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>price</th>
                        <th>description</th>
                        <th>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                        {item.name} - {item.price} - {item.description}
                            <td>{item._id}</td>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td>{item.description}</td>
                            <td>
                                <button onClick={() => deleteItem(item._id)}>Delete</button>
                            </td>
                            <td>
                                <button onClick={() => updateitem(item._id, {})}>
                                    Update
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
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

export default Table;