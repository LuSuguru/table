import React, { memo, useImperativeHandle, forwardRef, Ref } from 'react'
import { Dialog, DialogActions, Button, DialogTitle, DialogContent, TextField } from '@material-ui/core'
import Form, { Field } from 'rc-field-form'

import { useToggle } from '@/hooks'
import { Data } from '@/interface/data'

export interface RefCurrent {
  onOpen: (data: Data) => void
}

function EditModal(_props: any, ref: Ref<RefCurrent>) {
  const [visible, onToggle] = useToggle(false)
  const [form] = Form.useForm()

  useImperativeHandle(ref, () => ({
    onOpen(data: Data) {
      onToggle()
    }
  }), [])

  return (
    <Dialog
      open={visible}
      onClose={onToggle}
      // maxWidth="s"
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
