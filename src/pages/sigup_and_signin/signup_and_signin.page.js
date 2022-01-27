import React from 'react';

import './signup_and_signin.style.scss';

import SignIn from '../../components/signin/signin.component'
import SignUp from '../../components/signup/signup.component'

const  SignUpAndSignIn=()=>(
<div>
    <SignIn/>
    <SignUp/>
</div>
)


export default SignUpAndSignIn;