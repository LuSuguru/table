import React, { memo } from 'react'
import { TableRow, TableCell, Collapse, IconButton, Box, Typography } from '@material-ui/core'
import { KeyboardArrowDown, KeyboardArrowRight, SentimentVerySatisfied } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { BoyData, TableConfig, GirlData } from '@/interface/data'
import { useToggle } from '@/hooks'

interface Props<T extends GirlData | BoyData> {
  row: T
  config: TableConfig<T>[]
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

function Row<T extends GirlData | BoyData>(props: Props<T>) {
  const { config, row, index } = props

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

        {
          config.map(({ dataIndex, render }) => (
            <TableCell key={dataIndex as string} align="left">
              {render ? render(row[dataIndex], row, index) : row[dataIndex]}
            </TableCell>))
        }
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
