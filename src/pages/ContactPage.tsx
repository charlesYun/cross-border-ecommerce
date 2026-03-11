import { useState } from 'react'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: '电话',
      content: '+86 21 8888 9999',
      subtitle: '周一至周五 9:00-18:00'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: '邮箱',
      content: 'contact@globalcross.com',
      subtitle: '商务合作：business@globalcross.com'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: '地址',
      content: '上海市浦东新区张江高科技园区创新路123号科技大厦A座',
      subtitle: '邮编：201203'
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: '工作时间',
      content: '周一至周五 9:00-18:00',
      subtitle: '周末及节假日休息'
    }
  ]

  const faqs = [
    {
      question: '一般需要多长时间回复咨询？',
      answer: '我们会在24小时内回复所有咨询。工作时间内咨询通常在2小时内回复。'
    },
    {
      question: '初次合作需要提供哪些信息？',
      answer: '请提供公司基本信息、产品介绍、目标市场以及具体需求，我们会为您制定专属方案。'
    },
    {
      question: '服务费用如何计算？',
      answer: '根据服务内容、市场复杂度和项目规模综合定价，我们会提供详细的报价方案。'
    },
    {
      question: '是否支持多语言服务？',
      answer: '是的，我们提供中文、英文、日文、韩文等多语言服务支持。'
    }
  ]

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // 模拟API调用
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // 3秒后重置表单
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="container-custom py-20">
          <h1 className="heading-1 mb-6">联系我们</h1>
          <p className="text-xl max-w-3xl">
            无论您有任何问题或需求，我们都随时准备为您提供帮助
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-6 text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-900 font-medium mb-1">{info.content}</p>
                <p className="text-gray-600 text-sm">{info.subtitle}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-2 mb-6">发送消息</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-green-800 mb-2">消息发送成功！</h3>
                  <p className="text-green-600">
                    感谢您的咨询，我们会在24小时内回复您。
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        姓名 *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的姓名"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        邮箱 *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的邮箱"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        电话
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入您的电话"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        公司名称
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="请输入公司名称"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      咨询主题 *
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option value="">请选择咨询主题</option>
                      <option value="service">服务咨询</option>
                      <option value="cooperation">商务合作</option>
                      <option value="quotation">报价咨询</option>
                      <option value="support">技术支持</option>
                      <option value="other">其他</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      详细内容 *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="请详细描述您的需求..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                        发送中...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        发送消息
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* FAQ & Map */}
            <div>
              <div className="mb-12">
                <h2 className="heading-2 mb-6">常见问题</h2>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-6">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Placeholder */}
              <div>
                <h2 className="heading-2 mb-6">我们的位置</h2>
                <div className="bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl p-8">
                  <div className="aspect-video bg-white rounded-lg shadow-inner overflow-hidden">
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                        <p className="text-gray-700 font-medium">上海市浦东新区张江高科技园区</p>
                        <p className="text-gray-600 text-sm mt-2">创新路123号科技大厦A座</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-6 text-center">
                    <button className="text-primary-600 hover:text-primary-700 font-medium">
                      查看详细路线 →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Departments */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">各部门联系方式</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              根据您的具体需求，可以直接联系相关部门
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                department: '商务合作',
                email: 'business@globalcross.com',
                phone: '+86 21 8888 9001',
                contact: '张经理',
                desc: '品牌合作、渠道拓展、战略合作'
              },
              {
                department: '客户服务',
                email: 'service@globalcross.com',
                phone: '+86 21 8888 9002',
                contact: '李经理',
                desc: '项目咨询、服务支持、问题反馈'
              },
              {
                department: '技术支持',
                email: 'tech@globalcross.com',
                phone: '+86 21 8888 9003',
                contact: '王工程师',
                desc: '技术咨询、系统支持、API对接'
              }
            ].map((dept, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm p-8">
                <h3 className="text-xl font-semibold mb-4">{dept.department}</h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-sm text-gray-500 mb-1">联系人</div>
                    <div className="font-medium">{dept.contact}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">邮箱</div>
                    <div className="font-medium">{dept.email}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">电话</div>
                    <div className="font-medium">{dept.phone}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500 mb-1">服务范围</div>
                    <div className="text-gray-700">{dept.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary-600 text-white">
        <div className="container-custom py-16">
          <div className="text-center">
            <h2 className="heading-2 mb-4">立即开始合作</h2>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              景辰云贸的专业团队期待与您合作，共同开拓全球市场
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-primary-600 hover:bg-gray-100">
                预约会议
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white/10">
                下载资料
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactPage