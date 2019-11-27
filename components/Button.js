import PropTypes from 'prop-types'

const Button = ({ style, onClick, disabled, children }) => (
<button style={style} onClick={onClick} disabled={disabled}>
    {children}
    <style jsx>{`
      button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        border-radius: 5px;
        color: white;
        height: 40px;
        width: 100px;
        background-color: var(--primary-color);
        box-shadow: 0 2px 4px 0 var(--primary-color);
      }
      button:hover {
        background-color:  var(--secondary-color);
      }
      button:focus {
        outline: 0;
      }
    `}</style>
  </button>
)

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
    PropTypes.string,
  ]),
}

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  children: null,
}

export default Button
