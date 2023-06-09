import {atom, useRecoilState, useSetRecoilState, useRecoilValue} from 'recoil';

const USER_INFO = atom({
  key: 'USER_STATE', // unique ID (with respect to other atoms/selectors)
  default: {
    email: '',
    phone: '',
  }, // default value (aka initial value)
});

export const useUserInfoState = () => {
  return useRecoilState(USER_INFO);
};

export const useUserInfoStateValue = () => {
  return useRecoilValue(USER_INFO);
};

export const useSetUserInfoState = () => {
  return useSetRecoilState(USER_INFO);
};
