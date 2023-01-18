import { motion } from 'framer-motion'
import LineGradient from '../components/LineGradient'
import Project1 from './../assets/Project1.png'
import Project2 from './../assets/Project2.png'
import Project3 from './../assets/Project3.png'

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
}

type Props = {
  title: string
  desc: string
  images: string
}

const Project = ({ title, desc, images }: Props) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`
  const projectTitle = title.split(' ').join('-').toLowerCase()

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        <p className="mt-7">{desc}</p>
      </div>
      <img src={images} alt={projectTitle} />
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10"></p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}

          <Project
            title="Youtube Clone"
            desc="ReactJS Redux(toolkit) GoogleCloudApi TailwindCss"
            images={Project1}
          />
          <Project
            title="Kul News"
            desc="Nextjs TailwindCss Stepzen Graphql
              "
            images={Project2}
          />
          <Project
            title="Kul Gym"
            desc="ReactJS MaterialUi RapidApi
              "
            images={Project3}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
