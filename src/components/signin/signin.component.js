import React from 'react';

import './signin.style.scss';

import CustomButton from '../custom_button/custom_button.component';
import FormInput from '../form_input/form_input.component';


import {auth,signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super();
        this.state={
            email:'',
            password:''
        }

    }
   

    handleClick=async event=>{
        event.preventDefault()
        const {email,password}=this.state;
        try{
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'',password:''})
        }catch(error){
            console.log(error);
        }
      
    }
      handleChange=(event)=>{
        const {name,value}=event.target;
         this.setState({[name]:value})
         
        
    }

   render(history){
       
        return(
            <div className='sign-in'>
            <h2 className='center'>I already have an account</h2>
            <span className='center'>Sign in with your email and password</span>
                <form onSubmit ={this.handleClick}>  

                    <FormInput 
                        type='email' 
                        name='email' 
                        label='email'
                        handleChange={this.handleChange}
                        value={this.state.email} 
                        required
                    />
                    
                    <FormInput 
                        type='password' 
                        name='password'
                        label='password' 
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        required
                    />
                    <div className='buttons'>
                    <CustomButton type='submit'>Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle}>
                       
                        Sign In with Google
                    </CustomButton>
                    </div>
                    
                </form>
                    

                
                <p className='buttons center'>Don't have an account?</p>
                <CustomButton className='register' >Create Account</CustomButton>
            </div>
        );
   }
}

export default SignIn;