const initialSites = [
    {
        name: '传文件找文叔叔',
        url: 'https://www.wenshushu.cn/',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '百度AI图片助手',
        url: 'https://image.baidu.com/search/index?showMask=1&fr=csaitab&tn=baiduimage&toolType=1&word=bdaitpzs百度AI图片助手bdaitpzs',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '微软商店软件下载',
        url: 'https://store.rg-adguard.net',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '2925邮箱-无限邮',
        url: 'https://2925.com/#/',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '首页 — iKuuu VPN',
        url: 'https://ikuuu.one/user',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '我的节点 - 西部世界VPN',
        url: 'https://xbsj5632.website/portal/order/node',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'Leleo 免费二级域名分发系统',
        url: 'https://sds.leleo.top',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'Jay的资源库 | 互联网资源集大成者',
        url: 'https://www.lovejay.top',
        category: 'learning',
        icon: 'bi-search'
    },
    {
        name: '一键翻唱任意歌手的任意歌曲！',
        url: 'https://kevinwang676-neucosvc-colab.hf.space/',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '速剧：短剧爱好者的天堂，免费观看',
        url: 'https://m.suju.app',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '果冻代理下载',
        url: 'https://down.66a.vip',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'ChatGPT 账号注册并免费获取 API Key，无需国外手机号接码、无需国外信用卡绑卡（临时邮箱注册）-IT知识空间',
        url: 'https://blog.fjy.zone/archives/ai-account-chatgpt-free',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'AIchatOS2GPT',
        url: 'https://chat18.aichatos68.com/#/chat/1744721558898',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'Ayobe小贤定向链接 - 飞书云文档',
        url: 'https://c1wtkpld08.feishu.cn/sheets/GvuusRw89h8f4jt0U0Cce00LnWb',
        category: 'common',
        icon: 'bi-search'
    },
    {
        name: 'Cloud Studio - 云端开发，化繁为简',
        url: 'https://cloudstudio.net',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '模型库首页 · 魔搭社区',
        url: 'https://www.modelscope.cn/models?page=1&tasks=auto-speech-recognition&type=audio',
        category: 'common',
        icon: 'bi-search'
    },
    {
        name: '智能AI聊天工具-免费GPT网站在线体验无限制使用-免费ChatGPT',
        url: 'https://freegpt.tech',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'Models | OpenRouter开源模型社区',
        url: 'https://openrouter.ai/models',
        category: 'common',
        icon: 'bi-search'
    },
    {
        name: 'Free QWQ - 免费分布式 AI 算力平台',
        url: 'https://qwq.aigpu.cn',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: 'Apifox',
        url: 'https://app.apifox.com/main/teams/3506393?tab=project',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '免费节点 - AirportNode',
        url: 'https://gitlab.com/zhifan999/fq/-/wikis/home',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '首页 ·维基 ·志帆 / FQ ·极狐GitLab',
        url: 'https://www.airportnode.com/category-1.html',
        category: 'common',
        icon: 'bi-search'
    },
    {
        name: 'B站',
        url: 'https://www.bilibili.com',
        category: 'common',
        icon: 'bi-bilibili'
    },
    {
        name: '谷歌',
        url: 'https://www.google.com',
        category: 'common',
        icon: 'bi-google'
    },
    {
        name: 'GitHub',
        url: 'https://www.github.com',
        category: 'common',
        icon: 'bi-github'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        category: 'common',
        icon: 'bi-youtube'
    },
    {
        name: 'Notion',
        url: 'https://www.notion.so',
        category: 'tools',
        icon: 'bi-journal-text'
    },
    {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        category: 'tools',
        icon: 'bi-chat-dots'
    },
    {
        name: 'Coursera',
        url: 'https://www.coursera.org',
        category: 'learning',
        icon: 'bi-book'
    },
    {
        name: 'Udemy',
        url: 'https://www.udemy.com',
        category: 'learning',
        icon: 'bi-mortarboard'
    },
    {
        name: 'MDN',
        url: 'https://developer.mozilla.org',
        category: 'learning',
        icon: 'bi-code-slash'
    },
    {
        name: '百度',
        url: 'https://www.baidu.com',
        category: 'common',
        icon: 'bi-search'
    },
    {
        name: '腾讯',
        url: 'https://www.qq.com',
        category: 'common',
        icon: 'bi-chat'
    },
    {
        name: '淘宝',
        url: 'https://www.taobao.com',
        category: 'common',
        icon: 'bi-bag'
    },
    {
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com',
        category: 'entertainment',
        icon: 'bi-play-btn'
    },
    {
        name: '抖音',
        url: 'https://www.douyin.com',
        category: 'entertainment',
        icon: 'bi-music-note'
    },
    {
        name: '网易云音乐',
        url: 'https://music.163.com',
        category: 'entertainment',
        icon: 'bi-music-note-beamed'
    }
];