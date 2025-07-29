// import { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../context/AuthContext';

// function Signup() {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { signup } = useContext(AuthContext);
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await signup(email, username, password);
//       navigate('/');
//     } catch (err) {
//       setError('Signup failed');
//     }
//   };

//   return (
//     <div className="container mt-4">
//       <div className="row justify-content-center">
//         <div className="col-md-6">
//           <div className="card bg-dark text-white">
//             <div className="card-body">
//               <h2 className="card-title text-center mb-4">Signup</h2>
//               {error && <div className="alert alert-danger">{error}</div>}
//               <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                   <input
//                     type="text"
//                     className="form-control"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                     placeholder="Username"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="email"
//                     className="form-control"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="Email"
//                   />
//                 </div>
//                 <div className="mb-3">
//                   <input
//                     type="password"
//                     className="form-control"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     placeholder="Password"
//                   />
//                 </div>
//                 <button type="submit" className="btn btn-primary w-100">Signup</button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;



// frontend/src/components/Signup.jsx
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signup(email, username, password);
      setError("");
      navigate("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card bg-dark text-white">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Signup</h2>
              {error && <div className="alert alert-danger">{error}</div>}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Signup
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;