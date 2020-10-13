import React from 'react';
import { Container, FormWrap, FormContent, Form, Icon, FormH1, FormLabel, FormInput, FormBtn, Text } from './SigninEle';

const Signin = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Dollar</Icon>
          <FormContent action="#">
            <Form>
              <FormH1>Sign in to account</FormH1>
              <FormLabel htmlFor='for'>Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlFor='for'>Password</FormLabel>
              <FormInput type='password' required />
              <FormBtn type='sumbit'>Login</FormBtn>
              <Text>Forgot password?</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin
