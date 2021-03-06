import { horse } from '../../src/main'
export class File {
  static className = 'File'
  async getLastWriteTime() {
    let fileResult = await horse.dialog.openFile({
      title: '请你先选择一个文件~~~',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    let result = await horse.file.getLastWriteTime({
      path: fileResult.data[0],
    })
    console.log(result)
  }
  async getFileSize() {
    let fileResult = await horse.dialog.openFile({
      title: '请你先选择一个文件~~~',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!fileResult.data) return
    let result = await horse.file.getFileSize({ path: fileResult.data[0] })
    console.log(result)
  }
  async readFile() {
    let fileResult = await horse.dialog.openFile({
      title: '请你先选择一个文件~~~',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!fileResult.data) return
    let decoder = new TextDecoder('utf-8')
    let result = await horse.file.readFile({
      path: fileResult.data[0],
      bufferSize: 65536,
      onData: (chunk) => {
        let fileData = decoder.decode(chunk)
        console.log('文件数据片：', fileData)
      },
      onDataFinish: (result) => {
        console.log('读取文件完成：', result)
      },
    })
    console.log('请求读取文件：', result)
  }
  async readFileFromPosition() {
    let fileResult = await horse.dialog.openFile({
      title: '请你先选择一个文件~~~',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!fileResult.data) return
    let decoder = new TextDecoder('utf-8')
    let result = await horse.file.readFileFromPosition({
      path: fileResult.data[0],
      bufferSize: 65536,
      position: 6,
      onData: (chunk) => {
        let fileData = decoder.decode(chunk)
        console.log('文件数据片：', fileData)
      },
      onDataFinish: (result) => {
        console.log('读取文件完成：', result)
      },
    })
    console.log(result)
  }
  async writeFile() {
    let fileResult = await horse.dialog.openFile({
      title: '请你先选择一个文件~~~',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!fileResult.data) return
    let result = await horse.file.writeFile({
      path: fileResult.data[0],
      data: `
          你好，世界
          안녕 세계
          Hello World
          `,
      existThen: 'append',
    })
    console.log(result)
  }
  async writeFileCreate() {
    let folderResult = await horse.dialog.openFolder({
      title: '请你先选择一个目录~~~',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!folderResult.data) return
    let name = Math.floor(Math.pow(10, 6) * Math.random())
    let path = horse.path.join(folderResult.data[0], `${name}.txt`)
    let result = await horse.file.writeFile({
      path,
      data: `
          你好，世界
          안녕 세계
          Hello World
          `,
      existThen: 'append',
      notExistThen: 'create',
    })
    console.log(result)
  }
  async copyFile() {
    let srcResult = await horse.dialog.openFile({
      title: '请选择待拷贝的文件',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!srcResult.data) return
    let destResult = await horse.dialog.openFolder({
      title: '请选择拷贝目标目录',
      defaultPath: 'C:\\',
      multiSelections: false,
      filters: ['*'],
      filterIndex: 0,
    })
    if (!destResult.data) return
    let src = srcResult.data[0]
    let baseName = horse.path.baseName(src)
    let dest = destResult.data[0] + baseName
    let result = await horse.file.copy({ src, dest })
    console.log(result)
  }
}
