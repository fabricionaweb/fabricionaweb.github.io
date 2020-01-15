import { Component } from "/web_modules/htm/preact.js"

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
      .then(res => res.json())
      .then(data =>
        this.setState({
          loading: false,
          data,
        })
      )
      .catch(err =>
        this.setState({
          loading: false,
          error: err.message,
        })
      )
  }

  render({ children }, state) {
    return children(state)
  }
}

export default Fetch
