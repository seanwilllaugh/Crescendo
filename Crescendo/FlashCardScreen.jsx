import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FlashCard from './components/FlashCard';
import { theme } from './theme';

const FlashCardScreen = ({ route, navigation }) => {
  
  const { title } = route.params;

  const [frontImage, setFrontImage] = useState(require('./images/C.png'));
  const [backContent, setBackContent] = useState('C');

  // change this logic
  const GenerateNewContent = () => {
    const newFrontImage = require('./images/G.png');
    const newBackContent = 'G';
    setFrontImage(newFrontImage);
    setBackContent(newBackContent);
  };

  const GoToExercise = () => {
    navigation.navigate('ExerciseScreen', {
        title: title,
    })
  }

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: theme.colors.background }}>
      <FlashCard frontContent={frontImage} backContent={backContent} />
      <TouchableOpacity style={styles.nextButton} onPress={GenerateNewContent}>
        <Text style={styles.title}>Next</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.nextExerciseButton} onPress={GoToExercise}>
        <Text style={styles.title}>Next Exercise</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    title: {
      color: '#fff',
      fontFamily: 'JosefinSans-Medium',
      fontSize: 10,
      marginBottom: 10,
      marginTop: 10,
    },
    nextButton: {
        width: 50, 
        height: 40, 
        borderRadius: 10, 
        backgroundColor: '#0EB4B0', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginBottom: 16, 
    },
    nextExerciseButton: {
        width: 100, 
        height: 60, 
        borderRadius: 10, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#0EB4B0', 
        position: 'absolute',
        bottom: 20,
        right: 20,
    },
  });

export default FlashCardScreen;