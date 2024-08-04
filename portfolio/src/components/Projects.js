import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Cricket Hub',
      des: 'The app provides live match updates, player profiles, and historical match data, offering a seamless and engaging experience for users.',
      language: 'HTML, CSS, Javascript, React JS, Firebase ',
      url: 'https://github.com/meghamandekar/Cricket-Hub',
      images: '/project1.png'
    },
    {
      name: 'Safe Guard',
      des: 'I engineered a Secure Password App in Java using IntelliJ IDEA, incorporating advanced encryption (SHA-1 + Salt) to enhance security and streamline user access. I also implemented robust authentication mechanisms, significantly improving account security and privacy.',
      language: 'Java, IntelliJ IDEA & SHA-1 + Salt encryption techniques',
      url: 'https://github.com/meghamandekar/SafeGuard',
      images: '/project2.png'
    },
    {
      name: 'Task Minder',
      des: 'The app features a user-friendly interface for creating, tracking, and managing tasks efficiently, with real-time updates and responsive design for a seamless experience across devices.',
      language: 'HTML, CSS, Javascript, React JS, Nodejs, ExpressJs, MongoDB',
      url: 'https://github.com/meghamandekar/taskminder',
      images: '/project3.PNG'
    },
    {
      name: 'Catch the Insect',
      des: 'Developed Frontend with HTML5, CSS3, and JavaScript, ensuring compatibility with Applicant Tracking Systems.',
      language: 'HTML, CSS, Javascript',
      url: 'https://github.com/meghamandekar/catch-insect',
      images: '/project5.png'
    },
    {
      name: 'Disney Clone',
      des: 'I developed a Disney clone web application featuring a visually appealing, user-friendly interface using modern web technologies. The project also included responsive design for optimal performance across various devices.',
      language: 'HTML, CSS, Javascript',
      url: 'https://github.com/meghamandekar/Disney',
      images: '/project6.png'
    }
  ]);
  
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        Some of My Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Discover my creative journey through diverse projects. Each one tells a story of passion, innovation, and commitment to excellence. Let these projects speak for the impactful outcomes we can achieve together.
      </div>
      <div className="list">
        {listProjects.map((value, key) => (
          <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
            <div className="images">
              <img src={value.images} alt={value.name} />
            </div>
            <div className="content">
              <h3>{value.name}</h3>
              <div className="des">{value.des}. <a href={value.url} target='_blank' rel="noreferrer">Project Link</a></div>
              <div className="mission">
                <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                <div>
                  <h4>Languages</h4>
                  <div className="des">{value.language}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
