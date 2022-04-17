export let processor = {
  openFile: async () => {
    let result = await horse.dialog.openFile({
      title: "test",
      defaultPath: "C:\\Windows",
      multiSelections: false,
      filters: ["*"],
      filterIndex: 0,
    });
    demoLog(result);
  },
  openMultiFile: async () => {
    let result = await horse.dialog.openFile({
      title: "test",
      defaultPath: "C:\\Windows",
      multiSelections: true,
      filters: ["*"],
      filterIndex: 0,
    });
    demoLog(result);
  },
  openFolder: async () => {
    let result = await horse.dialog.openFolder({
      title: "test",
      defaultPath: "C:\\Windows",
      multiSelections: true,
      filters: ["*"],
      filterIndex: 0,
    });
    demoLog(result);
  },
};
