import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import casinha from './estilo/estilo.js';
import Menu from './Menu.js';




function Joinha({ navigation }) {
  return (
    <View style={casinha.igor}>
      <Text style={casinha.titulo}>OBRIGADO PELA VOTAÇÃO!!!</Text>
      <Image style={casinha.itens}source={require('./assets/gato.png')}></Image>
      <Menu />
    </View>
  );
}

export default Joinha;