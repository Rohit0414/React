import React, { useState, useEffect } from 'react';
import axios from 'axios';
function Table() {
  const [data, setData] = useState([]);
  

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
              <td>{item._id}</td>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.description}</td>
              <td>
                <button onClick={() => deleteItem(item._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div >
  );
}

export default Table;