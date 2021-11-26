import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import Home from './src/screens/Home';
import Detail from './src/screens/Detail';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider as PaperProvider} from 'react-native-paper';

const App = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Detail" component={Detail} />
          </Stack.Navigator>
        </NavigationContainer>
      </ScrollView>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexGrow: 1,
  },
});

export default App;
