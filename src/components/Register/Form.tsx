import * as React from 'react';
import { BtnColor, BtnSize, BtnStyle } from '../Button';
import { Button } from '../Button/Button';

interface Props {
}

const Form: React.FunctionComponent<Props> = (props) => {
  return (
    <>
    <form className='register-form'>
        <h1>Sign Up</h1>
        <div className="form-container-wrapper">
        <div className="form-container">
            <label>Name</label>
            <input type="text" name="" id="" />
        </div>
        <div className="form-container">
            <label>Email</label>
            <input type="text" name="" id="" />
        </div>
        </div>
        <div className="form-container">
            <label>Password</label>
            <input type="text" name="" id="" />
        </div>
        <div className="form-container">
            <label>ConfirmPassword</label>
            <input type="text" name="" id="" />
        </div>
        <div className="form-container">
            <label>Date Of Birth</label>
            <input type="date" name="" id="" />
        </div>
        <div className="form-container-button">
            <Button btnColor={BtnColor.RED} btnSize={BtnSize.MEDIUM} btnStyle={BtnStyle.ROUND}>Sign Up</Button>
        </div>
    </form>
    </>
  );
};

export default Form;
