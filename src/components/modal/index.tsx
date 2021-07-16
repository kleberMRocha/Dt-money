import React, { useState } from 'react';
import Modal from 'react-modal';
import {customStyles} from './style';

interface IModal{
    isOpen: boolean;
    handleOpenModal: (value:boolean) => void 
}

export const ModalTdMoney:React.FC<IModal> = ({isOpen, handleOpenModal}) => {
 

    return ( 
        <Modal
        style={customStyles}
          isOpen={isOpen}
          onRequestClose={() => handleOpenModal(false)}
          contentLabel="Example Modal"
        >
          <h2>Hello</h2>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>);

};