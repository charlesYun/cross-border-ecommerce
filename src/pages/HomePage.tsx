import { ArrowRight, CheckCircle, Globe, Shield, Truck, Building } from 'lucide-react'
import { Link } from 'react-router-dom'
import HeroSection from '../components/HeroSection'
import ServiceCard from '../components/ServiceCard'

const HomePage = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: '水杯全球分销',
      description: '将中国优质水杯销往欧美、日韩、东南亚等全球主要市场',
      features: ['多渠道分销', '本地化营销', '市场趋势分析']
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: '水杯质量认证',
      description: 'FDA、LFGB、BPA-Free等国际水杯安全认证服务',
      features: ['食品安全认证', '环保材料认证', '质量检测']
    },
    {
      icon: <Truck className="h-8 w-8" />,
      title: '专业水杯物流',
      description: '针对水杯产品的特殊包装和全球物流解决方案',
      features: ['防碎包装', '海外仓储', '快速配送']
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <HeroSection
        title="中国优质水杯，全球健康饮水"
        subtitle="专注于水杯类产品的跨境电商，将中国制造的健康水杯带给世界消费者"
        ctaText="查看水杯产品"
        ctaLink="/products"
        secondaryText="了解我们"
        secondaryLink="/about"
      />

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">我们的核心服务</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              为企业提供全方位的跨境电商解决方案，从市场调研到物流配送，一站式服务
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">为什么选择我们？</h2>
              <ul className="space-y-4">
                {[
                  '8年水杯跨境电商经验',
                  '累计销售1000万+只水杯',
                  '覆盖全球50+国家和地区',
                  '98%客户满意度',
                  '200+水杯供应商合作',
                  'FDA、LFGB等国际认证'
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link to="/about" className="btn-primary inline-flex items-center">
                  了解更多
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 lg:p-12">
              <div className="aspect-video bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Placeholder for video or image */}
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-primary-100 to-secondary-100">
                  <div className="text-center">
                    <Globe className="h-16 w-16 text-primary-600 mx-auto mb-4" />
                    <p className="text-gray-700 font-medium">全球业务网络展示</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cases */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">成功案例</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              看看我们如何帮助客户实现业务增长和全球化拓展
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                client: '不锈钢保温杯品牌',
                result: '美国市场月销10万只',
                industry: '保温杯',
                duration: '12个月'
              },
              {
                client: '玻璃随行杯品牌',
                result: '欧洲环保杯市场占有率15%',
                industry: '玻璃杯',
                duration: '8个月'
              },
              {
                client: '智能提醒水杯',
                result: '日本市场销售额增长200%',
                industry: '智能水杯',
                duration: '6个月'
              }
            ].map((caseStudy, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Building className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{caseStudy.client}</h3>
                    <div className="text-sm text-gray-500">{caseStudy.industry}</div>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">{caseStudy.result}</p>
                <div className="text-sm text-gray-500">合作时长：{caseStudy.duration}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/cases" className="btn-secondary">
              查看所有案例
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary-600">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-white mb-4">准备好拓展全球市场了吗？</h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            我们的专业团队将为您提供个性化的跨境电商解决方案，助您轻松进入国际市场
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
              立即咨询
            </Link>
            <Link to="/services" className="btn-secondary border-white text-white hover:bg-white/10">
              查看服务方案
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage