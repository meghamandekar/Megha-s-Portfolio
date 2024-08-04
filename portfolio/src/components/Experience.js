import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Internships() {
  const [listInternship] = useState([
    {
      name: 'SDE Intern',
      des: 'As a Software Developer Intern, I specialized in backend development using Node.js, Express, and MongoDB. Notably, I developed multiple APIs for crucial features, showcasing my ability to create robust solutions. Additionally, I leveraged Flutter to build intuitive features on the frontend, demonstrating my versatility in contributing to both backend and frontend aspects of software development.',
      organisation: 'Nextun Technology',
      techStack: 'HTML, CSS, Javascript, Python, Django'
    },
    {
      name: 'Full Stack Developer',
      des: "I developed and launched two mobile apps for Nagpur's veterinary community. One, built with Flutter and Dart, featured offline functionality using TensorFlow Lite. The other, with its backend on Azure, offered real-time updates. Tailored to meet the distinct needs of veterinary professionals, students, cattle farmers, and gaushalas, these apps underscore my commitment to delivering specific and impactful solutions for the local veterinary community.",
      organisation: 'Veerandar IT Solutions',
      techStack: 'HTML, CSS, Javascript, ReactJS, Firebase'
    },
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Yes, I Have Some Experience Too!
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        In my professional journey, I have made meaningful contributions across diverse organizations, focusing on backend and frontend development, as well as mobile app expertise. I have developed robust features, optimized system performance, and deployed innovative solutions. These experiences have refined my technical skills and demonstrated my adaptability and dedication to delivering impactful solutions in the ever-evolving field of software development.
      </div>
      <div className="list">
        {
          listInternship.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt="" />
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">
                  {value.des}
                  <a href={value.url} target='_blank' rel="noreferrer"> Recognition of Internship from Organization</a>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Organisation</h4>
                    <div className="des">{value.organisation}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Tech Stack</h4>
                    <div className="des">{value.techStack}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Internships;
