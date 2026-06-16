import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';

export default function LandingPage({ navigation }) {
  return (
    <SafeAreaView style={styles.safeArea}>
      

      <View style={styles.header}>
        <Image 
          source={require('../../assets/logo.png')} 
          style={styles.logo}
          resizeMode="contain"
        />
      </View>


      <View style={styles.container}>
        

        <Text style={styles.title}>
          We make Studying Abroad Simple, Easy and Fast
        </Text>
        
        <Text style={styles.subtitle}>
          Intersecting Global Success, Dreams, and Opportunities with Excellence
        </Text>

        <View style={styles.statsContainer}>
          <View style={styles.avatarGroup}>
            <View style={[styles.avatar, { backgroundColor: COLORS.accent, zIndex: 3 }]}>
              <Text style={[styles.avatarText, { color: '#FFF' }]}>L</Text>
            </View>
            <View style={[styles.avatar, { backgroundColor: '#F1F5F9', left: -12, zIndex: 2 }]}>
              <Text style={[styles.avatarText, { color: COLORS.textDark }]}>D</Text>
            </View>
            <View style={[styles.avatar, { backgroundColor: '#E0F2FE', left: -24, zIndex: 1 }]}>
              <Text style={[styles.avatarText, { color: COLORS.primary }]}>H</Text>
            </View>
          </View>
          <Text style={styles.statsText}>10k+ Student</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image 
            source={require('../../assets/hero.png')} 
            style={styles.heroImage}
            resizeMode="contain"
          />
        </View>


        <TouchableOpacity 
          style={styles.button}
          activeOpacity={0.8}
          onPress={() => navigation.navigate('UniversityList')} 
        >
          <Text style={styles.buttonText}>Explore Universities</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  header: {
    width: '100%',
    paddingHorizontal: SIZES.padding * 1.5,
    paddingVertical: 12,
    backgroundColor: COLORS.cardBackground,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
    alignItems: 'flex-start', 
  },
  logo: {
    width: 160, 
    height: 45,
  },
  container: {
    flex: 1,
    padding: SIZES.padding * 1.5,
  },
  title: {
    fontSize: 34,
    fontWeight: '800',
    color: COLORS.textDark,
    lineHeight: 42,
    marginTop: 10,
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textMuted,
    lineHeight: 24,
    marginBottom: 24,
  },
  statsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  avatarGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: COLORS.background,
  },
  avatarText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  statsText: {
    fontSize: 14,
    fontWeight: '600',
    color: COLORS.textDark,
    marginLeft: -10,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  heroImage: {
    width: '100%',
    height: '100%', 
  },
  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 18,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  }
});