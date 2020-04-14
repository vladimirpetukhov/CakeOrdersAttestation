import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Input from "@material-ui/core/Input";
import Select from "react-select";
import '../../index.css';


const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];


const SelectTaste= ()=>{
  const { register, handleSubmit, setValue } = useForm();
  const onSubmit = data => {
    alert(JSON.stringify(data, null));
  };
  const [values, setReactSelect] = useState({
    selectedOption: []
  });

  const handleMultiChange = selectedOption => {
    setValue("reactSelect", selectedOption);
    setReactSelect({ selectedOption });
  }; 

  const hanleChange = e => {
    setValue("antDInput", e.target.value);
  };

  useEffect(() => {
    register({ name: "reactSelect" });
    register({ name: "antDInput" });
  }, []);

  return (
  
        <div>
          <lable className="reactSelectLabel">React select</lable>
          <Select
            className="reactSelect"
            name="filters"
            placeholder="Filters"
            value={values.selectedOption}
            options={options}
            onChange={handleMultiChange}
            isMulti
          />
        </div>
  );
}

export default SelectTaste;
