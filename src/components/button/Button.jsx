import './Button.scss'

const Button = ({ children, size = 16, variant = 'primary', onClick = () => {}, ...props }) => {
  return (
    <span
      {...props}
      className={variant === 'primary' ? 'primary-btn' : 'secondary-btn'}
      style={{ fontSize: size }}
      onClick={() => onClick()}
    >
      {children}
    </span>
  )
}

export default Button
