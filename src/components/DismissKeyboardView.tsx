import React from 'react';
import {
  TouchableWithoutFeedback,
  Keyboard,
  StyleProp,
  ViewStyle,
} from 'react-native';

// 키보드 있을때 드래그, 화면 올려줌 같은걸 세팅
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

/**
 * avoid keyboard layout
 * @param param0
 * @returns
 */

// React.FC = 함수컴포넌트 타입 <> 내부 props 타입 ViewStyle스타일의 타입 외워랏
const DismissKeyboardView: React.FC<{
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}> = ({children, ...props}: any) => (
  <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAwareScrollView {...props} style={props.style}>
      {children}
    </KeyboardAwareScrollView>
  </TouchableWithoutFeedback>
);

export default DismissKeyboardView;
