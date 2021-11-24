let $ = (selector) => document.querySelector(selector);
export let demo = {
  init: () => {
    $("#menuContainer").addEventListener("click", (e) => {
      let id = e.target.getAttribute("id");
      if (!id || e.target.classList.contains("menuSelected")) return;
      $(".menuSelected").classList.remove("menuSelected");
      e.target.classList.add("menuSelected");
      $(".sectionSelected").classList.remove("sectionSelected");
      $(`#${id.replace("menu", "section")}`).classList.add("sectionSelected");
    });
    $("#sectionCodeLink").addEventListener("click", () => {
      let codeFileName = $(".menuSelected")
        .getAttribute("id")
        .replace("menu", "")
        .toLowerCase();
      let target = `https://gitee.com/horsejs/horsejs/blob/master/HorseJs/app/demo/${codeFileName}.js`;
      horse.shell.openExternal({ target, workingDir: "" });
    });
    $("#demoContainer").addEventListener("click", async (e) => {
      if (!e.target.classList.contains("demoBtn")) return;
      let id = e.target.getAttribute("id");
      let parentId = e.target.parentElement.getAttribute("id");
      parentId = parentId.replace("section", "").toLowerCase();
      let { processor } = await import(`./demo/${parentId}.js`);
      processor[id]();
    });
    $("#cleanLogBtn").addEventListener("click", (e) => {
      $(".console").innerHTML = "";
    });
    $(".drager").addEventListener("mousedown", (e) => {
      let dragerHeightChange = (e) => {
        if (e.clientY < 180 || e.clientY > window.innerHeight - 120) return;
        $(".consoleContainer").setAttribute(
          "style",
          `height:calc(100% - ${e.clientY - 40}px)`
        );
      };
      document.addEventListener("mousemove", dragerHeightChange);
      document.addEventListener("mouseup", () => {
        document.removeEventListener("mousemove", dragerHeightChange);
      });
    });
    window.demoLog = (info) => {
      let logDom = document.createElement("div");
      logDom.classList.add("logDom");
      logDom.innerHTML = JSON.stringify(info, 4);
      $(".console").appendChild(logDom);
      logDom.scrollIntoView();
    };
  },
};