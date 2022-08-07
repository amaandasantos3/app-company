import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Text, Card, Banner, Company, TextApresentation, Button, TextButton } from './style';
import { useNavigation } from '@react-navigation/native';

import axios from 'axios';
const baseUrl = 'http://localhost:3333/';

const Home = () => {
    const [company, setCompany] = useState([]);
    const navigation = useNavigation();

    function getCompanys() {
        axios.get(`${baseUrl}companys`).then((response) => {
            setCompany(response.data);
        });
    }

    useEffect(() => {
        getCompanys()
    }, [company]);

    return (
        <Container>
            <Company>
                <Banner source={require('../../assets/images/home-banner.png')} />
                <TextApresentation>
                    Todas suas empresas, um grande crescimento!
                </TextApresentation>
            </Company>

            <Button onPress={() => { navigation.navigate('AddCompany') }}>
                <TextButton>Adicionar uma empresa</TextButton>
            </Button>

            {company ?
                <ScrollView>
                    {company.map((c: any, key: number) => {
                        return (
                            <Card key={key} activeOpacity={.9} onPress={() => { navigation.navigate('AddCompany', {item: c}) }}>
                                <Text>Nome: {c.name}</Text>
                                <Text>CNPJ: {c.cnpj}</Text>
                                <Text>Endereço: {c.address}</Text>
                            </Card>
                        )
                    })}
                </ScrollView>
                :
                <View>
                    <Text>Você ainda não possui nenhuma empresa cadastrada!</Text>
                </View>
            }

        </Container>
    );
}

export default Home;