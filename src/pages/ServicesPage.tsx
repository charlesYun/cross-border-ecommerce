import { useState } from 'react'
import { Check, Globe, Shield, Truck, Package, Headphones, BarChart, Users } from 'lucide-react'

const ServicesPage = () => {
  const [selectedPlan, setSelectedPlan] = useState('basic')

  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: '全球市场拓展',
      description: '帮助产品进入欧美、东南亚、中东等主要跨境电商市场',
      features: [
        '市场调研与分析',
        '平台入驻协助',
        '本地化运营策略',
        '竞争对手分析',
        '定价策略制定'
      ],
      plans: {
        basic: true,
        pro: true,
        enterprise: true
      }
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '合规与认证',
      description: '一站式解决产品认证、海关合规、税务申报等问题',
      features: [
        '产品认证咨询',
        '海关备案协助',
        '税务合规指导',
        '知识产权保护',
        '法律法规咨询'
      ],
      plans: {
        basic: true,
        pro: true,
        enterprise: true
      }
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: '物流与仓储',
      description: '全球仓储网络，智能物流解决方案，降低运输成本',
      features: [
        '海外仓服务',
        '头程运输',
        '最后一公里配送',
        '库存管理',
        '退货处理'
      ],
      plans: {
        basic: false,
        pro: true,
        enterprise: true
      }
    },
    {
      icon: <Package className="h-8 w-8" />,
      title: '产品采购',
      description: '对接优质供应商，确保产品质量和稳定供应',
      features: [
        '供应商筛选',
        '样品测试',
        '质量检验',
        '订单管理',
        '供应链优化'
      ],
      plans: {
        basic: false,
        pro: true,
        enterprise: true
      }
    },
    {
      icon: <BarChart className="h-8 w-8" />,
      title: '数据分析',
      description: '基于大数据的市场洞察和销售预测',
      features: [
        '销售数据分析',
        '市场趋势预测',
        '用户行为分析',
        '竞品监控',
        'ROI分析'
      ],
      plans: {
        basic: false,
        pro: true,
        enterprise: true
      }
    },
    {
      icon: <Headphones className="h-8 w-8" />,
      title: '客户服务',
      description: '多语言客服支持，提升客户满意度',
      features: [
        '售前咨询',
        '订单处理',
        '售后支持',
        '投诉处理',
        '客户关系管理'
      ],
      plans: {
        basic: true,
        pro: true,
        enterprise: true
      }
    }
  ]

  const pricingPlans = [
    {
      id: 'basic',
      name: '基础版',
      price: '299',
      period: '月',
      description: '适合初创企业和小型卖家',
      features: [
        '市场拓展咨询',
        '基础合规指导',
        '客服支持',
        '月度报告',
        '1对1客户经理'
      ],
      recommended: false
    },
    {
      id: 'pro',
      name: '专业版',
      price: '899',
      period: '月',
      description: '适合成长型企业和品牌卖家',
      features: [
        '包含基础版所有功能',
        '物流仓储服务',
        '产品采购支持',
        '数据分析报告',
        '优先客服支持',
        '季度战略会议'
      ],
      recommended: true
    },
    {
      id: 'enterprise',
      name: '企业版',
      price: '定制',
      period: '',
      description: '适合大型企业和品牌方',
      features: [
        '包含专业版所有功能',
        '定制化解决方案',
        '专属项目团队',
        '深度数据分析',
        '全球市场布局',
        '24/7专属支持'
      ],
      recommended: false
    }
  ]

  const caseStudies = [
    {
      company: '某智能家居品牌',
      industry: '电子产品',
      challenge: '产品进入欧洲市场遇到认证和物流难题',
      solution: '提供CE认证协助+德国海外仓+本地化运营',
      result: '6个月内销售额增长300%，复购率提升40%'
    },
    {
      company: '某服装品牌',
      industry: '服装服饰',
      challenge: '在美国市场面临激烈竞争，品牌知名度低',
      solution: '市场定位分析+社交媒体营销+网红合作',
      result: '品牌搜索量增长500%，月均销售额达$50,000'
    },
    {
      company: '某美妆品牌',
      industry: '美妆个护',
      challenge: '产品需要符合多国化妆品法规',
      solution: '多国合规认证+本地化包装+KOL营销',
      result: '成功进入5个新市场，年销售额突破$200万'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom py-20">
          <h1 className="heading-1 mb-6">服务方案</h1>
          <p className="text-xl max-w-3xl">
            为企业提供全方位的跨境电商解决方案，从市场调研到物流配送，一站式服务
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">我们的服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              覆盖跨境电商全链条，帮助企业解决出海过程中的各种挑战
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-primary-600 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center space-x-3">
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t">
                  <div className="text-sm text-gray-600 mb-2">包含在以下方案：</div>
                  <div className="flex space-x-2">
                    {service.plans.basic && (
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        基础版
                      </span>
                    )}
                    {service.plans.pro && (
                      <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        专业版
                      </span>
                    )}
                    {service.plans.enterprise && (
                      <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium">
                        企业版
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">服务方案与定价</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              根据企业规模和需求，选择最适合的服务方案
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="inline-flex rounded-lg border border-gray-300 p-1">
              {pricingPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`px-6 py-3 rounded-md text-sm font-medium transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-primary-600 text-white'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className={`bg-white rounded-xl shadow-lg overflow-hidden ${
                  plan.recommended ? 'ring-2 ring-primary-500' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="bg-primary-500 text-white text-center py-2 text-sm font-medium">
                    推荐选择
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <div className="flex items-center justify-center">
                      <span className="text-4xl font-bold text-gray-900">${plan.price}</span>
                      {plan.period && (
                        <span className="text-gray-600 ml-2">/{plan.period}</span>
                      )}
                    </div>
                    <p className="text-gray-600 mt-2">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-3 rounded-lg font-medium transition-colors ${
                    plan.recommended
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}>
                    {plan.id === 'enterprise' ? '联系咨询' : '立即订购'}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              需要定制化方案？{' '}
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                联系我们获取专属报价
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">成功案例</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              看看我们如何帮助客户解决实际问题，实现业务增长
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{caseStudy.company}</h3>
                    <div className="text-sm text-gray-500">{caseStudy.industry}</div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">挑战</div>
                    <p className="text-gray-700">{caseStudy.challenge}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">解决方案</div>
                    <p className="text-gray-700">{caseStudy.solution}</p>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-500 mb-1">成果</div>
                    <p className="text-gray-700 font-medium text-primary-600">{caseStudy.result}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-gray-50">
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
                title: '需求沟通',
                description: '了解企业需求，分析市场机会'
              },
              {
                step: '02',
                title: '方案制定',
                description: '定制专属解决方案，明确服务内容'
              },
              {
                step: '03',
                title: '签约合作',
                description: '签订服务协议，组建项目团队'
              },
              {
                step: '04',
                title: '执行优化',
                description: '方案实施，持续优化，定期汇报'
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
            <h2 className="heading-2 mb-4">开始您的跨境电商之旅</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              无论您是初创企业还是成熟品牌，景辰云贸都能为您提供专业的跨境电商解决方案
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                免费咨询
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                查看案例
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage