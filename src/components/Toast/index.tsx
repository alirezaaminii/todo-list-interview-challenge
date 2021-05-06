import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

const ToastComponent = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={parseInt(String(process.env.NEXT_APP_TOASTER_CLOSE_TIMEOUT), 10)}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      style={{zIndex: 999999, direction: 'rtl'}}
    />
  );
};

export default ToastComponent;
