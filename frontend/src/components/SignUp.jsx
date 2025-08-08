import { useState } from "react";
import axios from "axios";
import { useNavigate} from "react-router-dom";
import Form from "./Form";
import Swal from "sweetalert2";


export const SignUp = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/user/signup`, {
      name: values.name,
      email: values.email,
      password: values.password,
      confirmPassword: values.confirmPassword,
    });

    if (res.data.success == true) {
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
      navigate("/signin");
    } else {
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
      setLoader(false)
    }
  }
  const inputs = [
    { name: "name", type: "text" },
    { name: "email", type: "email" },
    { name: "password", type: "password" },
    { name: "confirmPassword", type: "password" },
  ];

  return (
    <>
      <Form
        inputs={inputs}
        loader={loader}
        onSubmit={handleSubmit}
        setValues={setValues}
        values={values}
        btnText={"SignUp"}
        to="/signin"
        text="Already Have an Account?"
      />
    </>
  );
};
