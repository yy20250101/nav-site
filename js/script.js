// DOM 元素
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const addSiteBtn = document.getElementById('add-site-btn');
const addSiteModal = document.getElementById('add-site-modal');
const siteDetailModal = document.getElementById('site-detail-modal');
const confirmModal = document.getElementById('confirm-modal');
const closeButtons = document.querySelectorAll('.close-btn');
const addSiteForm = document.getElementById('add-site-form');
const categoryTags = document.getElementById('category-tags');
const mainContent = document.getElementById('main-content');
const emptyState = document.getElementById('empty-state');
const searchResultInfo = document.getElementById('search-result-info');
const resultCount = document.getElementById('result-count');
const clearSearchBtn = document.getElementById('clear-search');
const themeToggle = document.getElementById('theme-toggle');
const siteCountElement = document.getElementById('site-count');
const pageLoader = document.getElementById('page-loader');
const exportBtn = document.getElementById('export-btn');
const importFile = document.getElementById('import-file');
const toast = document.getElementById('toast');

// 添加调试日志
console.log('脚本开始执行...');
console.log('DOM元素加载状态:');
console.log('searchInput:', searchInput);
console.log('addSiteBtn:', addSiteBtn);
console.log('categoryTags:', categoryTags);

// 网站详情元素
const siteDetailIcon = document.querySelector('.site-detail-icon i');
const siteDetailName = document.querySelector('.site-detail-name');
const detailUrl = document.getElementById('detail-url');
const editSiteBtn = document.getElementById('edit-site-btn');
const deleteSiteBtn = document.getElementById('delete-site-btn');
const visitSiteBtn = document.getElementById('visit-site-btn');

// 确认对话框元素
const confirmMessage = document.getElementById('confirm-message');
const confirmCancel = document.getElementById('confirm-cancel');
const confirmOk = document.getElementById('confirm-ok');

// 本地存储键名
const STORAGE_KEY = 'personal-nav-sites';
const THEME_KEY = 'personal-nav-theme';
const LAST_CATEGORY_KEY = 'personal-nav-last-category';

// 状态变量
let currentEditingSite = null;
let currentCategory = localStorage.getItem(LAST_CATEGORY_KEY) || 'all';
let isFiltering = false;

// 聊天相关变量（全局变量）
const chatElements = {
    toggle: null,
    container: null,
    messages: null,
    input: null,
    send: null,
    close: null,
    minimize: null,
    aiModel: null,
    modelStatus: null
};
let chatHistory = [];
let currentModel = 'gpt-3.5';

// 初始网站数据
const initialSites = [
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

// 获取存储的网站数据
function getSavedSites() {
    console.log('获取保存的网站数据...');
    try {
        const savedSites = localStorage.getItem(STORAGE_KEY);
        console.log('localStorage中的数据:', savedSites ? '存在' : '不存在');
        
        if (savedSites) {
            const parsedSites = JSON.parse(savedSites);
            console.log(`从localStorage加载了 ${parsedSites.length} 个网站`);
            return parsedSites;
        } else {
            console.log(`使用初始数据 ${initialSites.length} 个网站`);
            // 初始化时保存默认网站数据
            saveSites(initialSites);
            return initialSites;
        }
    } catch (error) {
        console.error('获取保存的网站数据时出错:', error);
        return initialSites;
    }
}

// 保存网站数据到本地存储
function saveSites(sites) {
    console.log(`保存 ${sites.length} 个网站到localStorage`);
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(sites));
        updateSiteCount(sites.length);
    } catch (error) {
        console.error('保存网站数据时出错:', error);
        showToast('保存数据时出错，请检查浏览器存储设置');
    }
}

// 更新网站计数
function updateSiteCount(count) {
    siteCountElement.textContent = count;
}

