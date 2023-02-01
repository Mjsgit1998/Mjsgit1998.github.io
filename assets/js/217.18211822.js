(window.webpackJsonp=window.webpackJsonp||[]).push([[217],{533:function(n,t,a){"use strict";a.r(t);var s=a(7),e=Object(s.a)({},(function(){var n=this,t=n._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[t("h1",{attrs:{id:"dart"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dart"}},[n._v("#")]),n._v(" "),t("strong",[n._v("Dart")])]),n._v(" "),t("h2",{attrs:{id:"基础"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础"}},[n._v("#")]),n._v(" 基础")]),n._v(" "),t("h3",{attrs:{id:"类型声明"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型声明"}},[n._v("#")]),n._v(" 类型声明")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("1.可以使用var 关键字。\n2.常量可以使用 final 和 const \n\tconst值不变，一开始就得赋值\n\tfinal可以一开始不赋值，只能赋值一次。\n3.命名规则。\n1、变量名称必须由数字、字母、下划线和美元符($)组成。\n\n          2.注意：标识符开头不能是数字\n\n          3.标识符不能是保留字和关键字。   \n\n          4.变量的名字是区分大小写的如: age和Age是不同的变量。在实际的运用中,也建议,不要用一个单词大小写区分两个变量。\n        \n          5、标识符(变量名称)一定要见名思意 ：变量名称建议用名词，方法名称建议用动词  \n\n\n")])])]),t("h3",{attrs:{id:"基础类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基础类型"}},[n._v("#")]),n._v(" 基础类型")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("入口方法：  main(){print('')};\n\t\t\t\n\t\t  void main (){\n              print('')\n\t\t  };\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("常用数据类型：\n    Numbers（数值）:\n       int\n       double\n   Strings（字符串）\n        String\n    Booleans(布尔)\n         bool\n    List（数组）\n       在Dart中，数组是列表对象，所以大多数人只是称它们为列表\n    Maps（字典）\n        通常来说，Map 是一个键值对相关的对象。 键和值可以是任何类型的对象。每个 键 只出现一次， 而一个值则可以出现多次\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('String 字符串类型\n\nString str1 = “this is my str”;\nString str2 = “this is my str”;\nprint("$str1 $str2");\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("bool  布尔类型\n bool mybool = true;\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('List 集合类型\n定义List 的几种方式：\n1.  var  list1 = [\'str\',1];\n2.  var  list2 = <String>["a","b"]\n3.  var list3 = [];\n\tlist3.add(1);\n\tlist3.add(2);\n4.  var list4 = List.filled(length,"要填充的值");\n\t此种方式不能使用add方法\n5. var list5 = List<String>.filled(length,"要填充的\t\t值");\n\n')])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('Map 字典数据类型\n\n1.var person ={\n    "name":\'aaa\',\n    "age":123\n};\n\nprint(person["name"]);\n\n2. var p = new Map();\n\tp["name"]= \'mmm\';\n\tp["age"] = \'123\';\n')])])]),t("h3",{attrs:{id:"类型判断"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型判断"}},[n._v("#")]),n._v(" 类型判断")]),n._v(" "),t("p",[t("strong",[n._v("使用关键词 is 来判断")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("var str = '123';\nif(str is String){\n\tprint('yes')\n}else{\n    print('no')\n};\n")])])]),t("h3",{attrs:{id:"运算符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运算符"}},[n._v("#")]),n._v(" 运算符")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Dart运算符：\n\n    算术运算符\n\n      +    -    *    /     ~/ (取整)     %（取余）\n      \n    关系运算符\n\n      ==    ！=   >    <    >=    <=\n\n    逻辑运算符\n\n        !  &&   ||\n\n    赋值运算符\n\n     基础赋值运算符   =   ??=\n     复合赋值运算符   +=  -=  *=   /=   %=  ~/=\n\n\n    条件表达式 \n\n        if  else   switch case \n\n        三目运算符\n\n        ??运算符：\n\n\t自增自减运算符\n\t\t++ --\n\n\n")])])]),t("h3",{attrs:{id:"类型转换"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[n._v("#")]),n._v(" 类型转换")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("类型转换\n\n    1、Number与String类型之间的转换\n    \n    \tNumber 类型转换成String 类型  toString()\n    \tString 类型转换成 Number 类型 \n    \t\tint.parse()或者double.parse()\n\n    2、其他类型转换成Booleans类型\n    \n    isEmpty：判断 字符串是否为空；\n    \t// var str='';\n        // if(str.isEmpty){\n        //   print('str空');\n        // }else{\n        //   print('str不为空');\n        // }\n    isNan :\n         // var myNum = 0 / 0;\n         // // print(myNum);\n    \t // if (myNum.isNaN) {\n         //   print('NaN');\n         // }\n")])])]),t("h3",{attrs:{id:"for循环-及-循环遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#for循环-及-循环遍历"}},[n._v("#")]),n._v(" for循环 及 循环遍历")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("for 基本语法：\n\nfor (int i = 1 ; i <= 100 ; i++){\n    print(i)\n}\n")])])]),t("h3",{attrs:{id:"while-和-do-while"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#while-和-do-while"}},[n._v("#")]),n._v(" while 和  do while")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/*\n\t语法格式:\n\t\t\n\t\twhile(表达式/循环条件){\t\t\t\n\t\t\t\n\t\t}\t\n\t\t\n    \t\t\n\t\tdo{\n\t\t\t语句/循环体\n\t\t\t\n\t\t}while(表达式/循环条件);\n\t\t\n\t\t\t\t\n\n\t\t注意： 1、最后的分号不要忘记\n\t\t\t  2、循环条件中使用的变量需要经过初始化\n\t\t      3、循环体中，应有结束循环的条件，否则会造成死循环。\n*/\n\n")])])]),t("h3",{attrs:{id:"break-和-continue"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#break-和-continue"}},[n._v("#")]),n._v(" break 和 continue")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/*\n\tbreak语句功能:\n          1、在switch语句中使流程跳出switch结构。\n          2、在循环语句中使流程跳出当前循环,遇到break 循环终止，后面代码也不会执行\n          \n          强调:\n          1、如果在循环中已经执行了break语句,就不会执行循环体中位于break后的语句。\n          2、在多层循环中,一个break语句只能向外跳出一层\n\n        break可以用在switch case中 也可以用在 for 循环和 while循环中\n\n      continue语句的功能:\n\t\t\t  \n        【注】只能在循环语句中使用,使本次循环结束，即跳过循环体重下面尚未执行的语句，接着进行下次的是否执行循环的判断。\n\n        continue可以用在for循环以及 while循环中，但是不建议用在while循环中，不小心容易死循环\n\n\n*/\n\n")])])]),t("h3",{attrs:{id:"list-常用属性和方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-常用属性和方法"}},[n._v("#")]),n._v(" List 常用属性和方法！！！")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("\n/*\nList里面常用的属性和方法：\n\n    常用属性：\n        length          长度\n        reversed        翻转   返回一个数据（不是数组） 不影响原来的\n        isEmpty         是否为空  返回 true / false\n        isNotEmpty      是否不为空 返回 true / false\n    常用方法：  \n        add         增加\n        addAll      拼接数组\n        \tList myList=['香蕉','苹果','西瓜']\n        \tmyList.addAll(['桃子','葡萄']);  //拼接数组\n        \t\n        indexOf     查找  传入具体值 \n        \t\t\t找到就返回索引，否则返回-1\n        \t\t\t\n        remove      删除  传入具体值\n        removeAt    删除  传入索引值\n        fillRange   修改  \n       \t\tfillRange(start,end,value)\n       \t\t包左不包右 替换为value\n        insert(index,value);    指定位置插入    \t\t\t\n        insertAll(index,list)     指定位置插入List\n        toList()    其他类型转换成List  \n        join()      List转换成字符串\n        split()     字符串转化成List\n          forEach   \n        map\n        where    返回满足条件的\n        any\t\t有满足条件的就返回true\n        every\t全都满足条件返回true\n\n*/\n\n")])])]),t("h3",{attrs:{id:"set"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set"}},[n._v("#")]),n._v(" Set")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//Set \n\n//用它最主要的功能就是去除数组重复内容\n\n//Set是没有顺序且不能重复的集合，所以不能通过索引去获取值\nvar s  = new Set()\nadd\naddAll\n\n")])])]),t("h3",{attrs:{id:"map"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#map"}},[n._v("#")]),n._v(" Map")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/*\n  映射(Maps)是无序的键值对：\n\n    常用属性：\n        keys            获取所有的key值\n        values          获取所有的value值\n        isEmpty         是否为空\n        isNotEmpty      是否不为空\n    常用方法:\n        remove(key)     删除指定key的数据\n        addAll({...})   合并映射  给映射内增加属性\n        containsValue   查看映射内的值  返回true/false\n        forEach   \n        map\n        where    返回满足条件的\n        any\t\t有满足条件的就返回true\n        every\t全都满足条件返回true\n\n\n*/\n\n")])])]),t("h3",{attrs:{id:"方法-函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法-函数"}},[n._v("#")]),n._v(" 方法/函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("/*\n  内置方法/函数：\n\n      print();\n\n  自定义方法：\n      自定义方法的基本格式：\n\n      返回类型  方法名称（参数1，参数2,...）{\n        方法体\n        return 返回值;\n      }\n*/\n\nvoid  printInfo(){\n    print('133')\n}\n\nint getNum (){\n\treturn 123\n}\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("可选参数带默认值\nprintInfo(String name,[int age = 0, int sex = 1]){}\nprintInfo('mm',1)\n\n\n命名参数带默认值，同样可选\nprintInfo(String name ,{int age = 0}){}\nprintIfo('mmm',age:1)  //传参要带上变量名\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("箭头函数：注意和方法的区别: 箭头函数内只能写一条语句，并且语句后面没有分号(;)\n\n匿名函数： \nvar printNum = (){print(123)}\nprintNum()\n\n自执行函数：\n((int num){print(num)})(111)\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("闭包！！\n/*\n闭包：\n\n    1、全局变量特点:    全局变量常驻内存、全局变量污染全局\n    2、局部变量的特点：  不常驻内存会被垃圾机制回收、不会污染全局  \n\n\n  /*  想实现的功能：\n\n        1.常驻内存        \n        2.不污染全局   \n\n          产生了闭包,闭包可以解决这个问题.....  \n\n          闭包: 函数嵌套函数, 内部函数会调用外部函数的变量或参数, 变量或参数不会被系统回收(不会释放内存)\n  \n\t        闭包的写法： 函数嵌套函数，并return 里面的函数，这样就形成了闭包。\n\n    */  \n*/\n")])])]),t("h2",{attrs:{id:"面向对象-类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#面向对象-类"}},[n._v("#")]),n._v(" 面向对象---类")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n\tString name = 'mmm';\n\tint age = 23;\n\t\n\tvoid getInfo (){\n        print('${this.name}-----${this.age}')\n\t}\n\tvoid setInfo (age){\n        this.age = age\n\t}\n}\n\n// 对Person类进行实例化\nvoid main (){\n    Person p1 = new Person();\n    p1.getInfo();\n    p1.setInfo(12);\n}\n\n\n")])])]),t("h3",{attrs:{id:"类的默认构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的默认构造函数"}},[n._v("#")]),n._v(" 类的默认构造函数")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("//默认构造函数的名字和类的名字一样\n\nclass Person{\n  String name='张三';\n  int age=20; \n  //默认构造函数\n  Person(){\n    print('这是构造函数里面的内容  这个方法在实例化的时候触发');\n  }\n  void printInfo(){   \n    print(\"${this.name}----${this.age}\");\n  }\n}\n\n")])])]),t("p",[t("strong",[n._v("初始化不可为null 的实例字段，不初始化的话需要在前面加late关键字")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("// 构造函数传参\n\nclass Person{\n  late String name;\n  late int age; \n  //默认构造函数\n  Person(String name,int age){\n      this.name=name;\n      this.age=age;\n  }\n    //这是Person的简写\n    //   Person(this.name,this.age);\n  }\n  void printInfo(){   \n    print(\"${this.name}----${this.age}\");\n  }\n}\n\n\nvoid main (){\n    Person p1 = new Person('mmm',12)\n}\n")])])]),t("h3",{attrs:{id:"类的命名构造函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的命名构造函数"}},[n._v("#")]),n._v(" 类的命名构造函数")]),n._v(" "),t("p",[t("strong",[n._v("类的构造函数可以有多个")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n  late String name;\n  late int age;\n  //默认构造函数的简写\n  Person(this.name, this.age);\n\n  Person.now() {\n    print('我是命名构造函数');\n  }\n\n  Person.setInfo(String name, int age) {\n    this.name = name;\n    this.age = age;\n  }\n\n  void printInfo() {\n    print(\"${this.name}----${this.age}\");\n  }\n}\n\nvoid main() {\n  // var d=new DateTime.now();   //实例化DateTime调用它的命名构造函数\n  // print(d);\n\n  //Person p1=new Person('张三', 20);   //默认实例化类的时候调用的是 默认构造函数\n\n  //Person p1=new Person.now();   //命名构造函数\n\n  Person p1 = new Person.setInfo('李四', 30);\n  p1.printInfo();\n}\n\n")])])]),t("h3",{attrs:{id:"类抽离成单独文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类抽离成单独文件"}},[n._v("#")]),n._v(" 类抽离成单独文件")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("Person.dart:\n\nclass Person {\n    xxxxxx\n}\n\nother.dart:\n\nimport '/Person.dart'\nvoid main (){\n\tPerson p1 = new Person();\n}\n")])])]),t("h3",{attrs:{id:"类的私有属性和私有方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的私有属性和私有方法"}},[n._v("#")]),n._v(" 类的私有属性和私有方法")]),n._v(" "),t("p",[t("strong",[n._v("dart可以在类中使用 _ 把一个属性或者方法定义为私有属性。")])]),n._v(" "),t("p",[t("strong",[n._v("但是！！，只有把类单独抽离到单独文件中时才起作用。")])]),n._v(" "),t("p",[t("strong",[n._v("同时，可以通过在公有方法中访问私有属性私有方法的方式来访问。")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("单独文件中：\n\nclass Animal{\n  late String _name;   //私有属性\n  late int age; \n  //默认构造函数的简写\n  Animal(this._name,this.age);\n\n  void printInfo(){   \n    print(\"${this._name}----${this.age}\");\n  }\n\n  String getName(){ \n    return this._name;\n  } \n  void _run(){\n    print('这是一个私有方法');\n  }\n\n  execRun(){\n    this._run();  //类里面方法的相互调用\n  }\n}\n\n另一个文件中：\n\nvoid main(){\n \n Animal a=new Animal('小狗', 3);\n\n print(a.getName());\n\n a.execRun();   //间接的调用私有方法\n \n  // print(a.age);  \n\n}\n")])])]),t("h3",{attrs:{id:"类的set-和-get"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的set-和-get"}},[n._v("#")]),n._v(" 类的set 和 get")]),n._v(" "),t("p",[t("strong",[n._v("主要和javascript 的 get 的区别：")])]),n._v(" "),t("p",[t("strong",[n._v("get  xxx {}          没有（），js中是 get xxx（）{}")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n    late String name ;\n    late int age;\n    Person(this.name,this.age);\n    get getInfo {\n\t  return this.name\n\t}\n\tset setInfo (value){\n        this.name = value\n\t}\n}\n\nvoid main (){\n\tPerson p1 = new Person('mmm',22)\n\tprint('${p1.getInfo}')\n\tp1.name = 'abc'\n}\n")])])]),t("h3",{attrs:{id:"初始化类的实例变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化类的实例变量"}},[n._v("#")]),n._v(" 初始化类的实例变量")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('// Dart中我们也可以在构造函数体运行之前初始化实例变量\n\nclass Rect{\n  int height;\n  int width;\n  Rect():height=2,width=10{\n    \n    print("${this.height}---${this.width}");\n  }\n  getArea(){\n    return this.height*this.width;\n  } \n}\n\nvoid main(){\n  Rect r=new Rect();\n  print(r.getArea()); \n   \n}\n')])])]),t("h3",{attrs:{id:"类的静态成员静态方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的静态成员静态方法"}},[n._v("#")]),n._v(" 类的静态成员静态方法")]),n._v(" "),t("p",[n._v("Dart中的静态成员:")]),n._v(" "),t("p",[n._v("1、使用static 关键字来实现类级别的变量和函数")]),n._v(" "),t("p",[n._v("2、静态方法只能访问静态成员，非静态方法也可以访问静态成员，也可以调用静态方法。")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n  static String name = '张三';\n  int age = 20;\n  static void show() {\n    print(name);\n  }\n\n  void printInfo() {\n    /*非静态方法可以访问静态成员以及非静态成员*/\n    // print(name);  //访问静态属性\n    // print(this.age);  //访问非静态属性\n    show(); //调用静态方法\n  }\n\n  static void printUserInfo() {\n    //静态方法\n    print(name); //静态属性\n    show(); //静态方法\n\n    //print(this.age);     //静态方法没法访问非静态的属性\n    // this.printInfo();   //静态方法没法访问非静态的方法\n    // printInfo();\n  }\n}\n\nmain() {\n  // print(Person.name);\n  // Person.show();\n\n  // Person p=new Person();\n  // p.printInfo();\n\n  Person.printUserInfo();\n}\n\n")])])]),t("h3",{attrs:{id:"对象操作符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#对象操作符"}},[n._v("#")]),n._v(" 对象操作符")]),n._v(" "),t("p",[t("strong",[n._v("Dart中的对象操作符:")])]),n._v(" "),t("p",[n._v("​    "),t("strong",[n._v("?     条件运算符 （了解）")])]),n._v(" "),t("p",[n._v("​    "),t("strong",[n._v("as    类型转换")])]),n._v(" "),t("p",[n._v("​    "),t("strong",[n._v("is    类型判断")])]),n._v(" "),t("p",[n._v("​    "),t("strong",[n._v("..    级联操作 （连缀）  (记住)")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("as    类型转换\n\nvar p1 ;\np1 = '';\np1 = new Person('xxx',xx)\n\n(p1 as Person).printInfo()\n\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("..级联操作\n // Person p1 = new Person('张三1', 20);\n  // p1.printInfo();\n  // p1\n  //   ..name = \"李四\"\n  //   ..age = 30\n  //   ..printInfo();\n")])])]),t("h3",{attrs:{id:"类的继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类的继承"}},[n._v("#")]),n._v(" 类的继承")]),n._v(" "),t("p",[n._v("Dart中的类的继承：")]),n._v(" "),t("p",[n._v("​    1、子类使用extends关键词来继承父类")]),n._v(" "),t("p",[n._v("​    2、子类会继承父类里面可见的属性和方法 但是不会继承构造函数")]),n._v(" "),t("p",[n._v("​    3、子类能复写父类的方法 getter和setter")]),n._v(" "),t("h4",{attrs:{id:"简单继承"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简单继承"}},[n._v("#")]),n._v(" 简单继承")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n  String name='张三';\n  num age=20; \n  void printInfo() {\n    print(\"${this.name}---${this.age}\");  \n  } \n}\nclass Web extends Person{\n\n}\n\nmain(){   \n\n  Web w=new Web();\n  print(w.name);\n  w.printInfo();\n \n}\n")])])]),t("h4",{attrs:{id:"使用super"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#使用super"}},[n._v("#")]),n._v(" 使用super")]),n._v(" "),t("p",[t("strong",[n._v("使用super 继承父类 的构造函数")])]),n._v(" "),t("p",[t("strong",[n._v("这样通过实例化子类来给父类赋值")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Person {\n\tlate String name;\n\tlate int age ;\n\tPerson (this.name,this,age)\n\tvoid printInfo(){\n        print('${this.name}${this.age}')\n\t}\n}\n\nclass Child extends Person{\n \tChild(String name , int age ): super(name,age){\n        \n \t}\n}\n\n\nChild c1 = new Child('mmm',22);\nc1.printInfo()\n")])])]),t("p",[t("strong",[n._v("子类使用super继承的同时还有自己的属性")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class Person {\n  String name;\n  num age; \n  Person(this.name,this.age);\n  void printInfo() {\n    print("${this.name}---${this.age}");  \n  }\n}\n\nclass Web extends Person{\n  late String sex;\n  Web(String name, num age,String sex) : super(name, age){\n    this.sex=sex;\n  }\n  run(){\n   print("${this.name}---${this.age}--${this.sex}");  \n  }\n  \n}\nmain(){ \n\n  Web w=new Web(\'张三\', 12,"男");\n\n  w.printInfo();\n\n  w.run();\n\n}\n')])])]),t("h4",{attrs:{id:"覆写父类的方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#覆写父类的方法"}},[n._v("#")]),n._v(" 覆写父类的方法")]),n._v(" "),t("p",[t("strong",[n._v("使用关键字 @override")])]),n._v(" "),t("p",[t("strong",[n._v("可以写也可以不写  建议在覆写父类方法的时候加上 @override")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class Person {\n  String name;\n  num age;\n  Person(this.name, this.age);\n  void printInfo() {\n    print("${this.name}---${this.age}");\n  }\n\n  work() {\n    print("${this.name}在工作...");\n  }\n}\n\nclass Web extends Person {\n  Web(String name, num age) : super(name, age);\n\n  run() {\n    print(\'run\');\n  }\n\n  //覆写父类的方法\n  @override //可以写也可以不写  建议在覆写父类方法的时候加上 @override\n  void printInfo() {\n    print("姓名1：${this.name}---年龄：${this.age}");\n  }\n\n  @override\n  work() {\n    print("${this.name}的工作是写代码");\n  }\n}\n')])])]),t("h4",{attrs:{id:"子类方法中调用父类方法-super"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#子类方法中调用父类方法-super"}},[n._v("#")]),n._v(" 子类方法中调用父类方法（super）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("class Web extends Person{\n  Web(String name, num age) : super(name, age);\n\n  run(){\n    print('run');\n    super.work();  //子类调用父类的方法\n  }\n\n}\n")])])]),t("h3",{attrs:{id:"抽象类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#抽象类"}},[n._v("#")]),n._v(" 抽象类")]),n._v(" "),t("p",[n._v("Dart中抽象类: Dart抽象类主要用于定义标准，子类可以继承抽象类，也可以实现抽象类接口。")]),n._v(" "),t("p",[n._v("1、抽象类通过abstract 关键字来定义")]),n._v(" "),t("p",[n._v("2、Dart中的抽象方法不能用abstract声明，Dart中没有方法体的方法我们称为抽象方法。")]),n._v(" "),t("p",[n._v("3、如果子类继承抽象类必须得实现里面的抽象方法")]),n._v(" "),t("p",[n._v("4、如果把抽象类当做接口实现的话必须得实现抽象类里面定义的所有属性和方法。")]),n._v(" "),t("p",[n._v("5、抽象类不能被实例化，只有继承它的子类可以")]),n._v(" "),t("p",[n._v("extends抽象类 和 implements的区别：")]),n._v(" "),t("p",[n._v("1、如果要复用抽象类里面的方法，并且要用抽象方法约束子类的话我们就用extends继承抽象类")]),n._v(" "),t("p",[n._v("2、如果只是把抽象类当做标准的话我们就用implements实现抽象类")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("abstract class Animal{\n  eat();   //抽象方法\n  run();  //抽象方法  \n  printInfo(){\n    print('我是一个抽象类里面的普通方法');\n  }\n}\n\nclass Dog extends Animal{\n  @override\n  eat() {\n     print('小狗在吃骨头');\n  }\n\n  @override\n  run() {\n    // TODO: implement run\n    print('小狗在跑');\n  }  \n}\nclass Cat extends Animal{\n  @override\n  eat() {\n    // TODO: implement eat\n    print('小猫在吃老鼠');\n  }\n\n  @override\n  run() {\n    // TODO: implement run\n    print('小猫在跑');\n  }\n\n}\n")])])]),t("h3",{attrs:{id:"接口-implements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#接口-implements"}},[n._v("#")]),n._v(" 接口（implements）")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("和Java一样，dart也有接口，但是和Java还是有区别的。\n\n  首先，dart的接口没有interface关键字定义接口，而是普通类或抽象类都可以作为接口被实现。\n\n  同样使用implements关键字进行实现。\n\n  但是dart的接口有点奇怪，如果实现的类是普通类，会将普通类和抽象中的属性的方法全部需要覆写一遍。\n  \n  而因为抽象类可以定义抽象方法，普通类不可以，所以一般如果要实现像Java接口那样的方式，一般会使用抽象类。\n\n  建议使用抽象类定义接口。\n")])])]),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("abstract class Db{   //当做接口   接口：就是约定 、规范\n    late String uri; //数据库的链接地址\n    add(String data);\n    save();\n    delete();\n}\nclass Mysql implements Db{\n  \n  @override\n  String uri;\n\n  Mysql(this.uri);\n\n  @override\n  add(data) {\n    // TODO: implement add\n    print('这是mysql的add方法'+data);\n  }\n\n  @override\n  delete() {\n    // TODO: implement delete\n    return null;\n  }\n\n  @override\n  save() {\n    // TODO: implement save\n    return null;\n  }\n\n}\n")])])]),t("h4",{attrs:{id:"implements实现多个接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#implements实现多个接口"}},[n._v("#")]),n._v(" implements实现多个接口")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v("abstract class A {\n  late String name;\n  printA();\n}\n\nabstract class B {\n  printB();\n}\n\nclass C implements A, B {\n  @override\n  late String name;\n  @override\n  printA() {\n    print('printA');\n  }\n\n  @override\n  printB() {\n    // TODO: implement printB\n    return null;\n  }\n}\n")])])]),t("h3",{attrs:{id:"mixins-混入"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#mixins-混入"}},[n._v("#")]),n._v(" mixins（混入）")]),n._v(" "),t("p",[n._v("1、作为mixins的类只能继承自Object，不能继承其他类")]),n._v(" "),t("p",[n._v("2、作为mixins的类不能有构造函数")]),n._v(" "),t("p",[n._v("3、一个类可以mixins多个mixins类")]),n._v(" "),t("p",[n._v("4、mixins绝不是继承，也不是接口，而是一种全新的特性")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class A {\n  String info="this is A";\n  void printA(){\n    print("A");\n  }\n}\n\nclass B {\n  void printB(){\n    print("B");\n  }\n}\n\nclass C with A,B{\n  \n}\n\nvoid main(){\n  \n  var c=new C();  \n  c.printA();\n  c.printB();\n  print(c.info);\n\n\n}\n\n')])])]),t("p",[t("strong",[n._v("使用关键词with时，如果两个类中有相同的方法，那么是继承的后面的类")])]),n._v(" "),t("div",{staticClass:"language-dart extra-class"},[t("pre",{pre:!0,attrs:{class:"language-dart"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("class")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("C")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("extends")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("Person")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("with")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("A")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("B")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("{")]),n._v("\n  "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("C")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("String")]),n._v(" name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" num age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(":")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("super")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),n._v("name"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),n._v(" age"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(";")]),n._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("}")]),n._v("\n\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("C")]),n._v(" c "),t("span",{pre:!0,attrs:{class:"token operator"}},[n._v("=")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[n._v("new")]),n._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("C")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token string-literal"}},[t("span",{pre:!0,attrs:{class:"token string"}},[n._v("'sdd'")])]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(",")]),t("span",{pre:!0,attrs:{class:"token number"}},[n._v("1223")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("\n\n如果"),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("A")]),n._v("，"),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("B")]),n._v("中都有一个run方法，那么c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[n._v("run")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[n._v(")")]),n._v("调用的是"),t("span",{pre:!0,attrs:{class:"token class-name"}},[n._v("B")]),n._v("中的run方法。\n")])])]),t("h2",{attrs:{id:"泛型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型"}},[n._v("#")]),n._v(" 泛型！！")]),n._v(" "),t("h3",{attrs:{id:"泛型方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型方法"}},[n._v("#")]),n._v(" 泛型方法")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v(" T getData<T>(T value){\n      return value;\n  }\n  \n  main(){\n      getData<int>(123)\n  }\n")])])]),t("h3",{attrs:{id:"泛型类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型类"}},[n._v("#")]),n._v(" 泛型类")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('class MyList<T> {\n  List list = <T>[];\n  void add(T value) {\n    this.list.add(value);\n  }\n\n  List getList() {\n    return list;\n  }\n}\n\n\nMyList l3 = new MyList<int>();\n  l3.add(11);\n  l3.add(12);\n  l3.add("aaaa");\n  print(l3.getList());\n')])])]),t("h3",{attrs:{id:"泛型接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#泛型接口"}},[n._v("#")]),n._v(" 泛型接口")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('abstract class Cache<T>{\n  getByKey(String key);\n  void setByKey(String key, T value);\n}\n\nclass MemoryCache<T> implements Cache<T>{\n  @override\n  getByKey(String key) {   \n    return null;\n  }\n\n  @override\n  void setByKey(String key, T value) {\n       print("我是内存缓存 把key=${key}  value=${value} -写入到了内存中");\n  }\n}\n\n\nMemoryCache m=new MemoryCache<Map>();\n\nm.setByKey(\'index\', {"name":"张三","age":20});\n')])])]),t("h2",{attrs:{id:"其它补充"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#其它补充"}},[n._v("#")]),n._v(" 其它补充")]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('1. Null safety 以及 可空类型   以及非空断言；\n\n ? 可空类型\n // String? username="张三";   // String?  表示username是一个可空类型\n  // username=null;\n  // print(username);\n \n \n  // ! 类型断言\n\n  // String? str="this is str";\n\n  // str=null;\n\n  // print(str!.length);\n\n  //类型断言: 如果str不等于null 会打印str的长度，如果等于null会抛出异常\n\n  //  printLength("str");\n')])])]),t("p",[t("strong",[n._v("required")])]),n._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[n._v('/*\nNull safety翻译成中文的意思是空安全。\n\nrequired翻译成中文的意思是需要、依赖\n\nrequired关键词:\n\n    最开始 @required 是注解\n    \n    现在它已经作为内置修饰符。\n    \n    主要用于允许根据需要标记任何命名参数（函数或类），使得它们不为空。因为可选参数中必须有个 required 参数或者该参数有个默认值。\n\n*/\n\n\nString printUserInfo(String username, {int age = 10, String sex = "男"}) {\n  //行参\n  return "姓名:$username---性别:$sex--年龄:$age";\n}\n\nString printInfo(String username, {required int age, required String sex}) {\n  //行参\n  return "姓名:$username---性别:$sex--年龄:$age";\n}\n\nvoid main(args) {\n  print(printUserInfo(\'张三\'));\n\n  print(printUserInfo(\'张三\', age: 20, sex: "女"));\n\n  //age 和 sex必须传入\n  print(printInfo(\'张三\', age: 22, sex: "女"));\n}\n\n')])])])])}),[],!1,null,null,null);t.default=e.exports}}]);