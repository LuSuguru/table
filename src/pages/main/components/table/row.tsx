import React, { memo } from 'react'
import { TableRow, TableCell, Collapse, IconButton, Box, Typography } from '@material-ui/core'
import { KeyboardArrowDown, KeyboardArrowRight, SentimentVerySatisfied } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { TableConfig, Data } from '@/interface/data'
import { useToggle } from '@/hooks'

interface Props {
  row: Data
  config: TableConfig<Data>[]
  index: number
}

const useStyles = makeStyles((theme) => ({
  collapseCell: {
    paddingTop: 0,
    paddingBottom: 0
  },
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
  storyText: {
    display: 'flex',
    alignItems: 'center',
    '& .MuiSvgIcon-root': {
      marginRight: theme.spacing(0.5),
    }
  }
}))

const Content = memo(({ config, row, index }: Props) => (
  <>
    {config.map(({ dataIndex, render }) => (
      <TableCell key={dataIndex as string} align="left">
        {render ? render(row[dataIndex], row, index) : row[dataIndex]}
      </TableCell>))}
  </>
))

function Row(props: Props) {
  const { config, row } = props

  const [visible, onToggle] = useToggle(false)
  const classes = useStyles()

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton size="small" onClick={onToggle}>
            {visible ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
          </IconButton>
        </TableCell>

        <Content {...props} />
      </TableRow>

      <TableRow>
        <TableCell className={classes.collapseCell} colSpan={config.length + 1}>
          <Collapse
            in={visible}
            timeout="auto"
            unmountOnExit>

            <Box margin={1}>
              <Typography variant="subtitle2" className={classes.storyText}>
                <SentimentVerySatisfied />偷偷告诉：{row.story}
              </Typography>
            </Box>

          </Collapse>
        </TableCell>
      </TableRow>
    </>
  )
}

export default memo(Row)
