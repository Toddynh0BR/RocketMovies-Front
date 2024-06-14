import { Container } from "./style";

import { FiSearch } from "react-icons/fi";

import { Input } from "../../Components/Input"

export function Header(){
    return(
        <Container>
            <h2>RocketMovies</h2>

            <Input
            icon={FiSearch}
            placeholder="Pesquisar pelo título"
            type="text"
            ></Input>

           <Profile>
            <div>
                <strong>Matheus Augusto</strong>
                               <span>sair</span>
            </div>

            <img src="" alt="" />
           </Profile>
        </Container>
    )
}