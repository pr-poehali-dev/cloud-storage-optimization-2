import { motion } from "framer-motion"
import { Target, Megaphone, Camera, Trophy, Users, TrendingUp } from "lucide-react"

const audience = [
  { label: "Возраст", value: "18–50 лет", icon: "👤" },
  { label: "Пол", value: "Преимущественно женщины", icon: "💄" },
  { label: "Статус", value: "Активная городская аудитория", icon: "🏙️" },
  { label: "Интересы", value: "Красота, мода, lifestyle", icon: "✨" },
  { label: "Доход", value: "Средний и выше среднего", icon: "💰" },
  { label: "Платформы", value: "Instagram, ВКонтакте, Telegram", icon: "📱" },
]

const benefits = [
  {
    icon: <Target className="w-6 h-6" />,
    title: "Прямой контакт с ЦА",
    description: "Ваш бренд напрямую взаимодействует с активной аудиторией 18–50 лет в живом формате — без баннерной слепоты и фильтров.",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
    border: "border-pink-500/20",
  },
  {
    icon: <Megaphone className="w-6 h-6" />,
    title: "PR и медиаприсутствие",
    description: "Упоминания в региональных СМИ, анонсы в городских пабликах, публикации в соцсетях мероприятия с охватом 100K+.",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
  {
    icon: <Camera className="w-6 h-6" />,
    title: "Видеоконтент",
    description: "Логотип и брендинг в профессиональном видео события, которое будет показано в эфире и накапливать просмотры в сети.",
    color: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: <Trophy className="w-6 h-6" />,
    title: "Статус и репутация",
    description: "Ассоциация бренда с главным конкурсом красоты Мордовии — укрепляет доверие и создаёт позитивный имидж в регионе.",
    color: "text-yellow-400",
    bg: "bg-yellow-500/10",
    border: "border-yellow-500/20",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Брендированные зоны",
    description: "Промо-стойки, стенды и баннеры в фойе Огарев Арены — живое взаимодействие с 3 000+ гостями мероприятия.",
    color: "text-green-400",
    bg: "bg-green-500/10",
    border: "border-green-500/20",
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Долгосрочный эффект",
    description: "Вирусный контент и фотоотчёты продолжают работать на ваш бренд ещё месяцы после события в социальных сетях.",
    color: "text-orange-400",
    bg: "bg-orange-500/10",
    border: "border-orange-500/20",
  },
]

export default function InnovativeServices() {
  return (
    <section id="audience" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Audience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm text-purple-400 font-medium mb-6"
          >
            Целевая аудитория
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Кто придёт на событие
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Активная городская аудитория с высокой покупательной способностью — именно те, кого хотят видеть ведущие бренды Мордовии.
          </p>
        </motion.div>

        {/* Audience Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-24">
          {audience.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-gray-900/40 border border-gray-800 rounded-2xl p-5 text-center hover:border-pink-500/30 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{item.icon}</div>
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="text-sm font-semibold text-white leading-tight">{item.value}</div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full text-sm text-yellow-400 font-medium mb-6"
          >
            Выгоды для спонсоров
          </motion.div>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Что получает ваш бренд
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Реальные инструменты продвижения — от прямого контакта с аудиторией до вирусного медиаконтента.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className={`${benefit.bg} border ${benefit.border} rounded-2xl p-6 hover:border-opacity-50 transition-all duration-300 group`}
            >
              <div className={`w-12 h-12 ${benefit.bg} border ${benefit.border} rounded-xl flex items-center justify-center mb-4 ${benefit.color}`}>
                {benefit.icon}
              </div>
              <h3 className={`text-lg font-bold text-white mb-3 group-hover:${benefit.color} transition-colors`}>
                {benefit.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
