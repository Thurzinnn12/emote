// TelaObrigadojs
import React from 'react';
import { View, Text, Button, SafeAreaView,
  ScrollView } from 'react-native';
  import casinha from './estilo/estilo.js';
  import Menu from './Menu.js';


function TelaFundo({ navigation }) {
  return (
    <View style={casinha.igor}>
    
    <TouchableOpacity onPress={() => navigation.navigate('TelaObrigado')}>
      <ImageBackground source={require("./assets/sair.png")} >
      <Text style={casinha.titulo}>Imagem de fundo</Text>
      </ImageBackground>
    </TouchableOpacity>
    <Menu />
  </View>


  );
}

export default TelaFundo;
