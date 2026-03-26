import { motion } from "framer-motion"
import { Crown, Users, Star } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Конкурсный отбор",
    description: "30+ участниц из Саранска и Республики Мордовия проходят многоэтапный отбор по критериям красоты, интеллекта и харизмы.",
    icon: <Crown className="w-8 h-8" />,
    mockup: "selection",
    gradient: "from-pink-500/20 to-pink-600/10",
  },
  {
    number: "02",
    title: "Шоу-программа",
    description: "Грандиозное шоу на Огарев Арене: дефиле, творческие номера, интервью с жюри и эффектные выходы участниц перед тысячами гостей.",
    icon: <Star className="w-8 h-8" />,
    mockup: "show",
    gradient: "from-purple-500/20 to-purple-600/10",
  },
  {
    number: "03",
    title: "Финал и корона",
    description: "Торжественная церемония награждения, вручение короны победительнице, пресс-конференция и медиаосвещение в городских СМИ.",
    icon: <Users className="w-8 h-8" />,
    mockup: "finale",
    gradient: "from-rose-500/20 to-rose-600/10",
  },
]

export default function HowWeWork() {
  return (
    <section id="artists" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">Как проходит событие</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Три этапа незабываемого вечера, который станет главным событием года в Саранске.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className={`bg-gradient-to-br ${step.gradient} border border-gray-800/50 rounded-3xl p-8 backdrop-blur-sm hover:border-gray-700/50 transition-all duration-300 group`}
            >
              <div className="aspect-video bg-gray-900 rounded-2xl mb-6 overflow-hidden relative border border-gray-800">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 p-4">
                  {step.mockup === "selection" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="w-full max-w-[200px] space-y-3">
                        <div className="text-center text-xs text-gray-400 mb-2">Участницы</div>
                        {["Анна К.", "Мария С.", "Екатерина Л."].map((name, i) => (
                          <motion.div
                            key={name}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.2 }}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-6 h-6 bg-pink-500/30 rounded-full flex items-center justify-center text-xs text-pink-400">
                              {i + 1}
                            </div>
                            <div className="flex-1 bg-gray-700 h-2 rounded"></div>
                            <div className="text-xs text-pink-400">★</div>
                          </motion.div>
                        ))}
                        <div className="bg-gray-700 h-2 w-2/3 rounded mt-2 mx-auto"></div>
                      </div>
                    </motion.div>
                  )}

                  {step.mockup === "show" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="w-full max-w-[200px] space-y-3">
                        <div className="bg-gray-800 rounded-lg p-3">
                          <div className="flex items-center space-x-2 mb-3">
                            <motion.div
                              animate={{ opacity: [0.5, 1, 0.5] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="w-2 h-2 bg-red-500 rounded-full"
                            ></motion.div>
                            <div className="text-xs text-gray-400">Прямой эфир</div>
                          </div>
                          <div className="space-y-2">
                            <div className="bg-purple-500/30 h-8 rounded flex items-center justify-center">
                              <span className="text-xs text-purple-300">Огарев Арена</span>
                            </div>
                            <div className="grid grid-cols-3 gap-1">
                              {[...Array(6)].map((_, i) => (
                                <div key={i} className="bg-gray-700 h-4 rounded"></div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {step.mockup === "finale" && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 1, delay: index * 0.3 }}
                      className="w-full h-full flex items-center justify-center"
                    >
                      <div className="w-full max-w-[200px] space-y-3">
                        <div className="text-center">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className="text-3xl mb-2"
                          >
                            👑
                          </motion.div>
                          <div className="text-xs text-yellow-400 font-medium">Красавица города</div>
                          <div className="text-xs text-gray-400 mt-1">2026</div>
                        </div>
                        <div className="space-y-1">
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-rose-500 rounded-full"></div>
                            <div className="text-xs text-gray-300">Медиаосвещение</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                            <div className="text-xs text-gray-300">Пресс-конференция</div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                            <div className="text-xs text-gray-300">Прямые трансляции</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="text-4xl font-bold text-gray-600">{step.number}</div>
                  <div className="text-pink-400">{step.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-pink-400 transition-colors">
                  {step.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
