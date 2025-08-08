function Input({name,type,values,setValues}) {

  
  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  return<>
  <input
           key={name}
            className="w-[80%] text-sky-900 text-lg p-2 sm:p-1 mb-4 border-2  border-black rounded"
            type={type}
            name={name}
            required
            value={values}
            onChange={handleInputChange}
            placeholder={name}
          />
  </>
}

export default Input