// 渲染网站卡片
function renderSites(sites = getSavedSites()) {
    console.log(`开始渲染 ${sites.length} 个网站`);
    
    // 清空现有内容
    document.querySelectorAll('.sites-container').forEach(container => {
        container.innerHTML = '';
    });

    // 根据当前选择的分类过滤网站
    let filteredSites = sites;
    if (currentCategory !== 'all' && !isFiltering) {
        filteredSites = sites.filter(site => site.category === currentCategory);
        console.log(`已过滤类别 "${currentCategory}"，剩余 ${filteredSites.length} 个网站`);
    }

    // 显示/隐藏空状态
    if (filteredSites.length === 0) {
        console.log('没有符合条件的网站，显示空状态');
        emptyState.style.display = 'block';
        document.querySelectorAll('.category').forEach(cat => {
            cat.style.display = 'none';
        });
        return;
    } else {
        emptyState.style.display = 'none';
    }

    // 按分类组织网站
    const sitesByCategory = filteredSites.reduce((acc, site) => {
        if (!acc[site.category]) {
            acc[site.category] = [];
        }
        acc[site.category].push(site);
        return acc;
    }, {});

    console.log('按分类组织的网站:', Object.keys(sitesByCategory).map(cat => `${cat}: ${sitesByCategory[cat].length}`));

    // 显示/隐藏分类
    document.querySelectorAll('.category').forEach(category => {
        const categoryId = category.id;
        if (sitesByCategory[categoryId] && sitesByCategory[categoryId].length > 0) {
            category.style.display = 'block';
        } else {
            category.style.display = 'none';
        }
    });

    // 渲染每个分类的网站
    Object.keys(sitesByCategory).forEach(category => {
        const container = document.querySelector(`#${category} .sites-container`);
        if (!container) {
            console.warn(`没有找到容器 #${category} .sites-container`);
            return;
        }

        console.log(`为分类 "${category}" 渲染 ${sitesByCategory[category].length} 个网站`);
        
        sitesByCategory[category].forEach((site, index) => {
            const siteCard = document.createElement('a');
            siteCard.href = 'javascript:void(0);'; // 改为不直接跳转
            siteCard.className = 'site-card';
            siteCard.dataset.url = site.url;
            siteCard.dataset.index = index;
            siteCard.dataset.category = site.category;
            
            siteCard.innerHTML = `
                <div class="site-icon"><i class="bi ${site.icon}"></i></div>
                <div class="site-name">${site.name}</div>
            `;
            
            // 点击显示详情
            siteCard.addEventListener('click', (e) => {
                e.preventDefault();
                showSiteDetail(site);
            });
            
            container.appendChild(siteCard);
        });
    });

    // 更新搜索结果信息
    if (isFiltering) {
        searchResultInfo.style.display = 'flex';
        resultCount.textContent = filteredSites.length;
    } else {
        searchResultInfo.style.display = 'none';
    }
    
    console.log('网站渲染完成');
}

// 显示网站详情
function showSiteDetail(site) {
    siteDetailIcon.className = `bi ${site.icon}`;
    siteDetailName.textContent = site.name;
    detailUrl.href = site.url;
    detailUrl.textContent = site.url;
    
    // 存储当前编辑的网站信息
    currentEditingSite = site;
    
    // 设置编辑按钮事件
    editSiteBtn.onclick = () => {
        closeSiteDetailModal();
        openEditModal(site);
    };
    
    // 设置删除按钮事件
    deleteSiteBtn.onclick = () => {
        closeSiteDetailModal();
        showConfirmDialog(`确定要删除 "${site.name}" 吗？`, () => {
            deleteSite(site);
        });
    };
    
    // 设置访问按钮事件
    visitSiteBtn.onclick = () => {
        window.open(site.url, '_blank');
    };
    
    // 显示模态框
    siteDetailModal.style.display = 'flex';
}

// 打开编辑模态框
function openEditModal(site) {
    document.getElementById('site-name').value = site.name;
    document.getElementById('site-url').value = site.url;
    document.getElementById('site-category').value = site.category;
    document.getElementById('site-icon').value = site.icon;
    updateIconPreview(site.icon);
    
    addSiteModal.style.display = 'flex';
}

// 删除网站
function deleteSite(site) {
    const sites = getSavedSites();
    const updatedSites = sites.filter(s => 
        !(s.name === site.name && s.url === site.url && s.category === site.category)
    );
    
    saveSites(updatedSites);
    renderSites(updatedSites);
    showToast(`已删除 "${site.name}"`);
}

// 搜索网站
function searchSites() {
    const query = searchInput.value.toLowerCase().trim();
    if (!query) {
        isFiltering = false;
        renderSites();
        return;
    }

    isFiltering = true;
    const sites = getSavedSites();
    const filteredSites = sites.filter(site => 
        site.name.toLowerCase().includes(query) || 
        site.url.toLowerCase().includes(query)
    );
    
    renderSites(filteredSites);
}

// 清除搜索
function clearSearch() {
    searchInput.value = '';
    isFiltering = false;
    renderSites();
}

// 添加新网站
function addNewSite(e) {
    e.preventDefault();
    showLoader();
    
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
    
    if (currentEditingSite) {
        // 更新现有网站
        const index = sites.findIndex(s => 
            s.name === currentEditingSite.name && 
            s.url === currentEditingSite.url && 
            s.category === currentEditingSite.category
        );
        
        if (index !== -1) {
            sites[index] = newSite;
            showToast(`已更新 "${siteName}"`);
        }
        
        currentEditingSite = null;
    } else {
        // 添加新网站
        sites.push(newSite);
        showToast(`已添加 "${siteName}"`);
    }
    
    saveSites(sites);
    
    renderSites();
    closeModal();
    addSiteForm.reset();
    
    setTimeout(() => {
        hideLoader();
    }, 300);
}

