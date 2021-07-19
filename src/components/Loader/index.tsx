import React from 'react';
import { Loader as LoaderModl } from './style';

export const Loader: React.FC = () => {
  return (
    <LoaderModl>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </LoaderModl>
  );
};
