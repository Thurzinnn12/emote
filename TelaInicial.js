import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import casinha from './estilo/estilo.js';
import Menu from './Menu.js';




function TelaInicial({ navigation }) {
  return (
    <View style={casinha.igor}>
      <Text style={casinha.titulo}>NOXUS</Text>
      <View style={casinha.menu2}>
      <TouchableOpacity onPress={() => navigation.navigate('FelizApp')}>
                <Image style={casinha.itens}source={require('./assets/feliz.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Mediano')}>
                <Image style={casinha.itens}source={require('./assets/medi.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('TristeApp')}>
                <Image style={casinha.itens}source={require('./assets/trsite.png')}></Image>
            </TouchableOpacity>

      </View>

      <View>
        <Text style={casinha.caixaTexto}>Como está hoje?</Text>
      </View>

      <Menu />
    </View>
  );
}

export default TelaInicial;