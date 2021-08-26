import ImageColors from 'react-native-image-colors';

export const getColorsImage = async (uri: string) => {
  const result = await ImageColors.getColors(uri, {
    fallback: '#228B22',
    cache: false,
    key: 'unique_key',
  });
  let primary;
  let secondary;
  switch (result.platform) {
    case 'android':
      // android result properties
      primary = result.dominant;
      secondary = result.average;
      return [primary, secondary];
    case 'ios':
      // iOS result properties
      primary = result.primary;
      secondary = result.secondary;
      return [primary, secondary];
    default:
      throw new Error('Unexpected platform key');
  }
};
