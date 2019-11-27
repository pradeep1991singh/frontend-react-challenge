import PropTypes from 'prop-types'

const ItemLayout = ({ children, style }) => (
  <div style={style}>
    {children}
    <style jsx>{`
      div {
        width: 450px;
        max-width: calc(100vw - 16px);
        margin: 8px auto;
        background-color: var(--bg-color);
        padding: 16px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        cursor: pointer;
      }
      div:focus{
        box-shadow: 0 6px 6px rgba(0, 0, 0, 0.05);
      }
    `}</style>
  </div>
)

ItemLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  style: PropTypes.object,
}

ItemLayout.defaultProps = {
  style: {},
}

export default ItemLayout
