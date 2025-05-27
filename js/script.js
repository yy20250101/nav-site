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

// 初始网站数据
const initialSites = [
    // 搜索类
    {
        name: '百度一下',
        url: 'https://www.baidu.com',
        category: 'search',
        icon: 'bi-search'
    },
    {
        name: '谷歌搜索',
        url: 'https://www.google.com',
        category: 'search',
        icon: 'bi-google'
    },
    {
        name: 'Bing必应',
        url: 'https://www.bing.com',
        category: 'search',
        icon: 'bi-microsoft'
    },
    {
        name: '搜狗搜索',
        url: 'https://www.sogou.com',
        category: 'search',
        icon: 'bi-search'
    },
    {
        name: '知乎搜索',
        url: 'https://www.zhihu.com/search',
        category: 'search',
        icon: 'bi-question-circle'
    },
    {
        name: '哔哩哔哩',
        url: 'https://search.bilibili.com',
        category: 'search',
        icon: 'bi-play-circle'
    },
    {
        name: '微博搜索',
        url: 'https://s.weibo.com',
        category: 'search',
        icon: 'bi-chat-dots'
    },
    {
        name: '在线翻译',
        url: 'https://fanyi.baidu.com',
        category: 'search',
        icon: 'bi-translate'
    },
    // 网盘搜索
    {
        name: '夸克盘搜',
        url: 'https://pan.quark.cn',
        category: 'netdisk',
        icon: 'bi-search'
    },
    {
        name: '阿里盘搜',
        url: 'https://www.alipansou.com',
        category: 'netdisk',
        icon: 'bi-search'
    },
    {
        name: '迅雷盘搜',
        url: 'https://pan.xunlei.com',
        category: 'netdisk',
        icon: 'bi-lightning'
    },
    {
        name: 'UC云搜',
        url: 'https://www.uc123.com',
        category: 'netdisk',
        icon: 'bi-search'
    },
    {
        name: '天翼搜',
        url: 'https://cloud.189.cn',
        category: 'netdisk',
        icon: 'bi-search'
    },
    {
        name: '百度云搜',
        url: 'https://pan.baidu.com',
        category: 'netdisk',
        icon: 'bi-search'
    },
    // AI类
    {
        name: 'DeepSeek',
        url: 'https://deepseek.com',
        category: 'ai',
        icon: 'bi-robot'
    },
    {
        name: '百度AI图片助手',
        url: 'https://image.baidu.com/search/index?showMask=1&fr=csaitab&tn=baiduimage&toolType=1&word=bdaitpzs百度AI图片助手bdaitpzs',
        category: 'ai',
        icon: 'bi-image'
    },
    {
        name: 'AI助手-ChatOS2',
        url: 'https://chat18.aichatos68.com/#/chat/1744721558898',
        category: 'ai',
        icon: 'bi-robot'
    },
    {
        name: '免费ChatGPT',
        url: 'https://freegpt.tech',
        category: 'ai',
        icon: 'bi-robot'
    },
    {
        name: 'OpenRouter开源模型社区',
        url: 'https://openrouter.ai/models',
        category: 'ai',
        icon: 'bi-box'
    },
    {
        name: 'FreeAI-算力平台',
        url: 'https://qwq.aigpu.cn',
        category: 'ai',
        icon: 'bi-gpu-card'
    },
    {
        name: '魔搭社区',
        url: 'https://www.modelscope.cn/models?page=1&tasks=auto-speech-recognition&type=audio',
        category: 'ai',
        icon: 'bi-collection'
    },
    {
        name: '豆包',
        url: 'https://www.doubao.com',
        category: 'ai',
        icon: 'bi-chat'
    },
    {
        name: '文心一言',
        url: 'https://yiyan.baidu.com',
        category: 'ai',
        icon: 'bi-chat-dots'
    },
    {
        name: 'Kimi',
        url: 'https://kimi.moonshot.cn',
        category: 'ai',
        icon: 'bi-robot'
    },
    {
        name: '通义千问',
        url: 'https://qianwen.aliyun.com',
        category: 'ai',
        icon: 'bi-chat'
    },
    {
        name: '腾讯混元',
        url: 'https://hunyuan.tencent.com',
        category: 'ai',
        icon: 'bi-chat-dots'
    },
    {
        name: 'Gemini',
        url: 'https://gemini.google.com',
        category: 'ai',
        icon: 'bi-google'
    },
    {
        name: 'ChatGPT',
        url: 'https://chat.openai.com',
        category: 'ai',
        icon: 'bi-robot'
    },
    {
        name: 'Claude',
        url: 'https://claude.ai',
        category: 'ai',
        icon: 'bi-robot'
    },
    // 存储类
    {
        name: '百度网盘',
        url: 'https://pan.baidu.com',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: '阿里云盘',
        url: 'https://www.aliyundrive.com',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: '夸克网盘',
        url: 'https://pan.quark.cn',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: '迅雷云盘',
        url: 'https://pan.xunlei.com',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: '天翼云盘',
        url: 'https://cloud.189.cn',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: 'UC网盘',
        url: 'https://www.uc.cn/drive',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: '蓝奏云',
        url: 'https://www.lanzou.com',
        category: 'storage',
        icon: 'bi-cloud'
    },
    {
        name: 'OneDrive',
        url: 'https://onedrive.live.com',
        category: 'storage',
        icon: 'bi-microsoft'
    },
    // 社交类
    {
        name: '微博',
        url: 'https://weibo.com',
        category: 'social',
        icon: 'bi-chat-dots'
    },
    {
        name: '百度贴吧',
        url: 'https://tieba.baidu.com',
        category: 'social',
        icon: 'bi-chat-square-text'
    },
    {
        name: '简书',
        url: 'https://www.jianshu.com',
        category: 'social',
        icon: 'bi-journal-text'
    },
    {
        name: '知乎',
        url: 'https://www.zhihu.com',
        category: 'social',
        icon: 'bi-question-circle'
    },
    {
        name: '豆瓣',
        url: 'https://www.douban.com',
        category: 'social',
        icon: 'bi-book'
    },
    {
        name: 'QQ邮箱',
        url: 'https://mail.qq.com',
        category: 'social',
        icon: 'bi-envelope'
    },
    {
        name: 'Gmail',
        url: 'https://mail.google.com',
        category: 'social',
        icon: 'bi-google'
    },
    {
        name: 'Hotmail',
        url: 'https://outlook.live.com',
        category: 'social',
        icon: 'bi-microsoft'
    },
    {
        name: '网易邮箱',
        url: 'https://mail.163.com',
        category: 'social',
        icon: 'bi-envelope'
    },
    {
        name: '新浪邮箱',
        url: 'https://mail.sina.com.cn',
        category: 'social',
        icon: 'bi-envelope'
    },
    {
        name: '阿里邮箱',
        url: 'https://mail.aliyun.com',
        category: 'social',
        icon: 'bi-envelope'
    },
    {
        name: '今日头条',
        url: 'https://www.toutiao.com',
        category: 'social',
        icon: 'bi-newspaper'
    },
    {
        name: '小红书',
        url: 'https://www.xiaohongshu.com',
        category: 'social',
        icon: 'bi-book'
    },
    // 影视音乐
    {
        name: '腾讯视频',
        url: 'https://v.qq.com',
        category: 'media',
        icon: 'bi-play-circle'
    },
    {
        name: '优酷',
        url: 'https://www.youku.com',
        category: 'media',
        icon: 'bi-play-circle'
    },
    {
        name: '爱奇艺',
        url: 'https://www.iqiyi.com',
        category: 'media',
        icon: 'bi-play-circle'
    },
    {
        name: '哔哩哔哩',
        url: 'https://www.bilibili.com',
        category: 'media',
        icon: 'bi-play-circle'
    },
    {
        name: 'CCTV直播',
        url: 'https://tv.cctv.com/live',
        category: 'media',
        icon: 'bi-broadcast'
    },
    {
        name: '抖音网页版',
        url: 'https://www.douyin.com',
        category: 'media',
        icon: 'bi-music-note'
    },
    {
        name: '快手网页版',
        url: 'https://www.kuaishou.com',
        category: 'media',
        icon: 'bi-camera-reels'
    },
    {
        name: '网易云音乐',
        url: 'https://music.163.com',
        category: 'media',
        icon: 'bi-music-note'
    },
    {
        name: 'QQ音乐',
        url: 'https://y.qq.com',
        category: 'media',
        icon: 'bi-music-note'
    },
    {
        name: '酷狗音乐',
        url: 'https://www.kugou.com',
        category: 'media',
        icon: 'bi-music-note'
    },
    {
        name: '虎牙直播',
        url: 'https://www.huya.com',
        category: 'media',
        icon: 'bi-broadcast'
    },
    {
        name: '斗鱼直播',
        url: 'https://www.douyu.com',
        category: 'media',
        icon: 'bi-broadcast'
    },
    // 游戏娱乐
    {
        name: '4399小游戏',
        url: 'http://www.4399.com',
        category: 'game',
        icon: 'bi-controller'
    },
    {
        name: '7k7k小游戏',
        url: 'http://www.7k7k.com',
        category: 'game',
        icon: 'bi-controller'
    },
    {
        name: '英雄联盟',
        url: 'https://lol.qq.com',
        category: 'game',
        icon: 'bi-controller'
    },
    {
        name: '永劫无间',
        url: 'https://www.yjwj.com',
        category: 'game',
        icon: 'bi-controller'
    },
    {
        name: 'STEAM',
        url: 'https://store.steampowered.com',
        category: 'game',
        icon: 'bi-steam'
    },
    {
        name: '王者荣耀',
        url: 'https://pvp.qq.com',
        category: 'game',
        icon: 'bi-controller'
    },
    {
        name: '3DM GAME',
        url: 'https://www.3dmgame.com',
        category: 'game',
        icon: 'bi-controller'
    },
    // 工具类
    {
        name: 'IP查询',
        url: 'https://www.ip138.com',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '文档在线转换',
        url: 'https://www.aconvert.com',
        category: 'tools',
        icon: 'bi-file-earmark-text'
    },
    {
        name: '谷歌翻译',
        url: 'https://translate.google.com',
        category: 'tools',
        icon: 'bi-translate'
    },
    {
        name: '有道翻译',
        url: 'https://fanyi.youdao.com',
        category: 'tools',
        icon: 'bi-translate'
    },
    {
        name: 'HTML在线运行',
        url: 'https://c.runoob.com',
        category: 'tools',
        icon: 'bi-code'
    },
    {
        name: 'MD编辑器',
        url: 'https://markdown.com.cn/editor',
        category: 'tools',
        icon: 'bi-markdown'
    },
    {
        name: '在线代码格式化',
        url: 'https://tool.oschina.net/codeformat',
        category: 'tools',
        icon: 'bi-code-square'
    },
    {
        name: 'JS混淆器',
        url: 'https://www.sojson.com/js.html',
        category: 'tools',
        icon: 'bi-braces'
    },
    {
        name: '站长工具',
        url: 'https://tool.chinaz.com',
        category: 'tools',
        icon: 'bi-tools'
    },
    {
        name: '在线Ping',
        url: 'https://ping.chinaz.com',
        category: 'tools',
        icon: 'bi-activity'
    },
    {
        name: 'ICP备案查询',
        url: 'https://beian.miit.gov.cn',
        category: 'tools',
        icon: 'bi-search'
    },
    {
        name: '传文件找文叔叔',
        url: 'https://www.wenshushu.cn/',
        category: 'tools',
        icon: 'bi-file-earmark-arrow-up'
    },
    {
        name: '微软商店软件下载',
        url: 'https://store.rg-adguard.net',
        category: 'tools',
        icon: 'bi-microsoft'
    },
    {
        name: '2925邮箱-无限邮',
        url: 'https://2925.com/#/',
        category: 'tools',
        icon: 'bi-envelope'
    },
    {
        name: '魔法站 — iKuuu VPN',
        url: 'https://ikuuu.one/user',
        category: 'tools',
        icon: 'bi-shield-check'
    },
    {
        name: '西部世界VPN',
        url: 'https://xbsj5632.website/portal/order/node',
        category: 'tools',
        icon: 'bi-shield-check'
    },
    {
        name: '二级域名分发系统',
        url: 'https://sds.leleo.top',
        category: 'tools',
        icon: 'bi-diagram-3'
    },
    {
        name: '翻唱任意歌曲！',
        url: 'https://kevinwang676-neucosvc-colab.hf.space/',
        category: 'tools',
        icon: 'bi-music-note'
    },
    {
        name: '速剧：短剧爱好者的天堂',
        url: 'https://m.suju.app',
        category: 'media',
        icon: 'bi-play-circle'
    },
    {
        name: '果冻代理下载',
        url: 'https://down.66a.vip',
        category: 'tools',
        icon: 'bi-download'
    },
    {
        name: '临时邮箱注册-IT知识空间',
        url: 'https://blog.fjy.zone/archives/ai-account-chatgpt-free',
        category: 'tools',
        icon: 'bi-envelope'
    },
    {
        name: 'Notion',
        url: 'https://www.notion.so',
        category: 'tools',
        icon: 'bi-journal-text'
    },
    {
        name: '云端开发，化繁为简',
        url: 'https://cloudstudio.net',
        category: 'dev',
        icon: 'bi-cloud-arrow-up'
    },
    {
        name: 'Apifox项目开发',
        url: 'https://app.apifox.com/main/teams/3506393?tab=project',
        category: 'dev',
        icon: 'bi-braces'
    },
    // 学习资源
    {
        name: 'Jay的资源库',
        url: 'https://www.lovejay.top',
        category: 'learning',
        icon: 'bi-collection'
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
    // 魔法上网
    {
        name: '免费节点 - AirportNode',
        url: 'https://gitlab.com/zhifan999/fq/-/wikis/home',
        category: 'tools',
        icon: 'bi-shield'
    },
    {
        name: '魔法浏览器',
        url: 'https://www.airportnode.com/category-1.html',
        category: 'tools',
        icon: 'bi-globe'
    },
    // 常用导航
    {
        name: 'Ayobe小贤定向链接',
        url: 'https://c1wtkpld08.feishu.cn/sheets/GvuusRw89h8f4jt0U0Cce00LnWb',
        category: 'common',
        icon: 'bi-link'
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com',
        category: 'media',
        icon: 'bi-youtube'
    },
    // 开发类
    {
        name: 'W3school',
        url: 'https://www.w3school.com.cn',
        category: 'dev',
        icon: 'bi-code-slash'
    },
    {
        name: 'Github',
        url: 'https://github.com',
        category: 'dev',
        icon: 'bi-github'
    },
    {
        name: '码云Gitee',
        url: 'https://gitee.com',
        category: 'dev',
        icon: 'bi-git'
    },
    {
        name: 'Linux命令查询',
        url: 'https://www.linuxcool.com',
        category: 'dev',
        icon: 'bi-terminal'
    },
    {
        name: 'CSDN',
        url: 'https://www.csdn.net',
        category: 'dev',
        icon: 'bi-journal-code'
    },
    {
        name: 'CdnJs',
        url: 'https://cdnjs.com',
        category: 'dev',
        icon: 'bi-box-arrow-down'
    },
    {
        name: '字节跳动CDN',
        url: 'https://cdn.bytedance.com',
        category: 'dev',
        icon: 'bi-box-arrow-down'
    },
    {
        name: 'Font Awesome',
        url: 'https://fontawesome.com',
        category: 'dev',
        icon: 'bi-fonts'
    },
    {
        name: 'MSDN我告诉你',
        url: 'https://msdn.itellyou.cn',
        category: 'dev',
        icon: 'bi-microsoft'
    },
    {
        name: '腾讯云',
        url: 'https://cloud.tencent.com',
        category: 'dev',
        icon: 'bi-cloud'
    },
    {
        name: '阿里云',
        url: 'https://www.aliyun.com',
        category: 'dev',
        icon: 'bi-cloud'
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
    favoritesBtn: document.getElementById('favorites-btn'),
    favoritesModal: document.getElementById('favorites-modal'),
    favoritesList: document.getElementById('favorites-list'),
    importExportBtn: document.getElementById('import-export-btn'),
    importExportModal: document.getElementById('import-export-modal'),
    exportBtn: document.getElementById('export-btn'),
    importBtn: document.getElementById('import-btn'),
    importFile: document.getElementById('import-file'),
    themeSettingsBtn: document.getElementById('theme-settings-btn'),
    themeSettingsModal: document.getElementById('theme-settings-modal'),
    themeOptions: document.querySelectorAll('.theme-option'),
    primaryColorPicker: document.getElementById('primary-color'),
    accentColorPicker: document.getElementById('accent-color'),
    searchInput: document.getElementById('search-input'),
    searchBtn: document.getElementById('search-btn'),
    addSiteBtn: document.getElementById('add-site-btn'),
    addSiteModal: document.getElementById('add-site-modal'),
    siteDetailModal: document.getElementById('site-detail-modal'),
    confirmModal: document.getElementById('confirm-modal'),
    closeButtons: document.querySelectorAll('.close-btn'),
    addSiteForm: document.getElementById('add-site-form'),
    categoryTags: document.getElementById('category-tags'),
    mainContent: document.getElementById('main-content'),
    emptyState: document.getElementById('empty-state'),
    searchResultInfo: document.getElementById('search-result-info'),
    resultCount: document.getElementById('result-count'),
    clearSearchBtn: document.getElementById('clear-search'),
    pageLoader: document.getElementById('page-loader'),
    toast: document.getElementById('toast')
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
    
    // 添加主题切换按钮到头部
    const header = document.querySelector('header');
    const themeBtn = document.createElement('button');
    themeBtn.className = 'theme-btn';
    themeBtn.innerHTML = `<i class="bi ${themes.find(t => t.id === savedTheme)?.icon || 'bi-sun'}"></i>`;
    header.appendChild(themeBtn);
    
    // 创建主题选择菜单
    const themeMenu = document.createElement('div');
    themeMenu.className = 'theme-menu';
    themeMenu.innerHTML = themes.map(theme => `
        <div class="theme-option ${theme.id === savedTheme ? 'active' : ''}" data-theme="${theme.id}">
            <i class="bi ${theme.icon}"></i>
            <span>${theme.name}</span>
        </div>
    `).join('');
    document.body.appendChild(themeMenu);
    
    // 主题按钮点击事件
    themeBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('show');
    });
    
    // 主题选择事件
    themeMenu.addEventListener('click', (e) => {
        const themeOption = e.target.closest('.theme-option');
        if (themeOption) {
            const theme = themeOption.dataset.theme;
            applyTheme(theme);
            themeMenu.classList.remove('show');
            showToast('主题切换成功！', 'success');
        }
    });
    
    // 点击其他地方关闭主题菜单
    document.addEventListener('click', () => {
        themeMenu.classList.remove('show');
    });
}

function applyTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('theme', theme);
    
    // 更新主题按钮图标
    const themeBtn = document.querySelector('.theme-btn');
    if (themeBtn) {
        themeBtn.innerHTML = `<i class="bi ${themes.find(t => t.id === theme)?.icon || 'bi-sun'}"></i>`;
    }
    
    // 更新主题选项的激活状态
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.dataset.theme === theme);
    });
}

// 收藏夹功能
function initializeFavorites() {
    // 从本地存储加载收藏夹数据
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    
    // 添加收藏按钮到头部
    const header = document.querySelector('header');
    const favBtn = document.createElement('button');
    favBtn.className = 'fav-btn';
    favBtn.innerHTML = '<i class="bi bi-star"></i>';
    header.appendChild(favBtn);
    
    // 创建收藏夹模态框
    const favModal = document.createElement('div');
    favModal.className = 'modal';
    favModal.id = 'favorites-modal';
    favModal.innerHTML = `
        <div class="modal-content">
            <div class="modal-header">
                <h2>我的收藏</h2>
                <button class="close-btn"><i class="bi bi-x"></i></button>
            </div>
            <div class="favorites-list"></div>
        </div>
    `;
    document.body.appendChild(favModal);
    
    // 收藏按钮点击事件
    favBtn.addEventListener('click', () => {
        renderFavorites();
        favModal.style.display = 'block';
    });
    
    // 关闭按钮事件
    favModal.querySelector('.close-btn').addEventListener('click', () => {
        favModal.style.display = 'none';
    });
    
    // 点击模态框外部关闭
    favModal.addEventListener('click', (e) => {
        if (e.target === favModal) {
            favModal.style.display = 'none';
        }
    });
}

