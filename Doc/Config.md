# 配置文件

配置文件可有可无，如下是全量的配置文件示例，

示例中所有配置项的值即为默认值，也就是说，如果你没有设置此项配置，程序将按该默认值所代表的意义执行

配置文件中不能有任何注释

```json
{
  "appName": "HorseJs",
  "startPath": "app/index.html",
  "autoShowFirstWindow": false,
  "version": "0.0.1"
}
```

- appName：应用程序名称
- startPath：第一个窗口的启动路径，必须是相对于可执行文件的子路径
- autoShowFirstWindow：是否启动即马上显示第一个窗口，设置成 false 后续开发者自己调用 horse.window.show();来显示窗口
- version：当前应用程序的版本号