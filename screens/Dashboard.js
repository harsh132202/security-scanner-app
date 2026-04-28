import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import SensorCard from '../components/SensorCard';

export default function Dashboard() {
  const [scanning, setScanning] = useState(false);

  const startScan = () => {
    setScanning(true);

    // fake scanning effect
    setTimeout(() => {
      setScanning(false);
    }, 3000);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Security Scanner Dashboard</Text>

      <ScrollView contentContainerStyle={styles.cardContainer}>
        <SensorCard title="Radiation" value="0.12" unit="µSv/h" status="safe" />
        <SensorCard title="Metal Detection" value="Detected" status="alert" />
        <SensorCard title="RF Signals" value="Active" status="alert" />
      </ScrollView>

      <TouchableOpacity style={styles.button} onPress={startScan}>
        <Text style={styles.buttonText}>
          {scanning ? "Scanning..." : "Start Scan"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    paddingTop: 50,
    paddingHorizontal: 15,
  },
  header: {
    fontSize: 22,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    gap: 15,
  },
  button: {
    backgroundColor: '#22c55e',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
