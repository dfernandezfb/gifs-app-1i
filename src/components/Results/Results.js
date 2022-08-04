import { useEffect, useState } from 'react';
import {Container, Row, Col} from 'react-bootstrap'
import styled from 'styled-components';
import axiosInstance from '../../config/axiosInstance';
import { apiKey } from '../../constants';
import useGet from '../../hooks/useGet';
const MyColResult = styled(Col)`
height:300px;
margin:10px
`
const Results = ({results}) => {
  const [trending] = useGet('/trending?limit=6&api_key='+apiKey)
  // const [trending, setTrending] = useState([])
  // const getData = async ()=>{
  //   try {
  //     const response = await axiosInstance('/trending?limit=6&api_key='+apiKey);
  //     setTrending(response.data.data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  // useEffect(()=>{
  //   getData();
  // },[])
  return ( 
    <Container>
      <Row>
        {
          results.length ===0?
          trending.length === 0?
          'Cargando'
          :
          trending.map((gif,index)=>{
          return <MyColResult xs={3} key={index}>
            <img src={gif.images.original.url} className="img-fluid h-100" alt={gif.title} />
          </MyColResult>
          }):
          results.map((gif,index)=>{
            return <MyColResult xs={3} key={index}>
              <img src={gif.images.original.url} className="img-fluid h-100" alt={gif.title} />
            </MyColResult>})
        }
      </Row>
    </Container>
   );
}
 
export default Results;