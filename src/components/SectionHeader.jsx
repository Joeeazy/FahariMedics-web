import { motion } from 'framer-motion'

const SectionHeader = ({ subtitle, title, description, titleColor = "text-blue-800", subtitleColor = "text-blue-600" }) => {
  return (
    <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16 px-4">
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className={`${subtitleColor} text-sm md:text-base font-semibold mb-2 block uppercase tracking-wider`}
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        className={`${titleColor} text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight`}
      >
        {title}
      </motion.h2>
      
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto"
        >
          {description}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="w-20 h-1 bg-blue-600 mx-auto mt-8 md:mt-10 rounded-full"
      />
    </div>
  )
}

export default SectionHeader