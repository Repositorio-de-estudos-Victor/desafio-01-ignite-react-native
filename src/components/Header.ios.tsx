import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Switch } from 'react-native';

interface HeaderProps {
  handleTheme: () => void;
  enabled: boolean;
}

export function Header({ handleTheme, enabled}: HeaderProps) {

  return (
    <SafeAreaView style={enabled ? styles.containerDark : styles.container}>
      <View style={enabled ? styles.headerDark : styles.header}>
        <Text style={styles.headerText}>to.</Text>
        <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
        <Switch
          trackColor={{ false: "#988BC7", true: "#FF79C6" }}
          ios_backgroundColor="#988BC7"
          onValueChange={handleTheme}
          value={enabled}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#273FAD',
  },
  header: {
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerDark: {
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  containerDark: {
    backgroundColor: '#483C67',
  }
});
