import React, { useEffect, useRef } from 'react';
import { Modal, Animated, TouchableOpacity, BackHandler, View, StyleSheet, Dimensions, Pressable, Text } from 'react-native';
import { FiltersProducts } from './FiltersProducts';

export const ModalFilters = ({ visible, onClose }) => {

const { width } = Dimensions.get('window');
  const slideAnim = useRef(new Animated.Value(width)).current;



  const slideIn = () => {
    Animated.timing(slideAnim, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnim, {
      toValue: width,
      duration: 300,
      useNativeDriver: true,
    }).start()
  };

;

  useEffect(() => {
    if (visible) {
        slideIn();
        return
    }
    slideOut();
  }, [visible]);


  return (
    <Modal visible={visible} transparent animationType="none" onRequestClose={() => onClose()}>
      <View className='flex-1' >

        <Animated.View
        className="bg-white w-full h-full absolute "
          style={[{ transform: [{ translateX: slideAnim }] }]}
        >

            <FiltersProducts onclose={onClose}></FiltersProducts>

        </Animated.View>

      </View>
    </Modal>
  );
};


const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  modalContainer: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