// 更新图标预览
function updateIconPreview(iconClass) {
    const iconPreview = document.querySelector('.icon-preview i');
    iconPreview.className = `bi ${iconClass}`;
}

// 打开模态框
function openModal() {
    // 重置表单和当前编辑状态
    addSiteForm.reset();
    currentEditingSite = null;
    updateIconPreview('bi-globe');
    addSiteModal.style.display = 'flex';
}

// 关闭模态框
function closeModal() {
    addSiteModal.style.display = 'none';
}

// 关闭网站详情模态框
function closeSiteDetailModal() {
    siteDetailModal.style.display = 'none';
}

// 显示确认对话框
function showConfirmDialog(message, confirmCallback) {
    confirmMessage.textContent = message;
    
    confirmOk.onclick = () => {
        confirmCallback();
        closeConfirmDialog();
    };
    
    confirmCancel.onclick = closeConfirmDialog;
    
    confirmModal.style.display = 'flex';
}

// 关闭确认对话框
function closeConfirmDialog() {
    confirmModal.style.display = 'none';
}

// 显示加载动画
function showLoader() {
    pageLoader.style.display = 'flex';
}

// 隐藏加载动画
function hideLoader() {
    pageLoader.style.display = 'none';
}

// 显示提示消息
function showToast(message) {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// 切换主题
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle('dark-mode');
    const themeIcon = themeToggle.querySelector('i');
    
    if (isDarkMode) {
        themeIcon.className = 'bi bi-sun-fill';
        localStorage.setItem(THEME_KEY, 'dark');
    } else {
        themeIcon.className = 'bi bi-moon-fill';
        localStorage.setItem(THEME_KEY, 'light');
    }
}

// 应用存储的主题
function applyStoredTheme() {
    const storedTheme = localStorage.getItem(THEME_KEY);
    
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.querySelector('i').className = 'bi bi-sun-fill';
    }
}

// 导出数据
function exportData() {
    const sites = getSavedSites();
    const dataStr = JSON.stringify(sites, null, 2);
    const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(dataStr)}`;
    
    const exportFileName = `nav-sites-backup-${new Date().toISOString().slice(0, 10)}.json`;
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileName);
    linkElement.click();
    
    showToast('数据导出成功');
}

// 导入数据
function importData(event) {
    const file = event.target.files[0];
    if (!file) return;
    
    showLoader();
    
    const reader = new FileReader();
    reader.onload = function(e) {
        try {
            const sites = JSON.parse(e.target.result);
            
            if (Array.isArray(sites)) {
                saveSites(sites);
                renderSites();
                showToast(`成功导入 ${sites.length} 个网站`);
            } else {
                throw new Error('数据格式不正确');
            }
        } catch (error) {
            showToast('导入失败：无效的数据格式');
            console.error(error);
        }
        
        hideLoader();
        event.target.value = ''; // 重置文件输入
    };
    
    reader.onerror = function() {
        showToast('读取文件时出错');
        hideLoader();
    };
    
    reader.readAsText(file);
}

// 切换分类
function changeCategory(category) {
    console.log(`切换分类: 从 "${currentCategory}" 到 "${category}"`);
    
    try {
        currentCategory = category;
        localStorage.setItem(LAST_CATEGORY_KEY, category);
        
        // 更新活动标签样式
        const allTags = document.querySelectorAll('.category-tag');
        console.log(`找到 ${allTags.length} 个分类标签`);
        
        allTags.forEach(tag => {
            if (tag.dataset.category === category) {
                tag.classList.add('active');
            } else {
                tag.classList.remove('active');
            }
        });
        
        if (!isFiltering) {
            renderSites();
        }
        
        console.log(`分类切换完成: "${category}"`);
    } catch (error) {
        console.error('切换分类时出错:', error);
    }
}

// 聊天功能相关元素
const chatToggle = document.getElementById('chat-toggle');
const chatContainer = document.getElementById('chat-container');
const chatMinimize = document.getElementById('chat-minimize');
const chatClose = document.getElementById('chat-close');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');
const chatSend = document.getElementById('chat-send');
const aiModel = document.getElementById('ai-model');
const modelStatus = document.getElementById('model-status');

// API密钥和配置（实际使用时应该从安全的服务器端获取）
const API_ENDPOINTS = {
    'gpt-3.5': 'https://api.openai.com/v1/chat/completions',
    'gpt-4': 'https://api.openai.com/v1/chat/completions',
    'claude': 'https://api.anthropic.com/v1/messages',
    'qwen-7b': 'https://api.modelscope.cn/api/v1/models/qwen/Qwen-7B-Chat/invoke',
    'qwen-14b': 'https://api.modelscope.cn/api/v1/models/qwen/Qwen-14B-Chat/invoke',
    'baichuan2-7b': 'https://api.modelscope.cn/api/v1/models/baichuan-inc/Baichuan2-7B-Chat/invoke',
    'baichuan2-13b': 'https://api.modelscope.cn/api/v1/models/baichuan-inc/Baichuan2-13B-Chat/invoke',
    'chatglm3-6b': 'https://api.modelscope.cn/api/v1/models/ZhipuAI/chatglm3-6b/invoke'
};

// 魔搭社区API密钥 (实际使用时应从安全的服务器端获取)
const MODELSCOPE_API_KEY = '30b9161f-9391-4ff0-a515-ae726f27916f'; // 此处需要填入你在魔搭社区申请的API密钥

// 打开/关闭聊天窗口
function toggleChatWindow() {
    chatElements.container.classList.toggle('active');
    
    if (chatElements.container.classList.contains('active')) {
        chatElements.container.classList.remove('minimized');
        chatElements.input.focus();
    }
}

// 关闭聊天窗口
function closeChatWindow() {
    chatElements.container.classList.remove('active');
}

// 最小化聊天窗口
function minimizeChatWindow() {
    chatElements.container.classList.add('minimized');
}

// 添加AI消息
function addAIMessage(message, model) {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.classList.add('message', 'ai');
    
    // 获取模型提供商信息
    let modelProvider = "未知";
    if (model.includes('gpt')) {
        modelProvider = "OpenAI";
    } else if (model.includes('claude')) {
        modelProvider = "Anthropic";
    } else if (model.includes('qwen') || model.includes('baichuan') || model.includes('chatglm')) {
        modelProvider = "ModelScope";
    }
    
    // 创建消息内容
    messageEl.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <span class="message-model-tag">${modelProvider} · ${model}</span>
        </div>
    `;
    
    // 添加到消息容器
    chatElements.messages.appendChild(messageEl);
    
    // 滚动到底部
    chatElements.messages.scrollTop = chatElements.messages.scrollHeight;
    
    // 更新聊天历史
    chatHistory.push({
        role: 'assistant',
        content: message,
        model: model
    });
}

