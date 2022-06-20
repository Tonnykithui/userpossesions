import * as React from 'react';
import { BtnColor, BtnSize, BtnStyle } from '../Button';
import {Button} from '../Button/Button';
import './Auth.css';

interface Props {
}

export const Welcome: React.FunctionComponent<Props> = (props) => {
  return (
    <>
      <div className="welcome-wrapper">
        <div className="welcome">
            <h1>Welcome!</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro maxime vitae qui eaque dolore doloribus excepturi at voluptatem eum!</p>
            <Button btnColor={BtnColor.RED} btnSize={BtnSize.LARGE} btnStyle={BtnStyle.ROUND}>
                Read More
            </Button>
        </div>
      </div>
    </>
  );
};