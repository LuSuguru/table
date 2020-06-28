import React, { memo } from 'react'
import { Paper, Table as BaseTable, TableHead, TableBody, TableRow, TableCell, IconButton } from '@material-ui/core'
import { Edit as EditIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'

import { Data } from '@/interface/data'

interface Props {
  onModalOpen: (data: Data) => void
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

  const config = [
    { title: '日期', dataIndex: 'date' },
    { title: '每晚11：30睡觉，哦吼~', dataIndex: 'sleep' },
    { title: '每日事情完成，不拖沓，嘿嘿~', dataIndex: 'finish' },
    { title: '看书1小时，哈哈哈~', dataIndex: 'readed' },
    { title: '跑步（一周三次）哈哈哈~', dataIndex: 'running' },
    { title: '开心的笑了O(∩_∩)O，哈哈哈~', dataIndex: 'smile' },
    { title: '监督娇按点睡觉，哈哈哈~', dataIndex: 'mustSleep' },
    { title: '提醒宝贝睡觉要盖被子，唔姆~', dataIndex: 'checkCoverQuiet' },
    {
      title: '操作', dataIndex: 'action', width: 200, render: (value, row, itemIndex) => (
        <IconButton className={classes.editBtn} onClick={() => props.onModalOpen(row)}>
          <EditIcon />
        </IconButton>
      )
    },
  ]

  const rows: Data[] = [
    {
      id: 1,
      date: '2020-05-27',
      sleep: '11.45(不要打我)',
      finish: '这个完成啦，嘻嘻',
      readed: '这个也完成了，嘻嘻（看的是自控力）',
      running: '',
      smile: '今天笑了好多次',
      mustSleep: '完成啦',
      checkCoverQuiet: '这个从5.19开始'
    },
    {
      id: 2,
      date: '2020-05-27',
      sleep: '11.45(不要打我)',
      finish: '这个完成啦，嘻嘻',
      readed: '这个也完成了，嘻嘻（看的是自控力）',
      running: '',
      smile: '今天笑了好多次',
      mustSleep: '完成啦',
      checkCoverQuiet: '这个从5.19开始'
    },
    {
      id: 3,
      date: '2020-05-27',
      sleep: '11.45(不要打我)',
      finish: '这个完成啦，嘻嘻',
      readed: '这个也完成了，嘻嘻（看的是自控力）',
      running: '',
      smile: '今天笑了好多次',
      mustSleep: '完成啦',
      checkCoverQuiet: '这个从5.19开始'
    }
  ]

  return (
    <Paper className={classes.root} square>
      <BaseTable className={classes.table}>
        <colgroup>
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
            {config.map(({ title }, index) => <TableCell key={index} align="left">{title}</TableCell>)}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((item, itemIndex) => (
            <TableRow key={item.id}>
              {config.map(({ dataIndex, render }, index) => (
                <TableCell key={`${item.id}-${index}`} align="left">
                  {render ? render(item[dataIndex], item, itemIndex) : item[dataIndex]}
                </TableCell>))}
            </TableRow>
          ))}
        </TableBody>
      </BaseTable>
    </Paper>
  )
}

export default memo(Table)
