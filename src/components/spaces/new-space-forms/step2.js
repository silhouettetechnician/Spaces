import React from 'react'

class Step2 extends React.Component{
  constructor() {
    super()

    this.state = {}
  }

  render() {
    if(this.props.currentStep !== 2) {
      return null
    }

    return(
      <div>
        <input
          name="type"
          placeholder="Type"
          onChange={this.props.handleChange}
          value={this.props.type}
        />
        <input
          name="suitability"
          placeholder="Suitability"
          onChange={this.props.handleChange}
          value={this.props.suitability}
        />
        <input
          name="description"
          placeholder="Description"
          onChange={this.props.handleChange}
          value={this.props.description}
        />
      </div>
    )
  }
}

export default Step2

// <input
//   name="electricChargingPoint"
//   placeholder="Electric Charging"
//   onChange={this.props.handleChange}
//   value={this.props.electricChargingPoint}
// />
