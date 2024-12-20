import React, { useState } from 'react';
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState(''); // Define email state variable
  const [phone, setPhone] = useState('');
  const [program, setProgram] = useState('');
  const [error, setError] = useState(null); // Define error state variable

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName.trim() === '') {
      setError('Please enter your first name');
    } else if (lastName.trim() === '') {
      setError('Please enter your last name');
    } else if (phone.trim() === '') {
      setError('Please enter your phone number');
    } else if (program.trim() === '') {
      setError('Please select a program');
    } else {
      console.log(`Name: ${firstName} ${lastName}, Email: ${email}, Phone: ${phone}, Program: ${program}`);
      setError(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      </label>
      <label>
        Last Name:
        <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Phone:
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Program:
        <select value={program} onChange={(e) => setProgram(e.target.value)}>
          <option value="">Select a program</option>
          <option value="Bachelor of Science in Computer Science">Bachelor of Science in Computer Science</option>
          <option value="Bachelor of Arts in English">Bachelor of Arts in English</option>
          <option value="Bachelor of Business Administration">Bachelor of Business Administration</option>
        </select>
      </label>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;