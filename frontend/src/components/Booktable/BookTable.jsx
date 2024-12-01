import { useState } from 'react';
import emailjs from 'emailjs-com';
import './BookTable.css';

const BookTable = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert("Table booked successfully! We'll get in touch with you shortly.");
        setFormData({ name: '', email: '', phone: '', date: '', time: '', guests: 1 });
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to book the table. Please try again later.');
      });
  };

  return (
    <div id="book-table-section" className="book-table">
      <h1>Book A Table</h1>
      <div className="content-wrapper">
        <div className="form-section">
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name" 
              value={formData.name} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="tel" 
              name="phone" 
              placeholder="Your Phone" 
              value={formData.phone} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="date" 
              name="date" 
              value={formData.date} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="time" 
              name="time" 
              value={formData.time} 
              onChange={handleChange} 
              required 
            />
            <select 
              name="guests" 
              value={formData.guests} 
              onChange={handleChange}
            >
              {[1, 2, 3, 4, 5, 6].map(guestCount => (
                <option key={guestCount} value={guestCount}>
                  {guestCount} Guest{guestCount > 1 ? 's' : ''}
                </option>
              ))}
            </select>
            <button type="submit">Book Now</button>
          </form>
        </div>
        
        <div className="map">
          <h2>Our Location</h2>
          <iframe
            title="Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094935!2d144.9537353153161!3d-37.816279979751115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f0c9fbb%3A0x5045675218cee50!2sYour%20Restaurant%20Name!5e0!3m2!1sen!2sau!4v1638500990755!5m2!1sen!2sau"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default BookTable;
