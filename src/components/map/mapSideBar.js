import React from 'react'

import MapModal from './mapModal'

class SideBarItem extends React.Component {
  constructor() {
    super()

    this.state = {
      active: false
    }

    this.listDivs = {}
    this.flytoSelectedSide = this.flytoSelectedSide.bind(this)
    this.toggleSelected = this.toggleSelected.bind(this)
  }

  toggleSelected() {
    this.setState({active: !this.state.active})
  }

  flytoSelectedSide({ _id }){
    const lnglat = this.props.lnglat.find(space => space._id === _id).geometry.coordinates
    this.props.map.flyTo({
      center: lnglat,
      zoom: 15
    })
  }

  render() {
    const { space } = this.props
    return(
      <div
        id={`${space._id}`}
        className={`listing ${this.state.active ? 'active' : ''}`}
        onClick={() => {
          this.flytoSelectedSide(space)
          this.toggleSelected()
        }}
        ref={el => (this.listDiv = el)}
      >
        <div>{space.geometry}</div>
        <div>{space.type}</div>
        <div>{space.suitability}</div>
        <div>£{space.price}</div>
        <MapModal
          space={space}
        />
      </div>
    )
  }
}

export default SideBarItem
