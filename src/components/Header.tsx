import React from 'react';
import { View, Text, StatusBar, StyleSheet, Switch } from 'react-native';

interface HeaderProps {
  handleTheme: () => void;
  enabled: boolean;
}

export function Header({ handleTheme, enabled }: HeaderProps) {

  return (
    <View style={enabled ? styles.headerDark : styles.header}>
      <Text style={styles.headerText}>to.</Text>
      <Text style={[styles.headerText, { fontFamily: 'Poppins-SemiBold' }]}>do</Text>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        ios_backgroundColor="#3e3e3e"
        onValueChange={handleTheme}
        value={enabled}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#273FAD',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 24,
    color: '#FFF',
    fontFamily: 'Poppins-Regular',
  },
  headerDark: {
    paddingTop: StatusBar.currentHeight,
    paddingBottom: 44,
    backgroundColor: '#483C67',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
});
