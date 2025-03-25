import { React} from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao app da Gossip Girls</Text>
      <Text style={styles.description}>Welcome to the Gossip Girls app</Text>
      <Image style={styles.image} source={require('./assets/img/gossipgirl.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  description: {
    marginTop: 12,
    fontSize: 20,
    color: '#34495e',
  },
  image: {
    justifyContent: 'center',
    margin:20,
    width: 300,
    height: 400,
  },
});
