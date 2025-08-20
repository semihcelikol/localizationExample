import React, { use, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {initLanguage} from './i18n';
import { useTranslation } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function App() {

  useEffect(() => {
    
    // Sadece geliştirme sırasında temizlemek için, gerçek uygulamada kaldırın
    AsyncStorage.clear();

    initLanguage();
  }, []);

  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{t('welcome')}</Text>
      <Text style={styles.description}>{t('description')}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
  },
});