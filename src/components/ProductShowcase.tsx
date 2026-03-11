import { Star, ShoppingBag } from 'lucide-react'

const ProductShowcase = () => {
  const products = [
    {
      id: 1,
      name: '智能家居套装',
      category: '电子产品',
      description: '全套智能家居解决方案，支持语音控制和手机APP远程管理',
      price: '$299',
      rating: 4.8,
      imageColor: 'from-blue-400 to-cyan-400'
    },
    {
      id: 2,
      name: '天然乳胶枕',
      category: '家居用品',
      description: '100%天然乳胶，符合人体工学设计，改善睡眠质量',
      price: '$89',
      rating: 4.9,
      imageColor: 'from-green-400 to-emerald-400'
    },
    {
      id: 3,
      name: '无线蓝牙耳机',
      category: '电子产品',
      description: '主动降噪，超长续航，Hi-Fi音质，运动防水',
      price: '$129',
      rating: 4.7,
      imageColor: 'from-purple-400 to-pink-400'
    },
    {
      id: 4,
      name: '陶瓷餐具套装',
      category: '厨房用品',
      description: '高品质骨瓷，微波炉和洗碗机安全，精美礼盒包装',
      price: '$159',
      rating: 4.6,
      imageColor: 'from-amber-400 to-orange-400'
    }
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
        >
          {/* Product Image */}
          <div className={`h-48 bg-gradient-to-br ${product.imageColor} relative`}>
            <div className="absolute inset-0 flex items-center justify-center">
              <ShoppingBag className="h-16 w-16 text-white opacity-80" />
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
              <span className="text-sm font-medium text-gray-700">{product.category}</span>
            </div>
          </div>

          {/* Product Info */}
          <div className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{product.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">{product.rating}</span>
              </div>
            </div>
            
            <p className="text-gray-600 text-sm mb-4 line-clamp-2">
              {product.description}
            </p>
            
            <div className="flex items-center justify-between">
              <div className="text-2xl font-bold text-primary-600">{product.price}</div>
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-50 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors duration-200">
                <ShoppingBag className="h-4 w-4" />
                <span className="text-sm font-medium">查看详情</span>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProductShowcase