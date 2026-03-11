import { useState } from 'react'
import { Building, Globe, TrendingUp, Users, Target, Award } from 'lucide-react'

const CasesPage = () => {
  const [selectedIndustry, setSelectedIndustry] = useState('all')
  const [selectedRegion, setSelectedRegion] = useState('all')

  const industries = [
    { id: 'all', name: '全部品类' },
    { id: 'insulated', name: '保温杯' },
    { id: 'glass', name: '玻璃杯' },
    { id: 'smart', name: '智能水杯' },
    { id: 'travel', name: '随行杯' },
    { id: 'sports', name: '运动水杯' }
  ]

  const regions = [
    { id: 'all', name: '全部地区' },
    { id: 'europe', name: '欧洲市场' },
    { id: 'america', name: '美洲市场' },
    { id: 'asia', name: '亚洲市场' },
    { id: 'middleeast', name: '中东市场' }
  ]

  const caseStudies = [
    {
      id: 1,
      client: '某不锈钢保温杯品牌',
      industry: 'insulated',
      region: 'america',
      challenge: '产品进入美国市场需要FDA认证，面临沃尔玛、Target等大型零售商的高标准要求',
      solution: 'FDA认证协助+大型零售商渠道对接+本地化包装设计+质量体系建立',
      results: [
        { label: '月销售额', value: '$50万', icon: <TrendingUp className="h-5 w-5" /> },
        { label: '进入渠道', value: '3个大型零售商', icon: <Award className="h-5 w-5" /> },
        { label: '认证时间', value: '缩短50%', icon: <Target className="h-5 w-5" /> }
      ],
      duration: '8个月',
      tags: ['保温杯', '美国市场', 'FDA认证']
    },
    {
      id: 2,
      client: '某玻璃随行杯品牌',
      industry: 'glass',
      region: 'europe',
      challenge: '欧洲市场对环保产品要求高，需要LFGB认证，面临本地品牌的激烈竞争',
      solution: 'LFGB认证+环保营销策略+本地KOL合作+亚马逊欧洲站优化',
      results: [
        { label: '年销售额', value: '€80万', icon: <TrendingUp className="h-5 w-5" /> },
        { label: '市场占有率', value: '12%', icon: <Target className="h-5 w-5" /> },
        { label: '复购率', value: '提升40%', icon: <Users className="h-5 w-5" /> }
      ],
      duration: '10个月',
      tags: ['玻璃杯', '欧洲市场', '环保认证']
    },
    {
      id: 3,
      client: '某智能提醒水杯',
      industry: 'smart',
      region: 'asia',
      challenge: '日本市场对产品质量要求极高，智能设备需要TELEC认证，本地化难度大',
      solution: 'TELEC认证+本地化APP开发+日本电商平台入驻+ influencer营销',
      results: [
        { label: '销售额增长', value: '200%', icon: <Globe className="h-5 w-5" /> },
        { label: 'APP下载量', value: '10万+', icon: <TrendingUp className="h-5 w-5" /> },
        { label: '用户评分', value: '4.8/5.0', icon: <Target className="h-5 w-5" /> }
      ],
      duration: '12个月',
      tags: ['智能水杯', '日本市场', 'TELEC认证']
    },
    {
      id: 4,
      client: '某折叠便携水杯',
      industry: 'travel',
      region: 'asia',
      challenge: '东南亚旅游市场对便携产品需求大，但价格敏感，需要快速物流',
      solution: '本地化定价策略+新加坡海外仓+旅游KOL合作+ Lazada/Shopee平台优化',
      results: [
        { label: '月销量', value: '5万只', icon: <Users className="h-5 w-5" /> },
        { label: '配送时效', value: '缩短60%', icon: <Target className="h-5 w-5" /> },
        { label: '市场份额', value: '提升18%', icon: <Award className="h-5 w-5" /> }
      ],
      duration: '6个月',
      tags: ['折叠杯', '东南亚', '旅游市场']
    },
    {
      id: 5,
      client: '某运动水杯品牌',
      industry: 'sports',
      region: 'europe',
      challenge: '欧洲运动市场对产品质量和设计要求高，需要符合REACH环保标准',
      solution: 'REACH认证+运动社群营销+健身房渠道合作+环保材料升级',
      results: [
        { label: '年销售额', value: '€120万', icon: <Award className="h-5 w-5" /> },
        { label: '合作健身房', value: '500+家', icon: <Globe className="h-5 w-5" /> },
        { label: '复购率', value: '提升55%', icon: <Target className="h-5 w-5" /> }
      ],
      duration: '9个月',
      tags: ['运动水杯', '欧洲', 'REACH认证']
    },
    {
      id: 6,
      client: '某儿童防漏水杯',
      industry: 'sports',
      region: 'america',
      challenge: '美国儿童产品需要CPSC认证，安全要求极高，市场竞争激烈',
      solution: 'CPSC认证+儿童安全测试+沃尔玛渠道入驻+家长社群营销',
      results: [
        { label: '季度销售额', value: '$30万', icon: <TrendingUp className="h-5 w-5" /> },
        { label: '安全认证', value: '100%通过', icon: <Target className="h-5 w-5" /> },
        { label: '家长评分', value: '4.9/5.0', icon: <Users className="h-5 w-5" /> }
      ],
      duration: '7个月',
      tags: ['儿童水杯', '美国', 'CPSC认证']
    }
  ]

  const filteredCases = caseStudies.filter(caseStudy => {
    const matchesIndustry = selectedIndustry === 'all' || caseStudy.industry === selectedIndustry
    const matchesRegion = selectedRegion === 'all' || caseStudy.region === selectedRegion
    return matchesIndustry && matchesRegion
  })

  const stats = [
    { label: '成功案例', value: '50+', desc: '覆盖多个行业和市场' },
    { label: '合作客户', value: '500+', desc: '包括知名品牌和初创企业' },
    { label: '覆盖国家', value: '50+', desc: '全球主要电商市场' },
    { label: '客户满意度', value: '98%', desc: '基于客户反馈调查' }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom py-20">
          <h1 className="heading-1 mb-6">水杯客户案例</h1>
          <p className="text-xl max-w-3xl">
            看看我们如何帮助水杯品牌成功进入全球市场，实现销售增长和品牌建设
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-gray-900 mb-1">{stat.label}</div>
                <div className="text-gray-600 text-sm">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h2 className="heading-2">成功案例展示</h2>
              <p className="text-gray-600 mt-2">按行业和地区筛选查看</p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">按行业筛选</div>
                <div className="flex flex-wrap gap-2">
                  {industries.map((industry) => (
                    <button
                      key={industry.id}
                      onClick={() => setSelectedIndustry(industry.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedIndustry === industry.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {industry.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-700 mb-2">按地区筛选</div>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <button
                      key={region.id}
                      onClick={() => setSelectedRegion(region.id)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        selectedRegion === region.id
                          ? 'bg-primary-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {region.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Cases Grid */}
          {filteredCases.length === 0 ? (
            <div className="text-center py-12">
              <Building className="h-12 w-12 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">暂无相关案例</h3>
              <p className="text-gray-500">尝试调整筛选条件</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredCases.map((caseStudy) => (
                <div key={caseStudy.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    {/* Client Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                            <Building className="h-6 w-6 text-primary-600" />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold text-gray-900">{caseStudy.client}</h3>
                            <div className="flex items-center space-x-3 text-sm text-gray-600">
                              <span>{industries.find(i => i.id === caseStudy.industry)?.name}</span>
                              <span>•</span>
                              <span>{regions.find(r => r.id === caseStudy.region)?.name}</span>
                              <span>•</span>
                              <span>合作时长：{caseStudy.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Challenge & Solution */}
                    <div className="space-y-6">
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">挑战</div>
                        <p className="text-gray-700">{caseStudy.challenge}</p>
                      </div>
                      
                      <div>
                        <div className="text-sm font-medium text-gray-500 mb-2">解决方案</div>
                        <p className="text-gray-700">{caseStudy.solution}</p>
                      </div>
                    </div>

                    {/* Results */}
                    <div className="mt-8 pt-8 border-t">
                      <div className="text-sm font-medium text-gray-500 mb-4">成果展示</div>
                      <div className="grid grid-cols-3 gap-4">
                        {caseStudy.results.map((result, index) => (
                          <div key={index} className="text-center">
                            <div className="text-primary-600 mb-2 flex justify-center">
                              {result.icon}
                            </div>
                            <div className="text-2xl font-bold text-gray-900">{result.value}</div>
                            <div className="text-sm text-gray-600">{result.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="mt-8 flex flex-wrap gap-2">
                      {caseStudy.tags.map((tag, index) => (
                        <span key={index} className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">客户评价</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              听听我们的客户怎么说
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: '张总',
                position: '某保温杯品牌 CEO',
                content: '景辰云贸帮助我们快速获得FDA认证，成功进入美国沃尔玛渠道，月销售额达到$50万。',
                rating: 5
              },
              {
                name: '李经理',
                position: '某玻璃杯品牌 运营总监',
                content: '在欧洲市场的环保认证和本地化营销方面，景辰云贸提供了专业的解决方案。',
                rating: 5
              },
              {
                name: '王总监',
                position: '某智能水杯品牌 市场总监',
                content: '日本市场的TELEC认证和本地化APP开发非常专业，销售额增长200%。',
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8">
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.position}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">合作流程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              清晰透明的合作流程，确保项目顺利推进
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: '需求分析',
                description: '深入了解企业需求，分析市场机会和挑战'
              },
              {
                step: '02',
                title: '方案制定',
                description: '定制专属解决方案，明确服务内容和预期目标'
              },
              {
                step: '03',
                title: '签约合作',
                description: '签订服务协议，组建专属项目团队'
              },
              {
                step: '04',
                title: '执行优化',
                description: '方案实施，持续优化，定期成果汇报'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h2 className="heading-2 mb-4">开始您的成功故事</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              无论您面临什么挑战，景辰云贸都能为您提供专业的跨境电商解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                免费咨询
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                查看更多案例
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default CasesPage