import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const User = () => {
  let currentURL = window.location.pathname;
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/api" + currentURL)
      .then(res => {
        setData(res.data);
      })
      .catch(err => {
        console.log("Error showing Candidates!");
      })
  }, []);
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    setData({ ...data, [name]: value });
  };
  const handleCheck = (e) => {
    let isChecked = e.target.checked;
    setData(prevData => ({
      ...prevData, isVerified: isChecked
    }))
  };
  const handleCheckD = (e) => {
    let isChecked = e.target.checked;
    setData(prevData => ({
      ...prevData, isDeclined: isChecked
    }))
  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setData(prevData => ({ ...prevData }));
    console.log(data);
    try {
      axios.put("http://localhost:8000/api" + currentURL, data)
        .then(res => {
          navigate("/candidates");
        })
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div className="container my-5 bg-indigo-50 p-10 rounded-lg max-w-7xl mx-auto px-4 sm:px-6">
        <div className="mt-10 sm:mt-0">
          <div className="md:grid md:grid-cols-3 md:gap-6">
            <div className="md:col-span-1">
              <div className="px-4 sm:px-0">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                <p className="mt-1 text-sm text-gray-600">Use a permanent address where you can receive mail.</p>
              </div>
            </div>
            <div className="mt-5 md:mt-0 md:col-span-2">
              <form onSubmit={handleSubmit}>
                <div className="shadow overflow-hidden sm:rounded-md">
                  <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          First Name*
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          // onChange={handleChange}
                          value={data.firstName}
                          className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Last Name*
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          onChange={handleChange}
                          value={data.lastName}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                          Email address*
                        </label>
                        <input
                          type="text"
                          name="email"
                          onChange={handleChange}
                          value={data.email}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="personal-contact" className="block text-sm font-medium text-gray-700">
                          Personal Contact*
                        </label>
                        <input
                          type="tel"
                          name="contact"
                          onChange={handleChange}
                          value={data.contact}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700">
                          Category
                        </label>
                        <select
                          name="category"
                          onChange={handleChange}
                          value={data.category}
                          className="mt-1 block w-full py-1 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        >
                          <option>General</option>
                          <option>SC</option>
                          <option>ST</option>
                          <option>OBC</option>
                        </select>
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                          Father's Name*
                        </label>
                        <input
                          type="text"
                          name="fatherName"
                          onChange={handleChange}
                          value={data.fatherName}
                          className="mt-1 p-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-6">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Mother's Name*
                        </label>
                        <input
                          type="text"
                          name="motherName"
                          onChange={handleChange}
                          value={data.motherName}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>


                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Father's Occupation*
                        </label>
                        <input
                          type="text"
                          name="fatherOcc"
                          onChange={handleChange}
                          value={data.fatherOcc}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Mother's Occupation*
                        </label>
                        <input
                          type="text"
                          name="motherOcc"
                          onChange={handleChange}
                          value={data.motherOcc}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Total Annual Income*
                        </label>
                        <input
                          type="text"
                          name="totalIncome"
                          onChange={handleChange}
                          value={data.totalIncome}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>

                      <div className="col-span-6 sm:col-span-3">
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                          Guardian's / Parent's Contact*
                        </label>
                        <input
                          type="text"
                          name="parentContact"
                          onChange={handleChange}
                          value={data.parentContact}
                          className="mt-1 p-1 border focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 bg-gray-50 sm:px-6">
                    <div className="flex items-start mb-5">
                      <div className="flex items-center h-5">
                        <input
                          name="isVerified"
                          type="checkbox"
                          onChange={handleCheck}
                          value={data.isVerified}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="isVerified" className="font-medium text-gray-700">
                          Verify
                        </label>
                        <p className="text-gray-500">I hereby declare that all the inforamtion provided by candidate is legit.</p>
                      </div>
                    </div>
                    <div className="flex items-start mb-5">
                      <div className="flex items-center h-5">
                        <input
                          name="isDeclined"
                          type="checkbox"
                          onChange={handleCheckD}
                          value={data.isDeclined}
                          className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label htmlFor="isVerified" className="font-medium text-gray-700">
                          Decline
                        </label>
                        <p className="text-gray-500">I hereby declare that all the inforamtion provided by candidate is not legit.</p>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Update
                    </button>
                    <NavLink
                      to="/candidates"
                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 ml-3"
                    >
                      Back
                    </NavLink>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default User;