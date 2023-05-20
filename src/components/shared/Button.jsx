function Button({ children, type, version, isDisabled }) {
  return (
    <button type={type} className={`btn btn-${version}`} disabled={isDisabled}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'white',
  type: 'button',
  isDisabled: false,
}

export default Button
