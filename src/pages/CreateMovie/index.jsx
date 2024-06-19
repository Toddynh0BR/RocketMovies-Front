import { Container, Main, FistInputs, SecondInput, Marcs, Buttons, Box, Marcadores, Marc, NewMarc  } from "./style";

import { Link } from "react-router-dom";

import { FiArrowLeft, FiX, FiPlus   } from 'react-icons/fi';

import { ButtonText } from "../../Components/ButtonText";
import { Button } from "../../Components/Button";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";


export function CreateMovie(){
return(
<Container>
    <Header></Header>

    <Box>
    <Link to="/RocketMovies-Front/">
    <ButtonText 
         icon={FiArrowLeft}
         title="Voltar"
    />
    </Link>
    </Box>

    <Main>

    <h2>Novo filme</h2>

     <FistInputs>
      <Input
       fontFamily="'Roboto', sans-serif"
      placeholder="Título"
      ></Input>
      <Input
       fontFamily="'Roboto', sans-serif"
       placeholder="Sua nota (de 0 a 5)"
      ></Input>
     </FistInputs>
    
    <SecondInput>
            <textarea placeholder="Observações"></textarea>
    </SecondInput>
  
    <Marcs>
        <h3>Marcadores</h3>

        <Marcadores>
         <Marc>
            <p>React</p><FiX />
         </Marc>

    

         <NewMarc>
            
            <input type="text" placeholder="Novo marcador"/>
         <FiPlus />
         </NewMarc>
        </Marcadores>
    </Marcs>

    <Buttons>

        <button>
            Excluir filme
        </button>

        <Button
        title="Salvar alterações"
        ></Button>
       
    </Buttons>
    </Main>
</Container>
)
}