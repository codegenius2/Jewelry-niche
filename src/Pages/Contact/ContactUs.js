import React from "react";
import { IoIosCall, IoMdMail, IoMdPin } from "react-icons/io";
import "./Contact.css";


function Contact() {
    
    return (
        <div className='mt-md-5 my-3'>
            <p className='contact-sub mt-3 text-center'>Get in touch</p>
            <p className='regular-title text-center'>Contact</p>
            <section id='contact' className='contact'>
                <div className='container'>
                    <div className=''>
                        <p>
                            Magnam dolores commodi suscipit. Necessitatibus eius consequatur
                            ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam
                            quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea.
                            Quia fugiat sit in iste officiis commodi quidem hic quas.
                        </p>
                    </div>
                </div>

                <div>
                    <iframe
                        title='Meddical'
                        className='medi-map'
                        src='https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d12099.578392794248!2d-73.99760377578289!3d40.698318937624514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sA108%20Adam%20Street%2C%20New%20York%2C%20NY%20535022!5e0!3m2!1sbn!2sbd!4v1634729385323!5m2!1sbn!2sbd'
                        allowfullscreen=''
                        loading='lazy'></iframe>
                </div>

                <div className='container'>
                    <div className='row mt-5'>
                        <div className='col-lg-6'>
                            <div className='row'>
                                <div className='col-md-12'>
                                    <div className='info-box'>
                                        <IoMdPin className='fas' />
                                        <h3 className='info-box-title'>Our Address</h3>
                                        <p>A108 Adam Street, New York, NY 535022</p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='info-box mt-4'>
                                        <IoMdMail />
                                        <h3>Email Us</h3>
                                        <p>
                                            info@example.com
                                            <br />
                                            contact@example.com
                                        </p>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='info-box mt-4'>
                                        <IoIosCall />
                                        <h3>Call Us</h3>
                                        <p>
                                            +1 5589 55488 55
                                            <br />
                                            +1 6678 254445 41
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 contact-form-container'>
                            <form className='email-form'>
                                <div className='row'>
                                    <div className='col form-group'>
                                        <input
                                            type='text'
                                            name='name'
                                            className='form-control'
                                            id='name'
                                            placeholder='Your Name'
                                            required
                                        />
                                    </div>
                                    <div className='col form-group'>
                                        <input
                                            type='email'
                                            className='form-control'
                                            name='email'
                                            id='email'
                                            placeholder='Your Email'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='form-group mt-3'>
                                    <input
                                        type='text'
                                        className='form-control'
                                        name='subject'
                                        id='subject'
                                        placeholder='Subject'
                                        required
                                    />
                                </div>
                                <div className='form-group mt-3'>
                                    <textarea
                                        className='form-control'
                                        name='message'
                                        rows='5'
                                        placeholder='Message'
                                        required></textarea>
                                </div>
                                <div className='text-center pt-4'>
                                    <button className='btn btn-regular' type='submit'>
                                        Send Message
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;