import PropTypes from 'prop-types'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { Container } from 'components'

export const FadeTransition = (props) => (
  <CSSTransition
    {...props}
    classNames={props.transitionName}
    timeout={{ enter: 500, exit: 300 }}
  />
)

const TransitionContainer = ({ children, style, transitionName, containerClass }) => (
  <>
    <TransitionGroup name={transitionName}>
      <Container style={style} containerClass={containerClass}>
        {children}
      </Container>
      <style jsx>{`
        .page-enter {
          opacity: 0.01;
        }
        .page-enter.page-enter-active {
          opacity: 1;
          transition: opacity 300ms ease-in;
        }
        .page-exit {
          opacity: 1;
        }
        .page-exit.page-exit-active {
          opacity: 0.01;
          transition: opacity 300ms ease-in;
        }
      `}</style>
    </TransitionGroup>
  </>
)

TransitionContainer.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  style: PropTypes.object
}

TransitionContainer.defaultProps = {
  style: {},
}

export default TransitionContainer
