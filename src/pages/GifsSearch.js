import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Layout from "../components/Layout/Layout";
import Results from "../components/Results/Results";
import SearchBar from "../components/SearchBar/SearchBar";
import axiosInstance from "../config/axiosInstance";
import { apiKey } from "../constants";

const MyCol = styled(Col)`
  height: 100vh;
`;

const GifsSearch = () => {
  const [value, setValue] = useState("");
  const [results, setResults] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const getSearch = async (value) => {
    try {
      const response = await axiosInstance(
        `/search?api_key=${apiKey}&q=${value}&limit=6`
      );
      setResults(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  //! EL USEEFFECT ESCUCHA LOS CAMBIOS EN EL ESTADO VALUE, UNA VEZ QUE HUBO UN CAMBIO, EJECUTA LA FUNCION QUE TIENE DENTRO
  useEffect(() => {
    getSearch(value);
  }, [value]);
  return (
    // <Layout>
      <Container fluid>
        <Row>
          <MyCol
            xs={12}
            md={3}
            className="bg-dark d-flex align-items-center justify-content-center"
          >
            <SearchBar value={value} handleChange={handleChange} />
          </MyCol>
          <MyCol xs={12} md={9} className="bg-secondary">
            <Results results={results} />
          </MyCol>
        </Row>
      </Container>
    // </Layout>
  );
};

export default GifsSearch;
