import { FC } from 'react';
import { Welcome } from '../Auth/Auth';
import Form from './Form';
import './style.css';

export const Register: FC = () => {
  return (
    <>
       <div className='wrapper-register'>
          <div className="register">
            <Welcome />
            <Form />
          </div>
       </div>
    </>
  );
};