
import Head from 'next/head';
import { useState } from 'react';

function CGPACalculator() {
  const [subjects, setSubjects] = useState([]);
  const [cgpa, setCGPA] = useState(0);

  const handleAddSubject = (event) => {
    event.preventDefault();
    const subjectName = event.target.subjectName.value;
    const grade = event.target.grade.value;
    const credit = event.target.credit.value;

    const newSubject = {
      subjectName,
      grade,
      credit,
    };

    setSubjects([...subjects, newSubject]);
  };

  const calculateCGPA = () => {
    let totalGradePoints = 0;
    let totalCredits = 0;

    subjects.forEach((subject) => {
      const gradePoint = getGradePoint(subject.grade);
      totalGradePoints += gradePoint * subject.credit;
      totalCredits += subject.credit;
    });

    const cgpa = totalGradePoints / totalCredits;
    setCGPA(cgpa.toFixed(2));
  };

  const getGradePoint = (grade) => {
    switch (grade) {
      case 'A+':
        return 4.0;
      case 'A':
        return 4.0;
      case 'A-':
        return 3.7;
      case 'B+':
        return 3.3;
      case 'B':
        return 3.0;
      case 'B-':
        return 2.7;
      case 'C+':
        return 2.3;
      case 'C':
        return 2.0;
      case 'C-':
        return 1.7;
      case 'D+':
        return 1.3;
      case 'D':
        return 1.0;
      case 'D-':
        return 0.7;
      default:
        return 0;
    }
  };

  return (
    <div>
      <Head>
        <title>CGPA Calculator</title>
      </Head>
      <h1>CGPA Calculator</h1>
      <form onSubmit={handleAddSubject}>
        <label>
          Subject Name:
          <input type="text" name="subjectName" />
        </label>
        <br />
        <label>
          Grade:
          <select name="grade">
            <option value="A+">A+</option>
            <option value="A">A</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B">B</option>
            <option value="B-">B-</option>
            <option value="C+">C+</option>
            <option value="C">C</option>
            <option value="C-">C-</option>
            <option value="D+">D+</option>
            <option value="D">D</option>
            <option value="D-">D-</option>
          </select>
        </label>
        <br />
        <label>
          Credit:
          <input type="number" name="credit" />
        </label>
        <br />
        <button type="submit">Add Subject</button>
      </form>
      <button onClick={calculateCGPA}>Calculate CGPA</button>
      <p>CGPA: {cgpa}</p>
      <ul>
        {subjects.map((subject, index) => (
          <li key={index}>
            {subject.subjectName} - {subject.grade} ({subject.credit} credits)
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CGPACalculator;