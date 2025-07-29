// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     axios.get('/api/check-session')
//       .then(res => {
//         if (res.data.userId) {
//           setUser({ id: res.data.userId, username: res.data.username });
//         }
//       })
//       .catch(() => setUser(null));
//   }, []);

//   const login = async (email, password) => {
//     await axios.post('/api/login', { email, password });
//     const res = await axios.get('/api/check-session');
//     setUser({ id: res.data.userId, username: res.data.username });
//   };

//   const signup = async (email, username, password) => {
//     await axios.post('/api/signup', { email, username, password });
//     const res = await axios.get('/api/check-session', );
//     setUser({ id: res.data.userId, username: res.data.username });
//   };

//   const logout = async () => {
//     await axios.post('/api/logout', {}, { withCredentials: true });
//     setUser(null);
//   };

//   return (
//     <AuthContext.Provider value={{ user, login, signup, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };



// frontend/src/context/AuthContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await axios.get("/api/check-session", {
          withCredentials: true,
        });
        setUser({
          id: res.data.userId,
          username: res.data.username,
          email: res.data.email,
        });
        setToken(res.data.token);
      } catch (err) {
        setUser(null);
        setToken(null);
      } finally {
        setLoading(false);
      }
    };
    checkSession();
  }, []);

  const login = async (email, password) => {
    try {
      const res = await axios.post(
        "/api/login",
        { email, password },
        { withCredentials: true }
      );
      setUser({
        id: res.data.data._id,
        username: res.data.data.username,
        email: res.data.data.email,
      });
      setToken(res.data.data.token);
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Login failed");
    }
  };

  const signup = async (email, username, password) => {
    try {
      const res = await axios.post(
        "/api/signup",
        { email, username, password },
        { withCredentials: true }
      );
      setUser({
        id: res.data.data._id,
        username: res.data.data.username,
        email: res.data.data.email,
      });
      setToken(res.data.data.token);
      return res.data;
    } catch (err) {
      throw new Error(err.response?.data?.message || "Signup failed");
    }
  };

  const logout = async () => {
    try {
      await axios.post("/api/logout", {}, { withCredentials: true });
      setUser(null);
      setToken(null);
    } catch (err) {
      throw new Error(err.response?.data?.message || "Falha no logout");
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, login, signup, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};