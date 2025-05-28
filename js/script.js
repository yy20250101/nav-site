// 网站分类数据
const categories = [
    { id: 'search', name: '搜索', icon: 'bi-search' },
    { id: 'common', name: '常用导航', icon: 'bi-star' },
    { id: 'netdisk', name: '网盘搜索', icon: 'bi-cloud' },
    { id: 'ai', name: 'AI', icon: 'bi-robot' },
    { id: 'storage', name: '存储', icon: 'bi-hdd' },
    { id: 'social', name: '社交', icon: 'bi-people' },
    { id: 'media', name: '影视音乐', icon: 'bi-play-circle' },
    { id: 'game', name: '游戏娱乐', icon: 'bi-controller' },
    { id: 'tools', name: '工具', icon: 'bi-tools' },
    { id: 'dev', name: '开发', icon: 'bi-code-square' },
    { id: 'learning', name: '学习', icon: 'bi-book' }
];

// 初始网站数据 (恢复为爱路导航风格的完整数据)
const initialSites = [
    // 搜索类
    {
      "name": "百度一下",
      "url": "https://www.baidu.com",
      "category": "search",
      "icon": "bi-search",
      "faviconUrl": "https://www.baidu.com/favicon.ico"
    },
    {
      "name": "谷歌搜索",
      "url": "https://www.google.com",
      "category": "search",
      "icon": "bi-google",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.google.com"
    },
    {
      "name": "Bing必应",
      "url": "https://www.bing.com",
      "category": "search",
      "icon": "bi-microsoft",
      "faviconUrl": "https://www.bing.com/favicon.ico"
    },
    {
      "name": "搜狗搜索",
      "url": "https://www.sogou.com",
      "category": "search",
      "icon": "bi-search",
      "faviconUrl": "https://www.sogou.com/favicon.ico"
    },
    {
      "name": "知乎搜索",
      "url": "https://www.zhihu.com/search",
      "category": "search",
      "icon": "bi-question-circle",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.zhihu.com"
    },
    {
      "name": "哔哩哔哩",
      "url": "https://search.bilibili.com",
      "category": "search",
      "icon": "bi-play-circle",
      "faviconUrl": "https://search.bilibili.com/favicon.ico"
    },
    {
      "name": "微博搜索",
      "url": "https://s.weibo.com",
      "category": "search",
      "icon": "bi-chat-dots",
      "faviconUrl": "https://s.weibo.com/favicon.ico"
    },
    {
      "name": "在线翻译",
      "url": "https://fanyi.baidu.com",
      "category": "search",
      "icon": "bi-translate",
      "faviconUrl": "https://fanyi.baidu.com/favicon.ico"
    },
    // 网盘搜索
    {
      "name": "夸克盘搜",
      "url": "https://pan.quark.cn",
      "category": "netdisk",
      "icon": "bi-search",
      "faviconUrl": "https://pan.quark.cn/favicon.ico",
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "阿里盘搜",
      "url": "https://www.alipansou.com",
      "category": "netdisk",
      "icon": "bi-search",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.alipansou.com"
    },
    {
      "name": "迅雷盘搜",
      "url": "https://pan.xunlei.com",
      "category": "netdisk",
      "icon": "bi-lightning",
      "faviconUrl": "https://favicon.yandex.net/favicon/pan.xunlei.com",
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "UC云搜",
      "url": "https://www.uc123.com",
      "category": "netdisk",
      "icon": "bi-search",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.uc123.com"
    },
    {
      "name": "天翼搜",
      "url": "https://cloud.189.cn",
      "category": "netdisk",
      "icon": "bi-search",
      "faviconUrl": "https://cloud.189.cn/logo.png",
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "百度云搜",
      "url": "https://pan.baidu.com",
      "category": "netdisk",
      "icon": "bi-search",
      "faviconUrl": "https://nd-static.bdstatic.com/m-static/wp-brand/favicon.ico",
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    // AI类
    {
      "name": "DeepSeek",
      "url": "https://deepseek.com",
      "category": "ai",
      "icon": "bi-robot",
      "faviconUrl": "https://favicon.yandex.net/favicon/deepseek.com"
    },
    {
      "name": "百度AI图片助手",
      "url": "https://image.baidu.com/search/index?showMask=1&fr=csaitab&tn=baiduimage&toolType=1&word=bdaitpzs百度AI图片助手bdaitpzs",
      "category": "ai",
      "icon": "bi-image",
      "faviconUrl": "https://favicon.yandex.net/favicon/image.baidu.com"
    },
    {
      "name": "AI助手-ChatOS2",
      "url": "https://chat18.aichatos68.com/#/chat/1744721558898",
      "category": "ai",
      "icon": "bi-robot",
      "faviconUrl": "https://favicon.yandex.net/favicon/chat18.aichatos68.com"
    },
    {
      "name": "免费ChatGPT",
      "url": "https://freegpt.tech",
      "category": "ai",
      "icon": "bi-robot",
      "faviconUrl": "https://favicon.yandex.net/favicon/freegpt.tech"
    },
    {
      "name": "OpenRouter开源模型社区",
      "url": "https://openrouter.ai/models",
      "category": "ai",
      "icon": "bi-box",
      "faviconUrl": "https://favicon.yandex.net/favicon/openrouter.ai"
    },
    {
      "name": "FreeAI-算力平台",
      "url": "https://qwq.aigpu.cn",
      "category": "ai",
      "icon": "bi-gpu-card",
      "faviconUrl": "https://favicon.yandex.net/favicon/qwq.aigpu.cn"
    },
    {
      "name": "魔搭社区",
      "url": "https://www.modelscope.cn/models?page=1&tasks=auto-speech-recognition&type=audio",
      "category": "ai",
      "icon": "bi-collection",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.modelscope.cn"
    },
    {
      "name": "豆包",
      "url": "https://www.doubao.com",
      "category": "ai",
      "icon": "bi-chat",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.doubao.com"
    },
    {
      "name": "文心一言",
      "url": "https://yiyan.baidu.com",
      "category": "ai",
      "icon": "bi-chat-dots",
      "faviconUrl": "https://favicon.yandex.net/favicon/yiyan.baidu.com"
    },
    {
      "name": "Kimi",
      "url": "https://kimi.moonshot.cn",
      "category": "ai",
      "icon": "bi-robot",
      "faviconUrl": "https://favicon.yandex.net/favicon/kimi.moonshot.cn"
    },
    {
      "name": "通义千问",
      "url": "https://qianwen.aliyun.com",
      "category": "ai",
      "icon": "bi-chat",
      "faviconUrl": "https://favicon.yandex.net/favicon/qianwen.aliyun.com"
    },
    {
      "name": "腾讯混元",
      "url": "https://hunyuan.tencent.com",
      "category": "ai",
      "icon": "bi-chat-dots",
      "faviconUrl": "https://favicon.yandex.net/favicon/hunyuan.tencent.com"
    },
    {
      "name": "Gemini",
      "url": "https://gemini.google.com",
      "category": "ai",
      "icon": "bi-google",
      "faviconUrl": "https://favicon.yandex.net/favicon/gemini.google.com"
    },
    {
      "name": "ChatGPT",
      "url": "https://chat.openai.com",
      "category": "ai",
      "icon": "bi-robot",
      "faviconUrl": "https://favicon.yandex.net/favicon/chat.openai.com"
    },
    {
      "name": "Claude",
      "url": "https://claude.ai",
      "category": "ai",
      "icon": "bi-robot",
      "faviconUrl": "https://favicon.yandex.net/favicon/claude.ai"
    },
    // 存储类
    {
      "name": "百度网盘",
      "url": "https://pan.baidu.com",
      "category": "storage",
      "icon": "bi-cloud",
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "阿里云盘",
      "url": "https://www.aliyundrive.com",
      "category": "storage",
      "icon": "bi-cloud",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.aliyundrive.com"
    },
    {
      "name": "夸克网盘",
      "url": "https://pan.quark.cn",
      "category": "storage",
      "icon": "bi-cloud",
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "迅雷云盘",
      "url": "https://pan.xunlei.com",
      "category": "storage",
      "icon": "bi-cloud",
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "天翼云盘",
      "url": "https://cloud.189.cn",
      "category": "storage",
      "icon": "bi-cloud",
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "UC网盘",
      "url": "https://www.uc.cn/drive",
      "category": "storage",
      "icon": "bi-cloud",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.uc.cn"
    },
    {
      "name": "蓝奏云",
      "url": "https://www.lanzou.com",
      "category": "storage",
      "icon": "bi-cloud",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.lanzou.com"
    },
    {
      "name": "OneDrive",
      "url": "https://onedrive.live.com",
      "category": "storage",
      "icon": "bi-microsoft",
      "faviconUrl": "https://favicon.yandex.net/favicon/onedrive.live.com"
    },
    // 社交类
    {
      "name": "微博",
      "url": "https://weibo.com",
      "category": "social",
      "icon": "bi-chat-dots",
      "faviconUrl": "https://favicon.yandex.net/favicon/weibo.com"
    },
    {
      "name": "百度贴吧",
      "url": "https://tieba.baidu.com",
      "category": "social",
      "icon": "bi-chat-square-text",
      "faviconUrl": "https://favicon.yandex.net/favicon/tieba.baidu.com"
    },
    {
      "name": "简书",
      "url": "https://www.jianshu.com",
      "category": "social",
      "icon": "bi-journal-text",
      "faviconUrl": "https://www.jianshu.com/favicon.ico"
    },
    {
      "name": "知乎",
      "url": "https://www.zhihu.com",
      "category": "social",
      "icon": "bi-question-circle",
      "faviconUrl": "https://static.zhihu.com/heifetz/favicon.ico"
    },
    {
      "name": "豆瓣",
      "url": "https://www.douban.com",
      "category": "social",
      "icon": "bi-book",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.douban.com"
    },
    {
      "name": "QQ邮箱",
      "url": "https://mail.qq.com",
      "category": "social",
      "icon": "bi-envelope",
      "faviconUrl": "https://favicon.yandex.net/favicon/mail.qq.com"
    },
    {
      "name": "Gmail",
      "url": "https://mail.google.com",
      "category": "social",
      "icon": "bi-google",
      "faviconUrl": "https://favicon.yandex.net/favicon/mail.google.com"
    },
    {
      "name": "Hotmail",
      "url": "https://outlook.live.com",
      "category": "social",
      "icon": "bi-microsoft",
      "faviconUrl": "https://favicon.yandex.net/favicon/outlook.live.com"
    },
    {
      "name": "网易邮箱",
      "url": "https://mail.163.com",
      "category": "social",
      "icon": "bi-envelope",
      "faviconUrl": "https://mail.163.com/apple-touch-icon-precomposed.png"
    },
    {
      "name": "新浪邮箱",
      "url": "https://mail.sina.com.cn",
      "category": "social",
      "icon": "bi-envelope",
      "faviconUrl": "https://mail.sina.com.cn/favicon.ico"
    },
    {
      "name": "阿里邮箱",
      "url": "https://mail.aliyun.com",
      "category": "social",
      "icon": "bi-envelope",
      "faviconUrl": "https://mail.aliyun.com/static/0.2.8/images/favicon.ico"
    },
    {
      "name": "今日头条",
      "url": "https://www.toutiao.com",
      "category": "social",
      "icon": "bi-newspaper",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.toutiao.com"
    },
    {
      "name": "小红书",
      "url": "https://www.xiaohongshu.com",
      "category": "social",
      "icon": "bi-book",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.xiaohongshu.com"
    },
    // 影视音乐
    {
      "name": "腾讯视频",
      "url": "https://v.qq.com",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://favicon.yandex.net/favicon/v.qq.com"
    },
    {
      "name": "优酷",
      "url": "https://www.youku.com",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.youku.com"
    },
    {
      "name": "爱奇艺",
      "url": "https://www.iqiyi.com",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://www.iqiyi.com/favicon.ico"
    },
    {
      "name": "哔哩哔哩",
      "url": "https://www.bilibili.com",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.bilibili.com"
    },
    {
      "name": "CCTV直播",
      "url": "https://tv.cctv.com/live",
      "category": "media",
      "icon": "bi-broadcast",
      "faviconUrl": "https://favicon.yandex.net/favicon/tv.cctv.com"
    },
    {
      "name": "抖音网页版",
      "url": "https://www.douyin.com",
      "category": "media",
      "icon": "bi-music-note",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.douyin.com"
    },
    {
      "name": "快手网页版",
      "url": "https://www.kuaishou.com",
      "category": "media",
      "icon": "bi-camera-reels",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.kuaishou.com"
    },
    {
      "name": "网易云音乐",
      "url": "https://music.163.com",
      "category": "media",
      "icon": "bi-music-note",
      "faviconUrl": "https://favicon.yandex.net/favicon/music.163.com"
    },
    {
      "name": "QQ音乐",
      "url": "https://y.qq.com",
      "category": "media",
      "icon": "bi-music-note",
      "faviconUrl": "https://favicon.yandex.net/favicon/y.qq.com"
    },
    {
      "name": "酷狗音乐",
      "url": "https://www.kugou.com",
      "category": "media",
      "icon": "bi-music-note",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.kugou.com"
    },
    {
      "name": "虎牙直播",
      "url": "https://www.huya.com",
      "category": "media",
      "icon": "bi-broadcast",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.huya.com"
    },
    {
      "name": "斗鱼直播",
      "url": "https://www.douyu.com",
      "category": "media",
      "icon": "bi-broadcast",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.douyu.com"
    },
    // 游戏娱乐
    {
      "name": "4399小游戏",
      "url": "http://www.4399.com",
      "category": "game",
      "icon": "bi-controller",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.4399.com"
    },
    {
      "name": "7k7k小游戏",
      "url": "http://www.7k7k.com",
      "category": "game",
      "icon": "bi-controller",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.7k7k.com"
    },
    {
      "name": "英雄联盟",
      "url": "https://lol.qq.com",
      "category": "game",
      "icon": "bi-controller",
      "faviconUrl": "https://favicon.yandex.net/favicon/lol.qq.com"
    },
    {
      "name": "永劫无间",
      "url": "https://www.yjwj.com",
      "category": "game",
      "icon": "bi-controller",
      "faviconUrl": null,
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "STEAM",
      "url": "https://store.steampowered.com",
      "category": "game",
      "icon": "bi-steam",
      "faviconUrl": "https://favicon.yandex.net/favicon/store.steampowered.com"
    },
    {
      "name": "王者荣耀",
      "url": "https://pvp.qq.com",
      "category": "game",
      "icon": "bi-controller",
      "faviconUrl": "https://favicon.yandex.net/favicon/pvp.qq.com"
    },
    {
      "name": "3DM GAME",
      "url": "https://www.3dmgame.com",
      "category": "game",
      "icon": "bi-controller",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.3dmgame.com"
    },
    // 工具类
    {
      "name": "IP查询",
      "url": "https://www.ip138.com",
      "category": "tools",
      "icon": "bi-search",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.ip138.com"
    },
    {
      "name": "文档在线转换",
      "url": "https://www.aconvert.com",
      "category": "tools",
      "icon": "bi-file-earmark-text",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.aconvert.com"
    },
    {
      "name": "谷歌翻译",
      "url": "https://translate.google.com",
      "category": "tools",
      "icon": "bi-translate",
      "faviconUrl": "https://favicon.yandex.net/favicon/translate.google.com"
    },
    {
      "name": "有道翻译",
      "url": "https://fanyi.youdao.com",
      "category": "tools",
      "icon": "bi-translate",
      "faviconUrl": "https://favicon.yandex.net/favicon/fanyi.youdao.com"
    },
    {
      "name": "HTML在线运行",
      "url": "https://c.runoob.com",
      "category": "tools",
      "icon": "bi-code",
      "faviconUrl": "https://favicon.yandex.net/favicon/c.runoob.com"
    },
    {
      "name": "MD编辑器",
      "url": "https://markdown.com.cn/editor",
      "category": "tools",
      "icon": "bi-markdown",
      "faviconUrl": "https://favicon.yandex.net/favicon/markdown.com.cn"
    },
    {
      "name": "在线代码格式化",
      "url": "https://tool.oschina.net/codeformat",
      "category": "tools",
      "icon": "bi-code-square",
      "faviconUrl": "https://favicon.yandex.net/favicon/tool.oschina.net"
    },
    {
      "name": "JS混淆器",
      "url": "https://www.sojson.com/js.html",
      "category": "tools",
      "icon": "bi-braces",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.sojson.com"
    },
    {
      "name": "站长工具",
      "url": "https://tool.chinaz.com",
      "category": "tools",
      "icon": "bi-tools",
      "faviconUrl": null,
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "在线Ping",
      "url": "https://ping.chinaz.com",
      "category": "tools",
      "icon": "bi-activity",
      "faviconUrl": "https://favicon.yandex.net/favicon/ping.chinaz.com"
    },
    {
      "name": "ICP备案查询",
      "url": "https://beian.miit.gov.cn",
      "category": "tools",
      "icon": "bi-search",
      "faviconUrl": null,
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "传文件找文叔叔",
      "url": "https://www.wenshushu.cn/",
      "category": "tools",
      "icon": "bi-file-earmark-arrow-up",
      "faviconUrl": "https://www.wenshushu.cn/favicon.ico"
    },
    {
      "name": "微软商店软件下载",
      "url": "https://store.rg-adguard.net",
      "category": "tools",
      "icon": "bi-microsoft",
      "faviconUrl": "https://favicon.yandex.net/favicon/store.rg-adguard.net"
    },
    {
      "name": "2925邮箱-无限邮",
      "url": "https://2925.com/#/",
      "category": "tools",
      "icon": "bi-envelope",
      "faviconUrl": "https://favicon.yandex.net/favicon/2925.com"
    },
    {
      "name": "魔法站 — iKuuu VPN",
      "url": "https://ikuuu.one/user",
      "category": "tools",
      "icon": "bi-shield-check",
      "faviconUrl": "https://favicon.yandex.net/favicon/ikuuu.one"
    },
    {
      "name": "西部世界VPN",
      "url": "https://xbsj5632.website/portal/order/node",
      "category": "tools",
      "icon": "bi-shield-check",
      "faviconUrl": "https://favicon.yandex.net/favicon/xbsj5632.website"
    },
    {
      "name": "二级域名分发系统",
      "url": "https://sds.leleo.top",
      "category": "tools",
      "icon": "bi-diagram-3",
      "faviconUrl": null,
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "翻唱任意歌曲！",
      "url": "https://kevinwang676-neucosvc-colab.hf.space/",
      "category": "tools",
      "icon": "bi-music-note",
      "faviconUrl": "https://favicon.yandex.net/favicon/kevinwang676-neucosvc-colab.hf.space"
    },
    {
      "name": "速剧：短剧爱好者的天堂",
      "url": "https://m.suju.app",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://m.suju.app/apple-touch-icon.png",
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "果冻代理下载",
      "url": "https://down.66a.vip",
      "category": "tools",
      "icon": "bi-download",
      "faviconUrl": null,
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "临时邮箱注册-IT知识空间",
      "url": "https://blog.fjy.zone/archives/ai-account-chatgpt-free",
      "category": "tools",
      "icon": "bi-envelope",
      "faviconUrl": "https://favicon.yandex.net/favicon/blog.fjy.zone"
    },
    {
      "name": "Notion",
      "url": "https://www.notion.so",
      "category": "tools",
      "icon": "bi-journal-text",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.notion.so"
    },
    {
      "name": "云端开发，化繁为简",
      "url": "https://cloudstudio.net",
      "category": "dev",
      "icon": "bi-cloud-arrow-up",
      "faviconUrl": "https://favicon.yandex.net/favicon/cloudstudio.net"
    },
    {
      "name": "Apifox项目开发",
      "url": "https://app.apifox.com/main/teams/3506393?tab=project",
      "category": "dev",
      "icon": "bi-braces",
      "faviconUrl": "https://favicon.yandex.net/favicon/app.apifox.com"
    },
    // 学习资源
    {
      "name": "Jay的资源库",
      "url": "https://www.lovejay.top",
      "category": "learning",
      "icon": "bi-collection",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.lovejay.top"
    },
    {
      "name": "Coursera",
      "url": "https://www.coursera.org",
      "category": "learning",
      "icon": "bi-book",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.coursera.org"
    },
    {
      "name": "Udemy",
      "url": "https://www.udemy.com",
      "category": "learning",
      "icon": "bi-mortarboard",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.udemy.com",
      "isLoadingFavicon": false,
      "retryCount": 1
    },
    {
      "name": "MDN",
      "url": "https://developer.mozilla.org",
      "category": "learning",
      "icon": "bi-code-slash",
      "faviconUrl": "https://favicon.yandex.net/favicon/developer.mozilla.org"
    },
    // 魔法上网
    {
      "name": "免费节点 - AirportNode",
      "url": "https://gitlab.com/zhifan999/fq/-/wikis/home",
      "category": "tools",
      "icon": "bi-shield",
      "faviconUrl": "https://favicon.yandex.net/favicon/gitlab.com"
    },
    {
      "name": "魔法浏览器",
      "url": "https://www.airportnode.com/category-1.html",
      "category": "tools",
      "icon": "bi-globe",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.airportnode.com"
    },
    // 常用导航
    {
      "name": "Ayobe小贤定向链接",
      "url": "https://c1wtkpld08.feishu.cn/sheets/GvuusRw89h8f4jt0U0Cce00LnWb",
      "category": "common",
      "icon": "bi-link",
      "faviconUrl": null,
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "YouTube",
      "url": "https://www.youtube.com",
      "category": "media",
      "icon": "bi-youtube",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.youtube.com"
    },
    // 开发类
    {
      "name": "W3school",
      "url": "https://www.w3school.com.cn",
      "category": "dev",
      "icon": "bi-code-slash",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.w3school.com.cn"
    },
    {
      "name": "Github",
      "url": "https://github.com",
      "category": "dev",
      "icon": "bi-github",
      "faviconUrl": "https://favicon.yandex.net/favicon/github.com"
    },
    {
      "name": "码云Gitee",
      "url": "https://gitee.com",
      "category": "dev",
      "icon": "bi-git",
      "faviconUrl": "https://favicon.yandex.net/favicon/gitee.com"
    },
    {
      "name": "Linux命令查询",
      "url": "https://www.linuxcool.com",
      "category": "dev",
      "icon": "bi-terminal",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.linuxcool.com"
    },
    {
      "name": "CSDN",
      "url": "https://www.csdn.net",
      "category": "dev",
      "icon": "bi-journal-code",
      "faviconUrl": "https://favicon.yandex.net/favicon/www.csdn.net"
    },
    {
      "name": "CdnJs",
      "url": "https://cdnjs.com",
      "category": "dev",
      "icon": "bi-box-arrow-down",
      "faviconUrl": "https://favicon.yandex.net/favicon/cdnjs.com"
    },
    {
      "name": "字节跳动CDN",
      "url": "https://cdn.bytedance.com",
      "category": "dev",
      "icon": "bi-box-arrow-down",
      "faviconUrl": "https://favicon.yandex.net/favicon/cdn.bytedance.com"
    },
    {
      "name": "Font Awesome",
      "url": "https://fontawesome.com",
      "category": "dev",
      "icon": "bi-fonts",
      "faviconUrl": "https://favicon.yandex.net/favicon/fontawesome.com"
    },
    {
      "name": "MSDN我告诉你",
      "url": "https://msdn.itellyou.cn",
      "category": "dev",
      "icon": "bi-microsoft",
      "faviconUrl": "https://msdn.itellyou.cn/favicon.ico"
    },
    {
      "name": "腾讯云",
      "url": "https://cloud.tencent.com",
      "category": "dev",
      "icon": "bi-cloud",
      "faviconUrl": "https://cloud.tencent.com/favicon.ico"
    },
    {
      "name": "阿里云",
      "url": "https://www.aliyun.com",
      "category": "dev",
      "icon": "bi-cloud",
      "faviconUrl": "https://www.aliyun.com/favicon.ico"
    },
    {
      "name": "香港电影",
      "url": "http://xgdy.cn/",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": null,
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "千帆搜索",
      "url": "https://pan.qianfan.app/",
      "category": "search",
      "icon": "bi-search",
      "faviconUrl": "https://pan.qianfan.app/favicon.ico"
    },
    {
      "name": "影视动漫分享",
      "url": "https://www.seedhub.cc/",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://www.seedhub.cc/favicon.ico"
    },
    {
      "name": "音范丝",
      "url": "https://www.yinfans.me/?ref=yinghezhinan.com",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": null,
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "米兔音乐",
      "url": "https://www.qqmp3.vip/",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://www.qqmp3.vip/logo.png"
    },
    {
      "name": "AI视频特效",
      "url": "https://higgsfield.ai/",
      "category": "tools",
      "icon": "bi-tools",
      "faviconUrl": "https://higgsfield.ai/icon.png"
    },
    {
      "name": "电影先生",
      "url": "https://silidm.com/",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": null,
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "菠萝搜搜",
      "url": "https://blsoso.com/",
      "category": "search",
      "icon": "bi-search",
      "faviconUrl": null,
      "isLoadingFavicon": true,
      "retryCount": 0
    },
    {
      "name": "视频素材站",
      "url": "https://coverr.co/",
      "category": "media",
      "icon": "bi-play-circle",
      "faviconUrl": "https://favicon.yandex.net/favicon/coverr.co"
    }
];

// 全局变量
let sites = [];
let favorites = [];
let currentCategory = 'all';
let searchQuery = '';
let currentTheme = localStorage.getItem('theme') || 'default';

// DOM 元素
const elements = {
    favoritesBtn: null,
    favoritesModal: null,
    favoritesList: null,
    importExportBtn: null,
    importExportModal: null,
    exportBtn: null,
    importBtn: null,
    importFile: null,
    themeBtn: null,
    themeSettingsModal: null,
    themeOptions: null,
    primaryColorPicker: null,
    accentColorPicker: null,
    searchInput: null,
    searchBtn: null,
    addSiteBtn: null,
    addSiteModal: null,
    closeButtons: null,
    addSiteForm: null,
    categoryTags: null,
    mainContent: null,
    emptyState: null,
    searchResultInfo: null,
    resultCount: null,
    clearSearchBtn: null,
    resetSearchBtn: null,
    pageLoader: null,
    toast: null,
    aboutSiteBtn: null,
    aboutModal: null,
    submitSiteBtn: null,
    submitModal: null,
    submitSiteForm: null
};

// 主题配置
const themes = [
    { id: 'default', name: '默认主题', icon: 'bi-sun' },
    { id: 'dark', name: '暗色主题', icon: 'bi-moon-stars' },
    { id: 'ocean', name: '海洋主题', icon: 'bi-water' },
    { id: 'forest', name: '森林主题', icon: 'bi-tree' },
    { id: 'sunset', name: '日落主题', icon: 'bi-sunset' }
];

// 主题切换功能
function initializeTheme() {
    const savedTheme = localStorage.getItem('theme') || 'default';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
    currentTheme = theme;
    
    document.querySelectorAll('.theme-option').forEach(option => {
        if (option.dataset.theme === theme) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

// 收藏夹功能
function initializeFavorites() {
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
}

function toggleFavorite(site) {
    const index = favorites.findIndex(f => f.url === site.url);
    if (index === -1) {
        favorites.push(site);
        showToast('已添加到收藏！', 'success');
    } else {
        favorites.splice(index, 1);
        showToast('已从收藏中移除', 'success');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderSites(); 
    
    if (elements.favoritesModal && elements.favoritesModal.style.display === 'block') {
        renderFavorites();
    }
}

function renderFavorites() {
    if (!elements.favoritesList) return;
    
    if (favorites.length === 0) {
        elements.favoritesList.innerHTML = '<div class="empty-favorites">暂无收藏的网站</div>';
        return;
    }
    
    let html = '';
    favorites.forEach(site => {
        const iconHtml = site.faviconUrl ? 
            `<img src="${site.faviconUrl}" class="site-favicon" alt="${site.name}" onerror="this.onerror=null;this.src='';this.className='bi ${site.icon} site-icon';">` :
            `<i class="bi ${site.icon}"></i>`;
            
        html += `
            <div class="favorite-item">
                ${iconHtml}
                <div class="favorite-info">
                    <div class="favorite-name">${site.name}</div>
                    <div class="favorite-url">${site.url}</div>
                </div>
                <div class="favorite-actions">
                    <a href="${site.url}" target="_blank" class="action-btn" title="在新标签页打开">
                        <i class="bi bi-box-arrow-up-right"></i>
                    </a>
                    <button class="action-btn remove-favorite" data-site='${JSON.stringify(site)}' title="移除收藏">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
        `;
    });
    
    elements.favoritesList.innerHTML = html;
    
    elements.favoritesList.querySelectorAll('.remove-favorite').forEach(btn => {
        btn.addEventListener('click', function() {
            const siteData = this.dataset.site;
            if (siteData) {
                toggleFavorite(JSON.parse(siteData));
            }
        });
    });
}

// 获取网站图标的函数
async function getFavicon(url) {
    try {
        // 检查是否是本地文件URL
        if (url.startsWith('file:///')) {
            // 对于本地文件，直接使用首字母图标
            return null;
        }
        
        let domain;
        try {
            domain = new URL(url).hostname;
        } catch (e) {
            console.error('无效的URL:', url);
            return null;
        }

        // 如果域名为空（可能是本地文件），直接返回null
        if (!domain) {
            return null;
        }

        // 尝试多种方式获取favicon
        return new Promise((resolve) => {
            // 准备多种可能的favicon URL
            const faviconUrls = [
                // 方法1: 使用Google Favicon服务 (最可靠但可能被墙)
                `https://www.google.com/s2/favicons?domain=${domain}&sz=64`,
                
                // 方法2: 使用DuckDuckGo的图标服务 (备用方案)
                `https://icons.duckduckgo.com/ip3/${domain}.ico`,
                
                // 方法3: 尝试获取网站根目录的favicon.ico
                `https://${domain}/favicon.ico`,
                
                // 方法4: 尝试获取网站根目录的apple-touch-icon.png (通常是高质量图标)
                `https://${domain}/apple-touch-icon.png`,
                
                // 方法5: 尝试获取网站根目录的apple-touch-icon-precomposed.png
                `https://${domain}/apple-touch-icon-precomposed.png`,
                
                // 方法6: 尝试获取网站根目录的favicon.png
                `https://${domain}/favicon.png`,
                
                // 方法7: 尝试获取网站根目录的icon.png
                `https://${domain}/icon.png`,
                
                // 方法8: 尝试获取网站根目录的logo.png
                `https://${domain}/logo.png`,
                
                // 方法9: 使用Yandex的图标服务
                `https://favicon.yandex.net/favicon/${domain}`
            ];
            
            // 创建一个Promise数组，同时尝试所有方法
            const promises = faviconUrls.map(url => tryLoadImage(url));
            
            // 使用Promise.race获取最先成功的结果
            Promise.race(promises)
                .then(result => {
                    if (result) {
                        resolve(result);
                    } else {
                        // 如果所有方法都失败，尝试解析HTML查找favicon链接
                        tryParseHTML(url)
                            .then(faviconFromHTML => {
                                resolve(faviconFromHTML);
                            })
                            .catch(() => {
                                resolve(null);
                            });
                    }
                })
                .catch(() => {
                    resolve(null);
                });
            
            // 设置超时，防止长时间等待
            setTimeout(() => {
                resolve(null);
            }, 5000);
        });
    } catch (error) {
        console.error('获取网站图标失败:', error);
        return null;
    }
}

// 尝试从HTML中解析favicon链接
async function tryParseHTML(url) {
    try {
        // 使用代理服务器避免跨域问题
        const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
        
        const response = await fetch(proxyUrl);
        const data = await response.json();
        
        if (data && data.contents) {
            const parser = new DOMParser();
            const doc = parser.parseFromString(data.contents, 'text/html');
            
            // 查找各种favicon链接
            const selectors = [
                'link[rel="icon"]',
                'link[rel="shortcut icon"]',
                'link[rel="apple-touch-icon"]',
                'link[rel="apple-touch-icon-precomposed"]',
                'link[rel="mask-icon"]',
                'meta[property="og:image"]'
            ];
            
            for (const selector of selectors) {
                const element = doc.querySelector(selector);
                if (element) {
                    let faviconUrl;
                    
                    if (selector === 'meta[property="og:image"]') {
                        faviconUrl = element.getAttribute('content');
                    } else {
                        faviconUrl = element.getAttribute('href');
                    }
                    
                    if (faviconUrl) {
                        // 处理相对URL
                        if (faviconUrl.startsWith('/')) {
                            const baseUrl = new URL(url);
                            faviconUrl = `${baseUrl.protocol}//${baseUrl.hostname}${faviconUrl}`;
                        } else if (!faviconUrl.startsWith('http')) {
                            const baseUrl = new URL(url);
                            faviconUrl = `${baseUrl.protocol}//${baseUrl.hostname}/${faviconUrl}`;
                        }
                        
                        // 验证图标是否可用
                        const isValid = await tryLoadImage(faviconUrl);
                        if (isValid) {
                            return faviconUrl;
                        }
                    }
                }
            }
        }
        
        return null;
    } catch (error) {
        console.error('解析HTML失败:', error);
        return null;
    }
}

// 尝试加载图片的辅助函数
function tryLoadImage(url) {
    return new Promise((resolve) => {
        const img = new Image();
        
        img.onload = function() {
            // 检查图片是否有效 (宽高大于1像素)
            if (this.width > 1 && this.height > 1) {
                resolve(url);
            } else {
                resolve(null);
            }
        };
        
        img.onerror = function() {
            resolve(null);
        };
        
        // 设置超时
        setTimeout(() => {
            if (!img.complete) {
                img.src = ''; 
                resolve(null);
            }
        }, 3000);
        
        img.src = url;
    });
}

// 修改添加网站的处理函数
async function handleAddSite(e) {
    e.preventDefault();
    
    // 获取表单数据
    const name = document.getElementById('site-name').value.trim();
    let url = document.getElementById('site-url').value.trim();
    const category = document.getElementById('site-category').value;
    
    // 验证数据
    if (!name || !url || !category) {
        showToast('请填写完整信息', 'error');
        return;
    }

    // 检查是否是本地文件路径，如果是则转换为file:///格式
    if (url.match(/^[a-zA-Z]:\\/) || url.match(/^\/[^\/]/)) {
        // Windows路径 (C:\) 或 Unix路径 (/etc)
        url = 'file:///' + url.replace(/\\/g, '/');
    } else if (!url.includes('://')) {
        // 如果没有协议，默认添加https://
        url = 'https://' + url;
    }

    // 验证URL格式（除了file协议）
    if (!url.startsWith('file:///')) {
        try {
            new URL(url);
        } catch (e) {
            showToast('请输入有效的网址', 'error');
            return;
        }
    }

    // 检查是否已存在相同URL
    if (sites.some(site => site.url === url)) {
        showToast('该网站已存在', 'error');
        return;
    }

    // 显示加载提示
    showToast('正在处理...', 'info');

    // 获取网站图标（只对非本地文件进行）
    let faviconUrl = null;
    if (!url.startsWith('file:///')) {
        faviconUrl = await getFavicon(url);
    }
    
    // 根据分类选择合适的图标类名（作为备选）
    let iconClass = 'bi-link';
    if (url.startsWith('file:///')) {
        iconClass = 'bi-file-earmark';
    } else {
        switch (category) {
            case 'search': iconClass = 'bi-search'; break;
            case 'ai': iconClass = 'bi-robot'; break;
            case 'tools': iconClass = 'bi-tools'; break;
            case 'dev': iconClass = 'bi-code-square'; break;
            case 'media': iconClass = 'bi-play-circle'; break;
            case 'game': iconClass = 'bi-controller'; break;
            case 'social': iconClass = 'bi-people'; break;
            case 'storage': iconClass = 'bi-hdd'; break;
            case 'netdisk': iconClass = 'bi-cloud'; break;
            case 'learning': iconClass = 'bi-book'; break;
        }
    }

    // 创建新网站对象
    const newSite = {
        name,
        url,
        category,
        icon: iconClass, // 默认使用分类图标
        faviconUrl: faviconUrl // 保存获取到的favicon URL
    };

    // 添加到网站列表
    sites.push(newSite);
    
    // 保存到本地存储
    localStorage.setItem('sites', JSON.stringify(sites));
    
    // 重新渲染网站列表
    renderSites();
    
    // 关闭模态框
    document.getElementById('add-site-modal').style.display = 'none';
    
    // 重置表单
    e.target.reset();
    
    // 显示成功提示
    showToast('网站添加成功！', 'success');
}

// 修改网站卡片渲染函数，支持显示favicon
function renderSiteCard(site) {
    const isFavorite = favorites.some(f => f.url === site.url);
    
    // 检查是否是本地文件URL
    const isLocalFile = site.url.startsWith('file:///');
    
    // 图标HTML，优先使用favicon，如果加载失败则回退到Bootstrap图标或首字母图标
    let iconHtml;
    if (site.faviconUrl && !isLocalFile) {
        // 如果有favicon，使用img标签，并设置加载失败时的回退
        iconHtml = `<img src="${site.faviconUrl}" class="site-favicon" alt="${site.name}" 
            onerror="this.onerror=null;this.src='';this.className='site-letter-icon';this.textContent='${getFirstLetter(site.name)}';">`;
    } else if (site.isLoadingFavicon && !isLocalFile) {
        // 如果正在加载favicon，显示加载动画
        iconHtml = `<img src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" 
            class="site-favicon loading" alt="${site.name}">`;
    } else {
        // 如果没有favicon或是本地文件，使用首字母图标或Bootstrap图标
        const firstLetter = getFirstLetter(site.name);
        if (firstLetter) {
            // 为本地文件使用特殊颜色
            const bgColor = isLocalFile ? '#4cc9f0' : getColorFromLetter(firstLetter);
            iconHtml = `<div class="site-letter-icon" style="background-color: ${bgColor}">${firstLetter}</div>`;
        } else {
            iconHtml = `<i class="bi ${site.icon} site-icon"></i>`;
        }
    }
    
    return `
        <div class="site-card" data-url="${site.url}">
            ${iconHtml}
            <div class="site-name">${site.name}</div>
            <div class="site-actions">
                <a href="${site.url}" target="_blank" class="action-btn" title="在新标签页打开">
                    <i class="bi bi-box-arrow-up-right"></i>
                </a>
                <button class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" 
                        data-site='${JSON.stringify(site)}' title="${isFavorite ? '取消收藏' : '添加到收藏'}">
                    <i class="bi bi-star${isFavorite ? '-fill' : ''}"></i>
                </button>
            </div>
        </div>
    `;
}

// 获取网站名称的首字母
function getFirstLetter(name) {
    if (!name || name.length === 0) return '';
    
    // 处理特殊情况：如果是本地文件路径，提取文件名
    if (name.includes('/') || name.includes('\\')) {
        const parts = name.split(/[\/\\]/);
        const fileName = parts[parts.length - 1];
        // 如果文件名存在且不为空，使用文件名的首字母
        if (fileName && fileName.length > 0) {
            return fileName[0].toUpperCase();
        }
    }
    
    // 处理中文
    if (/[\u4e00-\u9fa5]/.test(name[0])) {
        return name[0];
    }
    
    // 处理英文和数字
    return name[0].toUpperCase();
}

// 根据字母生成一致的颜色
function getColorFromLetter(letter) {
    const colors = [
        '#4361ee', '#3a0ca3', '#7209b7', '#f72585', '#4cc9f0',
        '#4895ef', '#560bad', '#f3722c', '#f8961e', '#90be6d',
        '#43aa8b', '#577590', '#277da1', '#0096c7', '#023e8a'
    ];
    
    // 使用字符编码来选择颜色，确保同一个字母总是对应同一个颜色
    const charCode = letter.charCodeAt(0);
    const colorIndex = charCode % colors.length;
    
    return colors[colorIndex];
}

// 事件监听器
function initializeEventListeners() {
    console.log("开始初始化事件监听器");
    
    elements.searchInput = document.getElementById('search-input');
    elements.searchBtn = document.getElementById('search-btn');
    elements.clearSearchBtn = document.getElementById('clear-search-btn');
    elements.resetSearchBtn = document.getElementById('reset-search-btn'); // Assuming this ID exists if used
    elements.addSiteBtn = document.getElementById('add-site-btn');
    elements.addSiteModal = document.getElementById('add-site-modal');
    elements.addSiteForm = document.getElementById('add-site-form');
    elements.favoritesBtn = document.getElementById('favorites-btn');
    elements.favoritesModal = document.getElementById('favorites-modal');
    elements.favoritesList = document.querySelector('.favorites-list');
    elements.importExportBtn = document.getElementById('import-export-btn');
    elements.importExportModal = document.getElementById('import-export-modal');
    elements.exportBtn = document.getElementById('export-btn');
    elements.importBtn = document.getElementById('import-btn');
    elements.importFile = document.getElementById('import-file');
    elements.themeBtn = document.getElementById('theme-btn');
    elements.themeSettingsModal = document.getElementById('theme-settings-modal');
    elements.themeOptions = document.querySelector('.theme-options');
    elements.primaryColorPicker = document.getElementById('primary-color');
    elements.accentColorPicker = document.getElementById('accent-color');
    elements.closeButtons = document.querySelectorAll('.close-btn');
    elements.pageLoader = document.getElementById('page-loader');
    elements.toast = document.getElementById('toast');
    elements.categoryTags = document.getElementById('category-tags');
    elements.mainContent = document.getElementById('main-content');
    elements.emptyState = document.getElementById('empty-state');
    elements.searchResultInfo = document.getElementById('search-result-info');
    elements.resultCount = document.getElementById('result-count');
    
    elements.aboutSiteBtn = document.getElementById('about-site');
    elements.aboutModal = document.getElementById('about-modal');
    elements.submitSiteBtn = document.getElementById('submit-site');
    elements.submitModal = document.getElementById('submit-modal');
    elements.submitSiteForm = document.getElementById('submit-site-form');

    if (elements.searchInput && elements.searchBtn) {
        elements.searchInput.addEventListener('input', function() {
            searchQuery = this.value.trim().toLowerCase();
            renderSites();
        });
        elements.searchBtn.addEventListener('click', function() {
            searchQuery = elements.searchInput.value.trim().toLowerCase();
            renderSites();
        });
    }
    
    if (elements.clearSearchBtn) {
        elements.clearSearchBtn.addEventListener('click', function() {
            if (elements.searchInput) elements.searchInput.value = '';
            searchQuery = '';
            renderSites();
        });
    }
    
    // 移除 resetSearchBtn 的逻辑，如果它与 clearSearchBtn 功能重复或不再需要
    // if (elements.resetSearchBtn) { ... }

    if (elements.addSiteBtn && elements.addSiteModal) {
        elements.addSiteBtn.addEventListener('click', function() {
            elements.addSiteModal.style.display = 'block';
        });
    }
    
    if (elements.addSiteForm) {
        elements.addSiteForm.addEventListener('submit', handleAddSite);
    }
    
    if (elements.favoritesBtn && elements.favoritesModal) {
        elements.favoritesBtn.addEventListener('click', function() {
            renderFavorites();
            elements.favoritesModal.style.display = 'block';
        });
    }
    
    if (elements.importExportBtn && elements.importExportModal) {
        elements.importExportBtn.addEventListener('click', function() {
            elements.importExportModal.style.display = 'block';
        });
    }
    
    if (elements.exportBtn) {
        elements.exportBtn.addEventListener('click', exportData);
    }
    
    if (elements.importBtn && elements.importFile) {
        elements.importBtn.addEventListener('click', function() {
            elements.importFile.click();
        });
        elements.importFile.addEventListener('change', function(e) {
            if (e.target.files.length > 0) {
                importData(e.target.files[0]);
            }
        });
    }
    
    if (elements.themeBtn && elements.themeSettingsModal) {
        elements.themeBtn.addEventListener('click', function() {
            if (elements.themeOptions) {
                elements.themeOptions.innerHTML = themes.map(theme => `
                    <div class="theme-option ${theme.id === currentTheme ? 'active' : ''}" data-theme="${theme.id}">
                        <i class="bi ${theme.icon}"></i>
                        <span>${theme.name}</span>
                    </div>
                `).join('');
                document.querySelectorAll('.theme-option').forEach(option => {
                    option.addEventListener('click', function() {
                        const theme = this.dataset.theme;
                        applyTheme(theme);
                        showToast('主题已切换', 'success');
                    });
                });
            }
            elements.themeSettingsModal.style.display = 'block';
        });
    }
    
    if (elements.primaryColorPicker && elements.accentColorPicker) {
        elements.primaryColorPicker.value = localStorage.getItem('custom-primary-color') || '#4361ee';
        elements.accentColorPicker.value = localStorage.getItem('custom-accent-color') || '#7209b7';
        elements.primaryColorPicker.addEventListener('change', function() {
            applyCustomColors(this.value, elements.accentColorPicker.value);
        });
        elements.accentColorPicker.addEventListener('change', function() {
            applyCustomColors(elements.primaryColorPicker.value, this.value);
        });
    }
    
    if (elements.aboutSiteBtn && elements.aboutModal) {
        elements.aboutSiteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            elements.aboutModal.style.display = 'block';
        });
    }
    
    if (elements.submitSiteBtn && elements.submitModal) {
        elements.submitSiteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            elements.submitModal.style.display = 'block';
        });
    }
    
    if (elements.submitSiteForm) {
        elements.submitSiteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('submit-name').value.trim();
            const url = document.getElementById('submit-url').value.trim();
            const category = document.getElementById('submit-category').value;
            const description = document.getElementById('submit-description').value.trim();
            const contact = document.getElementById('submit-contact').value.trim();
            
            if (!name || !url || !category) {
                showToast('请填写必要信息', 'error');
                return;
            }
            
            // 这里可以添加发送申请到服务器的代码
            // 由于是本地运行，我们只显示一个成功提示
            showToast('申请已提交，感谢您的贡献！', 'success');
            elements.submitModal.style.display = 'none';
            e.target.reset();
        });
    }
    
    if (elements.closeButtons.length > 0) {
        elements.closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                const modal = this.closest('.modal');
                if (modal) modal.style.display = 'none';
            });
        });
    }
    
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                this.style.display = 'none';
            }
        });
    });
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.style.display = 'none';
            });
        }
    });
    
    document.addEventListener('click', function(e) {
        if (e.target.closest('.favorite-btn')) {
            e.preventDefault();
            e.stopPropagation();
            const btn = e.target.closest('.favorite-btn');
            const siteData = btn.dataset.site;
            if (siteData) {
                toggleFavorite(JSON.parse(siteData));
            }
        }
        const siteCard = e.target.closest('.site-card');
        if (siteCard && !e.target.closest('.site-actions')) {
            const url = siteCard.dataset.url;
            if (url) {
                // 特殊处理本地文件URL
                if (url.startsWith('file:///')) {
                    // 对于本地文件，使用location.href而不是window.open
                    // 这样可以在当前标签页打开，避免浏览器安全限制
                    location.href = url;
                } else {
                    // 对于普通网址，使用新标签页打开
                    window.open(url, '_blank');
                }
            }
        }
    });
    console.log("事件监听器初始化完成");
}

