// 生成随机内容
export function generateRandomText(isSuccess: boolean) {
  const failMessage = {
    0: '啊，头大🤥',
    1: '对不起😑',
    2: '木有木有😱',
    3: '忘了😞',
    4: '害咻~🙃'
  }

  const successMessage = {
    0: '完成了😎',
    1: '耶👆👆',
    2: '嗯呢，嘿嘿🤗',
    3: '唔姆',
    4: 'yearh,sir~'
  }

  const mapKey = Math.floor(Math.random() * 100) % 5
  const messageMap = isSuccess ? successMessage : failMessage

  return messageMap[mapKey]
}
