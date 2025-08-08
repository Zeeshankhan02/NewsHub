import Input from "./Input";
import HomeSpinner from "../assets/HomeSpinner/HomeSpinner";
import { Link } from "react-router-dom";
import Button from "./Button";



function Form({
  loader,
  onSubmit,
  inputs,
  btnText,
  text,
  to,
  setValues,
  values,
}) {


  return (
    <>
      {loader ? <HomeSpinner /> : null}
      <div className="flex h-screen w-full justify-center bg-cover bg-[center_100px] bg-[url(assets/images/mobilebgImage.png)] sm:bg-[url(assets/images/desktopBgImage.png)]  sm:bg-cover sm:bg-center items-center flex-col">
        <form onSubmit={onSubmit}>
          <div className="h-100 w-100 flex justify-center items-center rounded-3xl shadow-2xl text-white flex-col">
            <h1 className="font-black text-4xl -translate-y-16 sm:translate-none text-shadow-amber-50 text-black  text-shadow-md sm:mb-2 sm:text-shadow-[#cee885] sm:text-emerald-600">{btnText}</h1>
            {inputs.map(({ name, type }) => (
              <Input
                key={name}
                name={name}
                type={type}
                setValues={setValues}
                value={values[name]}
              />
            ))}
              <span className="text-sky-900 hover:text-sky-600  text-sm mb-2">
                <Link to={to}>{text}</Link>
              </span>
            <Button text={btnText} />
          </div>
        </form>
      </div>
    </>
  );
}

export default Form;