// 渲染网站列表
function renderSites() {
    if (!elements.mainContent) return;
    
    const currentSearchQueryVal = (elements.searchInput?.value || '').trim().toLowerCase();
    let filteredSites = sites;
    
    if (currentSearchQueryVal) {
        filteredSites = sites.filter(site => 
            site.name.toLowerCase().includes(currentSearchQueryVal) || 
            site.url.toLowerCase().includes(currentSearchQueryVal)
        );
    }
    
    if (currentCategory && currentCategory !== 'all') {
        filteredSites = filteredSites.filter(site => site.category === currentCategory);
    }
    
    if (elements.searchResultInfo && elements.resultCount && elements.clearSearchBtn) {
        elements.resultCount.textContent = filteredSites.length;
        elements.searchResultInfo.style.display = currentSearchQueryVal ? 'block' : 'none'; 
        elements.clearSearchBtn.style.display = currentSearchQueryVal ? 'inline-block' : 'none';
    }
    
    if (elements.emptyState) {
        if (filteredSites.length === 0) {
            elements.mainContent.innerHTML = ''; 
            elements.emptyState.style.display = 'block';
            const emptyMessageP = elements.emptyState.querySelector('p');
            if (emptyMessageP) {
                emptyMessageP.textContent = '未找到相关网站'; 
            }
        } else {
            elements.emptyState.style.display = 'none';
        }
    }
    
    if (filteredSites.length > 0) {
        const sitesByCategory = {};
        filteredSites.forEach(site => {
            if (!sitesByCategory[site.category]) {
                sitesByCategory[site.category] = [];
            }
            sitesByCategory[site.category].push(site);
        });
        
        let html = '';
        categories.forEach(category => {
            const sitesInCategory = sitesByCategory[category.id] || [];
            if (sitesInCategory.length > 0) {
                html += `
                    <div class="category-section">
                        <h2 class="category-title">
                            <i class="bi ${category.icon}"></i>
                            ${category.name}
                        </h2>
                        <div class="sites-grid">
                            ${sitesInCategory.map(site => renderSiteCard(site)).join('')}
                        </div>
                    </div>
                `;
            }
        });
        elements.mainContent.innerHTML = html;
    }
}

