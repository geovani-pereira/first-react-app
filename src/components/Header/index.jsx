import logoImg from '../../assets/logo.svg';

import { Container,Content } from './styles'



export function Header (){
    return (
       <header>
           <Container>
               <Content>
           <img src={logoImg} alt="dt money"/>
           <button type="button">
               Nova Transação
           </button>
                </Content>
           </Container>
       </header> 
    )
}