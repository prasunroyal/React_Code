// Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';
import { sendOTP } from './api';

const Login = () => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = async () => {
    try {
      // Send OTP to the server
      await sendOTP(phoneNumber);

      // Navigate to the OTP verification page
      useNavigate.push('/verify-otp');
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error (e.g., show an error message to the user)
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <label>Phone Number:</label>
      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <button onClick={handleLogin}>Send OTP</button>
    </div>
  );
};

export default Login;



// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './styles.css';

// const Login = () => {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Perform phone number validation or API call for authentication
//     // For simplicity, let's assume the phone number is valid
//     navigate('/verify');
//   };

//   return (
//     <div className="container">
//       <h1>Login Page</h1>
//       <label>
//         Phone Number:
//         <input
//           type="text"
//           value={phoneNumber}
//           onChange={(e) => setPhoneNumber(e.target.value)}
//         />
//       </label>
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;
