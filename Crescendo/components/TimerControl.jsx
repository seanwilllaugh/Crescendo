import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { RadialSlider } from 'react-native-radial-slider'; // https://github.com/SimformSolutionsPvtLtd/react-native-radial-slider
import { useFonts } from 'expo-font';

const RadialVariant = ({ onPress, onTimerChange, timerSeconds }) => {
  const [isTimerRunning, setIsTimerRunning] = useState(false); // State to track timer status

  const adjustedValue = `${Math.floor(timerSeconds / 60)}:${String(timerSeconds % 60).padStart(2, '0')}`; // Adjusted value in MM:SS format

  let [fontsLoaded] = useFonts({
    'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Medium': require('../assets/fonts/JosefinSans-Medium.ttf'),
    'JosefinSans-Bold': require('../assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-SemiBold': require('../assets/fonts/JosefinSans-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null;
  }

  const handleSliderChange = (newValue) => {
    onTimerChange(newValue * 60); // Converting NewValue from min to seconds
  };

  // Function to handle press action
  const handlePress = () => {
    setIsTimerRunning(!isTimerRunning); // Toggle the timer running state
    onPress(); // Call the onPress prop
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View style={styles.container}>
        <RadialSlider
          /* Initialization configuration */
          variant={'radial-circle-slider'}
          value={timerSeconds/60}
          min={0}
          max={240}
          onChange={handleSliderChange}
          unit='min'

          /* Hiding unnecessary properties */
          isHideLines={true}
          isHideSubtitle={true}
          isHideValue={true}

          /* Sizing */
          thumbRadius={15}
          sliderWidth={10}
    
          /* Colors */
          thumbColor={isTimerRunning ? '#FF0000' : "#0EB4B0"}
          thumbBorderColor={isTimerRunning ? '#FF0000' :"#0EB4B0"}
          sliderTrackColor={"#5EA6CA"}
          linearGradient={[{ offset: '0%', color:'#A2FFD2' }, { offset: '100%', color: '#0EB4B0' }]}

          /* Styling sheets for timer */
          valueStyle={{
            color: '#FFFFFF'
          }}
          unitStyle={[{
            color: "#FFFFFF",
            fontFamily: 'JosefinSans-Medium',
            fontSize: 18,
          }]}
          style={{ 
            backgroundColor: '#0f2239',
            borderWidth: 28,
            borderRadius: 200,
            borderColor: "#181A1B"
          }}
        />

        {/* Adjusted Value Overlay */}
        <View style={styles.overlayContainer}>
          <Text style={styles.adjustedValue}>{adjustedValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  overlayContainer: {
    position: 'absolute',
    top: '50%', // Centers vertically in the container
    left: '50%', // Centers horizontally in the container
    transform: [
      { translateX: -45 }, // Adjust horizontally
      { translateY: -20 } // Adjust vertically
    ],
    alignItems: 'center', // Aligns text horizontally
    justifyContent: 'center', // Aligns text vertically
  },
  adjustedValue: {
    fontSize: 36,
    fontFamily: 'JosefinSans-Regular',
    color: '#FFFFFF',
    // Further styling adjustments to ensure visibility and alignment
  },
});

export default RadialVariant;