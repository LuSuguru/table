import React from 'react'
import ReactDOM from 'react-dom'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import DayUtils from '@date-io/dayjs'
import dayJs from 'dayjs'
import 'dayjs/locale/zh-cn'

import '@/assets/reset.css'
import App from './app'

dayJs.locale('zh-cn')

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#b2ebf2',
    },
    secondary: {
      main: '#81d4fa',
    },
  },
})

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <MuiPickersUtilsProvider utils={DayUtils} locale="zh-cn">
      <App />
    </MuiPickersUtilsProvider>
  </ThemeProvider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept()
}
