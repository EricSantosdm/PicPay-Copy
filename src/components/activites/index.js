import React from 'react';
import {Feather,MaterialCommunityIcons,AntDesign} from '@expo/vector-icons';
import {Container,
    Header,
    Title,
    Card,
    CardHeader,
    Description,
    Avatar,
    Bold,
    CardBody,
    Username,
    CardFooter,
    Details,
    Value,
    Divider,
    Date,
    Actions,
    Option,
    OptionLabel,
} from './styles';

import avatar from '../../images/avatar.png';

export default function Activites(){
    return (
        <Container>
            <Header>
                <Title>
                        Atividades
                </Title>
            </Header>
            <Card>
                <CardHeader>
                    <Avatar source ={avatar}/>
                    <Description>
                        <Bold>Você</Bold> pagou a <Bold>@eric-santos</Bold>
                    </Description>
                </CardHeader>
                <CardBody>
                    <Username>Eric Santos</Username>
                </CardBody>

                <CardFooter>
                    <Details>
                        <Value>R$18,00</Value>
                        <Divider/>

                       
                                <Feather name="lock" color="#fff" size={14}/>
                                <Date> Há 2 anos</Date>
                        
                    </Details>
                    <Actions>
                        <Option>
                            <MaterialCommunityIcons name="comment-outline" color="#fff" size={14}/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                        <Option>
                            <AntDesign name="hearto" color="#fff" size={14}/>
                            <OptionLabel>0</OptionLabel>
                        </Option>
                    </Actions>
                </CardFooter>

            </Card>
        </Container>

    );
}