// 渲染分类标签
function renderCategories() {
    if (!elements.categoryTags) return;
    
    const allCategoriesHtml = `
        <button class="category-tag ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
            <i class="bi bi-grid"></i>
            全部
        </button>
    `;
    
    const categoriesHtml = categories.map(category => `
        <button class="category-tag ${currentCategory === category.id ? 'active' : ''}" 
                data-category="${category.id}">
            <i class="bi ${category.icon}"></i>
            ${category.name}
        </button>
    `).join('');
    
    elements.categoryTags.innerHTML = allCategoriesHtml + categoriesHtml;
    
    elements.categoryTags.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            elements.categoryTags.querySelectorAll('.category-tag').forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentCategory = tag.dataset.category;
            renderSites();
        });
    });
}

// 导入导出功能
function exportData() {
    const data = {
        sites: sites,
        favorites: favorites,
        theme: currentTheme
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'nav-site-backup.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    showToast('数据导出成功', 'success');
}

function importData(file) {
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const data = JSON.parse(e.target.result);
            sites = data.sites || []; // Ensure sites is an array
            favorites = data.favorites || []; // Ensure favorites is an array
            currentTheme = data.theme || 'default';
            
            localStorage.setItem('sites', JSON.stringify(sites));
            localStorage.setItem('favorites', JSON.stringify(favorites));
            localStorage.setItem('theme', currentTheme);
            
            applyTheme(currentTheme);
            renderSites();
            renderFavorites(); // Re-render favorites if modal is open or for consistency
            showToast('数据导入成功', 'success');
        } catch (error) {
            showToast('导入失败：无效的文件格式', 'error');
        }
    };
    reader.readAsText(file);
}

