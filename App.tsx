/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { 
  Coins, 
  Smartphone, 
  Bot, 
  ShieldAlert, 
  Layers, 
  RefreshCw,
  Monitor,
  ShoppingBag,
  UserPlus
} from "lucide-react";

const services = [
  {
    title: "شحن شدات UC",
    description: "شحن فوري وآمن بأفضل الأسعار.",
    icon: <Coins className="w-10 h-10 text-yellow-500 mb-3" />,
    url: "#",
    color: "border-yellow-500/50"
  },
  {
    title: "تحميل للايفون",
    description: "روابط مباشرة لتحميل اللعبة للايفون.",
    icon: <Smartphone className="w-10 h-10 text-blue-400 mb-3" />,
    url: "#",
    color: "border-blue-500/50"
  },
  {
    title: "ببجي المعدلة",
    description: "نسخ معدلة بميزات إضافية حصرية.",
    icon: <Layers className="w-10 h-10 text-purple-400 mb-3" />,
    url: "#",
    color: "border-purple-500/50"
  },
  {
    title: "هكر ببجي ايفون",
    description: "أقوى أدوات الحماية والكشف للايفون.",
    icon: <ShieldAlert className="w-10 h-10 text-red-500 mb-3" />,
    url: "#",
    color: "border-red-500/50"
  },
  {
    title: "هكر اندرويد",
    description: "أدوات ESP وميزات آمنة للاندرويد.",
    icon: <Bot className="w-10 h-10 text-green-400 mb-3" />,
    url: "#",
    color: "border-green-500/50"
  },
  {
    title: "هكر ببجي للحاسب",
    description: "أدوات متطورة وحماية قصوى للمحاكي.",
    icon: <Monitor className="w-10 h-10 text-orange-400 mb-3" />,
    url: "#",
    color: "border-orange-500/50"
  },
  {
    title: "بيع وشراء حسابات",
    description: "منصة آمنة لتبادل وشراء الحسابات.",
    icon: <ShoppingBag className="w-10 h-10 text-pink-400 mb-3" />,
    url: "#",
    color: "border-pink-500/50"
  },
  {
    title: "أسماء ببجي",
    description: "أفضل الأسماء المزخرفة والمميزة للحسابات.",
    icon: <UserPlus className="w-10 h-10 text-indigo-400 mb-3" />,
    url: "#",
    color: "border-indigo-500/50"
  },
  {
    title: "تحديثات اللعبة",
    description: "آخر أخبار وتغييرات تحديثات ببجي.",
    icon: <RefreshCw className="w-10 h-10 text-cyan-400 mb-3" />,
    url: "#",
    color: "border-cyan-500/50"
  }
];

export default function App() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#e0e0e0] p-4 md:p-8 font-sans selection:bg-yellow-500/30" dir="rtl">
      {/* Header */}
      <header className="text-center mb-12 pt-8">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-block border-2 border-yellow-500 px-6 py-2 rounded-xl mb-6 bg-yellow-500/5 shadow-[0_0_20px_rgba(234,179,8,0.1)]"
        >
          <span className="text-3xl font-black text-white tracking-tight uppercase">
            PUBG <span className="text-yellow-500">STATION</span>
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-100 mb-3"
        >
          مساعد ببجي العنكبوت الاحترافي
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-400 max-w-xl mx-auto text-sm px-4 leading-relaxed"
        >
          بوابتك الأولى لكل ما يخص ببجي موبايل: شحن شدات، تحميل نسخ الايفون، هكر آمن، وتحديثات اللعبة الحصرية تحت إشراف العنكبوت.
        </motion.p>
      </header>

      {/* Main Grid */}
      <main className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8 max-w-5xl mx-auto">
        {services.map((service, index) => (
          <a href={service.url} key={index} className="block">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className={`relative bg-[#151515] border-2 ${service.color} rounded-2xl p-5 md:p-8 text-center flex flex-col items-center cursor-pointer transition-all duration-500 hover:bg-[#1a1a1a] hover:shadow-[0_0_30px_rgba(234,179,8,0.1)] group overflow-hidden h-full`}
            >
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-block"
                >
                  {service.icon}
                </motion.div>
                <h2 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-yellow-500 transition-colors">
                  {service.title}
                </h2>
                <p className="text-[11px] md:text-xs text-gray-400 leading-snug">
                  {service.description}
                </p>
              </div>
            </motion.div>
          </a>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center mt-20 pb-12 border-t border-white/5 pt-10">
        <div className="flex justify-center gap-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-yellow-500/10 flex items-center justify-center border border-yellow-500/20">
            <Monitor className="w-5 h-5 text-yellow-500" />
          </div>
        </div>
        <p className="text-gray-500 text-xs mb-3">ببجي ستيشن | شحن شدات، تحميل ايفون، وهكر آمن</p>
        <p className="text-[10px] text-gray-600">
          جميع الحقوق محفوظة لـ <a href="https://www.information-net.com" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-500 transition-colors">العنكبوت للمعلومات</a>
          {" | "}
          <a href="https://www.information-net.com/p/privacy-policy.html" target="_blank" rel="noopener noreferrer" className="text-yellow-600 hover:text-yellow-500 transition-colors">شروط الاستخدام</a>
        </p>
      </footer>
    </div>
  );
}
