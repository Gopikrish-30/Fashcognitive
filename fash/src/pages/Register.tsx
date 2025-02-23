import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Register: React.FC = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        f_name: '',
        l_name: '',
        phone_no: '',
        password: '',
        company_name: '',
        industry_type: 'Fashion',
        job_title: '',
        company_size: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted', formData);
        navigate('/'); // Redirect after registration (modify as needed)
    };

    return (
        <div className="container">
            <section className="form-section">
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="email" required placeholder="Enter your email" onChange={handleChange} />
                        </div>

                        <div className="form-group name-group">
                            <div>
                                <label htmlFor="firstName">First name</label>
                                <input type="text" id="firstName" name="f_name" required onChange={handleChange} />
                            </div>
                            <div>
                                <label htmlFor="lastName">Last name</label>
                                <input type="text" id="lastName" name="l_name" required onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone number (optional)</label>
                            <input type="tel" id="phone" name="phone_no" placeholder="Phone number" onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" name="password" required placeholder="Minimum 8 characters" onChange={handleChange} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="company_name">Company Name</label>
                            <input type="text" id="company_name" name="company_name" required onChange={handleChange} />
                        </div>

                        <div className="form-group">
                            <label htmlFor="industry_type">Industry Type</label>
                            <select id="industry_type" name="industry_type" onChange={handleChange}>
                                <option value="Fashion">Fashion</option>
                                <option value="Retail">Retail</option>
                                <option value="Manufacturing">Manufacturing</option>
                            </select>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="job_title">Job Title</label>
                            <input type="text" id="job_title" name="job_title" required onChange={handleChange} />
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="company_size">Company Size</label>
                            <input type="number" id="company_size" name="company_size" required onChange={handleChange} />
                        </div>
                        
                        <button type="submit" className="submit-button">CREATE ACCOUNT</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Register;