function toggleFavorite(site) {
    const index = favorites.findIndex(f => f.url === site.url);
    if (index === -1) {
        // 添加到收藏
        favorites.push(site);
        showToast('已添加到收藏！', 'success');
    } else {
        // 从收藏中移除
        favorites.splice(index, 1);
        showToast('已从收藏中移除', 'success');
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderSites(); // 更新网站列表中的收藏状态
}

function renderFavorites() {
    const favoritesList = document.querySelector('.favorites-list');
    if (favorites.length === 0) {
        favoritesList.innerHTML = '<div class="empty-favorites">暂无收藏的网站</div>';
        return;
    }
    
    favoritesList.innerHTML = favorites.map(site => `
        <div class="favorite-item">
            <i class="bi ${site.icon}"></i>
            <div class="favorite-info">
                <div class="favorite-name">${site.name}</div>
                <div class="favorite-url">${site.url}</div>
            </div>
            <div class="favorite-actions">
                <a href="${site.url}" target="_blank" class="action-btn">
                    <i class="bi bi-box-arrow-up-right"></i>
                </a>
                <button class="action-btn remove-favorite" onclick="toggleFavorite(${JSON.stringify(site)})">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');
}

// 获取网站图标的函数
async function getFavicon(url) {
    try {
        // 尝试多个favicon获取方式
        const domain = new URL(url).origin;
        const faviconUrls = [
            `https://www.google.com/s2/favicons?domain=${url}&sz=32`,
            `${domain}/favicon.ico`,
            `${domain}/favicon.png`,
            `${domain}/apple-touch-icon.png`,
            `${domain}/apple-touch-icon-precomposed.png`
        ];

        // 依次尝试每个URL
        for (const faviconUrl of faviconUrls) {
            try {
                const response = await fetch(faviconUrl, { method: 'HEAD' });
                if (response.ok) {
                    return faviconUrl;
                }
            } catch (error) {
                console.warn(`Failed to fetch favicon from ${faviconUrl}:`, error);
                continue;
            }
        }

        // 如果所有尝试都失败，返回默认图标
        return null;
    } catch (error) {
        console.error('Error in getFavicon:', error);
        return null;
    }
}

