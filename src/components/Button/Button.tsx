import * as React from 'react';
import { BtnColor, BtnSize, BtnStyle } from './index';
import './Button.css';

interface Props {
    children:any,
    btnColor:BtnColor,
    btnSize:BtnSize,
    btnStyle:BtnStyle
}

export const Button: React.FunctionComponent<Props> = ({btnColor, btnSize, btnStyle, children}) => {

    const checkColor = btnColor ? btnColor : BtnColor.PRIMARY;
    const checkSize = btnSize ? btnSize : BtnSize.SMALL;
    const checkStyle = btnStyle ? btnStyle : BtnStyle.RECTANGLE;

  return (
    <div className={`btn ${checkColor} ${checkSize} ${checkStyle}`}>
        {children}
    </div>
  );
};