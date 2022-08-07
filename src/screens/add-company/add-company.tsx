import React, { useEffect, useState } from 'react';
import { View, Alert } from 'react-native';
import { Container, Back, ButtonDelete, TextDelete, TouchBack, Warning, Company, Banner, TextInput, Button, TextButton, TextInputM } from './style';
import { TextInputMask } from 'react-native-masked-text';
import axios from 'axios';
import { useNavigation, useRoute } from '@react-navigation/native';

const baseUrl = 'http://localhost:3333/';

const AddCompany = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const id = route?.params?.item?.id;
  const [name, setName] = useState(route?.params?.item?.name);
  const [cnpj, setCNPJ] = useState(route?.params?.item?.cnpj);
  const [address, setAddress] = React.useState<string>(route?.params?.item?.address);

  async function createCompany() {
    if (!!!name || !!!cnpj || !!!address) {
      Alert.alert("Nome or CNPJ or Endereço is invalid");
      return;
    }

    try {
      const response = await axios.post(`${baseUrl}companys`, { name, cnpj, address });
      navigation.navigate('Home')
    } catch (error) {
      Alert.alert("Tente novamente mais tarde!");
    }
  };

  async function updateCompany() {
    try {
      await axios.put(`${baseUrl}companys/${id}`, { name, cnpj, address });
      Alert.alert("Atualizado com sucesso");
      navigation.navigate('Home')
    } catch (error) {
      Alert.alert("Tente novamente mais tarde!");
    }
  };

  async function deleteCompany() {
    try {
      await axios.delete(`${baseUrl}companys/${id}`);
      Alert.alert('Empresa apagada com sucesso!')
      navigation.navigate('Home')
    } catch (error) {
      Alert.alert("Não foi possível apagar essa empresa, tente novamente mais tarde!");
    }
  };

  return (
    <Container>
      <TouchBack onPress={() => { navigation.goBack() }}>
        <Back source={require('../../assets/images/arrow.png')} />
      </TouchBack>

      <Company>
        <Banner source={require('../../assets/images/add-company.png')} />
      </Company>
      <Warning>{id ? 'Atualize os dados da sua empresa' : 'Adicione uma nova empresa'}</Warning>
      <View>
        <TextInput
          placeholder="Nome"
          placeholderTextColor="white"
          onChangeText={setName}
          value={name}
          textAlign="center"
        />

        <TextInputM>
          <TextInputMask
            placeholder=" CNPJ"
            placeholderTextColor="white"
            type={'cnpj'}
            value={cnpj}
            style={{ color: '#FFF' }}
            onChangeText={setCNPJ}
          />
        </TextInputM>


        <TextInput
          placeholder="Estado/Cidade"
          placeholderTextColor="white"
          onChangeText={setAddress}
          value={address}
          textAlign="center"
        />
      </View>

      <Button onPress={() => {id ? updateCompany() : createCompany() }}>
        <TextButton>{id ? 'Atualizar Empresa' : 'Adicionar uma empresa'}</TextButton>
      </Button>

      {id && <ButtonDelete onPress={() => { deleteCompany() }}>
        <TextDelete>Apagar Empresa</TextDelete>
      </ButtonDelete>}

    </Container>
  );
}

export default AddCompany;