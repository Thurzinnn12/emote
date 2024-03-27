import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground,TextInput } from 'react-native';
import casinha from './estilo/estilo.js';
import Menu from './Menu.js';




function TristeApp({ navigation }) {
  return (
    <View style={casinha.igor}>
      <Text style={casinha.titulo}>Parabéns</Text>

      <View style={casinha.menu2}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaDetalhes')}>
                <Image style={casinha.itens}source={require('./assets/trsite.png')}></Image>
            </TouchableOpacity>

      </View>

      <View>
        <Text style={casinha.caixaTexto}> "Ruim"</Text>
        <Text style={casinha.caixaTexto}> </Text>
      </View>
      <View style={casinha.print1}>
<TextInput style={casinha.print}
placeholder="Digite aqui......">

</TextInput>
  </View>
      <Button title="Salvar" onPress={() => navigation.navigate('Joinha')} />

      <Menu />
    </View>
  );
}

export default TristeApp;