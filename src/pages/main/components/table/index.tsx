import React, { memo } from 'react'
import { Paper, Table as BaseTable, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { BoyData } from '@/interface/data'

import Row from './row'
import { getTableConfig, ConfigType, Data } from './config'

interface Props {
  onModalOpen: (data: BoyData) => void
}

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
  },
  table: {
    minWidth: 1080,
    tableLayout: 'fixed'
  },
  header: {
    backgroundColor: theme.palette.secondary.light
  },
  editBtn: {
    padding: 4,
    color: theme.palette.primary.dark
  }
}))

function Table(props: Props) {
  const classes = useStyles()

  const tableConfig = getTableConfig('boy')
  const actionConfig: typeof tableConfig = [{
    title: '操作', dataIndex: 'action', width: 200, render: (value, row) => (
      <IconButton className={classes.editBtn} onClick={() => props.onModalOpen(row)}>
        <EditIcon />
      </IconButton>
    )
  }]

  const config = [...tableConfig, ...actionConfig]


  const rows: ConfigType<typeof config>[] = [
    {
      id: 1,
      date: '2020-05-27',
      sleep: '11.45(不要打我)',
      finish: '这个完成啦，嘻嘻',
      readed: '这个也完成了，嘻嘻（看的是自控力）',
      running: '5.3KM',
      smile: true,
      mustSleep: true,
      checkCoverQuiet: true,
      story: '见面了，面对面的时候会心安一点，杰说了很多很多，但我也没怎么说话。晚上打完电话感觉好多了~',
    },
    {
      id: 2,
      date: '2020-05-27',
      sleep: '11.45(不要打我)',
      finish: '这个完成啦，嘻嘻',
      readed: '这个也完成了，嘻嘻（看的是自控力）',
      running: '5.5KM',
      smile: true,
      mustSleep: true,
      checkCoverQuiet: true,
      story: '见面了，面对面的时候会心安一点，杰说了很多很多，但我也没怎么说话。晚上打完电话感觉好多了~',
    },
    {
      id: 3,
      date: '2020-05-27',
      sleep: '11.45(不要打我)',
      finish: '这个完成啦，嘻嘻',
      readed: '这个也完成了，嘻嘻（看的是自控力）',
      running: '5.3KM',
      smile: true,
      mustSleep: true,
      checkCoverQuiet: true,
      story: '见面了，面对面的时候会心安一点，杰说了很多很多，但我也没怎么说话。晚上打完电话感觉好多了~',
    }
  ]

  return (
    <Paper className={classes.root} square>
      <BaseTable className={classes.table}>
        <colgroup>
          <col
            style={{
              width: 50,
              minWidth: 50
            }} />
          {config.map(({ width, dataIndex }) => (
            <col
              key={dataIndex}
              style={{
                width: width ? `${width}px` : null,
                minWidth: width ? `${width}px` : null
              }} />))}
        </colgroup>

        <TableHead className={classes.header}>
          <TableRow>
            <TableCell />
            {config.map(({ title }, index) => <TableCell key={index} align="left">{title}</TableCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row, index) => <Row {...{ row, index, config }} key={row.id || row.key} />)}
        </TableBody>
      </BaseTable>
    </Paper>
  )
}

export default memo(Table)
