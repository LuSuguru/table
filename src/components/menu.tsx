import React, { memo } from 'react'
import { Drawer, IconButton, Divider, List, ListItem, ListItemText, ListItemIcon } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { ChevronLeft, AccountBox } from '@material-ui/icons'

import { WhiteSpace } from '@/components'
import { Sex } from '@/interface/data'

interface Props {
  selectedKey: Sex
  onMenuClick: (key: Sex) => void
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
        {[
          { name: '娇宝~', key: Sex.Girl },
          { name: '杰宝~', key: Sex.Boy }
        ].map((({ key, name }) => (
          <ListItem
            onClick={() => props.onMenuClick(key)}
            key={key}
            button>
            <ListItemIcon className={selectedKey === key ? classes.selected : ''}>
              <AccountBox />
            </ListItemIcon>
            <ListItemText className={selectedKey === key ? classes.selected : ''}>{name}</ListItemText>
          </ListItem>
        )))}
      </List>
    </Drawer>
  )
}

export default memo(Menu)
