import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import ProgressBar from '@/components/shared/ProgressBar';

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            Hey, I'm Kuba. I am a Computer Science student at Boston University, particularly interested in backend engineering and data science. 
            I am passionate about building efficient solutions to real-world problems and exploring the intersection of technology and the business world. 
            In my free time, I enjoy hiking with my dog, weightlifting, snowboarding, and reading books - particularly about sociology, business, and Russian literature; or anything that catches my eye!
          </p>
          {/* <Button className="mt-5">Download CV</Button> */}
        </div>

        {/* Skills */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-sm sm:text-base">
          <div>
            <h6 className="mb-2 font-semibold">Languages</h6>
            <ul className="list-disc list-inside">
              <li>Python</li>
              <li>Java</li>
              <li>Golang</li>
              <li>JavaScript</li>
              <li>HTML / CSS</li>
            </ul>
          </div>

          <div>
            <h6 className="mb-2 font-semibold">Frameworks & Libraries</h6>
            <ul className="list-disc list-inside">
              <li>FastAPI</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>Pandas</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div>
            <h6 className="mb-2 font-semibold">Tools & Technologies</h6>
            <ul className="list-disc list-inside">
              <li>Git</li>
              <li>Docker</li>
              <li>MongoDB</li>
              <li>Supabase</li>
            </ul>
          </div>

          <div>
            <h6 className="mb-2 font-semibold">Concepts & Environments</h6>
            <ul className="list-disc list-inside">
              <li>Full-Stack Development</li>
              <li>REST APIs</li>
              <li>Data Analysis</li>
              <li>Agile Workflows</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Overview */}
      <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">245 lb</h2>
            <p className="mt-1">Bench press PR</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">3</h2>
            <p className="mt-1">Internships completed</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">14+</h2>
            <p className="mt-1">Countries visited</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">∞</h2>
            <p className="mt-1">Curiosity</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
