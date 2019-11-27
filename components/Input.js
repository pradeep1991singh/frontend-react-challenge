import PropTypes from 'prop-types'
import { Container, Loader } from 'components'

const InputBox = ({ type, value, placeholder, onChange, onKeyDown, getRef, style, containerStyle, isLoader }) => (
  <div>
    <Container
      containerClass="input-container"
      style={containerStyle}
      >
      <input
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onKeyDown={onKeyDown}
        style={style}
        ref={input => getRef(input)}
      />
      {isLoader && <Loader style={{float: 'right', position: 'relative', margin: '5px'}} />}
    </Container>
    <style jsx>{`
      input {
        padding: 16px 55px 16px 16px;
        width: 100%;
        font-size: 20px;
        border: none;
      }
      input:focus {
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
        outline: 0;
      }
    `}</style>
  </div>
)

InputBox.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  getRef: PropTypes.func,
  style: PropTypes.object
}

InputBox.defaultProps = {
  type: 'text',
  value: '',
  placeholder: 'Type here',
  onChange: () => {},
  getRef: () => {},
  style: {}
}

export default InputBox
