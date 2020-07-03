import React, { memo } from 'react'
import { Paper, Table as BaseTable, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { Sex, Data } from '@/interface/data'

import Row from './row'
import { getTableConfig } from './config'
import { boyRows, girlRows } from './mock'

interface Props {
  onModalOpen: (type: 'add' | 'edit', data?: Data) => void
  type: Sex
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
  const { type } = props
  const classes = useStyles()

  const tableConfig = getTableConfig(type)
  const actionConfig: typeof tableConfig = [{
    title: '操作', dataIndex: 'action', width: 200, render: (_value, row) => (
      <IconButton className={classes.editBtn} onClick={() => props.onModalOpen('edit', row)}>
        <EditIcon />
      </IconButton>
    )
  }]

  const config = [...tableConfig, ...actionConfig]
  const rows: Data[] = type === 'boy' ? boyRows : girlRows

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
