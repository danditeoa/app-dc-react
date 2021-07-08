import React from 'react'
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import "./back-button.scss";

function BackButton() {
  const history = useHistory();
  return (
    <div className="back" onClick={()=> history.goBack()}>
      <ArrowBackIcon />       
    </div>
  )
}

export default BackButton