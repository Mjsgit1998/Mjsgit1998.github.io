(window.webpackJsonp=window.webpackJsonp||[]).push([[221],{534:function(e,n,t){"use strict";t.r(n);var a=t(7),r=Object(a.a)({},(function(){var e=this,n=e._self._c;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"electron"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#electron"}},[e._v("#")]),e._v(" Electron")]),e._v(" "),n("h2",{attrs:{id:"一、安装-electron"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#一、安装-electron"}},[e._v("#")]),e._v(" 一、安装 electron")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1、全局安装\nnpm install -g electron  // 安装\nelectron .     // //启动命令\n2.单独文件内安装\nnpm install electron --save-dev  //安装\n./node_modules/.bin/electron   //启动命令\n")])])]),n("h2",{attrs:{id:"二、创建主窗口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#二、创建主窗口"}},[e._v("#")]),e._v(" 二、创建主窗口")]),e._v(" "),n("p",[n("strong",[e._v("创建’main.js‘文件")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var electron = require('electron')\n// 新版本引入remote的方式,先在主线程中初始化remote\nrequire('@electron/remote/main').initialize()\nvar app = electron.app\n\nvar browerWindow = electron.BrowserWindow\n\nvar mainWindow = null\n\napp.on('ready', () => {\n  mainWindow = new browerWindow({\n    width: 600,\n    height: 600,\n    webPreferences: {\n        nodeIntegration: true,\n        enableRemoteModule: true,\n        contextIsolation: false\n    }\n  })\n  mainWindow.loadFile('./demo.html')  // 此处为引入主窗口文件\n  mainWindow.on('close', () => {\n    mainWindow = null\n  })\n})\n\n")])])]),n("h2",{attrs:{id:"三、渲染其他窗口-渲染进程"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#三、渲染其他窗口-渲染进程"}},[e._v("#")]),e._v(" 三、渲染其他窗口(渲染进程)")]),e._v(" "),n("p",[e._v("// 新版本引入 remote 的方式,先在主线程中初始化 remote。 // require('@electron/remote/main').initialize()")]),e._v(" "),n("p",[e._v("// 调用是 引入 require('electron/remote')")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\nconst { BrowserWindow } = require('@electron/remote')\n\nlet newWin = null\nwindow.onload = () => {\n  btn.onclick = () => {\n    newWin = new BrowserWindow({\n      width: 500,\n      height: 500\n    })\n\n    newWin.loadFile('yellow.html')\n    newWin.on('close', () => {\n      newWin = null\n    })\n  }\n}\n\n")])])]),n("h2",{attrs:{id:"四、配置菜单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#四、配置菜单"}},[e._v("#")]),e._v(" 四、配置菜单")]),e._v(" "),n("p",[n("strong",[e._v("1.先新建一个 menu.js 文件来管理菜单")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const {Menu} = require('electron')\n\nvar template = [\n\t{\n\t\tlabel:'一级菜单',\n\t\tsubmenu:[\n\t\t\t{\n\t\t\t\tlabel:'二级菜单',\n\t\t\t\tclick:()=>{\n\t\t\t\t\t//可以给二级菜单配置点击事件\n\t\t\t\t\tvar win = new BrowserWindow({\n                            width: 400,\n                            height: 400,\n                            webPreferences: {\n                                nodeIntegration: true,\n                                enableRemoteModule: true,\n                                contextIsolation: false\n                                }\n                          })\n\n                          win.loadFile('yellow.html')\n                          win.on('close', () => {\n                            win = null\n                          })\n\t\t\t\t}\n\t\t\t}\n\t\t]\n\t}，\n\t{\n\t\tlabel:'一级菜单'，\n\t\tsubmenu:[\n\t\t\t{}\n\t\t]\n\t}\n\n]\n// 使用这两个api\nvar m = Menu.buildFromTemplate(template)\n\nMenu.setApplicationMenu(m)\n")])])]),n("p",[n("strong",[e._v("2.在主线程 main.js 中引入")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("\napp.on('ready', () => {\n  mainWindow = new BrowserWindow({\n    width: 600,\n    height: 600,\n    webPreferences: { nodeIntegration: true, enableRemoteModule: true, contextIsolation: false }\n  })\n\n  //引入配置的菜单！！！！menu.js\n  require('./main/menu')\n\n  mainWindow.loadFile('./demo2.html')\n  mainWindow.on('close', () => {\n    mainWindow = null\n  })\n})\n")])])]),n("h2",{attrs:{id:"五、菜单-menu-的快捷键以及鼠标右键菜单"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#五、菜单-menu-的快捷键以及鼠标右键菜单"}},[e._v("#")]),e._v(" 五、菜单 Menu 的快捷键以及鼠标右键菜单")]),e._v(" "),n("p",[e._v("​ "),n("strong",[e._v("1、首先是设置菜单快捷键：accelerator：'快捷键'")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("{\n    label: '菜单',\n    accelerator: 'ctrl+v'  // ctrl+v即为快捷键\n  },\n")])])]),n("p",[e._v("​ "),n("strong",[e._v("2.配置主窗口的鼠标右键菜单")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("1、首先需要在主线程的页面中监听鼠标右键事件,并阻止默认事件\n\nwindoo.addEventListener('contextmenu',function(e){\n\te.preventDefault()\n})\n\n2.在remote方法中取出需要用到的api\n 只要不是直接配置主线程的，都在渲染进程中来进行。\n 即：\n const {BrowserWindow,Menu,getCurrentWindow} = require('@electron/remote')\n3.配置右键菜单模板\nlet rightTemplate = [\n\t{xxxxxxx}   // 和配置菜单一样\n]\n4.使用菜单\nvar r = Menu.buildFromTemplate(rightTemplate)\nwindow.addEventListener('contextmenu', function (e) {\n  e.preventDefault()\n  r.popup({ window: getCurrentWindow() })\n})\n")])])]),n("h2",{attrs:{id:"六、a-链接使用默认浏览器打开"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#六、a-链接使用默认浏览器打开"}},[e._v("#")]),e._v(" 六、a 链接使用默认浏览器打开")]),e._v(" "),n("p",[n("strong",[e._v("如何不进行处理，a 链接点击是默认在主窗口打开")])]),e._v(" "),n("p",[n("strong",[e._v("配置在默认浏览器打开")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("var {shell} = require('electron')\nvar aHref = document.querySelector('#aHref')\naHref.onclick = function (e) {\n  e.preventDefault()\n  var href = this.getAttribute('href')\n  shell.openExternal(href)    //调用shell方法\n}\n")])])]),n("h2",{attrs:{id:"七、在窗口中嵌入网页以及-window-open-打开子窗口"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#七、在窗口中嵌入网页以及-window-open-打开子窗口"}},[e._v("#")]),e._v(" 七、在窗口中嵌入网页以及 window.open()打开子窗口")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("页面中嵌入网页步骤：\nconst {BrowserView,BrowserWindow} = require('electron')\n\napp.on('ready',()=>{\n\tmainWindow = new BrowserWindow({xxxxxxx})\n\tmainWindow.loadFile('index.html')\n\n\tlet view = new BrowserView()\n\tmainWindow.setBrowserView(view)\n\tview.setBounds({\n\t\tx: 0,\n        y: 120,\n        width: 400,\n        height: 800\n\t})\n\tview.webContents.loadURL('https://xxxxxx')\n\n\n})\n\n\n")])])]),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("window.open()直接打开子窗口\n在页面中直接写方法。\n")])])]),n("h2",{attrs:{id:"八、父子窗口之间的通信"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#八、父子窗口之间的通信"}},[e._v("#")]),e._v(" 八、父子窗口之间的通信")]),e._v(" "),n("p",[n("strong",[e._v("子窗口向父窗口传递信息")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//父：\nwindow.open(popPage.html)  // 打开子窗口\n\n\n// 父窗口接收信息\nwindow.addEventListener('message',(msg)=>{\n\tconsole.log(msg)\n\t// JSON.stringify(msg.data)\n})\n\n//子popPage.html:\nwindow.opener.postMessage('我是从子窗口传递的信息') //发送信息\n\n")])])]),n("h2",{attrs:{id:"九、选择文件对话框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#九、选择文件对话框"}},[e._v("#")]),e._v(" 九、选择文件对话框")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//1. 先引入 dialog ，记住是从渲染进程remote中\n\nconst { dialog } = require('@electron/remote')\n\n//2. dialog.showOpenDialog 方法来打开文件对话框。\n\n \tdialog.showOpenDialog({\n        title:'请选择照片',   // 对话框顶部的标题\n        defaultPath:'ma.png' , // 默认路径\n        filters:[{    // 过滤器\n          name:'img',\n          extensions:['jpg','png']  // 要选择的文件格式\n        }],\n        buttonLabel:'打开图片'  // 对话框按钮的文字\n      }).then((res) => {\n          console.log(res,'res');\n          // res.filePaths 为文件的路径\n          let image = document.querySelector('#images')\n          image.setAttribute('src',res.filePaths[0])\n      }).catch(err=>{\n          console.log(err)\n      })\n")])])]),n("h2",{attrs:{id:"十、保存文件对话框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十、保存文件对话框"}},[e._v("#")]),e._v(" 十、保存文件对话框")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const { dialog } = require('@electron/remote')\nconst fs = require('fs')\ndialog.showSaveDialog({\n\ttitle:'xxx'\n}).then(res=>{\n\tconsole.log(res)\n\tfs.writeFileSync(res.filePath,'要写入的内容')\n}).catch(err=>{\n\tconsole.log(err)\n})\n")])])]),n("h2",{attrs:{id:"十一、消息对话框-确认对话框"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十一、消息对话框-确认对话框"}},[e._v("#")]),e._v(" 十一、消息对话框（确认对话框）")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" dialog.showMessageBox({\n        type:'warning',\n        title:'这是标题',\n        message:'是不是要去',\n        buttons:['去','不去']  // 根据下标来选择\n      }).then(res=>{\n        console.log(res)\n        // res.response 是数组buttons下标，来决定是选择了那个按钮\n      })\n")])])]),n("h2",{attrs:{id:"十二、-网络断开与重新连接的监听"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十二、-网络断开与重新连接的监听"}},[e._v("#")]),e._v(" 十二、 网络断开与重新连接的监听")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("//1 online 监听网络连接事件\n//2 offline 监听网络断开事件\n\n  window.addEventListener('online',function(){\n      alert('网络连接成功')\n    })\n    window.addEventListener('offline',() => {\n      alert('网络中断了')\n    })\n")])])]),n("h2",{attrs:{id:"十三、桌面通知消息"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十三、桌面通知消息"}},[e._v("#")]),e._v(" 十三、桌面通知消息")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v(" let notifyBtn = document.querySelector('#notifyBtn')\n let option = {\n    title:'来消息了',\n    body:'这是消息内容'\n  }\n  notifyBtn.onclick = function (){\n     new window.Notification(option.title,option)\n  }\n\n")])])]),n("h2",{attrs:{id:"十四、全局快捷键的注册和注销"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十四、全局快捷键的注册和注销"}},[e._v("#")]),e._v(" 十四、全局快捷键的注册和注销")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("// 在主线程main.js中进行处理\n\nconst { golbalShortcut ,app} = require('electron')\n\n// 注册快捷键要写在 app的ready事件中\napp.on('ready',function(){\n\t// 注册ctrl+e,  golbalShortcut.register\n\n\tgolbalShortcut.register('ctrl+e',()=>{\n\t\t// 快捷键要进行的操作\n\t\tmainWindow.loadURL('xxxx')\n\t})\n\t// 判断快捷键是否注册成功。globalShortcut.isRegistered\n\t// true  or  false\n\tlet isRegister = globalShortcut.isRegistered('ctrl+e')\n})\n\n//注销快捷键\n// 在app的will-quit事件中注销\napp.on('will-quit',function(){\n\tglobalShortcut.unregister('ctrl+e') //注销某个快捷键\n\tglobalShortcut.unregisterAll() //  注销所有快捷键\n})\n")])])]),n("h2",{attrs:{id:"十五、剪贴板的使用"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#十五、剪贴板的使用"}},[e._v("#")]),e._v(" 十五、剪贴板的使用")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("const {clipboard} = reuqire('@electron/remote')\n\nbtn.onclick=function(){\n\tclipboard.writeText('xxx')\n\talert('copy success!')\n}\n\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);