// write your custom hook here to control your checkout form
import {useState} from "react";

const useForm = (initVals) => {
  const [vals, setVals] = useState(initVals);

  const handleChanges = e => {
    setVals({...vals, [e.target.name]:e.target.value})
  }

  return [vals, handleChanges];
}

export default useForm;