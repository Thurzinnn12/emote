// TelaInicial.js
import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import casinha from './estilo/estilo.js';
import Menu from './Menu.js';




function TelaInicial({ navigation }) {
  return (
    <View style={casinha.igor}>
      <Text style={casinha.titulo}>Tela Inicial</Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('TelaDetalhes')} />
      <Button title="Obrigado" onPress={() => navigation.navigate('TelaObrigado')} />
      <Button title="lurdinha" onPress={() => navigation.navigate('Oliveira')} />
      <Menu />
    </View>
  );
}

export default TelaInicial;