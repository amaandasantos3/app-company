import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

export const Warning = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: bold;
  padding: 5px;
  text-align: center;
  margin-bottom: 20px;
`;

export const Company = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const Banner = styled.Image`
   width: 300px;
   height: 200px;
`;

export const TextInput = styled.TextInput`
   height: 50px;
   border-color: #71c3f7;
   border-width: 1.5px;
   border-radius: 25px;
   color: #FFF;
   margin-bottom: 20px;
   margin-horizontal: 10px;
`;

export const Back = styled.Image`
   width: 25px;
   height: 25px;
`;

export const TextInputM = styled.View`
   height: 50px;
   border-color: #71c3f7;
   border-width: 1.5px;
   border-radius: 25px;
   color: #FFF;
   align-items: center;
   justify-content: center;
   margin-bottom: 20px;
   margin-horizontal: 10px;
`;


export const Button = styled.TouchableOpacity`
   margin-horizontal: 11px;
   margin-top: 5px;
   border-radius: 5px;
   background-color: #FFF;
   align-items: center;
   justify-content: center;
   height: 50px;
   margin-bottom: 15px;
`;

export const ButtonDelete = styled.TouchableOpacity`
   margin-horizontal: 11px;
   margin-top: 5px;
   border-radius: 5px;
   background-color: #bf4342;
   align-items: center;
   justify-content: center;
   height: 50px;
   margin-bottom: 15px;
`;

export const TouchBack = styled.TouchableOpacity`
   margin-horizontal: 20px;
`;

export const TextButton = styled.Text`
  color: #71c3f7;
  margin-horizontal: 11px;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
`;

export const TextDelete = styled.Text`
  color: #FFF;
  margin-horizontal: 11px;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
`;
