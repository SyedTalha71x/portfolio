import { motion } from "framer-motion"

export default function Story() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  return (
    <section id="story" className="py-20 md:py-32 px-4 bg-background/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2 variants={itemVariants} className="text-4xl rethink-sans-font md:text-5xl font-bold mb-12 text-accent">
            My Story
          </motion.h2>

          <div className="space-y-6 text-lg rethink-sans-font-600 text-foreground/80 leading-relaxed">
  <motion.p variants={itemVariants}>
    I'm a dedicated Cloud & DevOps Engineer with a strong foundation in backend development. With over 2 years of
    professional experience as a Software Engineer (Backend), I’ve built, optimized, and maintained scalable systems
    that sparked my deeper interest in automation and cloud infrastructure.
  </motion.p>

  <motion.p variants={itemVariants}>
    During my backend journey, I had the opportunity to collaborate on several DevOps projects — managing CI/CD
    pipelines, containerizing applications, and deploying services to cloud environments. Those experiences inspired
    my transition into a full-time DevOps and Cloud role, where I now focus on building secure, scalable, and
    automated infrastructure using tools like Kubernetes, Docker, Terraform, and modern cloud platforms.
  </motion.p>

  <motion.p variants={itemVariants}>
    I’m deeply passionate about Infrastructure as Code, automation, and continuous delivery. My goal is to create
    systems that are efficient, reliable, and easy to maintain. Currently, I’m seeking exciting opportunities where I
    can contribute to innovative DevOps initiatives, solve complex infrastructure challenges, and continue growing
    as an engineer.
  </motion.p>
</div>

        </motion.div>
      </div>
    </section>
  )
}
