import React from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar,
} from 'react-native';

import styles from './styles';

const Welcome = () => (
  <View style={styles.container}>
    <StatusBar barStyle="light-content" backgroundColor="#212121" />

    <Text style={styles.title}>Bem-vindo</Text>
    <Text style={styles.text}>Para continuar, informe seu Github!</Text>

    <View style={styles.form}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="Digite seu usuário"
        underlineColorAndroid="transparent"
      />
      <TouchableOpacity style={styles.button} onPress={() => {}}>
        <Text style={styles.buttonText}>Prosseguir</Text>
      </TouchableOpacity>
    </View>
  </View>
);

export default Welcome;
