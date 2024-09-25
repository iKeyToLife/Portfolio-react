import emailjs from 'emailjs-com'; // Importing emailjs for sending emails
import { useState } from 'react'; // Importing useState hook for managing component state
import { Container } from 'react-bootstrap'; // Importing Container component from react-bootstrap
import './css/Contact.css'; // Importing custom CSS for the contact form

export default function Contact() {
  const [formData, setFormData] = useState({ // State to hold form data
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // State to track form submission process
  const [successMessage, setSuccessMessage] = useState(''); // State to store success message
  const [errorMessage, setErrorMessage] = useState(''); // State to store error message
  const [fieldRequired, setFieldRequired] = useState(''); // State to handle required field errors

  const validateEmail = (email) => {
    // Email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => { // Handling form input changes
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value }); // Updating form data
    if (value.length > 0) setFieldRequired(''); // Clearing field error if input is not empty
  };

  const handleBlur = (e) => { // Handling input blur events for validation
    const { name, value } = e.target;
    if (value.length === 0) {
      setFieldRequired(name); // Marking field as required if empty
    } else if (name === 'email') {
      if (!validateEmail(value)) {
        setFieldRequired(name); // Marking email as invalid if not valid
      }
    }
  };

  const handleSubmit = (e) => { // Handling form submission
    e.preventDefault();

    if (isSubmitting) return; // Prevent multiple submissions
    setIsSubmitting(true);
    setErrorMessage('');
    setSuccessMessage('');

    // Sending email using emailjs service
    emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      formData,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    ).then((response) => {
      console.log('SUCCESS!', response.status, response.text);

      // Displaying success message
      setSuccessMessage('Your message has been sent!');

      // Resetting form data after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }).catch((err) => {
      console.error('FAILED...', err);

      // Displaying error message
      setErrorMessage('Failed to send message. Please try again later.');
    }).finally(() => {

      // Resetting the submitting state
      setIsSubmitting(false);
    });
  };

  return (
    <Container className="contact-section"> {/* Container for the contact form */}
      <div className="contact-info animated"> {/* Contact info section */}
        <p><span>Contact me</span></p>
        {isSubmitting && <div className="processing-message">Processing...</div>} {/* Processing message */}
      </div>

      <form className="contact-form animated" onSubmit={handleSubmit}> {/* Contact form */}
        <input
          type="text"
          name="name"
          placeholder="Your name"
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {fieldRequired === 'name' && <p style={{ color: 'yellow', marginTop: '5px' }}>Name must be required</p>} {/* Name validation */}
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {fieldRequired === 'email' && <p style={{ color: 'yellow', marginTop: '5px' }}>Email must be required</p>} {/* Email validation */}
        <textarea
          name="message"
          placeholder="Your message"
          value={formData.message}
          onChange={handleChange}
          onBlur={handleBlur}
          required
        />
        {fieldRequired === 'message' && <p style={{ color: 'yellow', marginTop: '5px' }}>Message must be required</p>} {/* Message validation */}
        <button type="submit">Send Message</button> {/* Submit button */}
        {successMessage && <p style={{ color: 'white', marginTop: '1rem' }}>{successMessage}</p>} {/* Success message */}
        {errorMessage && <p style={{ color: 'red', marginTop: '1rem' }}>{errorMessage}</p>} {/* Error message */}
      </form>
    </Container>
  );
}
