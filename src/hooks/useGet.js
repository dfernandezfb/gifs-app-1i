import { useEffect, useState } from "react";
import axiosInstance from "../config/axiosInstance";

const useGet = (url) =>{
  const [value, setValue] = useState("");
  
  const getData = async()=>{
    try {
      console.log('hi');
      const response = await axiosInstance.get(url)
      setValue(response.data.data)
    } catch (error) {
      console.log(error);
    }
  }
    
    useEffect(() => {
    getData(value);
  }, []);

  return [value, setValue, getData]
}

export default useGet