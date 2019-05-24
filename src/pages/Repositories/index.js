import React, { Component } from 'react';
import {
  View, Text, TextInput, TouchableOpacity, StatusBar, AsyncStorage,
} from 'react-native';
import api from '~/services/api';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class Welcome extends Component {
  state = {
    username: '',
  };

  checkUserExists = async (username) => {
    const user = await api.get(`/users/${username}`);

    return user;
  };

  saveUser = async (username) => {
    await AsyncStorage.setItem('@Githuber:username', username);
  };

  signIn = async () => {
    const { username } = this.state;

    try {
      await this.checkUserExists(username);
      await this.saveUser(username);
    } catch (err) {
      console.tron.log('Usuário inexistente.');
    }
  };

  render() {
    const { username } = this.state;

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#212121" />

        <Text style={styles.title}>GitIssues</Text>

        <View style={styles.form}>
          <TextInput
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            placeholder="Adicionar novo repositório"
            underlineColorAndroid="transparent"
            value={username}
            onChangeText={text => this.setState({ username: text })}
          />
          <TouchableOpacity style={styles.button} onPress={this.signIn}>
            <Icon name="plus-square" size={40} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
