import { Linking } from 'expo';
import * as WebBrowser from 'expo-web-browser';
import { Platform } from 'react-native';
import awsconfig from '../../aws-exports';

// Use expo web browser to open the Hosted UI
// Amplify auth currently does not work well with expo:
// https://github.com/aws-amplify/amplify-js/issues/4244#issuecomment-586845322

const amplifyConfig = {
  ...awsconfig,
  oauth: {
    ...awsconfig.oauth,
    urlOpener: async (url, redirectUrl) => {
      const { type, url: newUrl } = (await WebBrowser.openAuthSessionAsync(url, redirectUrl)) as any;

      if (type === 'success') {
        await WebBrowser.dismissBrowser();

        if (Platform.OS === 'ios') {
          return Linking.openURL(newUrl);
        }
      }
    },
  },
};

const expoScheme = 'workouttracker://';
// Need to pass the correct redirectUrl to the web browser.
let createdRedirectUrl = Linking.makeUrl();
if (createdRedirectUrl.startsWith('exp://1')) {
  // handle simulator(localhost) and device(Lan)
  createdRedirectUrl = createdRedirectUrl + '/--/';
} else if (createdRedirectUrl === expoScheme) {
  // dont do anything
} else {
  // handle the expo client
  createdRedirectUrl = createdRedirectUrl + '/';
}

amplifyConfig.oauth.redirectSignIn = createdRedirectUrl;
amplifyConfig.oauth.redirectSignOut = createdRedirectUrl;

export default amplifyConfig;
