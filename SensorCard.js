import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SensorCard({ title, value, unit, status }) {

  const getStatusColor = () => {
    switch (status) {
      case 'safe':
        return '#22c55e'; // green
      case 'alert':
        return '#ef4444'; // red
      default:
        return '#3b82f6'; // blue
    }
  };

  return (
    <View style={[styles.card, { borderLeftColor: getStatusColor() }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>
        {value} {unit}
      </Text>
      <Text style={[styles.status, { color: getStatusColor() }]}>
        {status.toUpperCase()}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1e293b',
    padding: 20,
    borderRadius: 15,
    borderLeftWidth: 6,
  },
  title: {
    color: '#94a3b8',
    fontSize: 14,
  },
  value: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  status: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