// 修改添加网站的处理函数
async function handleAddSite(e) {
    e.preventDefault();
    
    // 获取表单数据
    const name = document.getElementById('site-name').value.trim();
    const url = document.getElementById('site-url').value.trim();
    const category = document.getElementById('site-category').value;
    
    // 验证数据
    if (!name || !url || !category) {
        showToast('请填写完整信息', 'error');
        return;
    }

    // 验证URL格式
    try {
        new URL(url);
    } catch (e) {
        showToast('请输入有效的网址', 'error');
        return;
    }

    // 检查是否已存在相同URL
    if (sites.some(site => site.url === url)) {
        showToast('该网站已存在', 'error');
        return;
    }

    // 显示加载提示
    showToast('正在获取网站图标...', 'info');

    // 获取网站图标
    const faviconUrl = await getFavicon(url);
    
    // 根据分类选择合适的图标类名（作为备选）
    let iconClass = 'bi-link';
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
    const iconHtml = site.faviconUrl ? 
        `<img src="${site.faviconUrl}" class="site-favicon" alt="${site.name}" onerror="this.onerror=null;this.src='';this.className='bi ${site.icon} site-icon';">` :
        `<i class="bi ${site.icon} site-icon"></i>`;
    
    return `
        <div class="site-card">
            ${iconHtml}
            <div class="site-name">${site.name}</div>
            <div class="site-actions">
                <a href="${site.url}" target="_blank" class="action-btn">
                    <i class="bi bi-box-arrow-up-right"></i>
                </a>
                <button class="action-btn favorite-btn ${isFavorite ? 'active' : ''}" 
                        onclick="toggleFavorite(${JSON.stringify(site)})">
                    <i class="bi bi-star${isFavorite ? '-fill' : ''}"></i>
                </button>
            </div>
        </div>
    `;
}

