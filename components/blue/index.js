import React, {useState, useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import RNBluetoothClassic from 'react-native-bluetooth-classic';

const BlueComponent = () => {
  const [isBluetoothAvailable, setIsBluetoothAvailable] = useState(false);
  const [isBluetoothEnabled, setIsBluetoothEnabled] = useState(false);

  useEffect(() => {
    checkBluetoothAvailability();
    checkBluetoothEnabled();
  }, []);

  const checkBluetoothAvailability = async () => {
    try {
      const available = await RNBluetoothClassic.isBluetoothAvailable();
      setIsBluetoothAvailable(available);
    } catch (error) {
      console.error('Error checking Bluetooth availability:', error);
    }
  };

  const checkBluetoothEnabled = async () => {
    try {
      const enabled = await RNBluetoothClassic.isBluetoothEnabled();
      setIsBluetoothEnabled(enabled);
    } catch (error) {
      console.error('Error checking Bluetooth enabled status:', error);
    }
  };

  const openBluetoothSettings = () => {
    RNBluetoothClassic.openBluetoothSettings();
  };

  return (
    <View>
      <Text>Bluetooth Available: {isBluetoothAvailable ? 'Yes' : 'No'}</Text>
      <Text>Bluetooth Enabled: {isBluetoothEnabled ? 'Yes' : 'No'}</Text>
      <Button title="Open Bluetooth Settings" onPress={openBluetoothSettings} />
    </View>
  );
};

export default BlueComponent;
