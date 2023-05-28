import { useState } from 'react';
import { login } from '../utils/api';
import Swal from 'sweetalert2';

const LoginModal = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      // Call the login API function
      await login({ email, password });

      // Reset the form after successful signup
      setEmail('');
      setPassword('');

      // Show success message using SweetAlert
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'You have successfully signed up!',
      });

      // Handle any other success logic, such as redirecting to another page
    } catch (error) {
      // Handle error cases, such as displaying an error message to the user
    }
  };

  return (
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Signup</h2>
        </div>
        <div className="modal-body">
          
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
