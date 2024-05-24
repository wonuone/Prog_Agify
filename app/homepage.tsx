import React, { useState } from 'react';
import { StyleSheet, TextInput, View, TouchableOpacity, Text, Button } from 'react-native';
import { router } from "expo-router";

const App = () => {
  const [name, setName] = useState("");
  const [names, setNames] = useState({});

  const handleSubmit = async () => {
    const response = await fetch(`https://api.agify.io?name=${name}`);
    const data = await response.json();
    setNames(data);
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.upperContainer}>
        <Text style={styles.signupText} onPress={() => router.navigate('loginpage')}>
          {'<-- Go Back'}
        </Text>
      </View>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Predict the age using Agify API</Text>
        <Text style={{fontWeight: '500'}}>Search for a name:</Text>

        <TextInput
          style={styles.input}
          placeholder="Please enter a name"
          autoCapitalize="none"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.buttonText}>Search</Text>
        </TouchableOpacity>
        {names.name !== undefined && (
          <Text style={styles.resultText}>
            The name you search is <Text style={styles.boldtext}>{names.name}</Text>
          </Text>
        )}
        {names.age !== undefined && (
          <Text style={styles.resultText}>
            They are roughly <Text style={styles.boldtext}>{names.age}</Text> years old
          </Text>
        )}
        {names.count !== undefined && (
          <Text style={styles.resultText}>
           The name {names.name} has been searched for <Text style={styles.boldtext}>{names.count}</Text> times
          </Text>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#1f4ac8',
  },
  upperContainer: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  signupText: {
    fontSize: 16,
    color: 'white',
  },
  innerContainer: {
    width: '80%',
    maxWidth: 400,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 16,
    borderRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
    fontWeight:'900',
    fontFamily:'Raleway',
  },
  boldtext: {
    fontSize: 18,
    fontWeight:'700',
  },
  input: {
    height: 40,
    borderColor: '#4169e1',
    borderWidth: 1,
    marginTop: 10,
    marginBottom: 16,
    padding: 20,
    borderRadius: 10,
  },
  button: {
    backgroundColor: '#00009d',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  resultText: {
    marginTop: 16,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
});

export default App;