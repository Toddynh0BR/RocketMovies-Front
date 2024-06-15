import { Container, Profile, Search } from "./style";

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
                <strong>Matheus Augusto</strong>
                               <span>sair</span>
            </div>

            <img src="https://github.com/Toddynh0BR.png" alt="imagem do usuário" />
           </Profile>

        </Container>
    )
}