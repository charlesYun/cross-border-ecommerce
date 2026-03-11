import { Users, Target, Award, Globe } from 'lucide-react'

const AboutPage = () => {
  const milestones = [
    { year: '2015', title: '公司成立', description: '在上海成立，专注于跨境电商服务' },
    { year: '2017', title: '拓展东南亚市场', description: '成功帮助100+企业进入东南亚电商平台' },
    { year: '2019', title: '欧洲市场突破', description: '建立欧洲仓储中心，服务覆盖欧盟主要国家' },
    { year: '2021', title: '数字化升级', description: '推出智能跨境电商SaaS平台' },
    { year: '2023', title: '全球布局', description: '服务网络覆盖全球50+国家和地区' },
  ]

  const values = [
    {
      icon: <Target className="h-8 w-8" />,
      title: '客户至上',
      description: '以客户需求为导向，提供个性化解决方案'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: '团队协作',
      description: '专业团队紧密合作，确保项目高效执行'
    },
    {
      icon: <Award className="h-8 w-8" />,
      title: '追求卓越',
      description: '持续创新，不断提升服务品质'
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: '全球视野',
      description: '立足中国，服务全球，连接世界'
    }
  ]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom py-20">
          <h1 className="heading-1 mb-6">关于我们</h1>
          <p className="text-xl max-w-3xl">
            景辰云贸是一家专注于水杯类产品的跨境电商公司，致力于将中国优质水杯产品销往全球市场，
            为海外客户提供高品质、环保、创意的水杯解决方案。
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6">我们的使命</h2>
              <p className="text-gray-600 mb-4">
                让中国优质水杯走向世界，让全球消费者享受健康、环保的饮水体验。
                我们专注于水杯类产品的跨境电商，通过专业的市场洞察和供应链管理，
                为海外客户提供最适合的水杯产品。
              </p>
              <p className="text-gray-600">
                自2015年成立以来，景辰云贸已经成功将中国水杯产品销往全球50多个国家和地区，
                累计销售超过1000万只水杯，成为水杯类跨境电商的领先企业。
              </p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                  <div className="text-gray-600">合作企业</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                  <div className="text-gray-600">覆盖国家</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">10+</div>
                  <div className="text-gray-600">行业经验</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
                  <div className="text-gray-600">客户满意度</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">核心价值观</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们的价值观指引着我们的每一个决策和行动
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
                <div className="text-primary-600 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development History */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">发展历程</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              从初创公司到行业领先的跨境电商服务商
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden lg:block" />
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    index % 2 === 0 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary-600 rounded-full border-4 border-white z-10 hidden lg:block" />
                  
                  {/* Content */}
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="text-sm font-semibold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Year on mobile */}
                  <div className="lg:hidden mt-4 text-center">
                    <div className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full font-semibold">
                      {milestone.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Introduction */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">专业团队</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们拥有一支经验丰富的专业团队，涵盖市场分析、运营管理、物流配送、客户服务等多个领域
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: '张明', position: 'CEO', desc: '10年跨境电商经验，曾任职于多家国际电商平台' },
              { name: '李娜', position: '运营总监', desc: '精通多国市场运营策略，成功运营多个品牌出海项目' },
              { name: '王强', position: '技术总监', desc: '资深技术专家，主导开发智能跨境电商平台' },
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <div className="text-primary-600 mb-3">{member.position}</div>
                <p className="text-gray-600">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage