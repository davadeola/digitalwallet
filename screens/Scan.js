import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {Camera, useCameraDevices} from 'react-native-vision-camera';

import {COLORS, SIZES, FONTS, icons, images} from '../constants';

const Scan = () => {
  const devices = useCameraDevices();
  const device = devices.back;

  const [hasPermission, setHasPermission] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      const status = await Camera.requestCameraPermission().catch(error =>
        console.log(error),
      );
      setHasPermission(status === 'authorized');
    })();
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'transparent'}}>
      {device != null && hasPermission && (
        <Camera
          style={StyleSheet.absoluteFill}
          isActive={true}
          device={device}></Camera>
      )}
    </View>
  );
};

export default Scan;
