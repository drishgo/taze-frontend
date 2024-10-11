import React from "react";

const RegisterPage = () => {
    const loginUser = async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            name: document.getElementById("name"),
            email: document.getElementById("email").value,
            phoneNumber:document.getElementById("phoneNumber"),
            password: document.getElementById("password").value,
        };

        try {
            const response = await fetch('http://localhost:8081/api/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User logged in successfully:', result);
                // Handle successful login (e.g., redirect to dashboard)
            } else {
                console.error('Error logging in:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };
   
  return (
    <div className="bg-base-100 flex items-center justify-center h-screen">
      <div className="card w-96 bg-base-300 shadow-xl p-6">
        <h1 className="text-2xl font-futura font-bold text-center mb-6">Register</h1>
        <form id="registerForm" >
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Name:</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Email:</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-4">
            <label className="label">
              <span className="label-text">Phone Number:</span>
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              placeholder="Enter your phone number"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mb-6">
            <label className="label">
              <span className="label-text">Password:</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
