import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StatsContainer = () => {
  return (
    <View style={styles.statsContainer}>
        {/* Challenge Boxes */}
        <View style={styles.challengeColumn}>
            <TouchableOpacity style={[styles.challengeContainer, {marginTop: -7}]}>
                <Text style={styles.challengeText}>Daily Challenges</Text>
                <Text style={styles.challengeCount}>0/5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.challengeContainer}>
                <Text style={styles.challengeText}>Weekly Challenges</Text>
                <Text style={styles.challengeCount}>0/5</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.challengeContainer}>
                <Text style={styles.challengeText}>Milestones</Text>
                <Text style={styles.challengeCount}>0/5</Text>
            </TouchableOpacity>
        </View>

      {/* Graph Component*/}
      <View style={styles.graphContainer}>
        <View style={styles.graphInfo}>
            <Text style={styles.graphText}>Today's Practice Time</Text>
            <Text style={styles.timeText}>2 hours</Text>
        </View>
        {/* Graph component goes here */}
    
        <View style={styles.graphPlaceholder} />

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  statsContainer: {
    flexDirection: 'row',
    width: 330,
    height: 125,
    marginTop: 15,
    borderWidth: 2,
    borderRadius: 10,
    borderColor: '#5EA6CA',
    backgroundColor: '#0f2239',
    padding: 10,
  },

  challengeColumn: {
    flexDirection: 'column',
    alignItems: 'center',
    marginRight: 5,
    marginLeft: -7,
  },
  challengeContainer: {
    width: 100,
    height: 35,
    backgroundColor: '#0EB4B0',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 5,
  },
  challengeText: {
    color: '#FFFFFF',
    fontSize: 11,
    fontFamily: 'JosefinSans-Medium',
  },
  challengeCount: {
    color: '#FFFFFF',
    fontSize: 13,
    fontFamily: 'JosefinSans-Bold',
  },

  graphContainer: {
    flex: 2,
    padding: 5,
    marginRight: -7,
    marginLeft: 7,
    marginBottom: -10,
  },
  graphInfo: {
    alignItems: 'flex-end'
  },
  graphText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontFamily: 'JosefinSans-Medium',
    marginBottom: 5,
    marginTop: -10,
  },
  timeText: {
    color: '#5EA6CA',
    fontSize: 24,
    fontFamily: 'JosefinSans-Bold',
    marginBottom: 5,
    marginTop: -5,
  },
  graphPlaceholder: {
    flex: 1,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    // Replace with your graph component
  },
});

export default StatsContainer;
