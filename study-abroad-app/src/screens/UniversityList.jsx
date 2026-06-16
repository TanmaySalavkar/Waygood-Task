import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';
import programs from '../data/data.json';
import ProgramCard from '../components/Card';

export default function UniversityList({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Explore Universities</Text>
      </View>

      <FlatList
        data={programs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <ProgramCard 
            program={item} 
            onPress={() => navigation.navigate('Details', { program: item })} 
          />
        )}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />
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
  headerTitle: { fontSize: 24, fontWeight: '700', color: COLORS.textDark },
  listContainer: { padding: SIZES.padding * 1.5, paddingBottom: 40 },
});