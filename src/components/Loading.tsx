/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator} from 'react-native';

const Loading = () => {
  return (
    <ActivityIndicator
      style={{flex: 1}}
      accessibilityLabel="Cargando"
      color="black"
      size={38}
    />
  );
};

export default Loading;
