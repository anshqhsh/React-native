import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useCallback, useRef, useState} from 'react';
import {
  Alert,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {RootStackParamList} from '../../App';

type SignInScreenProps = NativeStackScreenProps<RootStackParamList, 'SignIn'>;

const SignIn = ({navigation}: SignInScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // 커서를 옮겨 줄 수 있음
  const emailRef = useRef<TextInput | null>(null);
  const passwordRef = useRef<TextInput | null>(null);
  const onChangeEmail = useCallback((text: string) => {
    setEmail(text.trim());
  }, []);
  const onChangePassword = useCallback((text: string) => {
    setPassword(text.trim());
  }, []);
  const onSubmit = useCallback(() => {
    if (!email || !email.trim()) {
      return Alert.alert('알림', '이메일을 입력해주세요.');
    }
    if (!password || !password.trim()) {
      return Alert.alert('알림', '비밀번호를 입력해주세요.');
    }
    Alert.alert('알림', '로그인 되었습니다.');
  }, [email, password]);

  const toSignUp = useCallback(() => {
    navigation.navigate('SignUp');
  });
  const canGoNext = email && password;
  return (
    <View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>이메일</Text>
        <TextInput
          style={styles.textInput}
          placeholder="이메일을 입력해주세요"
          value={email}
          onChangeText={onChangeEmail}
          importantForAutofill="yes"
          autoComplete="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          returnKeyType="next" // 키보드 키 변경
          onSubmitEditing={() => {
            passwordRef.current?.focus();
          }}
          blurOnSubmit={false} // 키보드가 내려가지 않게 - detail
          ref={emailRef}
          clearButtonMode="while-editing" // iphone 한번에 지우는 버튼
        />
      </View>
      <View style={styles.inputWrapper}>
        <Text style={styles.label}>비밀번호</Text>
        <TextInput
          style={styles.textInput}
          placeholder="비밀번호를 입력해주세요"
          value={password}
          onChangeText={onChangePassword}
          importantForAutofill="yes"
          autoComplete="password"
          textContentType="emailAddress"
          secureTextEntry
          ref={passwordRef}
          onSubmitEditing={onSubmit} // enter 동작
        />
      </View>
      <View style={styles.buttonZone}>
        <Pressable
          onPress={onSubmit}
          style={
            !canGoNext
              ? styles.loginBtn
              : StyleSheet.compose(styles.loginBtn, styles.loginBtnActive)
          }
          disabled={!canGoNext}>
          <Text style={styles.loginBtnText}>로그인</Text>
        </Pressable>
        <Pressable onPress={onSubmit} style={styles.loginBtn}>
          <Text style={styles.loginBtnText}>회원가입하기</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    padding: 20,
  },
  buttonZone: {
    alignItems: 'center',
  },
  loginBtn: {
    backgroundColor: 'gray',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  loginBtnActive: {
    backgroundColor: 'blue',
  },
  loginBtnText: {
    color: 'white',
  },
  textInput: {
    padding: 5,
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default SignIn;
