import { motion } from "framer-motion"
import { ArrowRight, MapPin, Calendar } from "lucide-react"
import AnimatedButton from "./AnimatedButton"
import CountingStats from "./CountingStats"
import { cn } from "@/lib/utils"

export default function Hero() {
  const stats = [
    { value: 5000, suffix: "+", label: "Гостей мероприятия" },
    { value: 30, suffix: "+", label: "Участниц конкурса" },
    { value: 3, suffix: " млн+", label: "Охват в соцсетях" },
  ]

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-80"
          style={{
            filter: "brightness(0.9) contrast(1.1)",
          }}
        >
          <source src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/momotionmp4%20%282%29-js5jkz69E4tKFmKGf85Nu5y4Suf4GI.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-rose-500/20 border border-white/30 rounded-full text-sm text-white font-medium backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-pink-400 rounded-full mr-3 animate-pulse"></div>
                <span>Коммерческое предложение для спонсоров</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
              >
                <span className="block text-white mb-2">КОНКУРС КРАСОТЫ</span>
                <span
                  className={cn(
                    "block mb-2 bg-gradient-to-r from-pink-400 via-purple-400 to-rose-400 bg-clip-text text-transparent font-pacifico",
                  )}
                  style={{
                    textShadow: "0 0 40px rgba(236, 72, 153, 0.5)",
                  }}
                >
                  Красавица города
                </span>
                <span className="block text-gray-300">2026</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto lg:mx-0"
              >
                Премиальная площадка для вашего бренда на крупнейшем конкурсе красоты Саранска. Тысячи гостей, 
                широкий медиаохват и уникальная возможность заявить о себе на Огарев Арене.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col gap-6 items-center justify-center lg:justify-start lg:items-start"
            >
              <a href="#get-started">
                <AnimatedButton variant="slim" className="bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700">
                  <span className="flex items-center">
                    Стать спонсором
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </AnimatedButton>
              </a>

              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-pink-600/30 border border-pink-500/50 rounded-xl flex items-center justify-center shadow-lg">
                    <Calendar className="w-5 h-5 text-pink-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Дата проведения</p>
                    <p className="text-xs text-gray-400">2026 год</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-600/30 border border-purple-500/50 rounded-xl flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Огарев Арена</p>
                    <p className="text-xs text-gray-400">Саранск</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-rose-600/30 border border-rose-500/50 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-lg">👑</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Конкурс красоты</p>
                    <p className="text-xs text-gray-400">Городской масштаб</p>
                  </div>
                </div>
              </div>

              <CountingStats stats={stats} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
