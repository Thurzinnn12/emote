// TelaObrigadojs
import React from 'react';
import { View, Text, Button, SafeAreaView,
  ScrollView } from 'react-native';
  import styles from './estilo/estilo.js';

  import Bolinha from './Bolinha.js';


function TelaObrigado({ navigation }) {
  return (


<SafeAreaView style={styles.box}>
<ScrollView style={styles.scrollView}>
  <Text style={styles.text}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    aliquip ex ea commodo consequat. Duis aute irure dolor in
    reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    culpa qui officia deserunt mollit anim id est laborum.
  </Text>
 
</ScrollView>
</SafeAreaView>

  );
}

export default TelaObrigado;
