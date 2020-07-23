import React from 'react';
import{MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import {Warpper, Header, BalanceContainer,BalanceTitle, Balance,Container} from './styles';
import Suggestions from '../../components/suggestions';
import Activites from '../../components/activites';
export default function Home(){
    return (
        <Warpper>
            <Container>
                <Header>
                 <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                 <BalanceContainer>
                     <BalanceTitle>Meu saldo</BalanceTitle>
                     <Balance>R$0,00</Balance>
                 </BalanceContainer>
                 <AntDesign name="gift" size={30} color="#10c86e" />
                 
                </Header>
                <Suggestions/>
                <Activites/>
            </Container>
        </Warpper>
    );
}