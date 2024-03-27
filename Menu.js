import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import casinha from './estilo/estilo.js';
import { useNavigation } from '@react-navigation/native';

function Menu (){
  const navigation = useNavigation();
  return(
    
    <View style={casinha.menu3}>
         <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')} >
      <Image style={casinha.imagemenu} source={require("./assets/home.png")} />
    </TouchableOpacity>

   

   
  </View>

  );
}
export default Menu;