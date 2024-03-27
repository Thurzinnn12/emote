// TelaObrigadojs
import React from 'react';
import { View, Text, Button, SafeAreaView,
  ScrollView } from 'react-native';
  import casinha from './estilo/estilo.js';
  import Menu from './Menu.js';


function TelaScroll({ navigation }) {
  return (
    <View style={casinha.igor}>
    <Text style={casinha.titulo} onPress={() => navigation.navigate('TelaObrigado')}>Tela Scroll</Text>
    <SafeAreaView style={casinha.box}>
<ScrollView style={casinha.scrollView}>
  <Text style={casinha.text}>
    NOXUS PREVALECERÁ 
  </Text>
 
</ScrollView>
</SafeAreaView>
    <Menu />
  </View>


  );
}

export default TelaScroll;
