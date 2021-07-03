import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <div>
      <button
        className="btn"
        onClick = {onClick}  
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  )
}

Button.defaultProps = {
  color: 'steelblue'
}

Button.protoTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func
}
export default Button