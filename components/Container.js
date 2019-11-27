import PropTypes from 'prop-types'

const Container = ({ children, style, containerClass }) => (
  <div style={style} className={containerClass}>
      {children}
    <style jsx>{`
      div {
        width: 450px;
        max-width: calc(100vw - 10px);
        margin: 8px auto;
        background-color: var(--container-bg-color);
      }
    `}</style>
  </div>
)

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  style: PropTypes.object
}

Container.defaultProps = {
  style: {},
}

export default Container
