import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity.attrs({
  activeOpacity: 0.9,
})`
  background: #ea1555;
  width: 100%;
  height: 80px;
  justify-content: center;
  align-items: center;
`;

export const ButtonLabel = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
