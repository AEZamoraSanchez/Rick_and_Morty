import estilos from "./Card.module.css"
import styled from "styled-components"
import backgroundDiv from "../images/galaxia.jpg"
import backgroundH2 from "../images/portal.jpg"
import { Link } from "react-router-dom"


const CardStyle = styled.h3`
   margin-left: 1em;
   margin-right: 2em;
   margin-bottom: .5em;
   margin-top: .5em;
   color: white;
   font-size: .8em;
   background-image:url(${backgroundH2});
   padding: 5px;
   border-radius: 20px;
`
const HCard = styled.h2`
   margin-left: 1em;
   margin-right: 2em;
   margin-bottom: .5em;
   margin-top: .5em;
   color: white;
   font-size: 1.2em;
   background-image:url(${backgroundH2});
   padding: 12px;
   border-radius: 20px;
`

const CardDiv = styled.div `

   border: solid 10px;
   border-color: rgba(187, 56, 252, 0.6);
   border-radius: 10px;
   background-image: url(${backgroundDiv});;
   margin-left: 2em;
   margin-right: 2em;
   margin-bottom: 1em;
   margin-top: 1em;
   width: 250px;
   height: 400px;
   
   
`

export default function Card({id, name, status, species, gender, origin, image, onClose}) {

   const handleOnClose = () => {
      onClose(id); // Pasar el id a la función onClose
   };
   
   return (
      <CardDiv>
         
         <button className={estilos.cardButton} onClick={handleOnClose}>Borrar</button>
         <Link to={`/detail/${id}`} >
         <HCard>{name}</HCard>
         </Link>
         <CardStyle>{status}</CardStyle>
         <CardStyle>{species}</CardStyle>
         <CardStyle>{gender}</CardStyle>
         <CardStyle>{origin}</CardStyle>
         <img src = {image} alt='' className={estilos.image}/>
         {/* <img src= {props.image} alt="" /> esta linea igual da una imagen de rick*/}
      </CardDiv>
   );
}