// 事件监听器
function initializeEventListeners() {
    // 收藏夹按钮
    elements.favoritesBtn.addEventListener('click', () => {
        elements.favoritesModal.style.display = 'block';
    });
    
    // 导入导出按钮
    elements.importExportBtn.addEventListener('click', () => {
        elements.importExportModal.style.display = 'block';
    });
    
    elements.exportBtn.addEventListener('click', exportData);
    
    elements.importBtn.addEventListener('click', () => {
        elements.importFile.click();
    });
    
    elements.importFile.addEventListener('change', (e) => {
        if (e.target.files.length > 0) {
            importData(e.target.files[0]);
        }
    });
    
    // 主题切换按钮
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.addEventListener('click', () => {
        const newTheme = currentTheme === 'dark' ? 'default' : 'dark';
        applyTheme(newTheme);
    });

    // 主题设置按钮
    const themeSettingsBtn = document.getElementById('theme-settings-btn');
    themeSettingsBtn.addEventListener('click', () => {
        document.getElementById('theme-settings-modal').style.display = 'block';
    });

    // 主题选项点击事件
    document.querySelectorAll('.theme-option').forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            applyTheme(theme);
        });
    });

    // 自定义颜色选择器
    const primaryColorPicker = document.getElementById('primary-color');
    const accentColorPicker = document.getElementById('accent-color');

    // 加载保存的自定义颜色
    primaryColorPicker.value = localStorage.getItem('custom-primary-color') || '#4361ee';
    accentColorPicker.value = localStorage.getItem('custom-accent-color') || '#7209b7';

    primaryColorPicker.addEventListener('change', (e) => {
        applyCustomColors(e.target.value, accentColorPicker.value);
    });

    accentColorPicker.addEventListener('change', (e) => {
        applyCustomColors(primaryColorPicker.value, e.target.value);
    });
    
    // 关闭按钮
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
}

