import { motion } from "framer-motion"
import { Crown, Star, Gem, Heart, CheckCircle, ArrowRight } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

const packages = [
  {
    id: "title",
    title: "Титульный спонсор",
    price: "от 300 000 ₽",
    color: "from-yellow-500/20 to-amber-600/10",
    borderColor: "border-yellow-500/30",
    accentColor: "text-yellow-400",
    icon: <Crown className="w-8 h-8" />,
    badge: "Топ-позиция",
    benefits: [
      "Название бренда в названии конкурса",
      "Логотип на всех материалах и сцене",
      "Эксклюзивная рекламная зона в фойе",
      "Выход представителя на сцену",
      "Пакет VIP-билетов (10 шт.)",
      "Упоминания во всех PR-материалах",
      "Баннер на фасаде Огарев Арены",
    ],
    mockup: "title",
  },
  {
    id: "platinum",
    title: "Платиновый спонсор",
    price: "от 150 000 ₽",
    color: "from-purple-500/20 to-purple-600/10",
    borderColor: "border-purple-500/30",
    accentColor: "text-purple-400",
    icon: <Gem className="w-8 h-8" />,
    badge: "Популярный",
    benefits: [
      "Логотип на сцене и экране",
      "Рекламная стойка на мероприятии",
      "Упоминание в ведении шоу",
      "VIP-билеты (6 шт.)",
      "Пост в официальных соцсетях",
      "Логотип на форме команды",
    ],
    mockup: "platinum",
  },
  {
    id: "gold",
    title: "Золотой спонсор",
    price: "от 80 000 ₽",
    color: "from-pink-500/20 to-rose-600/10",
    borderColor: "border-pink-500/30",
    accentColor: "text-pink-400",
    icon: <Star className="w-8 h-8" />,
    badge: "",
    benefits: [
      "Логотип в программке мероприятия",
      "Размещение баннера в зале",
      "VIP-билеты (4 шт.)",
      "Упоминание на сайте конкурса",
      "Story в соцсетях организаторов",
    ],
    mockup: "gold",
  },
  {
    id: "info",
    title: "Информационный партнёр",
    price: "Бартер / от 30 000 ₽",
    color: "from-blue-500/20 to-blue-600/10",
    borderColor: "border-blue-500/30",
    accentColor: "text-blue-400",
    icon: <Heart className="w-8 h-8" />,
    badge: "",
    benefits: [
      "Логотип на сайте и в соцсетях",
      "Совместные публикации",
      "2 приглашения на мероприятие",
      "Обмен аудиторией",
    ],
    mockup: "info",
  },
]

export default function InnovativeServices() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Спонсорские пакеты</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Выберите формат участия, который подходит именно вашему бренду — от информационного партнёрства до титульного спонсорства.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-8">
          {/* Top row - Title and Platinum */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.slice(0, 2).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${pkg.color} border ${pkg.borderColor} rounded-2xl p-8 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group relative overflow-hidden`}
              >
                {pkg.badge && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {pkg.badge}
                  </div>
                )}

                {/* Icon and Price */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gray-800/50 ${pkg.accentColor}`}>
                    {pkg.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-2xl font-bold ${pkg.accentColor}`}>{pkg.price}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors">
                  {pkg.title}
                </h3>

                {/* Benefits */}
                <ul className="space-y-3 mb-8">
                  {pkg.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.accentColor}`} />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <a href="#contact">
                  <AnimatedButton className="w-full bg-white text-black hover:bg-gray-100">
                    <span className="flex items-center justify-center">
                      Обсудить условия
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </a>
              </motion.div>
            ))}
          </div>

          {/* Bottom row - Gold and Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {packages.slice(2, 4).map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className={`bg-gradient-to-br ${pkg.color} border ${pkg.borderColor} rounded-2xl p-8 backdrop-blur-sm hover:border-opacity-60 transition-all duration-300 group`}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gray-800/50 ${pkg.accentColor}`}>
                    {pkg.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-xl font-bold ${pkg.accentColor}`}>{pkg.price}</div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-pink-400 transition-colors">
                  {pkg.title}
                </h3>

                <ul className="space-y-3 mb-8">
                  {pkg.benefits.map((benefit, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: i * 0.05 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-3"
                    >
                      <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.accentColor}`} />
                      <span className="text-gray-300 text-sm">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>

                <a href="#contact">
                  <AnimatedButton variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-800">
                    <span className="flex items-center justify-center">
                      Обсудить условия
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </AnimatedButton>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Custom package note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 text-center bg-gray-900/40 border border-gray-700/30 rounded-2xl p-8"
        >
          <p className="text-gray-300 text-lg mb-4">
            Не нашли подходящий пакет? Мы готовы разработать индивидуальные условия под ваш бренд и бюджет.
          </p>
          <a href="#contact">
            <AnimatedButton className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
              Получить индивидуальное предложение
            </AnimatedButton>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
