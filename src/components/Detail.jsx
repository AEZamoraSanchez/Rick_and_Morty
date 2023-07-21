import axios from "axios";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Detail = () => {
    let [character, setCharacter] = useState({});
    let {id} = useParams()// lo destructuramos por que use Params te da un objeto id:num

    useEffect(() => {
        axios(`https://rickandmortyapi.com/api/character/${id}`).then(
        ({ data }) => {
            if (data.name) {
            setCharacter(data);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        }
        );
        return setCharacter({});
    }, [id]);

    return (
        character ? (
            <div >
                <img src={character.image} alt={character.name} />
                <h2>Name: {character.name}</h2>
                <h2>Status: {character.status}</h2>
                <h2>Specie: {character.species}</h2>
                <h2>Gender: {character.gender}</h2>
                <h2>Origin: {character.origin?.name}</h2>

            </div>
        ) : ('')
            
    )    
    }


    


export default Detail;
