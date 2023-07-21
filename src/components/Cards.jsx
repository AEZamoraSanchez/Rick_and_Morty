import Card from './Card';
import estilos from "./Card.module.css"

export default function Cards({characters, onClose}) {// este props hace referencia a todos los caracteres traidos de data
   
   return (
      <div className={estilos.granDiv}>
         
            {
                  characters.map (character => {
                     return( 
                              <Card
                                 id={character.id} //1
                                 onClose={onClose}
                                 image={character.image}
                                 name={character.name} //rick sanchez
                                 status={character.status}//Alive
                                 species={character.species}//Human
                                 gender={character.gender}//Male
                                 origin={character.origin.name}
                                 
                              />
                           
                     )
                  })
               }
         
      </div> );
}