// 渲染网站列表
function renderSites() {
    const mainContent = document.getElementById('main-content');
    if (!mainContent) return;
    
    const searchQuery = (document.getElementById('search-input')?.value || '').toLowerCase();
    let filteredSites = sites;
    
    // 搜索过滤
    if (searchQuery) {
        filteredSites = sites.filter(site => 
            site.name.toLowerCase().includes(searchQuery) || 
            site.url.toLowerCase().includes(searchQuery)
        );
    }
    
    // 分类过滤
    if (currentCategory && currentCategory !== 'all') {
        filteredSites = filteredSites.filter(site => site.category === currentCategory);
    }
    
    // 更新搜索结果信息
    const searchResultInfo = document.getElementById('search-result-info');
    const resultCount = document.getElementById('result-count');
    if (searchResultInfo && resultCount) {
        resultCount.textContent = filteredSites.length;
        searchResultInfo.style.display = searchQuery ? 'flex' : 'none';
    }
    
    // 显示空状态或渲染网站列表
    const emptyState = document.getElementById('empty-state');
    if (filteredSites.length === 0) {
        mainContent.innerHTML = '';
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        
        // 按分类分组
        const sitesByCategory = {};
        filteredSites.forEach(site => {
            if (!sitesByCategory[site.category]) {
                sitesByCategory[site.category] = [];
            }
            sitesByCategory[site.category].push(site);
        });
        
        // 渲染分组后的网站
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
        
        mainContent.innerHTML = html;
    }
}

