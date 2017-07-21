import React, { Component } from 'react'
import { observer } from 'mobx-react'
import { UIStore } from "stores"
import { ItemBrand, Item } from './styled'
import { Link } from 'lib/nav_link'

import "./index.css"

export default observer(class Sidebar extends Component {

  classSidebar = () => {
    if (UIStore.sidebar) {
      return  "col-md-3 float-left col-1 pl-0 pr-0 width collapse show"
    } else {
      return "col-md-3 col-xs-1 p-l-0 p-r-0 collapse in"
    }
  }

  render() {
    return (
      <div className={this.classSidebar()} id="sidebar">

        <div className="list-group border-0 card text-center">

          <Link href="">
            <ItemBrand>
              Crm System
            </ItemBrand>
          </Link>

          <Link href="/crm">
            <Item>
              <i className="fa fa-id-card"></i>
              Crm
            </Item>
          </Link>

          <Link href="/vk">
            <Item>
              <i className="fa fa-vk"></i>
              Vk
            </Item>
          </Link>

          <Link href="/instagram">
            <Item>
              <i className="fa fa-instagram"></i>
              Instagram
            </Item>
          </Link>


        </div>

      </div>
    )
  }
})

// <div className="collapse" id="menu1">
//     <a href="menu1sub1" className="list-group-item" data-toggle="collapse" aria-expanded="false">Subitem 1 </a>
// </div>
