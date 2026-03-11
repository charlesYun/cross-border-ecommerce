import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryText?: string
  secondaryLink?: string
}

const HeroSection = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  secondaryText,
  secondaryLink
}: HeroSectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
      
      <div className="relative container-custom section-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={ctaLink}
                className="btn-primary inline-flex items-center justify-center"
              >
                {ctaText}
              </Link>
              
              {secondaryText && secondaryLink && (
                <Link
                  to={secondaryLink}
                  className="btn-secondary inline-flex items-center justify-center"
                >
                  {secondaryText}
                </Link>
              )}
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">500+</div>
                <div className="text-sm text-gray-600 mt-1">合作企业</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">50+</div>
                <div className="text-sm text-gray-600 mt-1">覆盖国家</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">98%</div>
                <div className="text-sm text-gray-600 mt-1">客户满意度</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video bg-gradient-to-r from-primary-500 to-secondary-500" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-white text-4xl font-bold mb-4">景辰云贸</div>
                  <div className="text-primary-100">跨境电商解决方案专家</div>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-400 rounded-full opacity-20" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection