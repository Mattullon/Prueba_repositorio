import React from 'react'
import ReactDOM from 'react-dom'
class Test extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        captureSpace: true,
        captureEnter: true,
        keyPressMessage: '',
        clickMessage: ''
      }
    }
  
    render() {
      return (
        <div>
          <p>
            <span>Give focus to button when pressing</span>
            <input id="captureSpace" type="checkbox" checked={this.state.captureSpace}
              onChange={() => this.setState({ captureSpace: !this.state.captureSpace })} />
            <label for="captureSpace">SpaceBar key</label>
            <input id="captureEnter" type="checkbox" checked={this.state.captureEnter}
              onChange={() => this.setState({ captureEnter: !this.state.captureEnter })} />
            <label for="captureEnter">Enter key</label>
          </p>
          <p>
            <input type="text" onKeyDown={(e) => this.handleKeyDown(e)} />
            <span>{this.state.keyPressMessage}</span> - <span>{this.state.clickMessage}</span><br />
            <button ref="thebutton" onClick={(e) => this.handleClick(e)} >Click me</button>
          </p>
        </div>
      )
    }
    handleKeyDown(e) {
      this.setState({ clickMessage: '' })
      this.setState({ keyPressMessage: 'key: "' + e.key + '" - keyCode: ' + e.keyCode })
      if (this.state.captureSpace && (e.key === " " || e.keyCode === 32)) {
        this.refs.thebutton.focus()
      }
      if (this.state.captureEnter && (e.key === "Enter" || e.keyCode === 13)) {
        this.refs.thebutton.focus()
      }
  
    }
    handleClick(e) {
      this.setState({ clickMessage: 'Button was clicked' })
    }
  }
  
  ReactDOM.render(
    <Test />,
    document.getElementById("root")
  )
  