import React, { memo } from 'react'
import { Paper, IconButton } from '@material-ui/core'
import { PaperProps } from '@material-ui/core/Paper'
import { Search as SearchIcon } from '@material-ui/icons'
import { makeStyles } from '@material-ui/core/styles'
import { DatePicker as BaseDatePicker } from '@material-ui/pickers'
import { DatePickerProps } from '@material-ui/pickers/DatePicker'
import dayjs, { Dayjs } from 'dayjs'
import Form, { Field } from 'rc-field-form'
import { FormProps } from 'rc-field-form/es/Form'

const FormCompoent: (props: FormProps & PaperProps) => React.ReactElement = Form as any
const DatePicker: (props: Partial<DatePickerProps>) => React.ReactElement = BaseDatePicker

interface FormData {
  startTime: Dayjs
  endTime: Dayjs
}

interface Props {
  onSearch: (formData: FormData) => void
}

const useStyles = makeStyles((theme) => ({
  search: {
    padding: theme.spacing(2)
  }
}))

function Search(props: Props) {
  const [form] = Form.useForm()
  const classes = useStyles()

  function onSearch() {
    props.onSearch(form.getFieldsValue() as FormData)
  }

  return (
    <FormCompoent
      form={form}
      component={Paper}
      className={classes.search}
      initialValues={{
        startTime: dayjs(),
        endTime: dayjs().add(7, 'day')
      }}
      square>

      <Field name="startTime">
        <DatePicker
          variant="inline"
          label="开始时间"
          autoOk />
      </Field>

      <Field name="endTime">
        <DatePicker
          variant="inline"
          label="结束时间"
          autoOk />
      </Field>

      <IconButton onClick={onSearch}>
        <SearchIcon fontSize="large" color="secondary" />
      </IconButton>
    </FormCompoent>
  )
}

export default memo(Search)
