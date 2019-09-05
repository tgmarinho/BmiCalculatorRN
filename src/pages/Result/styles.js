import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #090b22;
  height: ${74 + getBottomSpace()}px;
  padding: 20px;
  align-items: center;
  justify-content: space-around;
`;

export const LabelResult = styled.Text`
  font-weight: bold;
  color: #fff;
  font-size: 42px;
  align-self: flex-start;
`;

export const CardResult = styled.View`
  background: #101427;
  border-radius: 10px;
  width: 100%;
  height: 75%;
  padding: 20px;
  justify-content: space-evenly;
  align-items: center;
  align-content: space-between;
`;

export const TextNomal = styled.Text`
  font-size: 20px;
  color: #3bc683;
  font-weight: bold;
`;
export const TextNumber = styled.Text`
  font-size: 102px;
  color: #fff;
  font-weight: bold;
`;
export const TextBMI = styled.Text`
  font-size: 22px;
  color: #807f8f;
  font-weight: bold;
`;
export const DescriptionResult = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
  text-align: center;
`;
