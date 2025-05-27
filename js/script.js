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

// 网站分类数据
const categories = [
    { id: 'all', name: '全部', icon: 'bi-grid-fill' },
    { id: 'common', name: '常用', icon: 'bi-star-fill' },
    { id: 'tools', name: '工具', icon: 'bi-tools' },
    { id: 'ai', name: 'AI工具', icon: 'bi-robot' },
    { id: 'learning', name: '学习', icon: 'bi-book' },
    { id: 'entertainment', name: '娱乐', icon: 'bi-play-circle' },
    { id: 'dev', name: '开发', icon: 'bi-code-square' },
    { id: 'design', name: '设计', icon: 'bi-palette' },
    { id: 'social', name: '社交', icon: 'bi-people' }
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
    accentColorPicker: document.getElementById('accent-color')
};

// 初始化收藏夹
function initializeFavorites() {
    favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    renderFavorites();
}

// 渲染收藏夹
function renderFavorites() {
    if (!elements.favoritesList) return;
    
    elements.favoritesList.innerHTML = favorites.map((site, index) => `
        <div class="favorite-item" draggable="true" data-index="${index}">
            <i class="bi ${site.icon} favorite-icon"></i>
            <div class="favorite-info">
                <div class="favorite-name">${site.name}</div>
                <div class="favorite-url">${site.url}</div>
            </div>
            <div class="favorite-actions">
                <button class="action-btn remove-favorite" data-index="${index}">
                    <i class="bi bi-trash"></i>
                </button>
            </div>
        </div>
    `).join('');

    // 添加拖拽事件监听
    const favoriteItems = elements.favoritesList.querySelectorAll('.favorite-item');
    favoriteItems.forEach(item => {
        item.addEventListener('dragstart', handleDragStart);
        item.addEventListener('dragend', handleDragEnd);
        item.addEventListener('dragover', handleDragOver);
        item.addEventListener('drop', handleDrop);
    });
}

// 拖拽相关函数
function handleDragStart(e) {
    e.target.classList.add('dragging');
    e.dataTransfer.setData('text/plain', e.target.dataset.index);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    e.preventDefault();
    const draggingItem = document.querySelector('.dragging');
    if (draggingItem !== e.target) {
        e.target.classList.add('drag-over');
    }
}

function handleDrop(e) {
    e.preventDefault();
    const fromIndex = parseInt(e.dataTransfer.getData('text/plain'));
    const toIndex = parseInt(e.target.closest('.favorite-item').dataset.index);
    
    if (fromIndex !== toIndex) {
        const temp = favorites[fromIndex];
        favorites.splice(fromIndex, 1);
        favorites.splice(toIndex, 0, temp);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
    }
    
    e.target.classList.remove('drag-over');
}

// 添加到收藏夹
function addToFavorites(site) {
    if (!favorites.some(f => f.url === site.url)) {
        favorites.push(site);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        renderFavorites();
        showToast('已添加到收藏夹', 'success');
    } else {
        showToast('该网站已在收藏夹中');
    }
}

// 从收藏夹移除
function removeFromFavorites(index) {
    favorites.splice(index, 1);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
    showToast('已从收藏夹移除', 'success');
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

// 主题相关函数
function initializeTheme() {
    applyTheme(currentTheme);
    document.body.classList.toggle('dark-mode', currentTheme === 'dark');
}

function applyTheme(theme) {
    document.body.className = theme;
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // 更新主题选项的激活状态
    elements.themeOptions.forEach(option => {
        option.classList.toggle('active', option.dataset.theme === theme);
    });
}

function applyCustomColors(primary, accent) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--accent-color', accent);
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
    
    // 主题设置
    elements.themeSettingsBtn.addEventListener('click', () => {
        elements.themeSettingsModal.style.display = 'block';
    });
    
    elements.themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            applyTheme(theme);
        });
    });
    
    elements.primaryColorPicker.addEventListener('change', (e) => {
        applyCustomColors(e.target.value, elements.accentColorPicker.value);
    });
    
    elements.accentColorPicker.addEventListener('change', (e) => {
        applyCustomColors(elements.primaryColorPicker.value, e.target.value);
    });
    
    // 关闭按钮
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            btn.closest('.modal').style.display = 'none';
        });
    });
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeFavorites();
    initializeTheme();
    initializeEventListeners();
    // ... existing initialization code ...
});

// 渲染分类标签
function renderCategories() {
    const categoryTags = document.getElementById('category-tags');
    categoryTags.innerHTML = categories.map(category => `
        <div class="category-tag ${currentCategory === category.id ? 'active' : ''}" data-category="${category.id}">
            <i class="bi ${category.icon}"></i>
            ${category.name}
        </div>
    `).join('');
}