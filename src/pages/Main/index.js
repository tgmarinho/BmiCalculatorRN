import React, { useState } from 'react';
import Slider from '@react-native-community/slider';
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

import { Button, ButtonLabel } from '../../components/styles';

export default function Main({ navigation }) {
  const handleCalculate = () => {
    console.tron.log(navigation);
    navigation.navigate('Results');
  };

  return (
    <>
      <Container>
        <TitleApp>BMI CALCULATOR</TitleApp>
        <Row>
          <WrapperButton>
            <GenderIcon name="gender-male" />
            <Label>MALE</Label>
          </WrapperButton>
          <WrapperButton>
            <GenderIcon name="gender-female" />
            <Label>FEMALE</Label>
          </WrapperButton>
        </Row>

        <ContainerHeight>
          <Label>HEIGHT</Label>
          <HeightContainer>
            <Number>183</Number>
            <HeightSize>cm</HeightSize>
          </HeightContainer>
          <Slider
            style={{ width: 300, height: 40 }}
            minimumValue={0}
            maximumValue={1}
            minimumTrackTintColor="#B1546F"
            maximumTrackTintColor="#999"
            thumbTintColor="#B1546F"
          />
        </ContainerHeight>
        <Row>
          <WrapperCard>
            <Label>WEIGHT</Label>
            <Number>60</Number>
            <RowIcons>
              <CircleButton>
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton>
                <CircleIcon name="plus" />
              </CircleButton>
            </RowIcons>
          </WrapperCard>
          <WrapperCard>
            <Label>AGE</Label>
            <Number>30</Number>
            <RowIcons>
              <CircleButton>
                <CircleIcon name="minus" />
              </CircleButton>
              <CircleButton>
                <CircleIcon name="plus" />
              </CircleButton>
            </RowIcons>
          </WrapperCard>
        </Row>
      </Container>
      <Button onPress={handleCalculate}>
        <ButtonLabel>CALCULATE</ButtonLabel>
      </Button>
    </>
  );
}
