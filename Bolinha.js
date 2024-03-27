// TelaInicial.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import casinha from './estilo/estilo.js';

function Bolinha() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={casinha.bola}>XXX</Text>    

   
    </View>   
  );
}

export default Bolinha;