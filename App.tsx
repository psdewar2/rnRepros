/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import YouTube from 'react-native-youtube';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};

const throwawayKey = 'AIzaSyD7EC8mi2lqqgOBGsBpH5sx4Fie38uju2w'; // disabling after issue is fixed

export function YoutubeTestView() {
  return (
    <YouTube
      videoId={'bmiZzjaDe9s'}
      play={true}
      fullscreen={false}
      loop={true}
      style={{height: 200}}
      apiKey={throwawayKey}
      origin={'https://lyrist.app/'}
      showinfo={false}
      rel={false}
      modestbranding={true}
      onProgress={() => {}}
    />
  );
}

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    // actual behavior
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen component={YoutubeTestView} name={'YoutubeTestView'} />
      </Stack.Navigator>
    </NavigationContainer>
    // Step 3. Comment out previous lines 93 - 97 then uncomment lines 99 - 126 to see expected behavior
    //   <SafeAreaView style={backgroundStyle}>
    //     <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
    //     <YoutubeTestView />
    //     <ScrollView
    //       contentInsetAdjustmentBehavior="automatic"
    //       style={backgroundStyle}>
    //       <Header />
    //       <View
    //         style={{
    //           backgroundColor: isDarkMode ? Colors.black : Colors.white,
    //         }}>
    //         <Section title="Step One">
    //           Edit <Text style={styles.highlight}>App.tsx</Text> to change this
    //           screen and then come back to see your edits.
    //         </Section>
    //         <Section title="See Your Changes">
    //           <ReloadInstructions />
    //         </Section>
    //         <Section title="Debug">
    //           <DebugInstructions />
    //         </Section>
    //         <Section title="Learn More">
    //           Read the docs to discover what to do next:
    //         </Section>
    //         <LearnMoreLinks />
    //       </View>
    //     </ScrollView>
    //   </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
