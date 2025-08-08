import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "./Form";
import Swal from "sweetalert2";

export const SignIn = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate(null)

  const [loader, setLoader] = useState(false);

  const inputs = [
    { name: "email", type: "email" },
    { name: "password", type: "password" }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
   try {
     const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signin`, {
       email: values.email,
       password: values.password,
     });
     if (res.data.success) {
       localStorage.setItem('token',res.data.token)
       setLoader(false);
       Swal.fire({
         title: res.data.message,
         showClass: {
           popup: `
             animate__animated
             animate__fadeInUp
             animate__faster
           `
         },
         hideClass: {
           popup: `
             animate__animated
             animate__fadeOutDown
             animate__faster
           `
         }
       });
       navigate('/news',{replace:true})
     } else {
        setLoader(false);
             Swal.fire({
               title: res.data.message,
               showClass: {
                 popup: `
                   animate__animated
                   animate__fadeInUp
                   animate__faster
                 `
               },
               hideClass: {
                 popup: `
                   animate__animated
                   animate__fadeOutDown
                   animate__faster
                 `
               }
             });
     }
   } catch (e) {
    setLoader(false);
             Swal.fire({
               title: "Something went wrong Try again later",
               showClass: {
                 popup: `
                   animate__animated
                   animate__fadeInUp
                   animate__faster
                 `
               },
               hideClass: {
                 popup: `
                   animate__animated
                   animate__fadeOutDown
                   animate__faster
                 `
               }
             });
   }
  };

  return (
    <>
      <Form
        inputs={inputs}
        loader={loader}
        onSubmit={handleSubmit}
        setValues={setValues}
        values={values}
        btnText={"SignIn"}
        to={'/signup'}
        text="Don't Have an Account?"
      />
    </>
  );
};
