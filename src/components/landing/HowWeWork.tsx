import { motion } from "framer-motion"
import { MapPin, Star, Tv } from "lucide-react"

const highlights = [
  {
    number: "01",
    title: "Место и атмосфера",
    description:
      "Огарев Арена — крупнейший концертно-спортивный комплекс в центре Саранска. Современная сцена, профессиональное освещение и звук, VIP-зоны и широкое фойе для брендированных стендов.",
    icon: <MapPin className="w-8 h-8" />,
    mockup: "discovery",
    gradient: "from-pink-500/20 to-pink-600/10",
    details: ["3 000+ мест в зале", "VIP-зоны и ложи", "Центр Саранска"],
  },
  {
    number: "02",
    title: "Формат шоу",
    description:
      "Конкурс красоты и таланта с участием 20+ претенденток. Живые выступления, дефиле, творческие номера. Профессиональная съёмка и прямой онлайн-эфир для социальных сетей.",
    icon: <Star className="w-8 h-8" />,
    mockup: "development",
    gradient: "from-purple-500/20 to-purple-600/10",
    details: ["20+ участниц", "Прямой эфир", "Живые выступления"],
  },
  {
    number: "03",
    title: "Медиаосвещение",
    description:
      "Рекламная кампания в соцсетях, городские медиаэкраны, публикации в региональных СМИ. Суммарный охват — более 100 000 контактов с целевой аудиторией.",
    icon: <Tv className="w-8 h-8" />,
    mockup: "launch",
    gradient: "from-yellow-500/20 to-yellow-600/10",
    details: ["100K+ охват", "ТВ и онлайн", "Городские экраны"],
  },
]

export default function HowWeWork() {
  return (
    <section id="about" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="inline-flex items-center px-4 py-2 bg-pink-500/10 border border-pink-500/30 rounded-full text-sm text-pink-400 font-medium mb-6"
          >
            О мероприятии
          </motion.div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Место. Формат. Охват.
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            11 июля 2026 года Огарев Арена станет главной сценой Мордовии — место, где рождаются яркие эмоции и сильные бренды.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${step.gradient} border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 group`}
            >
              {/* Mockup Area */}
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-6 flex items-center justify-center">
                  {step.mockup === "discovery" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full space-y-3"
                    >
                      <div className="flex gap-2 mb-4">
                        <div className="w-8 h-8 bg-pink-500/30 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4 text-pink-400" />
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-700 rounded w-3/4 mb-1" />
                          <div className="h-2 bg-gray-700 rounded w-1/2" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {["3000+", "VIP", "Центр"].map((v) => (
                          <div key={v} className="bg-pink-500/20 border border-pink-500/30 rounded-lg p-2 text-center">
                            <div className="text-xs text-pink-300 font-bold">{v}</div>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-700/50 rounded-lg h-8 flex items-center px-3">
                        <div className="h-2 bg-gray-600 rounded w-full" />
                      </div>
                    </motion.div>
                  )}
                  {step.mockup === "development" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full space-y-3"
                    >
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 bg-purple-500/30 rounded-lg flex items-center justify-center">
                          <Star className="w-4 h-4 text-purple-400" />
                        </div>
                        <div className="flex gap-1">
                          {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ scale: 0 }}
                              whileInView={{ scale: 1 }}
                              transition={{ delay: i * 0.1 + 0.5 }}
                              className="w-3 h-3 bg-yellow-400 rounded-full"
                            />
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {["Конкурс красоты", "Творческий номер", "Гала-шоу"].map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-purple-400 rounded-full" />
                            <div className="text-xs text-gray-300">{item}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                  {step.mockup === "launch" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full space-y-3"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-xs text-gray-400">Охват</div>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                          className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full"
                        />
                      </div>
                      {[
                        { label: "Соцсети", val: 70, color: "bg-pink-500" },
                        { label: "ТВ и СМИ", val: 85, color: "bg-purple-500" },
                        { label: "Офлайн", val: 50, color: "bg-yellow-500" },
                      ].map((bar) => (
                        <div key={bar.label}>
                          <div className="flex justify-between text-xs text-gray-400 mb-1">
                            <span>{bar.label}</span>
                          </div>
                          <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              className={`h-full ${bar.color} rounded-full`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${bar.val}%` }}
                              transition={{ duration: 1, delay: 0.5 }}
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-600">{step.number}</div>
                  <div className="text-pink-400">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {step.details.map((d) => (
                    <span
                      key={d}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300"
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
