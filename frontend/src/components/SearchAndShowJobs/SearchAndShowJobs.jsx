import React, { useState, useEffect } from 'react';
import './SearchAndShowJobs.css';
import { assets } from '../../assets/assets.js';
import axios from 'axios';
import API_URL from '../../api.js';

const SearchAndShowJobs = ({ userEmail, setUserEmail }) => {
  const [food_list, setFoodList] = useState([]);

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchValue = e.target[0].value;
    const response = await axios.post(`${API_URL}/job-request`, { search: searchValue });
    setFoodList(response.data);
  };

  useEffect(() => {
    const button = document.getElementById('search-btn');
    if (button) {
      button.click();
    }
  }, []);

  const handleDelete = async (e, title) => {
    e.preventDefault();
    try {
      await axios.delete(`${API_URL}/delete`, {
        data: { title, email: userEmail },
        headers: { 'Content-Type': 'application/json' }
      });
      handleSearch(e);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <section className='jobs-hero'>
        <div className='jobs-hero-content'>
          <span className='hero-kicker'>Talent marketplace</span>
          <h1>Find the right role, faster.</h1>
          <p>Search curated openings, discover teams that fit your goals, and apply directly from one focused workspace.</p>
          <form onSubmit={handleSearch} className='search-form'>
            <input type="text" placeholder='Search by title, skill, or location' aria-label='Search jobs' />
            <button type='submit' id='search-btn'><img src={assets.search} alt="" /> Search</button>
          </form>
        </div>
        <div className='hero-panel' aria-hidden='true'>
          <div>
            <span>Open roles</span>
            <strong>{food_list.length}</strong>
          </div>
          <div>
            <span>Hiring focus</span>
            <strong>Remote & on-site</strong>
          </div>
          <div>
            <span>Apply links</span>
            <strong>Direct</strong>
          </div>
        </div>
      </section>
      <section className='showData' aria-live='polite'>
        {food_list.length === 0 
          ? <div className='empty-state'>
              <h2>No jobs found</h2>
              <p>Try a different keyword, role title, or location.</p>
            </div>
          : food_list.map((item, index) => (
            <div key={index} className='showData-item'>
              <div className='job-card-header'>
                <div>
                  <span className='job-eyebrow'>Featured role</span>
                  <h3>{item.title}</h3>
                </div>
                <span className='job-location'>{item.location}</span>
              </div>
              <div className='job-card-body'>
                <p><strong>Description</strong>{item.description}</p>
                <p><strong>Requirements</strong>{item.requirements}</p>
                <div className='apply-delete'>
                  <a href={item.apply}>Apply</a>
                  {userEmail === item.userEmail && <form onSubmit={(e) => handleDelete(e, item.title)} className='delete-job'>
                    <button type='submit'>Delete</button>
                  </form>}
                </div>
              </div>
            </div>
          ))}
      </section>
    </>
  );
};

export default SearchAndShowJobs;
