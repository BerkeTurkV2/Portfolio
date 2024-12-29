import React from 'react';
import Navbar from '../../components/Navbar';

function Contact() {
    return (
        <div className='min-vh-100 bg-dark text-white'>
            <Navbar />
            <div className='container py-5'>
                <div className='row'>
                    {/* Sağ Taraf - İletişim Bilgileri (Mobilde üstte görünecek) */}
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
                    <div className='col-lg-6 my-form-bg-color p-4 rounded-3 order-lg-1'>
                        <h2 className='my-text-color mb-4'>Send me a message</h2>
                        <p className='text-white mb-5'>
                            You can contact me here for projects or job offers, or reach me through the phone number or email provided.
                        </p>
                        <form>
                            <div className='row mb-4'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <input
                                        type='text'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Firstname'
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type='text'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Lastname'
                                    />
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-md-6 mb-4 mb-md-0'>
                                    <input
                                        type='email'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Email address'
                                    />
                                </div>
                                <div className='col-md-6'>
                                    <input
                                        type='tel'
                                        className='form-control bg-secondary border-0 text-white py-3'
                                        placeholder='Phone number'
                                    />
                                </div>
                            </div>
                            <div className='mb-4'>
                                <input
                                    type='text'
                                    className='form-control bg-secondary border-0 text-white py-3'
                                    placeholder='Company name'
                                />
                            </div>
                            <div className='mb-4'>
                                <textarea
                                    className='form-control bg-secondary border-0 text-white py-3'
                                    rows='5'
                                    placeholder='Type your message here.'
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