const Button = ({ textLabel, onSubmit }) => {
  


  return (
    <button onClick={onSubmit}className="bBtn">{textLabel}</button>
)
}

export default Button;