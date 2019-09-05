import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import { getBottomSpace } from 'react-native-iphone-x-helper';

export const Container = styled.View`
  flex: 1;
  background: #090b22;
  height: ${74 + getBottomSpace()}px;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
`;

export const TitleApp = styled.Text`
  margin-top: 50px;
  font-weight: bold;
  color: #fff;
  font-size: 18px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
`;

export const WrapperButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
  hitSlop: {
    top: 5,
    left: 5,
    right: 5,
    bottom: 5,
  },
})`
  background: ${({ active }) => (active ? '#101430' : '#101427')};
  /* background: #101427; */
  border-radius: 10px;
  width: 48%;
  height: 150px;
  justify-content: center;
  align-items: center;
`;

export const GenderIcon = styled(Icon).attrs({
  color: '#FFF',
  size: 68,
})``;

export const GenderTitle = styled.Text`
  margin-top: 10px;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;

export const ContainerHeight = styled.View`
  background: #101427;
  border-radius: 10px;
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: center;
  align-content: space-between;
`;

export const HeightContainer = styled.View`
  flex-direction: row;
  align-items: baseline;
`;

export const HeightSize = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ContainerWightAge = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  width: 100%;
`;

export const Label = styled.Text`
  color: #999;
  font-size: 16px;
  font-weight: bold;
`;

export const Number = styled.Text`
  color: #fff;
  font-size: 38px;
  font-weight: bold;
`;

export const CircleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  background: #1c2033;
  border-radius: 25px;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  margin: 8px;
`;

export const RowIcons = styled.View`
  flex-direction: row;
  align-content: space-around;
  justify-content: center;
  width: 100%;
`;

export const CircleIcon = styled(IconEntypo).attrs({
  color: '#FFF',
  size: 24,
})``;

export const WrapperCard = styled.View`
  background: #101427;
  border-radius: 10px;
  width: 48%;
  height: 170px;
  justify-content: center;
  align-items: center;
`;
