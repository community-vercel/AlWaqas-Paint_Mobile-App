import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ActivityIndicator, Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { useState, useEffect } from 'react';
import * as Network from 'expo-network';
import * as NavigationBar from 'expo-navigation-bar';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    // Check network connectivity
    const checkNetwork = async () => {
      try {
        const networkState = await Network.getNetworkStateAsync();
        setIsConnected(networkState.isConnected && networkState.isInternetReachable);
      } catch (error) {
        console.error('Network check failed:', error);
        setIsConnected(false);
      }
    };

    const configureNavigationBar = async () => {
      if (Platform.OS === 'android') {
        try {
          await NavigationBar.setVisibilityAsync('hidden');
          await NavigationBar.setBehaviorAsync('overlay-swipe'); 
          await NavigationBar.setBackgroundColorAsync('#ffffff');
        } catch (error) {
          console.error("Couldn't configure navigation bar:", error);
        }
      }
    };

    checkNetwork();
    configureNavigationBar();

    const interval = setInterval(checkNetwork, 10000);

    return () => clearInterval(interval);
  }, []);

  const handleWebViewLoad = () => {
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isConnected ? (
        <>
          <WebView
            source={{ uri: 'https://www.alwaqaspaint.com' }}
            style={styles.webview}
            onLoadEnd={handleWebViewLoad}
            onError={() => setIsLoading(false)}
          />
          {isLoading && (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#0000ff" />
              <Text style={styles.loadingText}>Loading...</Text>
            </View>
          )}
        </>
      ) : (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>No Internet Connection</Text>
          <Text style={styles.errorSubText}>Please connect to a network and try again</Text>
        </View>
      )}
      <StatusBar hidden={true} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  webview: {
    flex: 1,
    width: '100%',
    margin: 0,
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  errorText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  errorSubText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});