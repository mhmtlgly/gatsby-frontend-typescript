/* eslint-disable */

import React, { Fragment, useState } from "react"
import { Link } from "gatsby"
import {
  ListItem,
  ListItemText,
  List,
  ListItemIcon,
  Divider,
} from "@material-ui/core"

import { navigationLinks } from "./data"
import { mainNavStyles } from "./styles"

// function ListItemLink(props) {
//   return <ListItem button component={Link} {...props} />
// }

export const MainNavigation = () => {
  const classes = mainNavStyles()

  return (
    <nav className={classes.root}>
      <List>
        {navigationLinks.map(link => {
          const { id, url, name, icon } = link
          return (
            <Fragment key={id}>
              <ListItem button component={Link} to={url}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={name} />
              </ListItem>
              <Divider />
            </Fragment>
          )
        })}
      </List>
    </nav>
  )
}
