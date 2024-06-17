import { Container, Form, Header, Avatar } from "./style";

import { Link } from "react-router-dom";

import { FiMail, FiLock, FiUser, FiArrowLeft, FiCamera } from 'react-icons/fi';

import { ButtonText } from "../../Components/ButtonText"
import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input"

export function User(){
 return(
 <Container>
   <Header>
    <Link to="/">
    <ButtonText
     icon={FiArrowLeft}
     title="Voltar"
    ></ButtonText>
    </Link>
   </Header>

   <Form>

    <Avatar>
        <img src="https://github.com/Toddynh0BR.png" alt="imagem do usuário" />
        <label htmlFor="avatar">
            <FiCamera />

            <input
              id="avatar"
              type="file"
            />
          </label>
    </Avatar>

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
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

        <Button
        title="Salvar"
        ></Button>
   </Form>
 </Container>
 ) 
}