import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

export default function Contact_Us() {
  const initialValues = { name: "", email: "", message: "" };
  const [formValues, setformValues] = useState(initialValues);
  const [formError, setformError] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  const errors = validate(formValues);
  setformError(errors);
  if (Object.keys(errors).length === 0) {
    setSuccessMessage("Thank you for your message! We'll get back to you soon.");
    setformValues(initialValues);
    setTimeout(() => {
      setSuccessMessage("");
    }, 5000);
  }
};

  useEffect(() => {
    
    if (Object.keys(formError).length === 0 && isSubmit) {
    }
  }, [formError]);

  const validate = (value) => {
    const errors = {};
    const regex = /^[\w.-]+@[a-zA-Z_]+\.[a-zA-Z]{2,}$/;
    if (!value.name) {
      errors.name = "Name is required!";
    }
    if (!value.email) {
      errors.email = "email is required!";
    }
    else if(!regex.test(value.email)){
      errors.email = "Enter a valid email address"
    }
    if (!value.message) {
      errors.message = "You need to enter message";
    }
    return errors;
  };

  return (
    <div>
      {successMessage && (
  <div className="text-green-600 font-medium transition-opacity duration-500 flex w-full justify-center mt-10 mb-10">
    {successMessage}
  </div>
)}
     <div className="flex w-full justify-center mt-10 mb-10">
        <div className="flex flex-col bg-[#8989fb] w-full max-w-4xl p-8 rounded-xl shadow-lg text-white md:flex-row md:space-x-6 md:space-y-0">
          <div className="flex flex-col justify-between space-y-2 md:space-y-0 md:justify-around">
            <div>
              <h1 className="font-bold text-xl ">Contact Us</h1>
              <p className="text-sm pt-2 text-white">
                We’d love to hear from you! Whether you have questions,
                feedback, or just want to say hi, feel free to reach out.
              </p>
            </div>
            <div className="space-y-2 md:space-y-0">
              <div className="flex flex-row items-center gap-3">
                <IoIosCall />
                <span>(+880) 1718 36348</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <FaMapMarkerAlt />
                <span>United International University, Dhaka, Bangladesh</span>
              </div>
              <div className="flex flex-row items-center gap-3">
                <MdEmail />
                <span>support@crowdfundconnect.com</span>
              </div>
            </div>
            <div className="flex  space-x-3 text-lg pt-3 space-y-3">
              <a href="#" className="hover:text-[#3b5998]">
                <FaFacebook />
              </a>
              <a href="#" className="hover:text-black">
                <FaXTwitter />
              </a>
              <a href="#" className="hover:text-[#0077B5]">
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <div className="bg-white rounded-xl shadow-lg p-8 z-30 text-gray-600 font-semibold ">
              <form
                onSubmit={handleSubmit}
                action=""
                className="flex flex-col space-y-4"
              >
                <div>
                  <label htmlFor="" className="text-sm">
                    Your name
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formValues.name}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#8989fb]"
                    onChange={handleChange}
                  />
                  {formError.name && (
                    <p className="text-red-500 text-xs">{formError.name}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="text"
                    placeholder="Email Address"
                    value={formValues.email}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#8989fb]"
                    onChange={handleChange}
                  />
                  {formError.email && (
                    <p className="text-red-500 text-xs">{formError.email}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Message
                  </label>
                  <textarea
                    name="message"
                    type="text"
                    placeholder="Message"
                    value={formValues.message}
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 outline-none focus:ring-2 focus:ring-[#8989fb]"
                    onChange={handleChange}
                  />
                  {formError.message && (
                    <p className="text-red-500 text-xs">{formError.message}</p>
                  )}
                </div>
                <button className="inline-block self-end bg-[#8989fb] text-white font-bold rounded-lg px-6 py-2 uppercase text-sm z-100 cursor-pointer">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
