import {useUserInfoState} from '@src/atom/user';
import {Button} from '@src/components/Button';
import {ButtonSwitch} from '@src/components/ButtonSwitch';
import {Container} from '@src/components/Container';
import {Input} from '@src/components/Input';
import {TextStories} from '@src/components/TextStories';
import {CommunityRouteScreenProps, ScreensName} from '@src/routes/types';
import {MARGIN_TOP_DEVICE} from '@src/ultis/constants';
import {validateEmail, validatePhone} from '@src/ultis/validate';
import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert} from 'react-native';

const CommunityScreen: React.FC<
  CommunityRouteScreenProps<ScreensName.CommunityScreen>
> = () => {
  const [user, setUser] = useUserInfoState();
  const {handleSubmit, control} = useForm();

  const onSubmit = (data: any) => {
    setUser(data);
    Alert.alert('success', data);
  };

  const onError = (errors: any) => {
    Alert.alert('error');
  };

  const onChange = (value: boolean) => {
    console.log('value button switch', value);
  };

  return (
    <Container
      flex={1}
      background="WHITE"
      padding={[MARGIN_TOP_DEVICE, 0, 0, 0]}>
      <Input
        control={control}
        name="email"
        label="Email"
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'loi roi',
          },
          validate: validateEmail,
        }}
      />
      <Input
        control={control}
        name="phone"
        label="Phone"
        rules={{
          validate: validatePhone,
        }}
      />
      <Button label="Submit" onPress={handleSubmit(onSubmit, onError)} />

      <TextStories>Thông tin form</TextStories>
      <TextStories>{`Email: ${user?.email}`}</TextStories>
      <TextStories>{`Phone: ${user?.phone}`}</TextStories>
      <Container flexDirection="row">
        <TextStories>Button Switch: </TextStories>
        <ButtonSwitch onChange={onChange} value={true} />
      </Container>
    </Container>
  );
};

export {CommunityScreen};
