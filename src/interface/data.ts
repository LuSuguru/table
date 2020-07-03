import { ReactNode } from 'react'

export interface CustomData {
  key?: number
  id?: number
  date?: string
  sleep?: string
  finish?: string
  story?: string
  action?: string
}

export interface BoyData extends CustomData {
  readed?: string
  running?: string
  smile?: boolean
  mustSleep?: boolean
  checkCoverQuiet?: boolean
}

export interface GirlData extends CustomData {
  yoga?: boolean
  swimming?: boolean
  coverQuiet?: boolean
  happy?: string
  company?: string
}

export interface TableConfig<T> {
  title: string
  dataIndex: keyof T | 'action'
  width?: number
  render?: (value: any, row: BoyData, index: number) => ReactNode
}
