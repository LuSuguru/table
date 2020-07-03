import React, { memo } from 'react'
import { Field } from 'rc-field-form'
import { TextField, FormControlLabel, FormControl, Checkbox } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

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

export const BoyForm = memo(() => {
  const classes = useStyles()
  return (
    <>
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

      <Field name="story">
        <TextField
          label="想写下来"
          placeholder="有好多话想跟你说，可是，又真的说不完呢"
          margin="dense"
          fullWidth
          multiline
          rows={3}
          rowsMax={5} />
      </Field>

      <FormControl fullWidth className={classes.formItem} margin="dense">
        <Field name="smile" valuePropName="checked">
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

        <Field name="checkCoverQuiet" valuePropName="checked">
          <FormControlLabel
            control={<Checkbox />}
            label="提醒娇睡觉要盖被子"
            classes={{ label: classes.checkboxLabel }} />
        </Field>
      </FormControl>
    </>
  )
})

export const GirlForm = memo(() => {
  const classes = useStyles()

  return (
    <>
      <Field name="company">
        <TextField
          label="陪杰~"
          margin="dense"
          fullWidth />
      </Field>

      <Field name="story">
        <TextField
          label="想写下来"
          placeholder="有好多话想跟你说，可是，又真的说不完呢"
          margin="dense"
          fullWidth
          multiline
          rows={3}
          rowsMax={5} />
      </Field>

      <FormControl fullWidth className={classes.formItem} margin="dense">
        <Field name="yoga" valuePropName="checked">
          <FormControlLabel
            control={<Checkbox />}
            classes={{ label: classes.checkboxLabel }}
            label="瑜伽" />
        </Field>

        <Field name="swimming" valuePropName="checked">
          <FormControlLabel
            control={<Checkbox />}
            classes={{ label: classes.checkboxLabel }}
            label="游泳" />
        </Field>

        <Field name="coverQuiet" valuePropName="checked">
          <FormControlLabel
            control={<Checkbox />}
            classes={{ label: classes.checkboxLabel }}
            label="盖被子咩?" />
        </Field>

        <Field name="smile" valuePropName="checked">
          <FormControlLabel
            control={<Checkbox />}
            classes={{ label: classes.checkboxLabel }}
            label="开心地笑了~" />
        </Field>

      </FormControl>
    </>
  )
})
