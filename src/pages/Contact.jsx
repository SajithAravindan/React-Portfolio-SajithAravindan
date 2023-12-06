// This is a static page mocking an "About Us" section for our fake user data
import { useState } from 'react';
import { validateEmail } from '../utils/helpers';

export default function Contact() {
  const cardStyle = {
    maxwidth: '500px',
    backgroundColor: '#FEFAE0',
  };

  const cardHeaderStyle = {
    backgroundColor: '#FAEDCD',
    color: '#000000',
    textAlign: 'left',
    paddingLeft: '40px',
  };

  const errorStyle = {    
    color: '#FF0000',
    textAlign: 'center',   
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formError, setFormError] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    if (!value.trim()) {
      setValidationErrors({
        ...validationErrors,
        [name]: `${name.charAt(0).toUpperCase() + name.slice(1)} is required`,
      });
    } else if (name === 'email' && !validateEmail(value)) {
      setValidationErrors({
        ...validationErrors,
        [name]: 'Invalid email address',
      });
    } else {
      setValidationErrors({
        ...validationErrors,
        [name]: '',
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are empty
    const allFieldsEmpty = Object.values(formData).every((value) => !value.trim());

    if (allFieldsEmpty) {
      setFormError('All fields are empty. Please enter some information.');
      return;
    }

    let hasErrors = false;

    // Check for validation errors
    Object.entries(validationErrors).forEach(([key, value]) => {
      if (value) {
        hasErrors = true;
      }
    });   

    if (hasErrors) {
      setFormError('Form has errors. Cannot submit.');
      return;
    }


    // Your form submission logic here

    // Reset form and errors after successful submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
    setValidationErrors({
      name: '',
      email: '',
      message: '',
    });
    setFormError('Thanks for contacting Me! will get back to you soon.');
  };

  return (
    <div className="container-fluid px-1 py-5 mx-auto">
      <form className="row g-3 needs-validation" onSubmit={handleSubmit}>
        <div className="card rounded-0" style={cardStyle}>
          <div className="card-header p-0">
            <div style={cardHeaderStyle}>
              <h3><i className="fa fa-envelope"></i> Contact </h3>
            </div>
          </div>
          <div className="card-body p-3">
            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend p-3">
                  <div className="input-group-text"><i className="fa fa-user text-info"></i></div>
                </div>
                <input type="text" className="form-control" id="name" name="name" placeholder="Your Name" onChange={handleInputChange}
                  onBlur={handleBlur} value={formData.name} />
               
              </div>
              {validationErrors.name && <p style={errorStyle}>{validationErrors.name}</p>}
            </div>
            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend p-3">
                  <div className="input-group-text"><i className="fa fa-envelope text-info"></i></div>
                </div>
                <input type="email" className="form-control" id="email" name="email" placeholder="your mail Id" onChange={handleInputChange}
                  onBlur={handleBlur} value={formData.email} />                
              </div>
              {validationErrors.email && <p style={errorStyle}>{validationErrors.email}</p>}
            </div>

            <div className="form-group">
              <div className="input-group mb-2">
                <div className="input-group-prepend p-3">
                  <div className="input-group-text"><i className="fa fa-comment text-info"></i></div>
                </div>
                <textarea className="form-control form-control-lg" id="message" name="message" placeholder="Your Message" rows={8} onChange={handleInputChange}
                  onBlur={handleBlur} value={formData.message}></textarea>
                {validationErrors.message && <p style={errorStyle}><br/>{validationErrors.message}</p>}
              </div>
            </div>
            <div className="text-center">
              {formError && <p style={{ color: 'red' }}>{formError}</p>}
              <input type="submit" value="Submit" className="btn btn-info btn-block custom-white-bg rounded-2 py-2 p-5 m-3" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
