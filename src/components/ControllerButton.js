const ControllerButton = ({ label, onClick }) => {
  return <button className='setup-controller__button' onClick={onClick}>{label}</button>;
};

export default ControllerButton;
