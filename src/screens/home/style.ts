import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;

export const Company = styled.View`
  padding-top: 30px;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
`;

export const TextApresentation = styled.Text`
  color: white;
  text-align: center;
  padding-top: 20px;
`;

export const Text = styled.Text`
  color: white;
  margin-horizontal: 11px;
  padding: 5px;
`;

export const Banner = styled.Image`
   width: 300px;
   height: 200px;
`;

export const Card = styled.TouchableOpacity`
   border-color: #f6f6f6;
   border-width: 2px;
   margin-horizontal: 11px;
   margin-top: 15px;
   border-radius: 10px;
   border-bottom-color: #71c3f7;
   border-right-color: #71c3f7;
   border-right-width: 5px;
   border-bottom-width: 5px;
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

export const TextButton = styled.Text`
  color: #71c3f7;
  margin-horizontal: 11px;
  padding: 5px;
  font-weight: bold;
  font-size: 16px;
`;