// 添加用户消息
function addUserMessage(message) {
    // 创建消息元素
    const messageEl = document.createElement('div');
    messageEl.classList.add('message', 'user');
    
    // 创建消息内容
    messageEl.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
        </div>
    `;
    
    // 添加到消息容器
    chatElements.messages.appendChild(messageEl);
    
    // 滚动到底部
    chatElements.messages.scrollTop = chatElements.messages.scrollHeight;
    
    // 更新聊天历史
    chatHistory.push({
        role: 'user',
        content: message
    });
}

// 添加"输入中"指示器
function addTypingIndicator() {
    // 检查是否已存在输入中指示器
    if (document.querySelector('.typing-indicator')) {
        return;
    }
    
    // 创建输入中指示器元素
    const typingDiv = document.createElement('div');
    typingDiv.className = 'message ai typing-indicator';
    
    // 创建消息内容
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.innerHTML = `
        <div class="typing-animation">
            <span></span>
            <span></span>
            <span></span>
        </div>
    `;
    
    // 添加到输入中指示器
    typingDiv.appendChild(contentDiv);
    
    // 添加到消息容器
    chatElements.messages.appendChild(typingDiv);
    
    // 滚动到底部
    chatElements.messages.scrollTop = chatElements.messages.scrollHeight;
}

// 移除"输入中"指示器
function removeTypingIndicator() {
    const typingIndicator = document.querySelector('.typing-indicator');
    if (typingIndicator) {
        typingIndicator.remove();
    }
}

// 发送消息到AI并获取响应
async function sendMessageToAI(message) {
    // 获取当前选择的模型
    const currentModel = chatElements.aiModel.value;
    
    // 尝试调用API
    try {
        // 设置接口地址
        let apiUrl;
        
        // 是否为魔搭社区模型
        const isModelScopeModel = currentModel.includes('qwen') || 
                                  currentModel.includes('baichuan') || 
                                  currentModel.includes('chatglm') || 
                                  currentModel.includes('llama') || 
                                  currentModel.includes('bloom') || 
                                  currentModel.includes('bert') || 
                                  currentModel.includes('gpt');
        
        // 根据模型选择接口地址
        if (currentModel === 'gpt-3.5') {
            apiUrl = 'https://api.openai.com/v1/chat/completions';
        } else if (currentModel === 'gpt-4') {
            apiUrl = 'https://api.openai.com/v1/chat/completions';
        } else if (currentModel === 'claude') {
            apiUrl = 'https://api.anthropic.com/v1/messages';
        } else if (isModelScopeModel) {
            apiUrl = 'https://api.modelscope.cn/api/v1/models/generate';
        }
        
        // 更新模型状态
        chatElements.modelStatus.textContent = '调用API中...';
        
        // 如果是魔搭社区模型并且有API密钥
        if (isModelScopeModel && MODELSCOPE_API_KEY) {
            try {
                const response = await fetch(apiUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${MODELSCOPE_API_KEY}`
                    },
                    body: JSON.stringify({
                        model: currentModel,
                        messages: chatHistory.map(msg => ({
                            role: msg.role,
                            content: msg.content
                        })),
                        temperature: 0.7,
                        top_p: 0.9,
                        max_tokens: 800
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`API返回错误: ${response.status}`);
                }
                
                const data = await response.json();
                
                // 移除输入中指示器
                removeTypingIndicator();
                
                // 更新模型状态
                chatElements.modelStatus.textContent = '完成';
                
                // 添加AI响应
                if (data.output && data.output.text) {
                    const aiResponse = data.output.text;
                    addAIMessage(aiResponse, currentModel);
                } else {
                    throw new Error('无效的API响应');
                }
                
                // 成功后返回
                return;
                
            } catch (error) {
                console.warn('API调用失败，使用模拟响应:', error);
                // 继续执行，使用模拟响应
            }
        }
        
        // 如果API调用失败或未配置API密钥，使用模拟响应
        chatElements.modelStatus.textContent = '生成回复中...';
        
        // 模拟不同模型的响应
        let response;
        
        if (currentModel === 'gpt-3.5') {
            response = generateSimpleResponse(message);
        } else if (currentModel === 'gpt-4') {
            response = generateDetailedResponse(message);
        } else if (currentModel === 'claude') {
            response = generateFriendlyResponse(message);
        } else if (currentModel.includes('qwen')) {
            response = generateQwenResponse(message);
        } else if (currentModel.includes('baichuan')) {
            response = generateBaichuanResponse(message);
        } else if (currentModel.includes('chatglm')) {
            response = generateChatGLMResponse(message);
        } else {
            response = "我不确定如何回答这个问题。";
        }
        
        // 模拟API延迟
        setTimeout(() => {
            // 移除输入中指示器
            removeTypingIndicator();
            
            // 添加AI响应
            addAIMessage(response, currentModel);
            chatElements.modelStatus.textContent = '准备就绪';
        }, 1000 + Math.random() * 2000);
        
    } catch (error) {
        console.error('Error calling AI API:', error);
        removeTypingIndicator();
        addAIMessage('抱歉，发生了错误，请稍后再试。', currentModel);
        chatElements.modelStatus.textContent = '出错了';
    }
}

