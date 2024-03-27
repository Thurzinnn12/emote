// TelaInicial.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity,ImageBackground, } from 'react-native';
import styles from './estilo/estilo.js';

function Oliveira({ navigation }) {
  return (
    <View style={styles.box}>
      <Text style={styles.titulo}>IMAGEM DE FUNDO</Text>
      <Text style={styles.subtitulo}>+ ALERT</Text>
     
      <TouchableOpacity onPress={() => alert("me apertou...")}>
        <ImageBackground source={require("./assets/ice2.gif")} style={styles.image}>
        <Text style={styles.letra_a}>             </Text>
        <Text style={styles.letra_a}>             </Text>
        </ImageBackground>
      </TouchableOpacity>

      <Text ></Text>
      <Text ></Text>
      <Text ></Text>
      <Button title="Ir para Detalhes" onPress={() => navigation.navigate('TelaDetalhes')} />
      <Button title="Obrigado" onPress={() => navigation.navigate('TelaObrigado')} />
    </View>
    
  );
}

export default Oliveira;
