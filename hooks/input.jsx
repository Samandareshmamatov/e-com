import React from 'react'

const useInput = ({type, name, value, id, placeholder}) => {
  return <input className='input-hook' type={type} name={name} id={id} value={value} placeholder={placeholder} />;
}

export default useInput;