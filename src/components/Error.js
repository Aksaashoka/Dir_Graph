import React, {PureComponent} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Error extends PureComponent {
  render() {
    return (
      <View>
        <Text style={styles.error}> Por favor ingresa una URL válida </Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  error: {
    fontSize: 12,
    color: 'black',
  },
});
