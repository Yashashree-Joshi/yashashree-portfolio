import { motion } from "framer-motion";

const stack = [
  {
    title: " Core Systems",
    items: [
      "C",
      "C++",
      "Linux",
      "Git",
      "Operating Systems",
      "Assembly"
    ]
  },
  {
    title: " AI Intelligence",
    items: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Scikit-Learn",
      "OpenCV",
      "LLMs",
      "Ollama",
      "Grad-CAM"
    ]
  },
  {
    title: " Application Layer",
    items: [
      "React",
      "TypeScript",
      "JavaScript",
      "HTML",
      "CSS",
      "Tailwind CSS",
      "FastAPI",
      "Flask",
      "REST APIs"
    ]
  },
  {
    title: "Research Orbit",
    items: [
      "Healthcare AI",
      "Computer Vision",
      "Machine Learning",
      "Explainable AI",
      "Software Engineering",
      "System Design",
      "Research"
    ]
  },
   {
    title: "Extras",
    items: [
      "Power BI",
      "Figma",
      "Notion"
    ]
  }
];

export function AstraStack() {
  return (
    <section id="astra-stack" className="relative py-24">
      <div className="container mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="section-heading text-4xl md:text-5xl font-serif mb-4">
            My Astra Stack
          </h2>

          <div className="w-14 h-1 bg-[#468A9A] rounded-full mx-auto mb-6" />

          <p className="max-w-2xl mx-auto text-[#EEEEEE]/70">
            The technologies, frameworks, and engineering disciplines that
            power every project, research paper, and experiment I build.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {stack.map((category, index) => (

            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.08,
                duration: 0.5
              }}
              className="glass-card p-6"
            >

              <h3 className="text-xl font-semibold mb-5 text-[#EEEEEE]">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">

                {category.items.map((tech) => (

                  <span
                    key={tech}
                    className="
                    px-3
                    py-2
                    rounded-full
                    bg-white/5
                    border
                    border-[#468A9A]/30
                    text-sm
                    text-[#EEEEEE]/80
                    hover:border-[#468A9A]
                    hover:text-[#468A9A]
                    transition-all
                    cursor-default
                  "
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}