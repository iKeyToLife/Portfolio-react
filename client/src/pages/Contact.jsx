import emailjs from 'emailjs-com';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import './css/Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldRequired, setFieldRequired] = useState('');
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value.length > 0) setFieldRequired('')
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (value.length === 0) {
      setFieldRequired(name);
    } else if (name === 'email') {
      if (!validateEmail(value)) {
        setFieldRequired(name);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccessMessage('Your message has been sent!');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }).catch((err) => {
      console.error('FAILED...', err);
      setErrorMessage('Failed to send message. Please try again later.');
    }).finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <Container className="contact-section">
      <div className="contact-info animated">
        <p><span>Contact with me</span></p>
        {isSubmitting && <div className="processing-message">Processing...</div>}
      </div>

      <form className="contact-form animated" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {fieldRequired === 'name' && <p style={{ color: 'yellow', marginTop: '5px' }}>Name must be required</p>}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {fieldRequired === 'email' && <p style={{ color: 'yellow', marginTop: '5px' }}>Email must be required</p>}
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {fieldRequired === 'message' && <p style={{ color: 'yellow', marginTop: '5px' }}>Message must be required</p>}
        <button type="submit">Send Message</button>
        {successMessage && <p style={{ color: 'white', marginTop: '1rem' }}>{successMessage}</p>}
        {errorMessage && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>}
      </form>
    </Container>
  );
}
