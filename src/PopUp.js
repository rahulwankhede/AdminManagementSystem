import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default function PopUp()
{
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button>X</button>
                 <div className='title'><h1>Record</h1></div>
                 <div className='body'></div>
                 <div className='footer'></div>
            </div>
        </div>

    );
}