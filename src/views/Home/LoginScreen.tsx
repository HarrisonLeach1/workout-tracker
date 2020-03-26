import React from 'react';
import Background from '../../imageComponents/Background';
import Logo from '../../imageComponents/Logo';
import { Auth } from 'aws-amplify';
import { Theme, withTheme, Text, Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';

export interface ILoginScreenProps {
  theme: Theme;
}

const LoginScreen: React.FC<ILoginScreenProps> = ({ theme }) => (
  <Background>
    <Logo />
    <Text style={{ ...styles.header, color: theme.colors.primary }}>Workout Tracker</Text>
    <Text style={{ ...styles.text, color: theme.colors.accent }}>
      {'Welcome.\n Login to start using Workout Tracker.'}
    </Text>
    <Button
      style={styles.button}
      labelStyle={styles.buttonText}
      mode="contained"
      onPress={() => Auth.federatedSignIn()}
    >
      Login
    </Button>
    <Button
      style={{ ...styles.button, backgroundColor: theme.colors.surface }}
      labelStyle={styles.buttonText}
      mode="outlined"
      onPress={() => Auth.federatedSignIn()}
    >
      Sign Up
    </Button>
  </Background>
);

export default withTheme(LoginScreen);

const styles = StyleSheet.create({
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingVertical: 14,
  },
  text: {
    fontSize: 16,
    lineHeight: 26,
    textAlign: 'center',
    marginBottom: 14,
  },
  button: {
    width: '100%',
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 15,
    lineHeight: 26,
  },
});
