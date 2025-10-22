import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

interface HeroProps {
  onScrollToProjects: () => void
}

export default function Hero({ onScrollToProjects }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient with yellow glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/3 rounded-full blur-3xl" />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl"
      >
        <motion.div variants={itemVariants} className="mb-6">
          <span className="text-5xl">👋</span>
        </motion.div>

        <motion.h1 variants={itemVariants} className="text-5xl rethink-sans-font md:text-7xl font-bold mb-4 text-balance">
          Hi, I'm <span className="text-accent">Syed Talha Hussain</span>
        </motion.h1>

        <motion.p variants={itemVariants} className="text-xl rethink-sans-font-600 md:text-2xl text-foreground/70 mb-5 text-balance">
          Welcome to my space on the internet
        </motion.p>

        <motion.div variants={itemVariants} className="mb-12">
          <p className="text-lg md:text-xl text-accent font-semibold rethink-sans-font-600 ">Cloud & DevOps Engineer</p>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onScrollToProjects}
            className="bg-accent text-background rethink-sans-font-700 hover:bg-accent/90 px-10 py-6 text-base font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-accent/20"
          >
            View My Work    
            <ArrowDown className="ml-2 w-4 h-4" />
          </Button>
          <a href="#contact">

          <Button
            variant="outline"
            className="border-accent/30 w-full text-foreground rethink-sans-font-700 hover:bg-accent/10 hover:text-white px-10 py-6 text-base font-semibold rounded-lg bg-transparent"
            >
            Get in Touch
          </Button>
              </a>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-8 left-1/2 bg-yellow-500 p-4 rounded-full  transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-white" />
      </motion.div>
    </section>
  )
}
