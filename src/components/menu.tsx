import React, { memo } from 'react'
import { Drawer, IconButton, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ChevronLeft, AccountBox } from '@material-ui/icons'

import { WhiteSpace } from '@/components'

interface Props {
  selectedKey: number
  onMenuClick: (key: number) => void
  width: number
  visible: boolean
  onToggle: () => void
}

const useStyles = makeStyles((theme) => ({
  drawer: (props: Props) => ({
    width: props.width,
    flexShrink: 0,
  }),
  paper: (props: Props) => ({
    width: props.width,
  }),
  selected: {
    color: theme.palette.primary.main
  }
}))

function Menu(props: Props) {
  const classes = useStyles(props)
  const { visible, selectedKey } = props

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={visible}
      classes={{ paper: classes.paper }}>
      <WhiteSpace>
        <IconButton onClick={props.onToggle}>
          <ChevronLeft />
        </IconButton>
      </WhiteSpace>
      <Divider />

      <List>
        {['测试1', '测试2'].map(((item, index) => (
          <ListItem
            onClick={() => props.onMenuClick(index)}
            key={index}
            button>
            <ListItemIcon className={selectedKey === index ? classes.selected : ''}>
              <AccountBox />
            </ListItemIcon>
            <ListItemText className={selectedKey === index ? classes.selected : ''}>{item}</ListItemText>
          </ListItem>
        )))}
      </List>
    </Drawer>
  )
}

export default memo(Menu)
