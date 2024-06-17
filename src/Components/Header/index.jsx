import { Container, Profile, Search } from "./style";

import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

import { Input } from "../../Components/Input"

export function Header(){
    return(
        <Container>

            <h2>RocketMovies</h2>


           <Search>
            <Input
            icon={FiSearch}
            placeholder="Pesquisar pelo título"
            type="text"
            ></Input>
           </Search>

           <Profile>
            <div>
                <Link to="/user">
                <strong>Matheus Augusto</strong>
                </Link>
                               <span>sair</span>
            </div>
            <Link to="/user">
            <img src="https://github.com/Toddynh0BR.png" alt="imagem do usuário" />
            </Link>
           </Profile>

        </Container>
    )
}