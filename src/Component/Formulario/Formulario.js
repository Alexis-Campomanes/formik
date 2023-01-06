import React from 'react';
import { UilPadlock } from '@iconscout/react-unicons';
import './Formulario.scss';
import { useFormik } from 'formik';
import * as Yup from 'yup';





const Formulario = () => {
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: Yup.object({
        email: Yup.string().email('Invalid email address')
        .required('Required'),
        password: Yup.string()
        .min(6, 'Must be 6 characters or less')
        .max(12, 'Maximum must have 12 characters')
        .required('Requiered'),  
      }),
      onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
      },
    })
    return (
        <div className='formulario'>
          <div className='logo'>
            <UilPadlock
              color= '#ffffff'
            />
          </div>
          <div className='signIn'>
            <span>
              Sign in
            </span>
          </div>
            <form>
              <div className='form-conteiner'>
                <input
                id='email'
                name='email' 
                type="email" 
                placeholder='Email Address *' 
                onChange={ formik.handleChange }
                onBlur={ formik.handleBlur }
                value={ formik.values.email }
                />
                {
                  formik.touched.email && formik.errors.email ? (
                    <div style={{color:'red'}}>
                    {
                      formik.errors.email
                    }
                    </div>
                  ) : null
                }
                <input
                id='password'
                name='password' 
                type="password" 
                placeholder='Password *'
                onChange={ formik.handleChange }
                onBlur= { formik.handleBlur }
                value={ formik.values.password }
                />
                {
                  formik.touched.password && formik.errors.password ? (
                    <div style={{color:'red'}}>
                      {
                        formik.errors.password
                      }
                    </div>
                  ) : null
                }
              </div>
                  <button className='f-btn' type='submit'>sign in </button>
                    <div className='f-forgot'>
                      <span>
                        Forgot password?
                      </span>
                      <span>
                        Don't have an account? sign Up
                      </span>
                    </div>
            </form> 
              <div className='copyright'>
                <span>
                  Copyright © <span className='website'>Your Website</span> 2023.
                </span>
              </div>
        </div>   

    );
}

export default Formulario;

