import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons'

import Header from '~/components/Header'
import Tabs from '~/components/Tabs'

import { 
  Container, Content, CardHeader, CardContent, CardFooter, Card, Description, Title, Annotation
} from './styles'

export default function Main() {
  return (
    <Container>
      <Header />

      <Content>
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666"/>
            <Icon name="visibility-off" size={28} color="#666"/>
          </CardHeader>
          <CardContent>
            <Title>Saldo indisponível</Title>
            <Description>R$ 197.000,94</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transferência recebida de Ricardo no valkor de 199.400,00
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  )
};
