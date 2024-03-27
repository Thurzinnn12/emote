import React from 'react';
import { View, Text, Button, Image, TouchableOpacity, ImageBackground,TextInput} from 'react-native';
import casinha from './estilo/estilo.js';
import Menu from './Menu.js';




function Mediano({ navigation }) {
  return (
    <View style={casinha.igor}>
      <Text style={casinha.titulo}>Parabéns</Text>

      <View style={casinha.menu2}>
      <TouchableOpacity onPress={() => navigation.navigate('TelaDetalhes')}>
                <Image style={casinha.itens}source={require('./assets/medi.png')}></Image>
            </TouchableOpacity>

      </View>

      <View>
        <Text style={casinha.caixaTexto}> "Meio Termo"</Text>
        <Text style={casinha.caixaTexto}> </Text>
      </View>
      <View style={casinha.printAma}>
<TextInput style={casinha.print}
placeholder="Digite aqui......">

</TextInput>
  </View>
      <Button title="Salvar" onPress={() => navigation.navigate('Joinha')} />
      <Menu />
    </View>
  );
}

export default Mediano;