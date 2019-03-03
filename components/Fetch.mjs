import { Component } from '/packages/preact.mjs'

class Fetch extends Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      error: false,
      data: {},
    }
  }

  componentDidMount() {
    fetch(this.props.url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          loading: false,
          data,
        })
      )
      .catch((err) =>
        this.setState({
          loading: false,
          error: err.message,
        })
      )
  }

  render({ children }, state) {
    return children[0](state) // children is an array
  }
}

export default Fetch
