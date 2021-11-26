import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import Search from '../components/Search';
export default function Home({navigation}) {
  return (
    <View style={styles.pagina}>
      <Image style={styles.header} source={require('../assets/Logo.png')} />
      <Text style={styles.title}>Ingrese su Link debajo</Text>
      <Search navigation={navigation} />
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    resizeMode: 'contain',
    maxWidth: 400,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    padding: 10,
  },
  pagina: {
    justifyContent: 'flex-start',
    padding: 10,
    flex: 1,
    backgroundColor: 'white',
  },
});
