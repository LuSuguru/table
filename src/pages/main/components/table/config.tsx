import { CustomData, TableConfig, BoyData, GirlData, Sex, Data } from '@/interface/data'
import { generateRandomText } from '@/utils'

export function getTableConfig(type: Sex): TableConfig<Data>[] {
  const flagRender = (value: boolean) => generateRandomText(value)

  const customConfig: TableConfig<CustomData>[] = [
    { title: '日期', dataIndex: 'date' },
    { title: '每晚11：30睡觉，哦吼~', dataIndex: 'sleep' },
    { title: '每日事情完成，不拖沓，嘿嘿~', dataIndex: 'finish' },
  ]

  if (type === Sex.Boy) {
    return [
      ...customConfig,
      ...[
        { title: '看书1小时，哈哈哈~', dataIndex: 'readed' },
        { title: '跑步（一周三次）哈哈哈~', dataIndex: 'running' },
        { title: '开心的笑了O(∩_∩)O，哈哈哈~', dataIndex: 'smile', render: flagRender },
        { title: '监督娇按点睡觉，哈哈哈~', dataIndex: 'mustSleep', render: flagRender },
        { title: '提醒娇睡觉要盖被子，唔姆~', dataIndex: 'checkCoverQuiet', render: flagRender },
      ] as TableConfig<BoyData>[]
    ]
  }

  if (type === Sex.Girl) {
    return [
      ...customConfig,
      ...[
        { title: '瑜伽~', dataIndex: 'yoga', render: flagRender },
        { title: '游泳~', dataIndex: 'swimming', render: flagRender },
        { title: '盖了被子~', dataIndex: 'coverQuiet', render: flagRender },
        { title: '每日份的开心~', dataIndex: 'happy', render: flagRender },
        { title: '陪杰~', dataIndex: 'company' }
      ] as TableConfig<GirlData>[]
    ]
  }
}