// 模拟回复生成函数
function generateSimpleResponse(message) {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('你好') || lowerMessage.includes('嗨') || lowerMessage.includes('hi')) {
        return '你好！很高兴为你服务。有什么我可以帮助你的吗？';
    } else if (lowerMessage.includes('名字')) {
        return '我是AI助手，很高兴认识你！';
    } else if (lowerMessage.includes('天气')) {
        return '抱歉，我无法获取实时天气信息。你可以通过添加天气网站到你的导航中随时查看天气。';
    } else if (lowerMessage.includes('时间') || lowerMessage.includes('日期')) {
        return `现在的时间是 ${new Date().toLocaleTimeString()}，日期是 ${new Date().toLocaleDateString()}。`;
    } else if (lowerMessage.includes('谢谢') || lowerMessage.includes('感谢')) {
        return '不客气！如果还有其他问题，随时告诉我。';
    } else if (lowerMessage.includes('网站') || lowerMessage.includes('添加')) {
        return '你可以点击页面底部的"添加网站"按钮来添加新的网站到你的导航中。填写网站名称、URL和选择图标即可。';
    } else if (lowerMessage.includes('搜索')) {
        return '你可以使用页面顶部的搜索框来搜索已保存的网站。输入关键词后按回车键或点击搜索按钮即可。';
    } else if (lowerMessage.includes('分类') || lowerMessage.includes('标签')) {
        return '本导航网站支持多种分类，包括常用网站、工具、学习资源和娱乐。你可以点击对应的分类标签来筛选网站。';
    } else if (lowerMessage.includes('黑暗') || lowerMessage.includes('暗色') || lowerMessage.includes('夜间')) {
        return '你可以点击右下角的月亮/太阳图标来切换暗色/明亮模式。';
    } else {
        const responses = [
            '我理解你的问题了。请告诉我更多细节，我会尽力帮助你。',
            '这是个好问题。让我思考一下如何回答...',
            '我明白你的意思了。有什么具体的方面需要我解释的吗？',
            '谢谢你的提问。这个问题涉及的内容比较广泛，你可以尝试更具体地描述你的需求。',
            '这个导航网站可以帮你整理和收藏常用网站，让你的上网体验更高效。有什么具体功能你想了解的吗？'
        ];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// 更详细的回复生成（模拟GPT-4）
function generateDetailedResponse(message) {
    const simpleResponse = generateSimpleResponse(message);
    
    // 添加更多的细节和解释
    const detailAdditions = [
        '此外，我想补充一点：',
        '另外值得一提的是：',
        '从技术角度来看，',
        '如果你想了解更多，',
        '基于我的理解，'
    ];
    
    const details = [
        '这个导航网站采用了现代化的UI设计和用户体验优化，支持响应式布局，在不同设备上都能获得良好的使用体验。',
        '你可以使用导入/导出功能来备份你的网站数据，或者在不同设备间同步你的收藏。',
        '所有数据都存储在本地，保护你的隐私安全。',
        '你可以根据个人喜好自定义网站的图标和分类，让导航更符合你的使用习惯。',
        '暗色模式不仅美观，还能在夜间使用时减轻眼睛疲劳。'
    ];
    
    const addition = detailAdditions[Math.floor(Math.random() * detailAdditions.length)];
    const detail = details[Math.floor(Math.random() * details.length)];
    
    return `${simpleResponse} ${addition}${detail}`;
}

// 更友好的回复生成（模拟Claude）
function generateFriendlyResponse(message) {
    const simpleResponse = generateSimpleResponse(message);
    
    // 添加更友好、更有个性的表达
    const friendlyAdditions = [
        '希望这个回答对你有帮助！😊',
        '如果你有其他问题，随时问我哦！👋',
        '很高兴能帮到你！✨',
        '祝你使用愉快！🌈',
        '探索新功能总是令人兴奋的，不是吗？🚀'
    ];
    
    const friendly = friendlyAdditions[Math.floor(Math.random() * friendlyAdditions.length)];
    
    return `${simpleResponse} ${friendly}`;
}

// 生成通义千问风格的回复
function generateQwenResponse(message) {
    const simpleResponse = generateSimpleResponse(message);
    const specializations = [
        '根据我的知识库，',
        '从专业角度来看，',
        '经过分析，',
        '我的理解是，',
        '值得注意的是，'
    ];
    
    const insights = [
        '这个导航网站的核心优势在于简洁而强大的功能组合，特别是分类管理系统非常实用。',
        '魔搭社区提供了丰富的AI模型资源，你可以尝试使用不同的模型来获取不同风格的回答。',
        '通义千问是阿里巴巴开源的大语言模型，具有较强的中文理解和生成能力。',
        '在本地存储方面，该网站采用了localStorage进行数据保存，这保证了你的数据隐私安全。',
        '响应式设计使得这个导航网站在不同设备上都能提供良好的用户体验。'
    ];
    
    const specialization = specializations[Math.floor(Math.random() * specializations.length)];
    const insight = insights[Math.floor(Math.random() * insights.length)];
    
    return `${simpleResponse} ${specialization}${insight}`;
}

// 生成百川风格的回复
function generateBaichuanResponse(message) {
    const simpleResponse = generateSimpleResponse(message);
    
    const facts = [
        '百川大模型是由百川智能开发的大型语言模型，在多语言、多任务上表现优秀。',
        '开源大模型的发展让AI技术更加普惠，为个人开发者提供了更多可能性。',
        '导航网站的AI助手功能可以帮助用户更高效地使用网站功能。',
        '你可以通过自定义分类和图标来个性化你的导航体验。',
        '数据导入导出功能可以帮助你在不同设备间同步你的网站收藏。'
    ];
    
    const fact = facts[Math.floor(Math.random() * facts.length)];
    
    return `${simpleResponse}\n\n补充信息：${fact}`;
}

// 生成ChatGLM风格的回复
function generateChatGLMResponse(message) {
    const simpleResponse = generateSimpleResponse(message);
    
    const academicAdditions = [
        '从技术实现角度，',
        '根据研究发现，',
        '值得一提的是，',
        '进一步分析，',
        '从用户体验设计的角度，'
    ];
    
    const explanations = [
        '该导航网站采用了模块化的代码结构，使得功能扩展和维护变得更加容易。',
        'ChatGLM是由清华大学与智谱AI共同开发的对话语言模型，具有较强的理解能力。',
        '本地存储虽然方便，但也有容量限制，建议定期导出备份重要数据。',
        '暗色模式不仅美观，还能减少屏幕对眼睛的刺激，特别是在夜间使用时。',
        '魔搭社区的AI模型在不断更新迭代，集成最新模型可以获得更好的对话体验。'
    ];
    
    const addition = academicAdditions[Math.floor(Math.random() * academicAdditions.length)];
    const explanation = explanations[Math.floor(Math.random() * explanations.length)];
    
    return `${simpleResponse}\n\n${addition}${explanation}`;
}

// 发送消息
function sendMessage() {
    // 获取输入的消息
    const message = chatElements.input.value.trim();
    
    // 如果消息为空，则不处理
    if (!message) return;
    
    // 添加用户消息
    addUserMessage(message);
    
    // 清空输入框
    chatElements.input.value = '';
    chatElements.input.style.height = 'auto';
    
    // 添加输入中指示器
    addTypingIndicator();
    
    // 更新模型状态
    chatElements.modelStatus.textContent = '正在思考...';
    
    // 发送消息到AI
    sendMessageToAI(message)
        .catch(error => {
            console.error('发送消息时出错:', error);
            removeTypingIndicator();
            addAIMessage('抱歉，发生了错误，请稍后再试。', currentModel);
            chatElements.modelStatus.textContent = '出错了';
        });
}

// 调整文本区域高度
function adjustTextareaHeight() {
    chatElements.input.style.height = 'auto';
    chatElements.input.style.height = (chatElements.input.scrollHeight) + 'px';
}

// 模型介绍信息
const MODEL_DESCRIPTIONS = {
    'gpt-3.5': 'OpenAI的GPT-3.5模型，能够理解和生成自然语言，适用于广泛的对话场景。',
    'gpt-4': 'OpenAI的GPT-4模型，相比GPT-3.5具有更强的推理能力和知识广度。',
    'claude': 'Anthropic开发的Claude模型，擅长生成安全、有帮助的回答。',
    'qwen-7b': '阿里巴巴开源的通义千问-7B模型，具有优秀的中文理解能力，参数量为70亿。',
    'qwen-14b': '阿里巴巴开源的通义千问-14B模型，相比7B版本性能更强，参数量为140亿。',
    'baichuan2-7b': '百川智能开发的开源大模型，适合中文对话和知识问答，参数量为70亿。',
    'baichuan2-13b': '百川智能开发的大型开源模型，具有更强的理解能力和知识广度，参数量为130亿。',
    'chatglm3-6b': '由清华大学与智谱AI共同开发的开源对话模型，擅长学术和知识问答，参数量为60亿。'
};

aiModel.addEventListener('change', () => {
    const selectedModel = aiModel.value;
    modelStatus.textContent = '已切换模型';
    
    // 在聊天窗口中提示模型变更
    const modelDescription = MODEL_DESCRIPTIONS[selectedModel] || '已选择新模型';
    addAIMessage(`已切换到 ${aiModel.options[aiModel.selectedIndex].text}。\n\n${modelDescription}`, selectedModel);
    
    setTimeout(() => {
        modelStatus.textContent = '准备就绪';
    }, 1000);
});

// 检查魔搭社区API状态
async function checkModelScopeAPIStatus() {
    // 如果没有API密钥，直接返回false
    if (!MODELSCOPE_API_KEY) {
        return false;
    }
    
    try {
        // 尝试调用魔搭社区API状态接口
        const response = await fetch('https://api.modelscope.cn/api/v1/models/status', {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${MODELSCOPE_API_KEY}`
            }
        });
        
        // 如果返回成功，表示API可用
        return response.ok;
    } catch (error) {
        console.error('检查魔搭社区API状态出错:', error);
        return false;
    }
}

// 更新模型状态
function updateModelStatus(apiAvailable) {
    // 确保modelStatus元素已初始化
    if (!chatElements.modelStatus) return;
    
    if (apiAvailable) {
        chatElements.modelStatus.textContent = '已连接 API';
        chatElements.modelStatus.style.color = 'var(--success-color)';
        
        // 为模型选项添加API可用标识
        if (chatElements.aiModel) {
            Array.from(chatElements.aiModel.options).forEach(option => {
                if (option.value.includes('qwen') || option.value.includes('baichuan') || option.value.includes('chatglm')) {
                    option.text = `${option.text.replace(' ✓', '')} ✓`;
                }
            });
        }
    } else {
        chatElements.modelStatus.textContent = '使用模拟响应';
        chatElements.modelStatus.style.color = 'var(--warning-color)';
        
        // 更新模型选项文本，移除对勾标识
        if (chatElements.aiModel) {
            Array.from(chatElements.aiModel.options).forEach(option => {
                option.text = option.text.replace(' ✓', '');
            });
        }
    }
}

// 设置所有事件监听器
function setupEventListeners() {
    console.log('设置事件监听器...');
    
    // 搜索功能
    searchBtn.addEventListener('click', searchSites);
    searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') searchSites();
    });
    clearSearchBtn.addEventListener('click', clearSearch);
    
    // 添加网站功能
    addSiteBtn.addEventListener('click', openModal);
    closeButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });
    addSiteForm.addEventListener('submit', addNewSite);
    
    // 图标选择功能
    document.getElementById('site-icon').addEventListener('input', function() {
        updateIconPreview(this.value);
    });
    
    document.querySelectorAll('.icon-option').forEach(option => {
        option.addEventListener('click', function() {
            const iconClass = this.dataset.icon;
            document.getElementById('site-icon').value = iconClass;
            updateIconPreview(iconClass);
        });
    });
    
    // 分类标签点击事件
    categoryTags.addEventListener('click', (e) => {
        if (e.target.classList.contains('category-tag')) {
            console.log('分类标签点击:', e.target.dataset.category);
            changeCategory(e.target.dataset.category);
        }
    });
    
    // 主题切换
    themeToggle.addEventListener('click', toggleTheme);
    
    // 导入/导出功能
    exportBtn.addEventListener('click', exportData);
    importFile.addEventListener('change', importData);
    
    // 点击模态框外部关闭
    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal')) {
            e.target.style.display = 'none';
        }
    });
    
    console.log('事件监听器设置完成');
}

// 在页面加载时初始化
document.addEventListener('DOMContentLoaded', async function() {
    console.log('DOMContentLoaded 事件触发');
    
    // 显示加载动画
    showLoader();
    
    try {
        // 应用存储的主题
        applyStoredTheme();
        
        // 获取保存的网站数据
        const sites = getSavedSites();
        console.log('加载的网站数据:', sites);
        
        // 更新网站计数
        updateSiteCount(sites.length);
        
        // 设置分类标签的活动状态
        console.log('当前分类:', currentCategory);
        changeCategory(currentCategory);
        
        // 渲染网站
        renderSites();
        
        // 事件监听器设置
        setupEventListeners();
        
        // 初始化聊天窗口
        initChat();
        
        // 更新模型状态
        const apiAvailable = await checkModelScopeAPIStatus();
        updateModelStatus(apiAvailable);
        
        // 添加初始欢迎消息
        setTimeout(() => {
            addAIMessage(`👋 欢迎使用AI助手！我可以帮助您解答问题和提供信息。

您可以从下方选择不同的AI模型：
- **OpenAI模型**：GPT-3.5和GPT-4，通用性强
- **Anthropic模型**：Claude，注重安全和有用性
- **魔搭社区模型**：通义千问、百川和ChatGLM，对中文理解优化

每个模型都有不同的特点和擅长领域，您可以根据需要选择最适合的模型。

如果您有关于导航站点的使用问题，或者想了解如何添加和管理网站，都可以随时向我提问！`, "assistant");
        }, 500);
    } catch (error) {
        console.error('初始化过程中发生错误:', error);
    } finally {
        // 隐藏加载动画
        setTimeout(hideLoader, 500);
    }
});

// 初始化聊天窗口
function initChat() {
    // 获取DOM元素
    chatElements.toggle = document.getElementById('chat-toggle');
    chatElements.container = document.getElementById('chat-container');
    chatElements.messages = document.getElementById('chat-messages');
    chatElements.input = document.getElementById('chat-input');
    chatElements.send = document.getElementById('chat-send');
    chatElements.close = document.getElementById('chat-close');
    chatElements.minimize = document.getElementById('chat-minimize');
    chatElements.aiModel = document.getElementById('ai-model');
    chatElements.modelStatus = document.getElementById('model-status');
    
    // 绑定事件
    chatElements.toggle.addEventListener('click', toggleChatWindow);
    chatElements.send.addEventListener('click', sendMessage);
    chatElements.close.addEventListener('click', closeChatWindow);
    chatElements.minimize.addEventListener('click', minimizeChatWindow);
    chatElements.input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    });
    
    // 模型切换事件
    chatElements.aiModel.addEventListener('change', function() {
        const selectedModel = this.value;
        currentModel = selectedModel;
        
        // 在聊天窗口中提示模型变更
        const modelDescription = MODEL_DESCRIPTIONS[selectedModel] || '已选择新模型';
        addAIMessage(`已切换到 ${chatElements.aiModel.options[chatElements.aiModel.selectedIndex].text}。\n\n${modelDescription}`, selectedModel);
        
        setTimeout(() => {
            chatElements.modelStatus.textContent = '准备就绪';
        }, 500);
    });
    
    // 重置聊天历史
    chatHistory = [];
} 
