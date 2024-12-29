import React, { useState } from 'react';
import Navbar from '../../components/Navbar';

function Contact() {
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        
        try {
            const formData = new FormData(form);
            const data = Object.fromEntries(formData);

            // E-posta formatı kontrolü
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                throw new Error('Please enter a valid email address');
            }

            // Telefon numarası kontrolü (opsiyonel)
            const phoneRegex = /^\+?[\d\s-]{10,}$/;
            if (data.phone && !phoneRegex.test(data.phone)) {
                throw new Error('Please enter a valid phone number');
            }

            const response = await fetch(process.env.REACT_APP_FORM_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            const responseData = await response.json().catch(() => null);

            if (response.ok) {
                form.reset();
                setStatus('Message sent successfully!');
                setTimeout(() => {
                    setStatus('');
                }, 3000);
            } else {
                const errorMessage = responseData?.error || 'An error occurred while sending the message.';
                console.error('Form error:', responseData);
                setStatus(`Error: ${errorMessage}. Please try again.`);
                setTimeout(() => {
                    setStatus('');
                }, 3000);
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setStatus(`Error: ${error.message}. Please try again.`);
            setTimeout(() => {
                setStatus('');
            }, 3000);
        }
    };

    return (
        <div className='min-vh-100 bg-dark text-white'>
            <Navbar />
            {/* Mesaj Gösterimi */}
            {status && (
                <div 
                    className={`alert ${status.includes('successfully') ? 'alert-success' : 'alert-danger'} m-0`}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        zIndex: 1000,
                        textAlign: 'center',
                        animation: 'slideDown 0.5s ease-out'
                    }}
                >
                    {status}
                </div>
            )}
            <style>
                {`
                    @keyframes slideDown {
                        from {
                            transform: translateY(-100%);
                        }
                        to {
                            transform: translateY(0);
                        }
                    }
                `}
            </style>
            <div className='container py-5'>
                <div className='row'>
                    {/* Sağ Taraf - İletişim Bilgileri */}
                    <div className='col-lg-5 d-flex justify-content-center align-self-center order-lg-2 mb-5 mb-lg-0'>
                        <div className='p-4'>
                            {/* Telefon */}
                            <div className='d-flex align-items-center mb-4'>
                                <div className='my-bg-color p-2 rounded-3 me-3'>
                                    <i className='bi bi-telephone-fill fs-4'></i>
                                </div>
                                <div>
                                    <div className='text-secondary mb-1'>Phone</div>
                                    <div className='fs-5'>(+90) 507 409 84 34</div>
                                </div>
                            </div>

                            {/* Email */}
                            <div className='d-flex align-items-center mb-4'>
                                <div className='my-bg-color p-2 rounded-3 me-3'>
                                    <i className='bi bi-envelope-fill fs-4'></i>
                                </div>
                                <div>
                                    <div className='text-secondary mb-1'>Email</div>
                                    <div className='fs-5'>berketurk035@gmail.com</div>
                                </div>
                            </div>

                            {/* Adres */}
                            <div className='d-flex align-items-center'>
                                <div className='my-bg-color p-2 rounded-3 me-3'>
                                    <i className='bi bi-geo-alt-fill fs-4'></i>
                                </div>
                                <div>
                                    <div className='text-secondary mb-1'>Address</div>
                                    <div className='fs-5'>Bornova - İzmir, Türkiye</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sol Taraf - İletişim Formu */}
                    <div className='col-lg-6 my-card-bg-color px-5 py-4 rounded-3 order-lg-1 mt-1'>
                        <h2 className='my-text-color mb-4'>Send me a message</h2>
                        <p className='text-white mb-5'>
                            You can contact me here for projects or job offers, or reach me through the phone number or email provided.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className='row mb-4'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <input
                                        type='text'
                                        name='firstname'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Firstname'
                                        required
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type='text'
                                        name='lastname'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Lastname'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <input
                                        type='email'
                                        name='email'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Email address'
                                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                        required
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type='tel'
                                        name='phone'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Phone number'
                                        pattern="[0-9+\s-]{10,}"
                                        required
                                    />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <input
                                    type='text'
                                    name='company'
                                    className='form-control bg-secondary border-0 text-white py-3'
                                    placeholder='Company name'
                                    required
                                />
                            </div>
                            <div className='mb-4'>
                                <textarea
                                    name='message'
                                    className='form-control bg-secondary border-0 text-white py-3'
                                    rows='5'
                                    placeholder='Type your message here.'
                                    required
                                ></textarea>
                            </div>
                            <button type='submit' className='btn btn-success px-3 py-2'>
                                Send message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;