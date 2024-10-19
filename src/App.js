import React, { useState } from 'react';

function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  });

  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let validationErrors = {};
    let valid = true;

    // First Name validation
    if (!formData.firstName || formData.firstName.length < 5) {
      validationErrors.firstName = 'First Name must be at least 5 characters long';
      valid = false;
    }

    // Last Name validation
    if (!formData.lastName || formData.lastName.length < 5) {
      validationErrors.lastName = 'Last Name must be at least 5 characters long';
      valid = false;
    }

    // Password validation
    if (!formData.password) {
      validationErrors.password = 'Password cannot be empty';
      valid = false;
    }

    // Confirm Password validation
    if (formData.password !== formData.confirmPassword) {
      validationErrors.confirmPassword = 'Passwords do not match';
      valid = false;
    }

    setErrors(validationErrors);
    setIsValid(valid);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-lg">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          {/* Form Title */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Register</h1>
          {isValid && (
            <div className="p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50 dark:bg-gray-800 dark:text-green-400" role="alert">
              <span className="font-medium">Success! </span> All inputs are valid.
            </div>
          )}

          {/* First Name Field */}
          <div className="mb-5">
            <label
              htmlFor="firstName"
              className={`block mb-2 text-sm font-medium ${errors.firstName ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'}`}
            >
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="First Name"
              className={`${errors.firstName
                ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                } block w-full text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            {errors.firstName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Error: </span> {errors.firstName}
              </p>
            )}
          </div>

          {/* Last Name Field */}
          <div className="mb-5">
            <label
              htmlFor="lastName"
              className={`block mb-2 text-sm font-medium ${errors.lastName ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'}`}
            >
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Last Name"
              className={`${errors.lastName
                ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                } block w-full text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            {errors.lastName && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Error: </span> {errors.lastName}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-5">
            <label
              htmlFor="password"
              className={`block mb-2 text-sm font-medium ${errors.password ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'}`}
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={`${errors.password
                ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                } block w-full text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Error: </span> {errors.password}
              </p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-5">
            <label
              htmlFor="confirmPassword"
              className={`block mb-2 text-sm font-medium ${errors.confirmPassword ? 'text-red-700 dark:text-red-500' : 'text-gray-900 dark:text-white'}`}
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm Password"
              className={`${errors.confirmPassword
                ? 'bg-red-50 border border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500'
                : 'bg-gray-50 border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500'
                } block w-full text-sm rounded-lg p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required
            />
            {errors.confirmPassword && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">Error: </span> {errors.confirmPassword}
              </p>
            )}
          </div>

          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={validateForm}
          >
            Validate
          </button>
        </form>
      </div>
    </div>
  );

}

export default Form;