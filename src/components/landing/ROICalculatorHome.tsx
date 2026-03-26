import { motion } from "framer-motion"
import { Users, Eye, Heart, TrendingUp, BarChart3 } from "lucide-react"

const audienceStats = [
  {
    icon: <Users className="w-8 h-8" />,
    value: "5 000+",
    label: "Гостей на площадке",
    description: "Живая аудитория Огарев Арены",
    color: "text-pink-400",
    bg: "bg-pink-500/10",
  },
  {
    icon: <Eye className="w-8 h-8" />,
    value: "3 млн+",
    label: "Охват в соцсетях",
    description: "Instagram, ВКонтакте, TikTok",
    color: "text-purple-400",
    bg: "bg-purple-500/10",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    value: "80%",
    label: "Женская аудитория",
    description: "Возраст 18–45 лет",
    color: "text-rose-400",
    bg: "bg-rose-500/10",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    value: "15+",
    label: "СМИ-партнёров",
    description: "Городские и региональные медиа",
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
]

const segments = [
  { label: "Женщины 25–35", value: 45, color: "bg-pink-500" },
  { label: "Женщины 18–24", value: 20, color: "bg-purple-500" },
  { label: "Женщины 36–45", value: 15, color: "bg-rose-500" },
  { label: "Мужчины", value: 20, color: "bg-blue-500" },
]

export default function ROICalculatorHome() {
  return (
    <section id="success-stories" className="py-24 bg-black relative backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Наша аудитория</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ваш бренд увидят тысячи активных потребителей Саранска и Республики Мордовия
          </p>
        </motion.div>

        <div className="bg-gray-900/40 border border-gray-700/30 rounded-3xl p-8 backdrop-blur-sm relative overflow-hidden">
          <motion.div
            className="absolute inset-0 opacity-20"
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 80%, rgba(147,51,234,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 80%, rgba(244,63,94,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(236,72,153,0.1) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(236,72,153,0.1) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Stats Grid */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white mb-6">Ключевые показатели мероприятия</h3>
              <div className="grid grid-cols-2 gap-4">
                {audienceStats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`${stat.bg} border border-gray-700/50 rounded-2xl p-5`}
                  >
                    <div className={`${stat.color} mb-3`}>{stat.icon}</div>
                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                    <div className="text-white text-sm font-medium">{stat.label}</div>
                    <div className="text-gray-400 text-xs mt-1">{stat.description}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Audience Breakdown */}
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Портрет аудитории</h3>
              <div className="space-y-4">
                {segments.map((segment, index) => (
                  <motion.div
                    key={segment.label}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="space-y-2"
                  >
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-300">{segment.label}</span>
                      <span className="text-white font-medium">{segment.value}%</span>
                    </div>
                    <div className="h-3 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${segment.value}%` }}
                        transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-full ${segment.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-5 mt-6">
                <div className="flex items-center space-x-3 mb-3">
                  <BarChart3 className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-medium text-white">Платёжеспособная аудитория</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Посетители мероприятия — активные потребители с доходом выше среднего. 
                  Женщины 18–45 лет принимают 70% решений о покупке в семье. 
                  Идеальная целевая аудитория для брендов красоты, моды, lifestyle и премиальных услуг.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
