// DOM 元素
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const addSiteBtn = document.getElementById('add-site-btn');
const modal = document.getElementById('add-site-modal');
const closeBtn = document.querySelector('.close-btn');
const addSiteForm = document.getElementById('add-site-form');

// 本地存储键名
const STORAGE_KEY = 'personal-nav-sites';

// 初始网站数据
const initialSites = [
    {
        name: '百度',
        url: 'https://www.baidu.com',
        category: 'common',
        icon: 'bi-search'
    },
    {
        name: '淘宝',
        url: 'https://www.taobao.com',
        category: 'common',
        icon: 'bi-cart'
    },
    {
        name: 'Google',
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
        name: '谷歌翻译',
        url: 'https://translate.google.com',
        category: 'tools',
        icon: 'bi-translate'
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
    }
];

// 获取存储的网站数据
function getSavedSites() {
    const savedSites = localStorage.getItem(STORAGE_KEY);
    return savedSites ? JSON.parse(savedSites) : initialSites;
}

// 保存网站数据到本地存储
function saveSites(sites) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
}

// 渲染网站卡片
function renderSites(sites = getSavedSites()) {
    // 清空现有内容
    document.querySelectorAll('.sites-container').forEach(container => {
        container.innerHTML = '';
    });

    // 按分类组织网站
    const sitesByCategory = sites.reduce((acc, site) => {
        if (!acc[site.category]) {
            acc[site.category] = [];
        }
        acc[site.category].push(site);
        return acc;
    }, {});

    // 渲染每个分类的网站
    Object.keys(sitesByCategory).forEach(category => {
        const container = document.querySelector(`#${category} .sites-container`);
        if (!container) return;

        sitesByCategory[category].forEach(site => {
            const siteCard = document.createElement('a');
            siteCard.href = site.url;
            siteCard.className = 'site-card';
            siteCard.target = '_blank';
            
            siteCard.innerHTML = `
                <div class="site-icon"><i class="bi ${site.icon}"></i></div>
                <div class="site-name">${site.name}</div>
            `;
            
            container.appendChild(siteCard);
        });
    });
}

// 搜索网站
function searchSites() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        renderSites();
        return;
    }

    const sites = getSavedSites();
    const filteredSites = sites.filter(site => 
        site.name.toLowerCase().includes(query) || 
        site.url.toLowerCase().includes(query)
    );
    
    renderSites(filteredSites);
}

// 添加新网站
function addNewSite(e) {
    e.preventDefault();
    
    const siteName = document.getElementById('site-name').value;
    const siteUrl = document.getElementById('site-url').value;
    const siteCategory = document.getElementById('site-category').value;
    const siteIcon = document.getElementById('site-icon').value;
    
    const newSite = {
        name: siteName,
        url: siteUrl,
        category: siteCategory,
        icon: siteIcon
    };
    
    const sites = getSavedSites();
    sites.push(newSite);
    saveSites(sites);
    
    renderSites();
    closeModal();
    addSiteForm.reset();
}

// 打开模态框
function openModal() {
    modal.style.display = 'flex';
}

// 关闭模态框
function closeModal() {
    modal.style.display = 'none';
}

// 事件监听
document.addEventListener('DOMContentLoaded', () => {
    renderSites();
    
    searchBtn.addEventListener('click', searchSites);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchSites();
    });
    
    addSiteBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    addSiteForm.addEventListener('submit', addNewSite);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}); 