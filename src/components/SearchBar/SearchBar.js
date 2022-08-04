import { useState } from 'react';
import { Form } from 'react-bootstrap'
import axiosInstance from '../../config/axiosInstance';
import { apiKey } from '../../constants';

const SearchBar = ({handleChange, value}) => {
  let searchDescription;
  if(value.length!=0){
    if(value.length>12){
      searchDescription= `Buscando ${value.slice(0,12)}...`
    }else{
      searchDescription= `Buscando ${value}`
    }
  }else{
    searchDescription=null
  }
  return ( 
    <Form>
      <Form.Group className="" >
        <Form.Control type="text" onChange={handleChange} value={value} placeholder="Busca tus gifs" />
        {/* <p className='text-light'>{value.length!=0? `Buscando ${value}` : null}</p> */}
        <p className='text-light'>{searchDescription}</p>
      </Form.Group>
    </Form>
   );
}
 
export default SearchBar;