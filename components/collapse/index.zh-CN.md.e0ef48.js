(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{3778:function(t,d){t.exports={content:["section",["p","\u53EF\u4EE5\u6298\u53E0/\u5C55\u5F00\u7684\u5185\u5BB9\u533A\u57DF\u3002"],["h2","\u4F55\u65F6\u4F7F\u7528"],["ul",["li",["p","\u5BF9\u590D\u6742\u533A\u57DF\u8FDB\u884C\u5206\u7EC4\u548C\u9690\u85CF\uFF0C\u4FDD\u6301\u9875\u9762\u7684\u6574\u6D01\u3002"]],["li",["p",["code","\u624B\u98CE\u7434"]," \u662F\u4E00\u79CD\u7279\u6B8A\u7684\u6298\u53E0\u9762\u677F\uFF0C\u53EA\u5141\u8BB8\u5355\u4E2A\u5185\u5BB9\u533A\u57DF\u5C55\u5F00\u3002"]]]],meta:{category:"Components",type:"\u6570\u636E\u5C55\u793A",title:"Collapse",subtitle:"\u6298\u53E0\u9762\u677F",cols:1,cover:"https://gw.alipayobjects.com/zos/alicdn/IxH16B9RD/Collapse.svg",filename:"components/collapse/index.zh-CN.md"},toc:["ul",["li",["a",{className:"bisheng-toc-h2",href:"#\u4F55\u65F6\u4F7F\u7528",title:"\u4F55\u65F6\u4F7F\u7528"},"\u4F55\u65F6\u4F7F\u7528"]],["li",["a",{className:"bisheng-toc-h2",href:"#API",title:"API"},"API"]]],api:["section",["h2","API"],["h3","Collapse"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","accordion"],["td","\u624B\u98CE\u7434\u6A21\u5F0F"],["td","boolean"],["td","false"],["td"]],["tr",["td","activeKey"],["td","\u5F53\u524D\u6FC0\u6D3B tab \u9762\u677F\u7684 key"],["td","string","[","] ","|"," string ",["br"]," number","[","] ","|"," number"],["td","\u9ED8\u8BA4\u65E0\uFF0Caccordion \u6A21\u5F0F\u4E0B\u9ED8\u8BA4\u7B2C\u4E00\u4E2A\u5143\u7D20"],["td"]],["tr",["td","bordered"],["td","\u5E26\u8FB9\u6846\u98CE\u683C\u7684\u6298\u53E0\u9762\u677F"],["td","boolean"],["td","true"],["td"]],["tr",["td","collapsible"],["td","\u6240\u6709\u5B50\u9762\u677F\u662F\u5426\u53EF\u6298\u53E0\u6216\u6307\u5B9A\u53EF\u6298\u53E0\u89E6\u53D1\u533A\u57DF"],["td",["code","header"]," ","|"," ",["code","icon"]," ","|"," ",["code","disabled"]],["td","-"],["td","4.9.0"]],["tr",["td","defaultActiveKey"],["td","\u521D\u59CB\u5316\u9009\u4E2D\u9762\u677F\u7684 key"],["td","string","[","] ","|"," string",["br"]," number","[","] ","|"," number"],["td","-"],["td"]],["tr",["td","destroyInactivePanel"],["td","\u9500\u6BC1\u6298\u53E0\u9690\u85CF\u7684\u9762\u677F"],["td","boolean"],["td","false"],["td"]],["tr",["td","expandIcon"],["td","\u81EA\u5B9A\u4E49\u5207\u6362\u56FE\u6807"],["td","(panelProps) => ReactNode"],["td","-"],["td"]],["tr",["td","expandIconPosition"],["td","\u8BBE\u7F6E\u56FE\u6807\u4F4D\u7F6E"],["td",["code","start"]," ","|"," ",["code","end"]],["td","-"],["td","4.21.0"]],["tr",["td","ghost"],["td","\u4F7F\u6298\u53E0\u9762\u677F\u900F\u660E\u4E14\u65E0\u8FB9\u6846"],["td","boolean"],["td","false"],["td","4.4.0"]],["tr",["td","onChange"],["td","\u5207\u6362\u9762\u677F\u7684\u56DE\u8C03"],["td","function"],["td","-"],["td"]]]],["h3","Collapse.Panel"],["table",["thead",["tr",["th","\u53C2\u6570"],["th","\u8BF4\u660E"],["th","\u7C7B\u578B"],["th","\u9ED8\u8BA4\u503C"],["th","\u7248\u672C"]]],["tbody",["tr",["td","collapsible"],["td","\u662F\u5426\u53EF\u6298\u53E0\u6216\u6307\u5B9A\u53EF\u6298\u53E0\u89E6\u53D1\u533A\u57DF"],["td",["code","header"]," ","|"," ",["code","icon"]," ","|"," ",["code","disabled"]],["td","-"],["td","4.9.0 (icon: 4.24.0)"]],["tr",["td","extra"],["td","\u81EA\u5B9A\u4E49\u6E32\u67D3\u6BCF\u4E2A\u9762\u677F\u53F3\u4E0A\u89D2\u7684\u5185\u5BB9"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","forceRender"],["td","\u88AB\u9690\u85CF\u65F6\u662F\u5426\u6E32\u67D3 DOM \u7ED3\u6784"],["td","boolean"],["td","false"],["td"]],["tr",["td","header"],["td","\u9762\u677F\u5934\u5185\u5BB9"],["td","ReactNode"],["td","-"],["td"]],["tr",["td","key"],["td","\u5BF9\u5E94 activeKey"],["td","string ","|"," number"],["td","-"],["td"]],["tr",["td","showArrow"],["td","\u662F\u5426\u5C55\u793A\u5F53\u524D\u9762\u677F\u4E0A\u7684\u7BAD\u5934\uFF08\u4E3A false \u65F6\uFF0Ccollapsible \u4E0D\u80FD\u7F6E\u4E3A icon\uFF09"],["td","boolean"],["td","true"],["td"]]]]]}}}]);