function applyCustomColors(primary, accent) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--accent-color', accent);
    localStorage.setItem('custom-primary-color', primary);
    localStorage.setItem('custom-accent-color', accent);
}

// 初始化函数
document.addEventListener('DOMContentLoaded', function() {
    console.log("DOM加载完成，开始初始化");

    const storedSites = localStorage.getItem('sites');
    const storedFavorites = localStorage.getItem('favorites');
    currentTheme = localStorage.getItem('theme') || 'default';

    if (storedSites === null || JSON.parse(storedSites).length === 0) {
        // 如果本地存储没有数据，或数据为空数组，则使用 initialSites
        sites = [...initialSites]; // Use a copy of initialSites
        localStorage.setItem('sites', JSON.stringify(sites));
        console.log("从 initialSites 初始化数据并存入 localStorage");
    } else {
        sites = JSON.parse(storedSites);
        console.log("从 localStorage 加载 sites 数据");
    }

    if (storedFavorites === null) {
        favorites = [];
        localStorage.setItem('favorites', JSON.stringify(favorites));
    } else {
        favorites = JSON.parse(storedFavorites);
    }

    // 初始化主题
    initializeTheme();
    applyTheme(currentTheme);

    // 初始化事件监听器
    initializeEventListeners();
    
    // 渲染分类和网站
    renderCategories();
    renderSites();
    
    // 为所有网站加载favicon
    loadAllFavicons();
    
    // 隐藏加载动画
    if (elements.pageLoader) {
        setTimeout(() => {
            elements.pageLoader.style.opacity = '0';
            setTimeout(() => {
                elements.pageLoader.style.display = 'none';
            }, 300);
        }, 500);
    }
    
    console.log("初始化完成");
});

