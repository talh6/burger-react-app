import React from 'react'
import './Backdrop.css'

const backdrop = (props) => (
    props.show ? <div className="Backdrop" onClick={props.modelClosed}></div> : null
);

export default backdrop;