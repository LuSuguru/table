import React, { memo, ReactNode } from 'react'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  space: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-end',
    ...theme.mixins.toolbar
  }
}))

interface Props {
  children?: ReactNode
}

function WhiteSpace(props: Props) {
  const classes = useStyles()
  return (
    <div className={classes.space}>
      {props.children}
    </div>
  )
}

export default memo(WhiteSpace)
