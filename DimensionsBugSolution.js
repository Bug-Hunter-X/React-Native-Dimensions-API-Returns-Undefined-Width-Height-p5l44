import React, { useEffect, useState } from 'react';
import { Dimensions, View, Text } from 'react-native';

const DimensionsBugSolution = () => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({ window }) => {
      setWindowWidth(window.width);
    });
    return () => subscription?.remove();
  }, []);

  return (
    <View>
      <Text>Window Width: {windowWidth}</Text>
    </View>
  );
};

export default DimensionsBugSolution;