// 渲染分类标签
function renderCategories() {
    const categoryTags = document.getElementById('category-tags');
    if (!categoryTags) return;
    
    // 添加"全部"分类
    const allCategoriesHtml = `
        <button class="category-tag ${currentCategory === 'all' ? 'active' : ''}" data-category="all">
            <i class="bi bi-grid"></i>
            全部
        </button>
    `;
    
    // 渲染其他分类
    const categoriesHtml = categories.map(category => `
        <button class="category-tag ${currentCategory === category.id ? 'active' : ''}" 
                data-category="${category.id}">
            <i class="bi ${category.icon}"></i>
            ${category.name}
        </button>
    `).join('');
    
    categoryTags.innerHTML = allCategoriesHtml + categoriesHtml;
    
    // 添加点击事件
    categoryTags.querySelectorAll('.category-tag').forEach(tag => {
        tag.addEventListener('click', () => {
            document.querySelectorAll('.category-tag').forEach(t => t.classList.remove('active'));
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
            sites = data.sites || sites;
            favorites = data.favorites || favorites;
            currentTheme = data.theme || currentTheme;
            
            localStorage.setItem('sites', JSON.stringify(sites));
            localStorage.setItem('favorites', JSON.stringify(favorites));
            localStorage.setItem('theme', currentTheme);
            
            applyTheme(currentTheme);
            renderSites();
            renderFavorites();
            showToast('数据导入成功', 'success');
        } catch (error) {
            showToast('导入失败：无效的文件格式');
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
function initializeElements() {
    // 显示加载动画
    const loader = document.getElementById('page-loader');
    loader.style.display = 'flex';

    // 异步初始化所有数据
    Promise.all([
        // 从localStorage加载主题设置
        new Promise(resolve => {
            initializeTheme();
            resolve();
        }),
        // 从localStorage加载收藏夹数据
        new Promise(resolve => {
            initializeFavorites();
            resolve();
        }),
        // 渲染分类标签
        new Promise(resolve => {
            renderCategories();
            resolve();
        }),
        // 渲染网站列表
        new Promise(resolve => {
            renderSites();
            resolve();
        })
    ]).then(() => {
        // 初始化事件监听
        initializeEventListeners();
        
        // 隐藏加载动画
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 300);
        
        // 显示成功提示
        showToast('网站加载完成', 'success');
    }).catch(error => {
        console.error('初始化失败:', error);
        showToast('加载失败，请刷新重试', 'error');
    });
}

// 确保DOM加载完成后再初始化
document.addEventListener('DOMContentLoaded', initializeElements);

// 初始化DOM元素
function initializeElements() {
    elements.searchInput = document.getElementById('search-input');
    elements.searchBtn = document.getElementById('search-btn');
    elements.addSiteBtn = document.getElementById('add-site-btn');
    elements.addSiteModal = document.getElementById('add-site-modal');
    elements.siteDetailModal = document.getElementById('site-detail-modal');
    elements.confirmModal = document.getElementById('confirm-modal');
    elements.closeButtons = document.querySelectorAll('.close-btn');
    elements.addSiteForm = document.getElementById('add-site-form');
    elements.categoryTags = document.getElementById('category-tags');
    elements.mainContent = document.getElementById('main-content');
    elements.emptyState = document.getElementById('empty-state');
    elements.searchResultInfo = document.getElementById('search-result-info');
    elements.resultCount = document.getElementById('result-count');
    elements.clearSearchBtn = document.getElementById('clear-search');
    elements.pageLoader = document.getElementById('page-loader');
    elements.toast = document.getElementById('toast');
}

// 显示提示信息
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}