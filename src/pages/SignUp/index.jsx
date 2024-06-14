import { FiMail, FiLock, FiUser, FiArrowLeft } from 'react-icons/fi';
import { Container, Main, Background} from './style';

import { ButtonText } from '../../Components/ButtonText';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';

export function SignUp(){
return(
<>
 <Container>
   <Main>
    <h1>RocketMovies</h1>
    <p>Aplicação para acompanhar tudo que assistir.</p>

  
    <h2>Crie sua conta</h2>

    <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />


    <Input
          placeholder="E-mail"
          type="e-mail"
          icon={FiMail}
        />

    
    <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

    <Button title="Cadastrar"></Button>

    <ButtonText 
    icon={FiArrowLeft}
    title="Voltar para o login"
    />
    </Main>

    <Background/>
 </Container>


 </>
)
}