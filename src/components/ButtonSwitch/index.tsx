import {COLORS} from '@src/config/theme/colors';
import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

interface ButtonSwitchProps {
  onChange?: (value: boolean) => void;
  value?: boolean;
}

export const ButtonSwitch: React.FC<ButtonSwitchProps> = ({
  onChange,
  value,
}) => {
  const _switch = useSharedValue(0);
  const [valueSwitch, setValueSwitch] = React.useState<boolean>(value || false);

  React.useEffect(() => {
    if (value) {
      _switch.value = withSpring(10);
    }
  }, []);

  const onPressSwitch = () => {
    setValueSwitch(!valueSwitch);
    if (valueSwitch) {
      _switch.value = withSpring(0);
      onChange && onChange(false);
    } else {
      _switch.value = withTiming(10);
      onChange && onChange(true);
    }
  };

  const styleDot = useAnimatedStyle(() => {
    return {
      transform: [{translateX: _switch.value}],
      backgroundColor: _switch.value === 10 ? COLORS.PRIMARY : COLORS.BG_500,
    };
  });

  const styleLine = useAnimatedStyle(() => {
    return {
      backgroundColor:
        _switch.value === 10 ? COLORS.PRIMARY_500 : COLORS.BG_400,
    };
  });

  return (
    <Animated.View>
      <Animated.View style={[styles.line, styleLine]} />
      <TouchableOpacity
        style={styles.boxSwitch}
        onPress={onPressSwitch}
        activeOpacity={0.8}>
        <Animated.View style={[styles.view, styleDot]} />
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  view: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: COLORS.PRIMARY_300,
  },
  line: {
    backgroundColor: COLORS.BG_400,
    height: 15,
    width: 30,
    borderRadius: 10,
  },
  boxSwitch: {
    height: 15,
    justifyContent: 'center',
    position: 'absolute',
  },
});
