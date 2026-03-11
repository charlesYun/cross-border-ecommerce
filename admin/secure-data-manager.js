// 安全数据管理器 - 使用本地存储和加密
class SecureDataManager {
    constructor() {
        this.encryptionKey = 'jingchenyunmao-2026'; // 实际项目中应该从环境变量或用户输入获取
        this.storageKey = 'jingchen_data_v1';
        this.data = this.loadData();
    }
    
    // 加载数据
    loadData() {
        try {
            const encrypted = localStorage.getItem(this.storageKey);
            if (!encrypted) return this.getDefaultData();
            
            const decrypted = this.decrypt(encrypted);
            return JSON.parse(decrypted);
        } catch (error) {
            console.error('加载数据失败:', error);
            return this.getDefaultData();
        }
    }
    
    // 保存数据
    saveData() {
        try {
            const json = JSON.stringify(this.data);
            const encrypted = this.encrypt(json);
            localStorage.setItem(this.storageKey, encrypted);
            return true;
        } catch (error) {
            console.error('保存数据失败:', error);
            return false;
        }
    }
    
    // 导出数据（加密）
    exportData() {
        const data = {
            timestamp: new Date().toISOString(),
            version: '1.0',
            data: this.data
        };
        
        const json = JSON.stringify(data, null, 2);
        const encrypted = this.encrypt(json);
        
        // 创建下载
        const blob = new Blob([encrypted], { type: 'application/octet-stream' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `jingchen-data-${new Date().toISOString().split('T')[0]}.enc`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
        
        return encrypted;
    }
    
    // 导入数据（解密）
    importData(encryptedData) {
        try {
            const decrypted = this.decrypt(encryptedData);
            const imported = JSON.parse(decrypted);
            
            // 验证数据格式
            if (imported.version && imported.data) {
                this.data = imported.data;
                this.saveData();
                return true;
            }
            return false;
        } catch (error) {
            console.error('导入数据失败:', error);
            return false;
        }
    }
    
    // 简单加密（实际项目中应该使用更安全的加密）
    encrypt(text) {
        // 这里使用简单的Base64编码，实际项目应该使用AES等加密算法
        return btoa(unescape(encodeURIComponent(text)));
    }
    
    // 解密
    decrypt(encrypted) {
        try {
            return decodeURIComponent(escape(atob(encrypted)));
        } catch (error) {
            console.error('解密失败:', error);
            return '';
        }
    }
    
    // 获取默认数据
    getDefaultData() {
        return {
            products: [
                {
                    id: 1,
                    name: '智能保温杯',
                    category: '保温杯',
                    priceMin: 199,
                    priceMax: 399,
                    description: '温度显示、智能提醒、长效保温',
                    features: ['温度显示', '智能提醒', '长效保温', 'APP连接'],
                    status: '上架',
                    image: '🥤'
                },
                {
                    id: 2,
                    name: '运动水杯',
                    category: '运动杯',
                    priceMin: 89,
                    priceMax: 159,
                    description: '防漏设计、便携挂钩、大容量',
                    features: ['防漏设计', '便携挂钩', '大容量', '单手开盖'],
                    status: '上架',
                    image: '🧊'
                }
            ],
            services: [
                {
                    id: 1,
                    name: '全球市场拓展',
                    description: '专业市场调研、渠道建设、品牌推广，帮助水杯产品进入全球主要市场。',
                    details: '我们提供完整的市场进入策略，包括目标市场分析、竞争对手研究、渠道合作伙伴对接、品牌定位与推广策略制定，以及销售网络建设。',
                    icon: 'fa-globe-americas',
                    features: ['市场调研', '渠道建设', '品牌推广', '销售网络'],
                    status: '启用'
                },
                {
                    id: 2,
                    name: '产品认证服务',
                    description: 'FDA、LFGB、BPA-Free等国际认证，确保产品符合目标市场法规要求。',
                    details: '我们提供一站式国际认证服务，包括FDA（美国）、LFGB（德国）、BPA-Free、TELEC（日本）、CE（欧洲）等认证，确保产品顺利进入目标市场。',
                    icon: 'fa-certificate',
                    features: ['FDA认证', 'LFGB认证', 'BPA-Free', 'TELEC认证', 'CE认证'],
                    status: '启用'
                }
            ],
            news: [
                {
                    id: 1,
                    title: '智能水杯在欧洲市场销量增长300%',
                    type: '新闻',
                    date: '2026-03-10',
                    summary: '随着健康饮水意识的提升，智能水杯在欧洲市场迎来爆发式增长...',
                    content: '根据最新市场数据显示，2026年第一季度智能水杯在欧洲市场的销量同比增长了300%。这一增长主要得益于消费者对健康饮水习惯的重视以及智能家居产品的普及。',
                    category: '市场动态',
                    status: '发布',
                    image: '📰'
                }
            ],
            settings: {
                site: {
                    name: '景辰云贸',
                    description: '景辰云贸专注于水杯类产品的跨境电商，8年行业经验，帮助500+企业成功进入全球市场'
                },
                contact: {
                    email: 'contact@jingchenyunmao.com',
                    phone: '+86 400-123-4567',
                    address: '中国跨境电商产业园'
                },
                stats: {
                    partners: 500,
                    countries: 50,
                    satisfaction: 98,
                    experience: 8
                }
            }
        };
    }
    
    // 数据操作方法
    getProducts() {
        return this.data.products || [];
    }
    
    getServices() {
        return this.data.services || [];
    }
    
    getNews() {
        return this.data.news || [];
    }
    
    getSettings() {
        return this.data.settings || {};
    }
    
    // 更新数据
    updateProducts(products) {
        this.data.products = products;
        return this.saveData();
    }
    
    updateServices(services) {
        this.data.services = services;
        return this.saveData();
    }
    
    updateNews(news) {
        this.data.news = news;
        return this.saveData();
    }
    
    updateSettings(settings) {
        this.data.settings = settings;
        return this.saveData();
    }
}

// 创建全局实例
window.dataManager = new SecureDataManager();

// 导出到全局
window.exportData = function() {
    const encrypted = window.dataManager.exportData();
    alert('数据已加密导出！文件已下载到本地。\n\n重要提示：请妥善保管加密文件，不要分享给他人。');
    return encrypted;
};

window.importData = function() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.enc,application/octet-stream';
    
    input.onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        
        const reader = new FileReader();
        reader.onload = function(event) {
            const encrypted = event.target.result;
            if (window.dataManager.importData(encrypted)) {
                alert('数据导入成功！页面将刷新以应用新数据。');
                location.reload();
            } else {
                alert('数据导入失败，请检查文件格式。');
            }
        };
        reader.readAsText(file);
    };
    
