import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';
import FancyCanrd from './components/FancyCanrd';
import ActionCard from './components/ActionCard';
import NearbyPlace from './components/NearbyPlace';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FlatCards />
        <ElevatedCard />
        <FancyCanrd />
        <NearbyPlace />
        <ActionCard />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
