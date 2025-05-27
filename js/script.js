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
    // 加载保存的主题
    const savedTheme = localStorage.getItem('theme') || 'default';
    applyTheme(savedTheme);
}

function applyTheme(theme) {
    // 移除所有主题类
    document.body.classList.remove('default-theme', 'dark-theme', 'ocean-theme', 'forest-theme', 'sunset-theme');
    // 添加新主题类
    document.body.classList.add(`${theme}-theme`);
    // 更新主题图标
    const themeToggle = document.getElementById('theme-toggle');
    themeToggle.innerHTML = `<i class="bi bi-${theme === 'dark' ? 'sun' : 'moon-stars'}"></i>`;
    // 保存主题设置
    currentTheme = theme;
    localStorage.setItem('theme', theme);
    
    // 更新主题选项的激活状态
    document.querySelectorAll('.theme-option').forEach(option => {
        option.classList.toggle('active', option.dataset.theme === theme);
    });
}

function applyCustomColors(primary, accent) {
    document.documentElement.style.setProperty('--primary-color', primary);
    document.documentElement.style.setProperty('--accent-color', accent);
    localStorage.setItem('custom-primary-color', primary);
    localStorage.setItem('custom-accent-color', accent);
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
    const filteredSites = sites.filter(site => {
        const matchesCategory = currentCategory === 'all' || site.category === currentCategory;
        const matchesSearch = !searchQuery || 
            site.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            site.url.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredSites.length === 0) {
        elements.mainContent.innerHTML = '';
        elements.emptyState.style.display = 'block';
    } else {
        elements.emptyState.style.display = 'none';
        const container = document.createElement('div');
        container.className = 'sites-container';

        filteredSites.forEach(site => {
            const card = document.createElement('a');
            card.href = site.url;
            card.target = '_blank';
            card.className = 'site-card';
            card.innerHTML = `
                <i class="bi ${site.icon} site-icon"></i>
                <div class="site-name">${site.name}</div>
            `;
            
            // 添加收藏按钮
            const favoriteBtn = document.createElement('button');
            favoriteBtn.className = 'favorite-btn';
            favoriteBtn.innerHTML = `<i class="bi bi-star${favorites.some(f => f.url === site.url) ? '-fill' : ''}"></i>`;
            favoriteBtn.onclick = (e) => {
                e.preventDefault();
                addToFavorites(site);
                favoriteBtn.innerHTML = '<i class="bi bi-star-fill"></i>';
            };
            card.appendChild(favoriteBtn);
            
            container.appendChild(card);
        });

        elements.mainContent.innerHTML = '';
        elements.mainContent.appendChild(container);
    }

    // 更新搜索结果信息
    if (searchQuery) {
        elements.searchResultInfo.style.display = 'flex';
        elements.resultCount.textContent = filteredSites.length;
    } else {
        elements.searchResultInfo.style.display = 'none';
    }
}

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    // 初始化网站数据
    sites = JSON.parse(localStorage.getItem('sites')) || initialSites;
    localStorage.setItem('sites', JSON.stringify(sites));
    
    // 初始化DOM元素
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

    // 初始化事件监听
    initializeEventListeners();
    
    // 初始化搜索功能
    elements.searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderSites();
    });

    elements.clearSearchBtn.addEventListener('click', () => {
        elements.searchInput.value = '';
        searchQuery = '';
        renderSites();
    });

    // 初始化分类标签
    elements.categoryTags.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tag')) {
            document.querySelectorAll('.category-tag').forEach(tag => {
                tag.classList.remove('active');
            });
            e.target.classList.add('active');
            currentCategory = e.target.dataset.category;
            renderSites();
        }
    });

    // 添加网站按钮事件监听
    document.getElementById('add-site-btn').addEventListener('click', () => {
        document.getElementById('add-site-modal').style.display = 'block';
    });

    // 关闭按钮事件监听
    document.querySelectorAll('.close-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.target.closest('.modal').style.display = 'none';
        });
    });

    // 点击模态框外部关闭
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    });

    // 添加网站表单提交事件
    document.getElementById('add-site-form').addEventListener('submit', (e) => {
        e.preventDefault();
        
        const newSite = {
            name: document.getElementById('site-name').value,
            url: document.getElementById('site-url').value,
            category: document.getElementById('site-category').value,
            icon: 'bi-link-45deg'
        };

        // 添加到网站列表
        sites.push(newSite);
        localStorage.setItem('sites', JSON.stringify(sites));

        // 重新渲染网站列表
        renderSites();

        // 关闭模态框并重置表单
        document.getElementById('add-site-modal').style.display = 'none';
        document.getElementById('add-site-form').reset();

        // 显示成功提示
        showToast('网站添加成功！', 'success');
    });

    // 初始化收藏夹
    initializeFavorites();
    
    // 初始化主题
    initializeTheme();
    
    // 渲染网站列表
    renderSites();
    
    // 隐藏加载器
    elements.pageLoader.style.display = 'none';
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

// 显示提示信息
function showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.className = `toast show ${type}`;
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}