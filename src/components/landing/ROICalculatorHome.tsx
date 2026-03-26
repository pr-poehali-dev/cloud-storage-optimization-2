import { motion } from "framer-motion"
import { CheckCircle, Star, Crown, Gem } from "lucide-react"
import AnimatedButton from "./AnimatedButton"

const packages = [
  {
    id: "standard",
    name: "Стандарт",
    price: "250 000 ₽",
    icon: <Star className="w-6 h-6" />,
    gradient: "from-gray-700/30 to-gray-800/20",
    border: "border-gray-700/50",
    hoverBorder: "hover:border-gray-500/50",
    badgeColor: "bg-gray-700 text-gray-300",
    btnClass: "bg-white/10 text-white border border-white/20 hover:bg-white/20",
    accentColor: "text-gray-300",
    popular: false,
    features: [
      "Логотип на баннере мероприятия",
      "Упоминание в соцсетях (3 поста)",
      "Логотип на сайте события",
      "2 пригласительных на мероприятие",
      "Упоминание ведущим со сцены",
      "Логотип в финальном видео",
    ],
  },
  {
    id: "platinum",
    name: "Платинум",
    price: "350 000 ₽",
    icon: <Crown className="w-6 h-6" />,
    gradient: "from-purple-600/20 to-pink-600/10",
    border: "border-purple-500/40",
    hoverBorder: "hover:border-purple-400/60",
    badgeColor: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
    btnClass: "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600 border-0",
    accentColor: "text-purple-400",
    popular: true,
    features: [
      "Всё из пакета «Стандарт»",
      "Брендированная зона в фойе (стенд)",
      "Логотип на главном экране арены",
      "Упоминание в пресс-релизах СМИ",
      "Интеграция в онлайн-трансляцию",
      "5 VIP-пригласительных",
      "Промо в сторис за 2 недели до шоу",
    ],
  },
  {
    id: "premium",
    name: "Премиум",
    price: "500 000 ₽",
    icon: <Gem className="w-6 h-6" />,
    gradient: "from-yellow-500/20 to-orange-600/10",
    border: "border-yellow-500/40",
    hoverBorder: "hover:border-yellow-400/60",
    badgeColor: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black",
    btnClass: "bg-gradient-to-r from-yellow-400 to-orange-500 text-black hover:from-yellow-500 hover:to-orange-600 border-0",
    accentColor: "text-yellow-400",
    popular: false,
    features: [
      "Всё из пакета «Платинум»",
      "Название бренда в заголовке события",
      "Выход представителя на сцену",
      "Эксклюзивный баннер над сценой",
      "Спонсорство именной номинации",
      "10 VIP-пригласительных + фуршет",
      "Интервью и фотосессия от медиа",
      "Ролик о бренде в начале шоу",
    ],
  },
]

const reachStats = [
  { label: "Зрителей офлайн", value: "3 000+", color: "text-pink-400" },
  { label: "Общий охват", value: "100K+", color: "text-purple-400" },
  { label: "Просмотры видео", value: "50K+", color: "text-yellow-400" },
  { label: "Публикаций в СМИ", value: "20+", color: "text-blue-400" },
]

export default function ROICalculatorHome() {
  return (
    <section id="packages" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm text-yellow-400 font-medium mb-6"
          >
            Финансовая модель
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Спонсорские пакеты
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Три уровня участия — от базового присутствия до эксклюзивного партнёрства. Выберите формат, который подходит вашим целям.
          </p>
        </motion.div>

        {/* Reach Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {reachStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5 text-center"
            >
              <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className={`relative bg-gradient-to-br ${pkg.gradient} border ${pkg.border} ${pkg.hoverBorder} rounded-3xl p-8 transition-all duration-300`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold px-4 py-1.5 rounded-full">
                    Популярный выбор
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${pkg.accentColor} bg-white/5 border border-white/10`}>
                    {pkg.icon}
                  </div>
                  <div>
                    <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${pkg.badgeColor} mb-1`}>
                      {pkg.name}
                    </span>
                  </div>
                </div>
                <div className={`text-4xl font-bold text-white mb-1`}>
                  {pkg.price}
                </div>
                <div className="text-sm text-gray-500">единовременно</div>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.accentColor}`} />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="#contact">
                <AnimatedButton className={`w-full ${pkg.btnClass}`}>
                  Выбрать пакет
                </AnimatedButton>
              </a>
            </motion.div>
          ))}
        </div>

        {/* Poster / Afisha section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl border border-pink-500/20 bg-gradient-to-br from-purple-900/30 via-pink-900/20 to-black p-10 md:p-16 text-center"
          id="poster"
        >
          {/* Декоративный фон */}
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              background: [
                "radial-gradient(circle at 20% 50%, rgba(236,72,153,0.2) 0%, transparent 60%)",
                "radial-gradient(circle at 80% 50%, rgba(147,51,234,0.2) 0%, transparent 60%)",
                "radial-gradient(circle at 50% 20%, rgba(234,179,8,0.15) 0%, transparent 60%)",
                "radial-gradient(circle at 20% 50%, rgba(236,72,153,0.2) 0%, transparent 60%)",
              ],
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />

          <div className="relative z-10">
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
              className="text-6xl mb-6"
            >
              👑
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Красавица города
              <span className="block bg-gradient-to-r from-yellow-300 via-pink-400 to-purple-400 bg-clip-text text-transparent mt-1">
                2026
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-3 font-light italic">
              «Красота. Талант. Вдохновение.»
            </p>

            <div className="flex flex-wrap justify-center gap-4 my-8 text-sm">
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white">
                📅 11 июля 2026
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white">
                📍 Огарев Арена, Саранск
              </span>
              <span className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white">
                🎤 Живое шоу + прямой эфир
              </span>
            </div>

            <p className="text-gray-400 max-w-2xl mx-auto mb-8">
              Афиша мероприятия будет размещена на городских носителях, в социальных сетях и в партнёрских каналах. 
              Логотипы спонсоров — в центре внимания на всех рекламных материалах.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact">
                <AnimatedButton className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 border-0">
                  Стать спонсором
                </AnimatedButton>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
