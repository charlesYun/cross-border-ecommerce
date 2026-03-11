import { ReactNode } from 'react'
import { Check } from 'lucide-react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  features: string[]
}

const ServiceCard = ({ icon, title, description, features }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
      <div className="text-primary-600 mb-6">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-3">
            <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ServiceCard