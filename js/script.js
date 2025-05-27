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
        let domain;
        try {
            domain = new URL(url).hostname;
        } catch (e) {
            console.error('无效的URL:', url);
            return null;
        }

        const googleFaviconUrl = `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
        
        return new Promise((resolve) => {
            const img = new Image();
            
            img.onload = function() {
                if (this.width > 1 && this.height > 1) {
                    resolve(googleFaviconUrl);
                } else {
                    tryDirectFavicon(url, resolve);
                }
            };
            
            img.onerror = function() {
                tryDirectFavicon(url, resolve);
            };
            
            setTimeout(() => {
                if (!img.complete) {
                    img.src = ''; 
                    tryDirectFavicon(url, resolve);
                }
            }, 3000);
            
            img.src = googleFaviconUrl;
        });
    } catch (error) {
        console.error('获取网站图标失败:', error);
        return null;
    }
}

// 尝试直接从网站获取favicon
function tryDirectFavicon(url, resolve) {
    try {
        const domain = new URL(url).origin;
        const directFaviconUrl = `${domain}/favicon.ico`;
        
        const img = new Image();
        
        img.onload = function() {
            resolve(directFaviconUrl);
        };
        
        img.onerror = function() {
            resolve(null);
        };
        
        setTimeout(() => {
            if (!img.complete) {
                img.src = ''; 
                resolve(null);
            }
        }, 3000);
        
        img.src = directFaviconUrl;
    } catch (e) {
        console.error('获取直接favicon失败:', e);
        resolve(null);
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
                window.open(url, '_blank');
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
    
    document.body.className = `${currentTheme}-theme`;
    
    const loader = document.getElementById('page-loader');
    if (loader) loader.style.display = 'flex';
    
    try {
        initializeFavorites(); // Initialize favorites array
        initializeTheme();     // Apply theme
        initializeEventListeners(); // Setup event listeners for all elements, including those in elements object
        
        renderCategories();
        renderSites();
        
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
        showToast('网站加载完成', 'success');
        
        if (storedSites === null) { // Only show welcome if it was truly the first load with initialSites
            showToast('欢迎使用个人导航！', 'success');
        }

    } catch (error) {
        console.error('初始化失败:', error);
        showToast('加载失败，请刷新重试', 'error');
        if (loader) {
            loader.style.display = 'none';
        }
    }
    console.log("初始化完成");
});

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