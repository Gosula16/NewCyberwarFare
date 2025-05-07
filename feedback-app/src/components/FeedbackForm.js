import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:5000/feedback';

const FeedbackForm = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(API_URL);
      setFeedbacks(res.data);
    } catch (err) {
      console.error('Error fetching feedbacks:', err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(API_URL, form);
      setFeedbacks([res.data, ...feedbacks]);
      setForm({ name: '', email: '', message: '' });
      setSuccess('Feedback submitted successfully!');
      setTimeout(() => setSuccess(''), 3000);
    } catch (err) {
      console.error('Error submitting feedback:', err);
    }
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Submit Your Feedback</h1>

      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your feedback..."
          value={form.message}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          required
        />
        <button
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          type="submit"
        >
          Submit
        </button>
        {success && <p className="text-green-600">{success}</p>}
      </form>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">All Feedback</h2>
        {feedbacks.map((fb) => (
          <div key={fb._id} className="border-b py-2">
            <p><strong>{fb.name}</strong> ({fb.email})</p>
            <p>{fb.message}</p>
            <p className="text-xs text-gray-500">
              {new Date(fb.timestamp).toLocaleString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedbackForm;
