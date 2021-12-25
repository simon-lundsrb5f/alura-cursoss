export class Path {
  private splitDeviceRe = /^([a-zA-Z]:|[\\\/]{2}[^\\\/]+[\\\/]+[^\\\/]+)?([\\\/])?([\s\S]*?)$/
  private splitTailRe = /^([\s\S]*?)((?:\.{1,2}|[^\\\/]+?|)(\.[^.\/\\]*|))(?:[\\\/]*)$/
  private splitPath(fileName: string) {
    let result = this.splitDeviceRe.exec(fileName)
    let device = (result[1] || '') + (result[2] || '')
    let tail = result[3] || ''
    let result2 = this.splitTailRe.exec(tail)
    let dir = result2[1]
    let basename = result2[2]
    let ext = result2[3]
    return [device, dir, basename, ext]
  }
  dirName(path: string) {
    var result = this.splitPath(path),
      root = result[0],
      dir = result[1]
    if (!root && !dir) {
      return '.'
    }
    if (dir) {
      dir = dir.substr(0, dir.length - 1)
    }
    return root + dir
  }
  baseName(path: string, ext?: string) {
    var f = this.splitPath(path)[2]
    if (ext && f.substr(-1 * ext.length) === ext) {
      f = f.substr(0, f.length - ext.length)
    }
    return f
  }
  extName(path: string) {
    return this.splitPath(path)[3]
  }
}
// todo 目前只支持windows
// https://github.com/jinder/path/blob/master/path.js
// https://github.com/browserify/path-browserify