import SearchBar from "./SearchBar";
import { NavLink } from "react-router-dom";
import Cards from "./Cards"
import About from "./About"
import estilos from "./Card.module.css"

export default function Nav (props) {
    const {onSearch} = props;

    return(
        <div>
        <nav className={estilos.navLink}>
        
            <button className={estilos.navButton}>
                <NavLink to ="/about" element={<About/>}>About</NavLink>
            </button>
            <button className={estilos.navButton}>
                <NavLink to ="/home" element={<Cards/>}>Home</NavLink>
            </button>
            </nav>
        <SearchBar onSearch={onSearch}/>
        </div>
    )
}