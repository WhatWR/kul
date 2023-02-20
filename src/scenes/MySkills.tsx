import LineGradient from '../components/LineGradient'
import { motion } from 'framer-motion'

const MySkills = () => {
  return (
    <section id="experience" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">Experience</span>
          </p>
          <LineGradient width="w-1/3" />
        </motion.div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-3xl mt-3">
                Full<span className="text-red">Stack</span> Engineer
              </p>
            </div>
            {/* <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" /> */}
            <img
              className="md:w-3/4 h-32 absolute right-0 top-0 z-[-1] w-fit"
              src="https://www.digitalvalley.co.th/wp-content/uploads/2022/07/digital-valley.png"
              alt="Digital Valley"
            />
          </div>
          <ul className="list-disc mt-5">
            <li>Build Monitering Filght DashBoard Web </li>
            <li>Razzle Mobx Strapi</li>
          </ul>
        </motion.div>
      </div>
    </section>
  )
}

export default MySkills
