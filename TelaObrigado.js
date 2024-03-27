// TelaObrigadojs
import React from 'react';
import { View, Text, Button, SafeAreaView,
  ScrollView } from 'react-native';
  import casinha from './estilo/estilo.js';
  import Menu from './Menu.js';


function TelaObrigado({ navigation }) {
  return (
    <View style={casinha.igor}>
    <Text style={casinha.titulo}>Obrigado</Text>
   
    <Menu />
  </View>


  );
}

export default TelaObrigado;
