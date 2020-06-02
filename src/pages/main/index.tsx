import React, { memo } from 'react'
import clsx from 'clsx'
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}))

function Main() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar
        color="secondary"
        position="fixed"
        className={clsx(classes.appBar)}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            // onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton)}
          >
            <Menu />
          </IconButton>
          <Typography variant="h6" noWrap>
            Are you OK?
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default memo(Main)
