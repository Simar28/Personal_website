import { Github, Linkedin, FileText, Mail } from "lucide-react";
import Image from "next/image";
import ParticlesBg from "@/components/ParticlesBg";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#181823] text-white font-sans overflow-x-hidden">
      <ParticlesBg />

      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-[#181823]/70 backdrop-blur-md border-b border-white/10 z-50">
        <div className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="text-xl font-mono font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent tracking-wide">
            Simar Gerçeker
          </span>
          <div className="flex space-x-7 font-medium">
            <a href="#home" className="hover:text-cyan-400">Home</a>
            <a href="#about" className="hover:text-cyan-400">About</a>
            <a href="#projects" className="hover:text-cyan-400">Projects</a>
            <a href="#blog" className="hover:text-cyan-400">Blog</a>
            <a href="#contact" className="hover:text-cyan-400">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="flex flex-col justify-center items-center pt-36 pb-20 relative z-10">
        <div className="flex flex-col items-center">
          <Image
            src="/me.jpg"
            alt="Simar Gerçeker"
            width={140}
            height={140}
            className="rounded-full border-4 border-cyan-400 shadow-xl bg-white/10 mb-5"
            priority
          />
          <h1 className="text-5xl md:text-6xl font-extrabold font-mono mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent drop-shadow-md">
            Simar Gerçeker
          </h1>
          <h2 className="text-xl md:text-2xl font-mono text-gray-200 mb-2">
            Physics • Machine Learning • Software Engineering
          </h2>
          <div className="flex space-x-6 mt-3">
            <a href="https://github.com/Simar28" target="_blank" rel="noopener noreferrer">
              <Github className="w-7 h-7 hover:text-cyan-400" />
            </a>
            <a href="https://www.linkedin.com/in/simar-gerceker-b70b44324/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-7 h-7 hover:text-cyan-400" />
            </a>
            <a href="/SimarGercekerCV.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="w-7 h-7 hover:text-cyan-400" />
            </a>
            <a href="mailto:simar.syclobes@gmail.com">
              <Mail className="w-7 h-7 hover:text-cyan-400" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="flex justify-center px-2 mb-24 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          <h3 className="text-2xl font-mono font-bold mb-4 text-cyan-300">About Me</h3>
          <p className="text-lg text-gray-200 leading-relaxed">
            Hi! I’m Simar, a Physics and Machine Learning enthusiast. I love building software, playing with data, and exploring the universe.
            <br /><br />
            My goal is to apply AI and advanced algorithms to real-world problems in science and technology. This website documents my journey, projects, and blog posts about what I’m learning.
          </p>
        </div>
      </section>
      {/* Education Section */}
      <section id="education" className="flex flex-col md:flex-row justify-center gap-8 px-4 mb-24 relative z-10">
        {/* MSc in Software Engineering */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h3 className="text-xl font-bold text-cyan-300 mb-2">MSc in Software Engineering</h3>
          <p className="text-gray-200 mb-1">Eastern Mediterranean University, Famagusta, Cyprus</p>
          <p className="text-sm text-gray-400 mb-4">2025 – Present</p>
          <p className="text-gray-300 text-sm">
            The program emphasizes advanced skills in software design, development, and interdisciplinary research. It fosters independent study, critical thinking, and provides opportunities for specialization and creative research activities in software engineering.
          </p>
          <a
            href="https://www.emu.edu.tr/en/programs/software-engineering-masters-program-with-thesis/1744"
            className="text-cyan-400 hover:underline text-sm mt-4 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>

        {/* BSc in Applied Physics */}
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-6 w-full max-w-md">
          <h3 className="text-xl font-bold text-purple-300 mb-2">BSc in Applied Physics</h3>
          <p className="text-gray-200 mb-1">University of Groningen, Netherlands</p>
          <p className="text-sm text-gray-400 mb-4">2021 – 2024</p>
          <p className="text-gray-300 text-sm">
            This program offers a comprehensive study of physics principles and their practical applications in various technologies. It emphasizes hands-on experience and problem-solving skills, preparing students for real-world challenges in physical sciences and engineering.
          </p>
          <p className="text-gray-300 text-sm mt-2">
            The curriculum includes courses in mechanics, special relativity, electricity & magnetism, and offers specialization tracks in areas like Nanophysics and Energy & Environmental Physics.
          </p>
          <a
            href="https://www.rug.nl/bachelors/applied-physics/?lang=en"
            className="text-cyan-400 hover:underline text-sm mt-4 inline-block"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more
          </a>
        </div>
      </section>
      {/* Courses & Certificates Section */}
      <section id="certificates" className="flex justify-center px-2 mb-24 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          <h3 className="text-2xl font-mono font-bold mb-4 text-purple-300">Courses & Certificates</h3>
          <ul className="space-y-5 text-gray-200">
            <li>
              <a
                href="https://course.fast.ai/"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Practical Deep Learning for Coders (fast.ai) <span className="italic text-gray-400">(Currently Enrolled)</span>
              </a>
              <p className="text-sm text-gray-400 mt-1">
                An in-depth, hands-on course that covers state-of-the-art deep learning using PyTorch and the fastai library. The course emphasizes practical implementation: building, training, and deploying neural networks for computer vision, natural language processing, and tabular data. Topics include transfer learning, data augmentation, convolutional and recurrent neural networks, and best practices for training models efficiently with limited data and compute.
              </p>
            </li>
            <li>
              <a
                href="https://www.coursera.org/account/accomplishments/specialization/2UK7FXX2DMSA"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Machine Learning Specialization (Stanford & DeepLearning.AI)
              </a>
              <p className="text-sm text-gray-400 mt-1">
                A rigorous three-course sequence designed by Andrew Ng, covering supervised learning, deep learning, and advanced topics like regularization, decision trees, and best practices in model training. Provides hands-on projects using Python and scikit-learn.
              </p>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/learn/certification/simargereker/intro-to-machine-learning"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Intro to Machine Learning (Kaggle)
              </a>
              <p className="text-sm text-gray-400 mt-1">
                Covers the fundamental principles of machine learning, including decision trees, model validation, and handling categorical data, using Python and scikit-learn. Includes practical coding exercises on Kaggle datasets.
              </p>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/learn/certification/simargereker/intro-to-deep-learning"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Intro to Deep Learning (Kaggle)
              </a>
              <p className="text-sm text-gray-400 mt-1">
                Introduces neural networks and deep learning concepts, including TensorFlow basics, multi-class classification, and using real-world image and text datasets. Focuses on building and training neural networks from scratch.
              </p>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/learn/certification/simargereker/intermediate-machine-learning"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Intermediate Machine Learning (Kaggle)
              </a>
              <p className="text-sm text-gray-400 mt-1">
                Explores advanced ML topics such as handling missing values, feature engineering, pipelines, and using XGBoost for improved model performance. Focuses on real-world data science competitions.
              </p>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/learn/certification/simargereker/pandas"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Pandas (Kaggle)
              </a>
              <p className="text-sm text-gray-400 mt-1">
                Teaches practical data analysis using pandas: data cleaning, manipulation, joining, grouping, and visualization. Includes hands-on projects using real datasets and data wrangling techniques.
              </p>
            </li>
            <li>
              <a
                href="https://www.kaggle.com/learn/certification/simargereker/feature-engineering"
                className="text-cyan-300 hover:underline font-semibold"
                target="_blank"
              >
                Feature Engineering (Kaggle)
              </a>
              <p className="text-sm text-gray-400 mt-1">
                Focuses on improving model accuracy through advanced feature extraction, transformation, and selection. Covers techniques like one-hot encoding, creating new features, and effective pipeline building.
              </p>
            </li>
          </ul>
        </div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="flex justify-center px-2 mb-24 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          <h3 className="text-2xl font-mono font-bold mb-4 text-purple-300">Projects</h3>
          <ul className="space-y-3 text-gray-200 list-disc pl-6">
            <li>
              <a
                href="https://github.com/Simar28/Titanic---Machine-Learning-from-Disaster"
                className="text-cyan-300 hover:underline"
                target="_blank"
              >
                Titanic - Machine Learning from Disaster
              </a><br/>
              Applied machine learning algorithms to predict which passengers survived the Titanic disaster using structured demographic and travel data.
            </li>
            <li>
              <a
                href="https://github.com/Simar28/book-exchange-database"
                className="text-cyan-300 hover:underline"
                target="_blank"
              >
                Book Exchange Database
              </a><br/>
              Developed a SQL-based database backend for a second-hand book exchange application. Implemented user, book, and transaction modules for robust and scalable functionality.
            </li>
            {/* Add more projects here as you wish */}
          </ul>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="flex justify-center px-2 mb-24 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          <h3 className="text-2xl font-mono font-bold mb-4 text-purple-300">Blog</h3>
          <p className="text-gray-200">Blog posts coming soon. Stay tuned!</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex justify-center px-2 mb-32 relative z-10">
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg rounded-2xl p-8 w-full max-w-3xl">
          <h3 className="text-2xl font-mono font-bold mb-4 text-cyan-300">Contact</h3>
          <p className="text-gray-200">
            <span className="font-semibold">Email:</span> simar.syclobes@gmail.com <br />
            <span className="font-semibold">LinkedIn:</span>{" "}
            <a href="https://www.linkedin.com/in/simar-gerceker-b70b44324/" className="text-cyan-400 hover:underline" target="_blank" rel="noopener noreferrer">simar-gerceker-b70b44324</a>
          </p>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-20" />
    </main>
  );
}
