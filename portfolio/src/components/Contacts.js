import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Email',
      url: 'meghamandekar220701@gmail.com',
      value: 'meghamandekar220701@gmail.com'
    }
  ]);

  const [socialList] = useState([
    {
      title: 'Linkedin',
      url: 'https://www.linkedin.com/in/megha-mandekar-247782271/',
      value: '/linkedin-icon1.png'
    },
    {
      title: 'GitHub',
      url: 'https://github.com/meghamandekar',
      value: '/github-icon.png'
    },
    {
      title: 'Twitter',
      url:'https://x.com/Meghaaa2207',
      value: '/twitter.png'
    },
    {
      title: 'LeetCode',
      url: 'https://leetcode.com/u/Megha_Mandekar22/',
      value: '/leetcode-icon.jpeg'
    }
  ]);

  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        I am just a Click Away!
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Feel free to reach out and let's turn ideas into reality. Whether you have a project in mind, want to discuss collaboration opportunities, or just fancy a good conversation, my inbox is always open. Let's connect and explore the possibilities together. Your message is the next chapter in this creative journey, and I'm excited to be a part of it.
      </div>
      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {listContacts.map((value, key) => (
          <div className='item' key={key}>
            <div>
              <h3>{value.title}</h3>
              <a href={`mailto:${value.url}`} target="_blank" rel="noreferrer" style={{ color: 'white' }}>{value.value}</a>
            </div>
          </div>
        ))}
      </div>
      <div>
        <h2 style={{ textAlign: 'center', marginTop: '40px' }}>Social Links</h2>
        <div className="socialList">
          {socialList.map((value, key) => (
            <div key={key}>
              <a className='list' href={value.url} target="_blank" rel="noreferrer">
                <img src={value.value} alt={value.title} style={{ width: '40px', height: '40px' }} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contacts;
