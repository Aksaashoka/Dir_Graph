import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Directory from '../components/Directory';
import uuid from 'react-native-uuid';

const height = Dimensions.get('screen').height;
export default function Detail({route}) {
  const {content, source} = route.params;
  return (
    <ScrollView>
      <Text>{source}</Text>
      <View style={styles.container}>
        {typeof content === 'object' ? (
          content.map(item => <Directory key={uuid.v4()} item={item} />)
        ) : (
          <Text style={{textAlign: 'center'}}>JSON no válido</Text>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
    minHeight: height,
  },
});
