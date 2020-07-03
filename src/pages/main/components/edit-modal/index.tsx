import React, { memo, useImperativeHandle, forwardRef, Ref } from 'react'
import { Dialog, DialogActions, Button, DialogTitle, DialogContent, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Form, { Field } from 'rc-field-form'
import { TimePicker as BaseTimePicker } from '@material-ui/pickers'
import { TimePickerProps } from '@material-ui/pickers/TimePicker'
import customParseFormat from 'dayjs/plugin/customParseFormat'
import dayjs from 'dayjs'

import { useToggle } from '@/hooks'
import { Data, Sex } from '@/interface/data'

import { BoyForm, GirlForm } from './form'

dayjs.extend(customParseFormat)

const TimePicker: (props: Partial<TimePickerProps>) => React.ReactElement = BaseTimePicker

export interface RefCurrent {
  onOpen: (type: 'add' | 'edit', data?: Data) => void
}

interface Props {
  type: Sex
}

const useStyles = makeStyles(() => ({
  fullWidth: {
    width: '100%'
  }
}))

function EditModal(props: Props, ref: Ref<RefCurrent>) {
  const [visible, onToggle] = useToggle(false)
  const [form] = Form.useForm()
  const classes = useStyles()
  const { type } = props

  useImperativeHandle(ref, () => ({
    onOpen(type: 'add' | 'edit', data: Data) {
      onToggle()
      if (type === 'add') {
        form.resetFields()
      } else {
        const { sleep, ...otherData } = data

        form.setFieldsValue({
          sleep: dayjs(sleep, 'HH:mm'),
          ...otherData,
        })
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
        <Form form={form} initialValues={{ sleep: null }}>
          <Field name="sleep">
            <TimePicker
              className={classes.fullWidth}
              variant="inline"
              label="好好睡觉了咩"
              format="HH:mm"
              ampm={false}
              autoOk />
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
