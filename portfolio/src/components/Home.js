import React, { useMemo, useRef } from 'react';
import CustomHook from './CustomHook';

function Home() {
  const scrollTab = useRef();
  CustomHook(scrollTab);

  // Memoizing the content and avatar sections
  const content = useMemo(() => (
    <div className="content">
      <div className="name">
        HEY I AM <span>Megha Mandekar</span>
      </div>
      <div className="des">
        With a passion for crafting seamless, innovative solutions, I am a versatile Full Stack Software Developer skilled in the MERN stack and Flutter. Enthusiastically navigating the digital realm, I bring a dynamic blend of technical expertise and creative problem-solving to the forefront of every project, backed by hands-on experience from impactful projects and successful internships.
      </div>
      <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer" className='animation active'>
        Download My CV
      </a>
    </div>
  ), []);

  const avatar = useMemo(() => (
    <div className="avatar">
      <div className="card">
        <img src="/meghaProfilePic.jpg" alt="Profile" />
        <div className="info">
          <div>Full Stack Developer (MERN)</div>
          <div>Frontend </div>
          <div>Backend</div>
        </div>
      </div>
    </div>
  ), []);

  return (
    <section ref={scrollTab} className='home'>
      {content}
      {avatar}
    </section>
  );
}

export default Home;
