import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';
import InfoRow from '../components/InfoRow'; 

export default function DetailsScreen({ route, navigation }) {
  const { program } = route.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back to List</Text>
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.universityName}>{program.university}</Text>
        
        <View style={styles.countryBadge}>
          <Text style={styles.countryText}>{program.country}</Text>
        </View>

        <View style={styles.infoBox}>
          <InfoRow label="City/State:" value={program.city} />
          <InfoRow label="Ranking:" value={program.ranking} />
        </View>

        <Text style={styles.sectionTitle}>Program Overview</Text>
        <Text style={styles.description}>
          {program.fullDescription}
        </Text>

        <View style={styles.infoBox}>
          <Text style={styles.sectionTitle}>Contact Information</Text>
          <InfoRow label="Email:" value={program.email} />
          <InfoRow label="Phone:" value={program.phone} />
          <InfoRow label="Website:" value={program.website} isPrimary={true} />
        </View>

        <TouchableOpacity style={styles.applyButton} activeOpacity={0.8}>
          <Text style={styles.applyButtonText}>Apply Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: COLORS.background },
  header: {
    paddingHorizontal: SIZES.padding * 1.5,
    paddingVertical: 16,
    backgroundColor: COLORS.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backButton: { paddingVertical: 4 },
  backButtonText: { fontSize: 16, color: COLORS.primary, fontWeight: '600' },
  container: { padding: SIZES.padding * 1.5, paddingBottom: 40 },
  universityName: { fontSize: 28, fontWeight: '800', color: COLORS.textDark, marginBottom: 12, lineHeight: 34 },
  countryBadge: {
    alignSelf: 'flex-start',
    backgroundColor: '#E0F2FE',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
    marginBottom: 24,
  },
  countryText: { fontSize: 14, fontWeight: '700', color: COLORS.primary },
  infoBox: {
    backgroundColor: COLORS.cardBackground,
    padding: 16,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: COLORS.border,
    marginBottom: 24,
  },
  sectionTitle: { fontSize: 18, fontWeight: '700', color: COLORS.textDark, marginBottom: 12 },
  description: { fontSize: 16, color: COLORS.textMuted, lineHeight: 24, marginBottom: 30 },
  applyButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 16,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
  },
  applyButtonText: { color: '#FFFFFF', fontSize: 16, fontWeight: '700' }
});