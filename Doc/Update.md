# 0.0.11

- 打开新窗口后迅速关闭窗口会导致应用崩溃的问题
- DEMO 示例创建托盘图标，图标位置不正确的问题
- 没创建托盘图标的情况下，直接修改托盘图标的路径会导致应用异常
- 对返回的错误信息进行 utf-8 编码
- 更新 TS 类型，使其支持 strict 模式
- 右键菜单支持分割线，支持选中菜单项，支持禁用菜单项

# 0.0.10

- 增加打开新窗口的示例
- 窗口默认具备标题栏
- 修改 config 文件的结构，编译控制首个窗口的行为
- 把 Default.config.json 整合到二进制文件内，避免误导用户
- Release 包 Demo 项目 JavaScript 文件不压缩，便于开发者了解框架运行机制

# 0.0.8

- 把 HorseJs 的 API 改造成 npm 包的形式，使之更便于使用
- 为 HorseJs 的 API 提供 TypeScript 类型支持
- 修改文档以适配 Horsejs npm 包

# 0.0.7

- 自定义 alert 和 confirm 对话框
- 移除 demo 窗口的日志输出面板，使用开发者工具替代
- 使用更漂亮的应用的图标
- 内置 SQLite 的支持
- 路径模块新增创建文件夹及合并路径的 API
- 是否为文件夹的 API 从文件模块迁移到路径模块
- 更新文档及相关的 Demo

# 0.0.6 回眸

- 允许打开开发者调试工具窗口
- 小规模重构浏览器进程处理逻辑
- 获取当前操作系统的用户信息及网络信息
- 允许开发者把当前窗口移动到屏幕中心
- 菜单子菜单可以无限递归
- 控制编译环境与调试环境的日志级别
- 读取文件时，通过 ArrayBuffer 数据类型传输文件数据
- 修复了几个微小的 BUG
- 新增、修改了几个接口的文档

# 0.0.5

- 托盘图标及其相关能力
- demo 页面不允许用户选择文本 user-select
- 为 demo 应用提供好看的图标，也就是我们框架的图标
- 文件模块文件路径中有中文导致的 BUG

# 0.0.4

- 从 API 里获取 DEMO 首页版本号
- 通过任务栏右键菜单关闭窗口
- 文档及 Demo 更新

# 0.0.3

- 自定义右键菜单、系统通知及相关的回调事件；
- 用户自定义配置 与 系统默认的配置 自动合并；
- 窗口最大尺寸与最小尺寸控制；
- 操作系统基本信息，使用的底层框架的版本信息；
- 把 Shell 模块合并进 System 模块；
- release 模式生成应用时，自动压缩 extension.js；
- 文档更新；

# 0.0.2

- 新增 Path 模块、应用内协议与开机自启动 API
- 修复路径中存在中文的 BUG

# 0.0.1

- 仅包含最基本的功能
