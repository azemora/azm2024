import React from 'react';
import styles from '../style';

const Buttaoemail = ({ onClick, children }) => (
  <button
    type="button"
    onClick={onClick}
    className={`py-6 px-8 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles} my-4`}
  >
    {children}
  </button>
);

export default Buttaoemail;