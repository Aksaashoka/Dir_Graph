import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {ActivityIndicator, Button, TextInput} from 'react-native-paper';
import {peticion} from '../utils/Peticion';
import {validateUrl} from '../utils/validateUrl';
import Error from './Error';

const Search = ({navigation}) => {
  const [mainUrl, setMainUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = text => {
    setMainUrl(text);
  };
  const handleClick = () => {
    setLoading(true);
    if (validateUrl(mainUrl)) {
      peticion(mainUrl).then(
        data => {
          setError(false);
          setLoading(false);
          navigation.navigate('Detail', {content: data, source: mainUrl});
        },
        error => {
          setError(true);
          setLoading(false);
          console.error('Función de rechazo llamada: ', error);
        },
      );
    } else {
      setLoading(false);
      setError(true);
    }
  };
  return (
    <>
      <TextInput onChangeText={handleChange} value={mainUrl} />
      {loading && <ActivityIndicator />}
      <Button style={styles.btn} onPress={handleClick} mode="contained">
        Explorar
      </Button>
      {error && <Error />}
    </>
  );
};

export default Search;

const styles = StyleSheet.create({
  btn: {
    padding: 10,
    marginVertical: 10,
    minWidth: 200,
    alignSelf: 'center',
  },
});
