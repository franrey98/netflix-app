import React, { createContext, useEffect, useState } from "react";
import { KEY, URL } from "./MoviesContext";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState({});
  console.log(token);
  useEffect(() => {
    requestToken();
  }, []);

  // useEffect(() => {
  //   const acceptToken = async () => {
  //     try {
  //       await fetch(`${URL}/authenticate/${token}`)
  //         .then((data) => {
  //           return data.json();
  //         })
  //         .then((data) => console.log(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   acceptToken();
  // }, [token]);

  const requestToken = async () => {
    try {
      await fetch(`${URL}/3/authentication/token/new?api_key=${KEY}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => setToken(data.request_token));
    } catch (error) {
      console.log(error);
    }
  };

  const acceptToken = async () => {
    try {
      await fetch(`${URL}/authenticate/${token}`)
        .then((data) => {
          return data.json();
        })
        .then((data) => console.log(data));
    } catch (error) {
      console.log(error);
    }
  };

  const createSession = async (values) => {
    try {
      const configuration = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(values),
      };
      await fetch(
        `${URL}/3/authentication/token/validate_with_login?api_key=${KEY}`,
        configuration
      )
        .then((data) => {
          return data.json();
        })
        .then((data) => {
          console.log(data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider value={{ token, createSession }}>
      {children}
    </AuthContext.Provider>
  );
};
