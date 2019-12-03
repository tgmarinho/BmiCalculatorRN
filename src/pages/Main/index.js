import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Slider from '@react-native-community/slider';
import {Button, ButtonLabel} from '../../components/styles';
import CalculeBMI from '../../core/CalculeBMI';
import useInterval from '../../customHooks/useInterval';
import op from '../../core/operation';
import {
  Container,
  TitleApp,
  WrapperCard,
  WrapperButton,
  Row,
  Label,
  GenderIcon,
  ContainerHeight,
  Number,
  HeightContainer,
  HeightSize,
  CircleButton,
  CircleIcon,
  RowIcons,
} from './styles';
import i18n from '../../i18n';

export default function Main({navigation}) {
  const data = navigation.getParam('data');

  const [gender, setGender] = useState(data.gender || '');
  const [height, setHeight] = useState(data.height || 164);
  const [weight, setWeight] = useState(data.weight || 60);
  const [operation, setOperation] = useState('');
  const [age, setAge] = useState(data.age || 25);
  const [delayAge, setDelayAge] = useState(null);
  const [delayWeight, setDelayWeight] = useState(null);

  useInterval(() => {
    op(operation, weight, setWeight);
  }, delayWeight);

  useInterval(() => {
    op(operation, age, setAge);
  }, delayAge);

  function stopCount() {
    setDelayAge(null);
    setDelayWeight(null);
  }

  const handleWeight = typeOperation => {
    op(typeOperation, operation, setOperation, 'set');
    setDelayWeight(100);
  };

  const handleAge = typeOperation => {
    op(typeOperation, operation, setOperation, 'set');
    setDelayAge(100);
  };

  const handleCalculate = () => {
    const result = new CalculeBMI(height, weight).showResult();
    navigation.navigate('Result', {
      result,
      data: {age, gender, height, weight},
    });
  };

  return (
    <>
      <Container>
        <TitleApp>{i18n.t('main.title')}</TitleApp>
        <Row>
          <WrapperButton
            active={gender === 'male'}
            onPress={() => setGender('male')}>
            <GenderIcon name="gender-male" />
            <Label>{i18n.t('main.male')}</Label>
          </WrapperButton>
          <WrapperButton
            active={gender === 'female'}
            onPress={() => setGender('female')}>
            <GenderIcon name="gender-female" />
            <Label>{i18n.t('main.female')}</Label>
          </WrapperButton>
        </Row>

        <ContainerHeight>
          <Label>{i18n.t('main.height')}</Label>
          <HeightContainer>
            <Number>{height}</Number>
            <HeightSize>cm</HeightSize>
          </HeightContainer>
          <Slider
            style={{width: 300, height: 40}}
            value={height}
            onValueChange={value => setHeight(value)}
            step={1}
            minimumValue={0}
            maximumValue={230}
            minimumTrackTintColor="#B1546F"
            maximumTrackTintColor="#999"
            thumbTintColor="#B1546F"
          />
        </ContainerHeight>
        <Row>
          <WrapperCard>
            <Label>{i18n.t('main.weight')}</Label>
            <Number>{weight}</Number>
            <RowIcons>
              <CircleButton
                disabled={weight === 0}
                onPress={() => setWeight(weight - 1)}
                onPressIn={() => handleWeight('minus')}
                onPressOut={stopCount}>
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton
                onPress={() => setWeight(weight + 1)}
                onPressIn={() => handleWeight('plus')}
                onPressOut={stopCount}>
                <CircleIcon name="plus" />
              </CircleButton>
            </RowIcons>
          </WrapperCard>
          <WrapperCard>
            <Label>{i18n.t('main.age')}</Label>
            <Number>{age}</Number>
            <RowIcons>
              <CircleButton
                disabled={age === 0}
                onPress={() => setAge(age - 1)}
                onPressIn={() => handleAge('minus')}
                onPressOut={stopCount}>
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton
                onPress={() => setAge(age + 1)}
                onPressIn={() => handleAge('plus')}
                onPressOut={stopCount}>
                <CircleIcon name="plus" />
              </CircleButton>
            </RowIcons>
          </WrapperCard>
        </Row>
      </Container>
      <Button onPress={handleCalculate}>
        <ButtonLabel>{i18n.t('main.calculate')}</ButtonLabel>
      </Button>
    </>
  );
}

Main.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    getParam: PropTypes.func,
  }).isRequired,
};