// 为所有网站加载favicon
async function loadAllFavicons() {
    console.log("开始为所有网站加载favicon");
    
    const updatedSites = [];
    let hasUpdates = false;
    
    // 首先标记所有需要加载favicon的网站
    for (let i = 0; i < sites.length; i++) {
        const site = sites[i];
        
        // 如果网站已经有favicon URL且不为null，则跳过
        if (site.faviconUrl) {
            updatedSites.push(site);
            continue;
        }
        
        // 标记为正在加载
        const markedSite = {
            ...site,
            isLoadingFavicon: true,
            retryCount: 0 // 添加重试计数器
        };
        
        updatedSites.push(markedSite);
        hasUpdates = true;
    }
    
    // 更新状态并重新渲染，显示加载动画
    if (hasUpdates) {
        sites = updatedSites;
        renderSites();
    }
    
    // 批量处理favicon加载，每批8个，避免同时发起太多请求
    const batchSize = 8;
    for (let i = 0; i < sites.length; i += batchSize) {
        const batch = sites.slice(i, i + batchSize);
        const batchPromises = [];
        
        for (let j = 0; j < batch.length; j++) {
            const site = batch[j];
            
            // 如果已经有favicon或重试次数超过限制，则跳过
            if ((site.faviconUrl && !site.isLoadingFavicon) || (site.retryCount && site.retryCount >= 2)) {
                continue;
            }
            
            // 创建加载Promise
            const loadPromise = (async () => {
                try {
                    const faviconUrl = await getFavicon(site.url);
                    
                    // 更新网站对象
                    const index = sites.findIndex(s => s.url === site.url);
                    if (index !== -1) {
                        sites[index] = {
                            ...sites[index],
                            faviconUrl: faviconUrl,
                            isLoadingFavicon: false,
                            retryCount: site.retryCount ? site.retryCount + 1 : 1
                        };
                    }
                    
                    return { index, faviconUrl };
                } catch (error) {
                    console.error(`加载网站 ${site.name} 的图标失败:`, error);
                    
                    // 更新重试计数
                    const index = sites.findIndex(s => s.url === site.url);
                    if (index !== -1) {
                        sites[index] = {
                            ...sites[index],
                            isLoadingFavicon: false,
                            retryCount: site.retryCount ? site.retryCount + 1 : 1
                        };
                    }
                    
                    return { index, faviconUrl: null };
                }
            })();
            
            batchPromises.push(loadPromise);
        }
        
        // 等待当前批次完成
        await Promise.allSettled(batchPromises);
        
        // 每批完成后重新渲染
        renderSites();
        
        // 保存到本地存储
        localStorage.setItem('sites', JSON.stringify(sites));
        
        // 添加短暂延迟，避免请求过于频繁
        await new Promise(resolve => setTimeout(resolve, 300));
    }
    
    // 清理临时属性
    sites = sites.map(site => {
        const { isLoadingFavicon, retryCount, ...cleanSite } = site;
        return cleanSite;
    });
    
    // 保存最终结果
    localStorage.setItem('sites', JSON.stringify(sites));
    
    console.log("所有网站favicon加载完成");
}

function showToast(message, type = 'info') {
    const toastEl = document.getElementById('toast'); // Renamed to avoid conflict with elements.toast
    if (toastEl) {
        toastEl.textContent = message;
        toastEl.className = `toast show ${type}`;
        setTimeout(() => {
            toastEl.classList.remove('show');
        }, 3000);
    } else {
        console.error('Toast元素不存在');
    }
}