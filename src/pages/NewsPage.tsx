import { useState } from 'react'
import { Calendar, User, Tag, ArrowRight, TrendingUp, Globe, BarChart } from 'lucide-react'

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = [
    { id: 'all', name: '全部', count: 12 },
    { id: 'industry', name: '行业动态', count: 5 },
    { id: 'company', name: '公司新闻', count: 4 },
    { id: 'market', name: '市场分析', count: 3 }
  ]

  const articles = [
    {
      id: 1,
      title: '2026年跨境电商发展趋势预测',
      excerpt: '随着全球电商市场的快速发展，2026年跨境电商将呈现哪些新趋势？本文从技术、市场、政策等多个维度进行分析。',
      category: 'industry',
      date: '2026-03-10',
      author: '张明',
      readTime: '5分钟',
      tags: ['趋势', '分析', '2026'],
      featured: true,
      imageColor: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: '景辰云贸与某国际品牌达成战略合作',
      excerpt: '我们很高兴宣布与某国际知名品牌达成战略合作，共同开拓东南亚电商市场，为品牌提供全方位的跨境服务。',
      category: 'company',
      date: '2026-03-08',
      author: '李娜',
      readTime: '3分钟',
      tags: ['合作', '品牌', '东南亚'],
      featured: true,
      imageColor: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: '欧洲电商市场合规要求最新解读',
      excerpt: '欧盟近期更新了跨境电商合规要求，本文详细解读新规对企业的影响及应对策略。',
      category: 'market',
      date: '2026-03-05',
      author: '王强',
      readTime: '8分钟',
      tags: ['合规', '欧洲', '政策'],
      featured: false,
      imageColor: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: '智能物流系统升级，配送效率提升40%',
      excerpt: '我们完成了智能物流系统的全面升级，通过AI算法优化配送路线，平均配送时间缩短40%。',
      category: 'company',
      date: '2026-03-03',
      author: '赵工程师',
      readTime: '4分钟',
      tags: ['物流', '技术', '升级'],
      featured: false,
      imageColor: 'from-amber-500 to-orange-500'
    },
    {
      id: 5,
      title: '东南亚电商市场增长潜力分析',
      excerpt: '东南亚电商市场持续高速增长，本文分析各国市场特点及进入策略。',
      category: 'market',
      date: '2026-02-28',
      author: '市场分析部',
      readTime: '6分钟',
      tags: ['东南亚', '市场', '增长'],
      featured: false,
      imageColor: 'from-red-500 to-rose-500'
    },
    {
      id: 6,
      title: '跨境电商税收政策变化及应对',
      excerpt: '多国调整跨境电商税收政策，企业如何应对？本文提供实用建议。',
      category: 'industry',
      date: '2026-02-25',
      author: '财务部',
      readTime: '7分钟',
      tags: ['税收', '政策', '合规'],
      featured: false,
      imageColor: 'from-indigo-500 to-blue-500'
    }
  ]

  const featuredArticles = articles.filter(article => article.featured)
  const filteredArticles = selectedCategory === 'all' 
    ? articles.filter(a => !a.featured)
    : articles.filter(a => a.category === selectedCategory && !a.featured)

  const industryInsights = [
    {
      title: '全球电商市场规模',
      value: '$6.5万亿',
      change: '+15%',
      icon: <Globe className="h-6 w-6" />,
      desc: '2025年全球电商市场规模'
    },
    {
      title: '跨境交易占比',
      value: '22%',
      change: '+3%',
      icon: <TrendingUp className="h-6 w-6" />,
      desc: '跨境电商占整体电商比例'
    },
    {
      title: '年均增长率',
      value: '18%',
      change: '+2%',
      icon: <BarChart className="h-6 w-6" />,
      desc: '跨境电商市场年均增速'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom py-20">
          <h1 className="heading-1 mb-6">新闻动态</h1>
          <p className="text-xl max-w-3xl">
            关注行业动态，洞察市场趋势，了解最新资讯
          </p>
        </div>
      </section>

      {/* Featured Articles */}
      {featuredArticles.length > 0 && (
        <section className="section-padding">
          <div className="container-custom">
            <div className="flex items-center justify-between mb-8">
              <h2 className="heading-2">精选文章</h2>
              <div className="flex items-center space-x-2 text-primary-600">
                <Tag className="h-5 w-5" />
                <span className="font-medium">热门推荐</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredArticles.map((article) => (
                <div key={article.id} className="group cursor-pointer">
                  <div className={`h-64 rounded-2xl bg-gradient-to-br ${article.imageColor} mb-6 relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center p-8">
                        <div className="text-4xl font-bold mb-2">GC</div>
                        <p className="opacity-90">景辰云贸 News</p>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
                        精选
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{article.date}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </span>
                      <span>{article.readTime}阅读</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-gray-600">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag, index) => (
                          <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 font-medium">
                        <span>阅读全文</span>
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Industry Insights */}
      <section className="bg-gray-50">
        <div className="container-custom py-12">
          <div className="text-center mb-8">
            <h2 className="heading-2 mb-4">行业洞察</h2>
            <p className="text-gray-600">跨境电商最新数据与趋势</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {industryInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {insight.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {insight.value}
                  <span className="text-green-500 text-lg ml-2">{insight.change}</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{insight.title}</h3>
                <p className="text-gray-600 text-sm">{insight.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                {/* Categories */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h3 className="text-lg font-semibold mb-4">分类</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center justify-between ${
                          selectedCategory === category.id
                            ? 'bg-primary-50 text-primary-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-sm bg-gray-100 px-2 py-1 rounded">
                          {category.count}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6">
                  <h3 className="text-lg font-semibold mb-4">订阅资讯</h3>
                  <p className="text-gray-600 text-sm mb-4">
                    订阅我们的新闻通讯，获取最新行业动态和市场分析
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="请输入邮箱"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <button className="btn-primary w-full text-sm">
                      立即订阅
                    </button>
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold mb-4">热门标签</h3>
                  <div className="flex flex-wrap gap-2">
                    {['趋势', '市场', '合规', '技术', '物流', '品牌', '政策', '分析'].map((tag, index) => (
                      <button
                        key={index}
                        className="px-3 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg text-sm transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Articles Grid */}
            <div className="lg:w-3/4">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-2xl font-bold">最新文章</h2>
                  <p className="text-gray-600 mt-1">
                    {selectedCategory === 'all' 
                      ? '全部文章' 
                      : `分类：${categories.find(c => c.id === selectedCategory)?.name}`}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <select className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-primary-500 focus:border-transparent">
                    <option>按时间排序</option>
                    <option>按热度排序</option>
                    <option>按阅读量排序</option>
                  </select>
                </div>
              </div>

              {filteredArticles.length === 0 ? (
                <div className="text-center py-12">
                  <div className="text-gray-300 text-6xl mb-4">📰</div>
                  <h3 className="text-xl font-semibold text-gray-600 mb-2">暂无文章</h3>
                  <p className="text-gray-500">该分类下暂时没有文章</p>
                </div>
              ) : (
                <div className="space-y-8">
                  {filteredArticles.map((article) => (
                    <div key={article.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                      <div className="md:flex">
                        <div className={`md:w-1/3 h-48 md:h-auto bg-gradient-to-br ${article.imageColor} relative`}>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-white text-center">
                              <div className="text-2xl font-bold">GC</div>
                              <div className="text-sm opacity-80">News</div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="md:w-2/3 p-6">
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center space-x-1">
                              <Calendar className="h-4 w-4" />
                              <span>{article.date}</span>
                            </span>
                            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                              {categories.find(c => c.id === article.category)?.name}
                            </span>
                            <span>{article.readTime}阅读</span>
                          </div>
                          
                          <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                            {article.title}
                          </h3>
                          
                          <p className="text-gray-600 mb-4">
                            {article.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center space-x-3">
                              <div className="flex items-center space-x-2">
                                <User className="h-4 w-4 text-gray-400" />
                                <span className="text-sm text-gray-600">{article.author}</span>
                              </div>
                              <div className="flex flex-wrap gap-2">
                                {article.tags.slice(0, 2).map((tag, index) => (
                                  <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <button className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 text-sm font-medium">
                              <span>阅读全文</span>
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Pagination */}
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2">
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    上一页
                  </button>
                  {[1, 2, 3].map((page) => (
                    <button
                      key={page}
                      className={`px-4 py-2 rounded-lg ${
                        page === 1
                          ? 'bg-primary-600 text-white'
                          : 'text-gray-600 hover:bg-gray-50'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button className="px-4 py-2 border border-gray-300 rounded-lg text-gray-600 hover:bg-gray-50">
                    下一页
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h2 className="heading-2 mb-4">获取更多行业洞察</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              订阅我们的专业报告，获取深度市场分析和行业趋势预测
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                订阅报告
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                联系我们
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewsPage