import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { FontAwesome6 } from 'react-native-vector-icons';
import RadialVariant from "./components/TimerControl" // For the Dial Timer
import ContentCard from "./components/ContentCard" // For PracList and Exercise cards
import StatsContainer from './components/StatsContainer';

export default function HomeScreen({ navigation }) {
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(0);
  const [timerValue, setTimerValue] = useState(0);

  const toggleTimer = () => {
    if (timerRunning) {
      // If the timer is running, stop it
      clearInterval(timerValue);
      setTimerRunning(false);
      console.log("Timer Stopped.")
    } else {
      // If the timer is not running, start it
      console.log("Timer Started.")

      const intervalId = setInterval(() => {
        setTimerSeconds(prevSeconds => {
          const newSeconds = prevSeconds - 1;
          if (newSeconds <= 0) {
            clearInterval(intervalId); // Stop the timer if it reaches 0
            console.log("Timer finished."); // Log that the timer has finished
            return 0;
          }
          console.log(`Time left: ${newSeconds} seconds`); // Log remaining time every second
          return newSeconds;
        });
      }, 1000); // Update the timer every second
  
      setTimerValue(intervalId); // Save the interval ID to be able to stop it later
      setTimerRunning(true);
    }
  };

  const handleTimerChange = (newTimerSeconds) => {
    setTimerSeconds(newTimerSeconds); // Update the state with the new timer value
  };
  
  useEffect(() => {
    return () => clearInterval(timerValue); // Clean up the interval on component unmount
  }, [timerValue]);  

  let [fontsLoaded] = useFonts({
    'JosefinSans-Regular': require('./assets/fonts/JosefinSans-Regular.ttf'),
    'JosefinSans-Medium': require('./assets/fonts/JosefinSans-Medium.ttf'),
    'JosefinSans-Bold': require('./assets/fonts/JosefinSans-Bold.ttf'),
    'JosefinSans-SemiBold': require('./assets/fonts/JosefinSans-SemiBold.ttf')
  });

  if (!fontsLoaded) {
    return null; // Or a loading spinner
  }

  return (
    <GestureHandlerRootView style={styles.gestureHandlerRoot}>
      {/* Main Container */}
      <View style={styles.container}>
        {/* Title Row (pfp, welcome message, hamburger menu) */}
        <View style={styles.titleRow}>
          <Image
            source={require('./assets/pfp.jpeg')} // Update this path
            style={styles.profileImage}
          />

          <Text style={styles.title}>Welcome back, Sean</Text>
          <TouchableOpacity>
            <FontAwesome6 style={styles.menuIcon} name="bars" size={40} color="white" />
          </TouchableOpacity>
        </View>

        {/* Statistics Container */}
        <StatsContainer></StatsContainer>

        {/* PracLists & Exercises Card Container */}
        <View style={styles.contentContainer}>
          {/* PracLists Card Row */}
          <Text style={styles.contentTitle}>PracLists</Text>
          <View style={styles.cardRow}>
            <ContentCard 
              cardType="PracList"
              cardTitle="Scale Flexibility" 
              cardTime="100 Minutes" 
              cardTags={['Technique', 'Patterns', 'Flexibility']}
              navigation={navigation} 
            />
          </View>

          {/* Exercises Card Row */}
          <Text style={[styles.contentTitle, {marginTop: 10}]}>Exercises</Text>
          <View style={styles.cardRow}>
            <ContentCard 
              cardType="exercise"
              cardTitle="Long Tones" 
              cardTime="15-60 Minutes" 
              cardTags={['Warm-Up']}
              navigation={navigation}
            />
          </View>

        </View>

        <View style={styles.bottomRow}>
          {/* Tuner & Metronome Column */ }
          <View style={[styles.toolColumn, {marginLeft: 25}]}>
            <TouchableOpacity style={styles.toolButton}>
              <FontAwesome6 name="sliders" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.toolButton}
              onPress={() => navigation.navigate('MetronomeScreen')}
            >
              <FontAwesome6 name="hourglass-end" size={24} color="white" />
            </TouchableOpacity>
          </View>

          {/* Dial Timer */}
          <RadialVariant onPress={toggleTimer} onTimerChange={handleTimerChange} timerSeconds={timerSeconds}/>

          {/* Ear Training & Recordings Column */}
          <View style={[styles.toolColumn, {marginRight: 25}]}>
            <TouchableOpacity style={styles.toolButton}>
              <FontAwesome6 name="ear-listen" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.toolButton}>
              <FontAwesome6 name="microphone" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
  
        <StatusBar style="auto" />
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  gestureHandlerRoot: {
    flex: 1,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#181A1B',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titleRow: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginHorizontal: 10,
    marginTop: 50,
  },
  title: {
    color: '#fff',
    fontFamily: 'JosefinSans-Medium',
    fontSize: 24,
    textAlign: 'center', // Center the text
    flex: 1,
  },
  profileImage: {
    width: 45,
    height: 45, 
    borderRadius: 22.5, 
    marginLeft: 25,
    marginRight: 10,
  },
  menuIcon: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginLeft: 10,
    marginRight: 25,
  },

  statsContainer: {
    flexDirection: 'row',
    width: 330,
    height: 125,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#5EA6CA',
    backgroundColor: '#0f2239',
  },

  contentContainer: {
    flexDirection: 'column',
    width: 345,
    height: 335,
    marginTop: 10,
  },
  contentTitle: {
    color: '#5EA6CA',
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    textAlign: 'left',
    marginLeft: 0,
    marginTop: 5,
  },
  cardRow: {
    flexDirection: 'row',
    height: 130,
    marginTop: 2.5,
    marginLeft: -20,
  },
  
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolColumn: {
    height: 250,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  toolButton: {
    width: 50,
    height: 75,
    borderRadius: 10,
    backgroundColor: '#0EB4B0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  toolIcon: {
    
  }
});
