import React from 'react';
import './sign-in-and-sing-up-page.styles.scss';
import SignIn from 'components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SingInSingUpPage = () => {
  return (
    <div className="sign-in-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SingInSingUpPage;
