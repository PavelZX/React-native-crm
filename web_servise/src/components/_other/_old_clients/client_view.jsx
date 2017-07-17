import React, { Component } from 'react'
import { Col, Button } from 'reactstrap'
import Notification from 'lib/notification'
import { NavLink } from 'lib/nav_link'

export default class GroupView extends Component {

  handleDestroy = () => {
    let { object } = this.props
    object.destroy().then(response => {
      Notification.success("ok")
    })
  }

  render() {
    let { object } = this.props

    return (
      <div>
        <Col xs={1}>
          { object.id }
        </Col>

        <Col xs={2} className="pointer" onClick={this.handleColor}>

          <NavLink to={`/crm/clients/${object.id}/update`}>
            <Button>
              { object.name }
            </Button>
          </NavLink>

        </Col>

        <Col xs={2}>
          { object.phone }
        </Col>

        <Col xs={2}>
          { object.date_birth }
        </Col>

        <Col xs={4}>
          { object.note }
        </Col>

        <Col xs={1}>
          <Button onClick={this.handleDestroy}>
            <i className="fa fa-ban" aria-hidden="true" />
          </Button>
        </Col>

        <br />
      </div>
    )
  }

}