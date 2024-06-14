import { FiMail, FiLock } from 'react-icons/fi';
import { Container, Main, Background} from './style';

import { ButtonText } from '../../Components/ButtonText';
import { Button } from '../../Components/Button';
import { Input } from '../../Components/Input';

export function SignIn(){
return(
<>
 <Container>
   <Main>
    <h1>RocketMovies</h1>
    <p>Aplicação para acompanhar tudo que assistir.</p>

  
    <h2>Faça seu login</h2>

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

    <Button title="Entrar"></Button>

    <ButtonText 
     icon={FiMail}
    title="Criar Conta"
   
    />
    </Main>

    <Background/>
 </Container>


 </>
)
}