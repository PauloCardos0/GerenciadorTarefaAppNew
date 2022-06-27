import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from "./srn/Task"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Vai começar a bagaceira</Text>
      <StatusBar style="auto" />

      <Task></Task>
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
});
