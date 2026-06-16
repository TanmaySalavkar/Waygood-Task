import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

export default function Card({ program, onPress }) {
  return (
    <TouchableOpacity 
      style={styles.card}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.universityName}>{program.university}</Text>
      
      <View style={styles.countryBadge}>
        <Text style={styles.countryText}>{program.country}</Text>
      </View>
      
      <Text style={styles.description} numberOfLines={2}>
        {program.shortDescription}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.cardBackground,
    padding: SIZES.padding * 1.2,
    borderRadius: SIZES.radius,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: COLORS.border,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  universityName: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.textDark,
    marginBottom: 8,
  },
  countryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0F2FE',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginBottom: 12,
  },
  countryText: {
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.primary,
  },
  description: {
    fontSize: 14,
    color: COLORS.textMuted,
    lineHeight: 20,
  }
});