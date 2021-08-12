import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    message: '',
  });

  const getUserData = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, address, message } = user;
    if (!name || !email || !phone || !address || !message) {
      alert('Please fill all the fields');
    } else {
      const res = await fetch(
        'https://reactfirebaselearning-ac943-default-rtdb.firebaseio.com/reactfirebase.json',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            email,
            phone,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUser({
          name: '',
          email: '',
          phone: '',
          address: '',
          message: '',
        });
        alert('Form Submitted');
      }
    }
  };

  return (
    <>
      <div className="container">
        <div className="container-data">
          <form className="form-input" method="POST">
            <span className="form-title"> Contact Us</span>

            <div className="inputField">
              <span className="">Your Name</span>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={getUserData}
                placeholder="Enter Your Name"
                autoComplete="off"
                required
              />
            </div>

            <div className="">
              <span className="">Your Email</span>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={getUserData}
                placeholder="Enter Your Email"
                autoComplete="off"
                required
              />
            </div>
            <div className="">
              <span className="">Phone Number</span>
              <input
                type="number"
                name="phone"
                value={user.phone}
                onChange={getUserData}
                placeholder="Enter Your Phone Number"
                autoComplete="off"
                required
              />
            </div>
            <div className="">
              <span className="">Address</span>
              <input
                type="text"
                name="address"
                value={user.address}
                onChange={getUserData}
                placeholder="Enter Your Addres"
                autoComplete="off"
                required
              />
            </div>
            <div className="">
              <span className="">Message</span>
              <textarea
                cols="30"
                rows="10"
                name="message"
                value={user.message}
                onChange={getUserData}
              ></textarea>
            </div>

            <div className="">
              <button onClick={postData}>
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
