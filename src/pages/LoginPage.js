import React from 'react';

const LoginPage = () => {
    const loginUser = async (event) => {
        event.preventDefault(); // Prevent default form submission

        const formData = {
            email: document.getElementById("email").value,
            password: document.getElementById("password").value,
        };

        try {
            const response = await fetch('http://localhost:8081/api/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                const result = await response.json();
                console.log('User logged in successfully:', result);
            } else {
                console.error('Error logging in:', response.statusText);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-base-300">
            <div className="bg-base-100 p-6 rounded-box shadow-md w-96">
                <h1 className="text-2xl font-bold text-center text-primary-200">Login</h1> {/* Use Futura font */}
                <form onSubmit={loginUser} className="mt-4">
                    <div className="form-group mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200">Email:</label>
                        <input type="email" id="email" name="email" required className="input input-bordered w-full" />
                    </div>
                    <div className="form-group mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-200">Password:</label>
                        <input type="password" id="password" name="password" required className="input input-bordered w-full" />
                    </div>
                    <button type="submit" className="btn btn-primary w-full">Login</button>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
