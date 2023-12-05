// VerifyOTP.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';


// const VerifyOTP = () => {
//   const [otp, setOtp] = useState('');
//   const navigate = useNavigate();

//   const handleVerifyOTP = () => {
//     // Add logic to verify OTP
//     // For simplicity, let's assume the OTP is verified successfully
//     setIsLoginScreen(false);
//     navigate.push('/songs-list');
//   };

//   const handleResendOTP = () => {
//     // Add logic to resend OTP
//     // For simplicity, let's assume the OTP is resent successfully
//     setIsOtpVerified(true);
//     console.log('Resending OTP...');
//   };

//   return (
//     <div>
//       <h2>Verify OTP</h2>
//       <label>OTP:</label>
//       <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
//       <button onClick={handleVerifyOTP}>Verify OTP</button>
//       <button onClick={handleResendOTP}>Resend OTP</button>
//     </div>
//   );
// };

function VerifyOTP() {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [isLoginScreen, setIsLoginScreen] = useState(true);
    const [isOtpVerified, setIsOtpVerified] = useState(false);
    const [isResendingOtp, setIsResendingOtp] = useState(false);
  
    const handleLogin = () => {
      // Logic to handle phone number submission and OTP request
      setIsLoginScreen(false); // Move to OTP verification screen
      // You can implement the OTP sending functionality here
    };
  
    const handleVerifyOtp = () => {
      // Logic to handle OTP verification
      // For simplicity, let's assume the OTP is verified successfully
      setIsOtpVerified(true);
    };
  
    const handleResendOtp = () => {
      // Logic to resend OTP
      setIsResendingOtp(true); // Show "Resending OTP..." message
      // You can implement the OTP resend functionality here
  
      // Simulating a delay for OTP resend (2 seconds in this case)
      setTimeout(() => {
        setIsResendingOtp(false); // Hide "Resending OTP..." message
        // You can trigger the OTP sending functionality here
      }, 2000);
    };
  
    return (
      <div className="App">
        {isLoginScreen && (
          <div className="login-container">
            <h1>Login</h1>
            <input
              type="text"
              placeholder="Enter Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <button onClick={handleLogin}>Get OTP</button>
          </div>
        )}
  
        {!isLoginScreen && !isOtpVerified && (
          <div className="otp-verification">
            <h1>Verify OTP</h1>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={handleVerifyOtp}>Verify</button>
            {isResendingOtp && <p>Resending OTP...</p>}
            <button onClick={handleResendOtp} disabled={isResendingOtp}>
              Resend OTP
            </button>
          </div>
        )}
  
        {isOtpVerified && (
          <div className="success-message">
            <h1>OTP Verified Successfully!</h1>
          </div>
        )}
      </div>
    );
  }

export default VerifyOTP;
