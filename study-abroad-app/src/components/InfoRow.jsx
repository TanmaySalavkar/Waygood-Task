import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { COLORS } from '../constants/theme';

export default function InfoRow({ label, value, isPrimary = false }) {
  return (
    <View style={styles.infoRow}>
      <Text style={styles.infoLabel}>{label}</Text>
      <Text 
        style={[styles.infoValue, isPrimary && { color: COLORS.primary }]} 
        numberOfLines={1}
      >
        {value}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#F1F5F9',
  },
  infoLabel: { 
    fontSize: 14, 
    color: COLORS.textMuted, 
    fontWeight: '500' 
  },
  infoValue: { 
    fontSize: 14, 
    color: COLORS.textDark, 
    fontWeight: '700',
    flexShrink: 1, 
    textAlign: 'right',
    marginLeft: 10
  },
});