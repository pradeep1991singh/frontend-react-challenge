import Head from 'next/head'
import PropTypes from 'prop-types'
import { SwitchTheme } from 'components'

const PageHead = ({ title }) => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </Head>
)

PageHead.propTypes = {
  title: PropTypes.string,
}

PageHead.defaultProps = {
  title: 'Frontend Challenge',
}

const PageLayout = ({ children, title }) => (
  <div id="page">
    <PageHead title={title} />
    <SwitchTheme />
    {children}
    <style jsx global>{`
      :root {
        --primary-color: #302AE6;
        --secondary-color: #536390;
        --font-color: #424242;
        --bg-color: #f6f6f6;
        --container-bg-color: #fff;
        --heading-color: #292922;
      }
      [data-theme="dark"] {
        --primary-color: #9A97F3;
        --secondary-color: #818cab;
        --font-color: #e1e1ff;
        --bg-color: #161625;
        --container-bg-color: #161625;
        --heading-color: #818cab;
      }
      body {
        font-family: "Gill Sans", sans-serif;
        margin: 0;
        background: #f6f6f6;
        background-color: var(--bg-color);
        color: var(--font-color);
        max-width: 90%;
        margin: 0 auto;
        font-size: calc(1rem + 0.25vh);
      }
      * {
        box-sizing: border-box;
      }
      h1, h2, h3, h4 {
        color: var(--heading-color);
      }
      a {
        color: var(--primary-color);
      }
      .post-meta {
        color: var(--secondary-color);
      }
    `}</style>
  </div>
)

PageLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
    .isRequired,
  title: PropTypes.string,
}

export default PageLayout
