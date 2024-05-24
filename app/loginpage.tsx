import React from 'react';
import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { router } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./yangapic.jpg')} 
        style={styles.backgroundImage}
        resizeMode="cover" 
      >
        <View style={styles.innerContainer}>
          <Text style={styles.text} onPress={() => router.navigate('homepage')} >Welcome to Agify!</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  backgroundImage: {
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)', 
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: '#333',
  },
});

export default App;