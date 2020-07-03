import React, { memo, useImperativeHandle, forwardRef, Ref } from 'react'
import { Dialog, DialogActions, Button, DialogTitle, DialogContent, TextField, FormControlLabel, FormControl, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Form, { Field } from 'rc-field-form'

import { useToggle } from '@/hooks'
import { BoyData } from '@/interface/data'

const useStyles = makeStyles((theme) => ({
  formItem: {
    flexDirection: 'row'
  },
  checkboxLabel: {
    marginTop: 1
  },
  checkbox: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5)
  }
}))

export interface RefCurrent {
  onOpen: (data: BoyData) => void
}

function EditModal(_props: any, ref: Ref<RefCurrent>) {
  const [visible, onToggle] = useToggle(false)
  const classes = useStyles()
  const [form] = Form.useForm()

  useImperativeHandle(ref, () => ({
    onOpen(data: BoyData) {
      console.log(data)
      onToggle()
    }
  }), [])

  return (
    <Dialog
      open={visible}
      onClose={onToggle}
      fullWidth>
      <DialogTitle>哦吼，开始记录了咩？</DialogTitle>

      <DialogContent>
        <Form form={form}>
          <Field name="sleep">
            <TextField
              label="每晚11：30睡觉"
              margin="dense"
              fullWidth />
          </Field>

          <Field name="finish">
            <TextField
              label="每日事情完成，不拖沓"
              margin="dense"
              fullWidth />
          </Field>

          <Field name="readed">
            <TextField
              label="看书1小时"
              margin="dense"
              fullWidth />
          </Field>

          <Field name="running">
            <TextField
              label="跑步（一周三次）"
              margin="dense"
              fullWidth />
          </Field>

          <FormControl fullWidth className={classes.formItem} margin="dense">
            <Field name="smile">
              <FormControlLabel
                control={<Checkbox />}
                classes={{ label: classes.checkboxLabel }}
                label="笑了嘛" />
            </Field>

            <Field name="mustSleep" valuePropName="checked">
              <FormControlLabel
                control={<Checkbox />}
                label="监督娇按点睡觉"
                classes={{ label: classes.checkboxLabel }} />
            </Field>

            <Field name="checkCoverQuiet">
              <FormControlLabel
                control={<Checkbox />}
                label="提醒娇睡觉要盖被子"
                classes={{ label: classes.checkboxLabel }} />
            </Field>
          </FormControl>
        </Form>
      </DialogContent>

      <DialogActions>
        <Button onClick={onToggle}>
          取消
        </Button>
        <Button onClick={null} color="primary">
          确 认
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(forwardRef(EditModal))
