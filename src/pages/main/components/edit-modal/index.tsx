import React, { memo, useImperativeHandle, forwardRef, Ref } from 'react'
import { Dialog, DialogActions, Button, DialogTitle, DialogContent, TextField } from '@material-ui/core'
import Form, { Field } from 'rc-field-form'

import { useToggle } from '@/hooks'
import { Data, Sex } from '@/interface/data'

import { BoyForm, GirlForm } from './form'

export interface RefCurrent {
  onOpen: (type: 'add' | 'edit', data?: Data) => void
}

interface Props {
  type: Sex
}

function EditModal(props: Props, ref: Ref<RefCurrent>) {
  const [visible, onToggle] = useToggle(false)
  const [form] = Form.useForm()
  const { type } = props

  useImperativeHandle(ref, () => ({
    onOpen(type: 'add' | 'edit', data: Data) {
      onToggle()
      if (type === 'add') {
        form.resetFields()
      } else {
        form.setFieldsValue(data)
      }
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

          {type === Sex.Boy ? <BoyForm /> : <GirlForm />}
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
