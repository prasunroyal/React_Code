
// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Navigate } from 'react-router-dom';
import Login from './Login';
import VerifyOTP from './VerifyOTP';
import SongsList from './SongsList';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={() => <Navigate to="/login" />} />
        <Route path="/login" component={Login} />
        <Route path="/verify-otp" component={VerifyOTP} />
        <Route path="/songs-list" component={SongsList} />
      </div>
    </Router>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// function App() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [otp, setOtp] = useState('');
//   const [isOtpVerified, setIsOtpVerified] = useState(false);
//   const [isResendingOtp, setIsResendingOtp] = useState(false);

//   const handleLogin = () => {
//     // Here, you can implement logic to send the OTP to the provided phone number.
//     // For simplicity, let's assume the OTP is sent successfully.
//     setIsOtpVerified(false);
//   };

//   const handleVerifyOtp = () => {
//     // Here, you can implement logic to verify the OTP.
//     // For simplicity, let's assume the OTP is verified successfully.
//     setIsOtpVerified(true);
//   };

//   const handleResendOtp = () => {
//     // Here, you can implement logic to resend the OTP.
//     // For simplicity, let's assume the OTP is resent successfully.
//     setIsResendingOtp(true);

//     // Simulating a delay for OTP resend (2 seconds in this case)
//     setTimeout(() => {
//       setIsResendingOtp(false);
//     }, 2000);
//   };

//   return (
//     <div className="App">
//       {isOtpVerified ? (
//         <div>
//           <h2>OTP Verified Successfully!</h2>
//         </div>
//       ) : (
//         <div>
//           <h2>Login Page</h2>
//           <label>Phone Number:</label>
//           <input
//             type="text"
//             value={phoneNumber}
//             onChange={(e) => setPhoneNumber(e.target.value)}
//           />
//           <button onClick={handleLogin}>Send OTP</button>

//           <h2>Verify OTP</h2>
//           <label>OTP:</label>
//           <input
//             type="text"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//           />
//           <button onClick={handleVerifyOtp}>Verify OTP</button>

//           {isResendingOtp && <p>Resending OTP...</p>}
//           <button onClick={handleResendOtp} disabled={isResendingOtp}>
//             Resend OTP
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;