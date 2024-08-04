import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJava, faHtml5, faCss3, faJs, faReact, faNodeJs, faMdb, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const [listSkills] = useState([
    {
      name: 'Java',
      icon: faJava
    },
    {
      name: 'HTML',
      icon: faHtml5
    },
    {
      name: 'CSS',
      icon: faCss3
    },
    {
      name: 'Javascript',
      icon: faJs
    },
    {
      name: 'ReactJs',
      icon: faReact
    },
    {
      name: 'NodeJs',
      icon: faNodeJs
    },
    {
      name: 'ExpressJS',
      icon: faNodeJs
    },
    {
      name: 'MongoDB',
      icon: faMdb
    },
    {
      name: 'Firebase',
      icon: faGooglePlay
    }
  ]);

  return (
    <section className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        What Skills I Have?
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        In the ever-evolving realm of creativity, my broad skill set is the cornerstone of delivering impactful results. Driven by a passion for innovation and a dedication to excellence, I blend creativity with adaptability and a keen eye for detail. Whether crafting visual designs, developing websites, or overseeing projects, I approach each endeavor with enthusiasm and expertise. Let's explore how my skills can contribute to achieving success together.
      </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
            </div>
          ))
        }
      </div>
    </section>
  );
}

export default Skills;
