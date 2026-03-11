import { useState } from 'react'
import { Filter, Search, Star, Droplets, Thermometer, Coffee, Battery } from 'lucide-react'

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const categories = [
    { id: 'all', name: '全部水杯', icon: <Droplets className="h-5 w-5" /> },
    { id: 'insulated', name: '保温杯', icon: <Thermometer className="h-5 w-5" /> },
    { id: 'glass', name: '玻璃杯', icon: <Droplets className="h-5 w-5" /> },
    { id: 'travel', name: '随行杯', icon: <Coffee className="h-5 w-5" /> },
    { id: 'smart', name: '智能水杯', icon: <Battery className="h-5 w-5" /> },
    { id: 'sports', name: '运动水杯', icon: <Droplets className="h-5 w-5" /> }
  ]

  const products = [
    {
      id: 1,
      name: '双层不锈钢保温杯',
      category: 'insulated',
      description: '24小时保温保冷，一键开盖，防漏设计',
      price: 29.99,
      rating: 4.8,
      tags: ['保温', '不锈钢', '热销'],
      imageColor: 'from-slate-400 to-gray-400'
    },
    {
      id: 2,
      name: '耐热玻璃随行杯',
      category: 'glass',
      description: '高硼硅玻璃，耐热防爆，便携设计',
      price: 24.99,
      rating: 4.9,
      tags: ['玻璃', '环保', '便携'],
      imageColor: 'from-blue-400 to-cyan-400'
    },
    {
      id: 3,
      name: '智能提醒水杯',
      category: 'smart',
      description: 'APP连接，饮水提醒，温度显示',
      price: 49.99,
      rating: 4.7,
      tags: ['智能', 'APP', '提醒'],
      imageColor: 'from-purple-400 to-pink-400'
    },
    {
      id: 4,
      name: '运动健身水杯',
      category: 'sports',
      description: '防漏吸管，单手开合，刻度显示',
      price: 19.99,
      rating: 4.6,
      tags: ['运动', '大容量', '防漏'],
      imageColor: 'from-green-400 to-emerald-400'
    },
    {
      id: 5,
      name: '陶瓷内胆保温杯',
      category: 'insulated',
      description: '陶瓷内胆，健康安全，长效保温',
      price: 34.99,
      rating: 4.8,
      tags: ['陶瓷', '健康', '保温'],
      imageColor: 'from-amber-400 to-orange-400'
    },
    {
      id: 6,
      name: '折叠便携水杯',
      category: 'travel',
      description: '硅胶材质，可折叠设计，超轻便携',
      price: 14.99,
      rating: 4.5,
      tags: ['折叠', '便携', '旅行'],
      imageColor: 'from-red-400 to-rose-400'
    }
  ]

  const filteredProducts = products.filter(product => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div>
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="container-custom py-20">
          <h1 className="heading-1 mb-6">水杯产品展示</h1>
          <p className="text-xl max-w-3xl">
            精选中国优质水杯，涵盖保温杯、玻璃杯、智能水杯等多种品类
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/4">
              <div className="sticky top-24">
                <div className="mb-8">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="搜索水杯..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <Filter className="h-5 w-5 text-gray-600" />
                    <h3 className="text-lg font-semibold">水杯分类</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center space-x-3 ${
                          selectedCategory === category.id
                            ? 'bg-blue-50 text-blue-600 font-medium'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <span className="text-blue-500">{category.icon}</span>
                        <span>{category.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-2xl font-bold">所有水杯产品</h2>
                <p className="text-gray-600 mt-1">
                  找到 {filteredProducts.length} 个产品
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div key={product.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
                    <div className={`h-40 bg-gradient-to-br ${product.imageColor} relative`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white text-center">
                          <div className="text-3xl">🥤</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm mb-4">
                        {product.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-xl font-bold text-blue-600">${product.price}</div>
                        <button className="px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-100 rounded-lg text-sm font-medium">
                          查看详情
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ProductsPage