
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import styled  from 'styled-components';
import {useState} from "react";
import axios from "axios";
import estilos from "./components/Card.module.css";
import backgroundImg from "./images/rick-morty2.jpg"
import { Route, Routes } from 'react-router-dom';
import Detail from './components/Detail.jsx';
import About from './components/About.jsx';
import Form from './components/Form.jsx';
import { useLocation } from 'react-router-dom';

const CardsSaver = styled.div`
   
   background-image: url(${backgroundImg});
   background-position: center;
   background-size: contain;
   
   min-height: 100vh; /* Asegura que el div ocupe al menos toda la altura de la pantalla */
   
`;




function App() {
   let [characters, setCharacters] = useState([])
   
   const onClose = (id) => {
      let nId = parseInt(id);

      const updatedCharacters = characters.filter((character) => character.id !== nId);
      setCharacters(updatedCharacters);
   }
   const onSearch = (id) => {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            let idS = characters.map((character) => character.id )//arreglo que va a contener las id's actuales
            
            
   
            if (!idS.includes(data.id) ) { //si idS aun no tiene el id proporcionado, lo agrega
               setCharacters((caracteres) => [...caracteres, data]); //caracteres es el estadoLocal recibvido como argumento, y luego devuelve un nuevo estadoLocal mas el nuevo elemento "data"
            }

            } else {
               window.alert('');
            }
      })
      .catch((error) => {
         if (error.response && error.response.status === 404) {
            window.alert('¡No hay personajes con este ID!');
         } else {
            window.alert('Ocurrió un error en la solicitud');
         }
      });
   
   }
   const location = useLocation().pathname !== '/';
   

   return (
   <CardsSaver>
      {location && <Nav className ={estilos.nav} onSearch={onSearch} />}
      
      <Routes>
         
            
            <Route path = "/home" element ={ <div><Cards characters={characters} onClose = {onClose} /> </div>} />
            <Route path = "/about" element ={<About/>} />
            <Route path = "/detail/:id" element ={<Detail/>}/>
            <Route path = "/" element = {<Form/>}/>
                     
      </Routes>
   </CardsSaver>
   );
}

export default App;
