import React from 'react'
import { useHistory } from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

function BackButton() {
  const history = useHistory();
  return (
    <div onClick={()=> history.goBack()}>
      <ArrowBackIcon />       
    </div>
  )
}

export default BackButton