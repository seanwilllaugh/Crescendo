import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RadialSlider } from 'react-native-radial-slider'; // https://github.com/SimformSolutionsPvtLtd/react-native-radial-slider
import { useFonts } from 'expo-font';
import { TouchableOpacity } from 'react-native';

const RadialVariant = ({ onPress }) => {
  const [timerValue, setTimer] = useState(0);

  let [fontsLoaded] = useFonts({
    'JosefinSans-Regular': require('../assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Medium': require('../assets/fonts/JosefinSans-Medium.ttf'),
    'JosefinSans-Bold': require('../assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-SemiBold': require('../assets/fonts/JosefinSans-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <RadialSlider
          /* Initialization configuration */
          variant={'radial-circle-slider'}
          value={timerValue}
          min={0}
          max={240}
          onChange={setTimer}
          unit='min'

          /* Hiding unnecessary properties */
          isHideLines={true}
          isHideSubtitle={true}
          //unit={false}

          /* Sizing */
          thumbRadius={15}
          sliderWidth={10}
    
          /* Colors */
          thumbColor={"#0EB4B0"}
          thumbBorderColor={"#0EB4B0"}
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
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
});

export default RadialVariant;