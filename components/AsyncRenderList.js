import { Component } from 'react'
import PropTypes from 'prop-types'
import { fetcher } from 'services'

const RenderList = ({ data = [], valueKey }) => (
  <>
    <ul>
      {data.map(item => (
        <li style={{ listStyle: "none" }} key={item.id}>
          {item[valueKey]}
        </li>
      ))}
    </ul>
    <style jsx>{`
      ul {
        padding: 0px;
        margin-top: 10px;
        font-weight: 100;
      }
    `}</style>
  </>)

class AsyncRenderList extends Component {
  state = {
    renderList: []
  }

  componentDidMount() {
    this.getApiUrlData()
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.apiUrl !== this.props.apiUrl) this.getApiUrlData()
  }

  getApiUrlData = () => {
    const { apiUrl, valueKey } = this.props
    fetcher(apiUrl)
      .then(response => {
        let renderList = this.state.renderList
        renderList.push(<RenderList data={response.data} valueKey={valueKey} />)
        this.setState({ renderList })
      })
      .catch(error => console.log(error))
  }

  render () {
    return (
      <>
        {this.state.renderList}
      </>
    )
  }
}

AsyncRenderList.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  valueKey: PropTypes.string.isRequired
}

export default AsyncRenderList;
