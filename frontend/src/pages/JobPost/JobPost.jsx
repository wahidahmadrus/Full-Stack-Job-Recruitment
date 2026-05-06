import React, { useState } from 'react';
import './JobPost.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import API_URL from '../../api.js';

const JobPost = ({ userEmail }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    requirements: '',
    location: '',
    apply: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { ...formData, userEmail };
    try {
      const response = await axios.post(`${API_URL}/job-post`, payload, {
        headers: { 'Content-Type': 'application/json' },
      });
      navigate('/');
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message); 
    }
  };

  return (
    <div className='jobPost'>
      <div className='jobPost-heading'>
        <span>Employer workspace</span>
        <h1>Post a new role</h1>
        <p>Create a clear listing with the details candidates need before they apply.</p>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Job title</label>
        <input name='title' id='title' type="text" value={formData.title} onChange={handleChange} />

        <label htmlFor="description">Job description</label>
        <textarea name="description" id="description" rows="6" value={formData.description} onChange={handleChange}></textarea>

        <label htmlFor="requirements">Requirements</label>
        <textarea name="requirements" id="requirements" rows="6" value={formData.requirements} onChange={handleChange}></textarea>

        <label htmlFor="location">Location</label>
        <input name='location' id='location' type="text" value={formData.location} onChange={handleChange} />

        <label htmlFor="apply">Apply link</label>
        <input type="text" name='apply' id='apply' value={formData.apply} onChange={handleChange} />

        <button type="submit">Post Job</button>
      </form> 
    </div>
  );
};

export default JobPost;
