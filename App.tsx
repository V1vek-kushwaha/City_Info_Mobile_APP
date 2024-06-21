import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCanrd from './components/FancyCanrd';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCanrd />
        <FancyCanrd />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