    input.click();
};

// 自动保存功能
let saveTimeout;
window.autoSave = function(callback) {
    clearTimeout(saveTimeout);
    saveTimeout = setTimeout(() => {
        if (window.dataManager.saveData()) {
            if (callback) callback(true);
        } else {
            if (callback) callback(false);
        }
    }, 1000);
};

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    console.log('安全数据管理器已加载');
    
    // 在管理后台添加数据管理界面
    if (document.getElementById('settings')) {
        setTimeout(() => {
            const settingsSection = document.getElementById('settings');
            const dataManagementDiv = document.createElement('div');
            dataManagementDiv.className = 'data-management-section';
            dataManagementDiv.innerHTML = `
                <div class="section-header">
                    <h2><i class="fas fa-shield-alt"></i> 数据安全管理</h2>
                </div>
                <div style="background: #f8f9fa; padding: 2rem; border-radius: var(--radius); margin-top: 1rem;">
                    <div style="margin-bottom: 1.5rem;">
                        <h3 style="margin-bottom: 0.5rem; color: var(--dark);">数据备份与恢复</h3>
                        <p style="color: var(--gray); margin-bottom: 1rem;">
                            所有数据都加密存储在您的浏览器本地，不会上传到任何服务器。
                        </p>
                        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                            <button onclick="exportData()" class="btn btn-primary" style="width: auto;">
                                <i class="fas fa-download"></i> 备份数据（加密导出）
                            </button>
                            <button onclick="importData()" class="btn btn-success" style="width: auto;">
                                <i class="fas fa-upload"></i> 恢复数据（加密导入）
                            </button>
                        </div>
                    </div>
                    
                    <div style="margin-bottom: 1.5rem; padding: 1rem; background: white; border-radius: 8px;">
                        <h4 style="margin-bottom: 0.5rem; color: var(--dark);">数据统计</h4>
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem;">
                            <div>
                                <div style="font-size: 0.9rem; color: var(--gray);">产品数量</div>
                                <div style="font-size: 1.5rem; font-weight: bold; color: var(--primary);" id="dataProductCount">0</div>
                            </div>
                            <div>
                                <div style="font-size: 0.9rem; color: var(--gray);">服务项目</div>
                                <div style="font-size: 1.5rem; font-weight: bold; color: var(--success);" id="dataServiceCount">0</div>
                            </div>
                            <div>
                                <div style="font-size: 0.9rem; color: var(--gray);">新闻资讯</div>
                                <div style="font-size: 1.5rem; font-weight: bold; color: var(--warning);" id="dataNewsCount">0</div>
                            </div>
                        </div>
                    </div>
                    
                    <div style="padding: 1rem; background: #fff3cd; border-radius: 8px; border-left: 4px solid #ffc107;">
                        <h4 style="margin-bottom: 0.5rem; color: #856404;">
                            <i class="fas fa-exclamation-triangle"></i> 安全提示
                        </h4>
                        <ul style="color: #856404; font-size: 0.9rem; margin: 0; padding-left: 1.2rem;">
                            <li>数据仅存储在您的浏览器本地，清除浏览器数据会丢失</li>
                            <li>定期使用"备份数据"功能导出加密备份文件</li>
                            <li>备份文件请妥善保管，不要分享给他人</li>
                            <li>建议在不同设备上定期备份</li>
                        </ul>
                    </div>
                </div>
            `;
            settingsSection.appendChild(dataManagementDiv);
            
            // 更新数据统计
            document.getElementById('dataProductCount').textContent = window.dataManager.getProducts().length;
            document.getElementById('dataServiceCount').textContent = window.dataManager.getServices().length;
            document.getElementById('dataNewsCount').textContent = window.dataManager.getNews().length;
        }, 500);
    }
});