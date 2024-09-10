import React, { useState } from 'react';
import './PatientForm.css';

const PatientForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    contact: '',
    symptoms: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit form data, e.g., send data to backend
    console.log(formData);
  };

  return (
    <div className="patient-form">
      <h2>Patient Data Collection</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact:
          <input
            type="text"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Symptoms:
          <textarea
            name="symptoms"
            value={formData.symptoms}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
