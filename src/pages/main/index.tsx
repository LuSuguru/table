import React, { memo, useState, useCallback, useRef } from 'react'
import clsx from 'clsx'
import { AppBar, IconButton, Typography, Toolbar } from '@material-ui/core'
import { Menu as MenuIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { Menu, WhiteSpace } from '@/components'
import { BoyData } from '@/interface/data'
import { useToggle } from '@/hooks'

import { Search, Table, EditModal } from './components'
import { RefCurrent } from './components/edit-modal'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex'
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
  hide: {
    display: 'none'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}))

function Main() {
  const classes = useStyles()
  const [visible, onToggle] = useToggle(false)
  const [selectedKey, onMenuClick] = useState<number>(0)
  const editModal = useRef<RefCurrent>()

  const onSearch = useCallback((formData) => {
    console.log(formData)
  }, [])

  const onModalOpen = useCallback((data: BoyData) => {
    editModal.current.onOpen(data)
  }, [])

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, { [classes.appBarShift]: visible })}>
        <Toolbar>
          <IconButton
            color="inherit"
            onClick={onToggle}
            edge="start"
            className={clsx(classes.menuButton, visible && classes.hide)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Are you OK?
          </Typography>
        </Toolbar>
      </AppBar>
      <Menu
        width={drawerWidth}
        visible={visible}
        onToggle={onToggle}
        selectedKey={selectedKey}
        onMenuClick={onMenuClick} />

      <main className={clsx(classes.content, { [classes.contentShift]: visible })}>
        <WhiteSpace />
        <Search onSearch={onSearch} />
        <Table onModalOpen={onModalOpen} />
      </main>

      <EditModal ref={editModal} />
    </div>
  )
}

export default memo(Main)
