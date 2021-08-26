import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {GradientContext} from '../context/GradientContext';

interface Props {
  children: JSX.Element | JSX.Element[];
}
const GradientBackground = ({children}: Props) => {
  const {colors} = useContext(GradientContext);

  return (
    <LinearGradient
      colors={[colors.primary, colors.secundary, '#FFF']}
      style={styles.linearGradient}
      start={{x: 0.1, y: 0.1}}
      end={{x: 0.5, y: 0.7}}>
      {children}
    </LinearGradient>
  );
};

export default GradientBackground;

// Later on in your styles..
var styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
