'use client'

import { useEffect } from "react";
import LoginForm from "../components/features/login/loginForm";
import Footer from "../components/ui/footer";
import Header from "../components/ui/header";
import axios from "axios";
// import { getUserData } from "../lib/UsersData";

export default function Page() {
  const getUserData = async () => {
        const url = "http://localhost:3000/api/v1/users";
          try {
            const response = await axios.get(url, {
              // headers: {
              //   // Authorization: `Bearer ${token}`
              // }
            });
            console.log(response)
            return response.data;
          } catch (error: any) {
              // console.log("AxiosError:", error.message);
            }
      }

      getUserData();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await getUserData;
  //       console.log("Data", data);
  //     } catch (error) {
  //       console.log("error;", error);
  //     }
  //   };
  //   fetchData();
  // }, []);
  return (
    <>
      <Header />
      <LoginForm />
      <Footer />
    </>
  );
}


