import classes from './MyButton.module.css';

type props = {
  title: string,
  solid?: boolean,
  onClick?: () => any,
  type?: "button" | "submit" | "reset" | undefined,
  disabled?: boolean
}
const MyButton = (props: props) => {
  return (
    <button
      className={`${classes.Button} ${props.solid ? classes.Solid : ''}`}
      onClick={props.onClick}
      type={props.type}
      disabled={props.disabled}
    >
      {props.title}
    </button>
  )
}

export default MyButton;
