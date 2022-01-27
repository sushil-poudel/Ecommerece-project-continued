import React from 'react';

import './signup.style.scss';

import FormInput from '../form_input/form_input.component';
import CustomButton from '../custom_button/custom_button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';

class SignUp extends React.Component {
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleChange=(event)=>{
        const {name,value}=event.target;
        this.setState({
            [name]:value
        });
    }

    handleClick= async event=>{
        event.preventDefault();
        const{displayName,email,password,confirmPassword}=this.state;

        if (password!==confirmPassword){
            alert('password did not match')
            return;
        }

        try {

            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            });
        }
        catch(error){
            console.error(error);
        }
    }

    render(){
        return(
            <div className='sign-up'>
                <h2 className='title'>I don't have an account</h2>
                <span>sign up with email and password</span>
                <form className='sign-up-form' onSubmit={this.handleClick}>
                    <FormInput
                    type='text'
                    name='displayName'
                    label='Display Name'
                    handleChange={this.handleChange}
                    value={this.state.displayName}
                    />
                     <FormInput
                    type='email'
                    name='email'
                    label='Email'
                    handleChange={this.handleChange}
                    value={this.state.email}
                    />
                     <FormInput
                    type='password'
                    name='password'
                    label='Password'
                    handleChange={this.handleChange}
                    value={this.state.password}
                    />
                     <FormInput
                    type='password'
                    name='confirmPassword'
                    label='Confirm Password'
                    handleChange={this.handleChange}
                    value={this.state.confirmPassword}
                    />
                    <CustomButton type='submit'>Sign up </CustomButton>
                </form>
            </div>
        );
    }
}


export default SignUp;