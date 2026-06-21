import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2><b>Neeraj Suthar</b></h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <header className="hero">
        <h1>Neeraj Suthar</h1>
        <h2>Full Stack Developer</h2>
        <p>React · Node.js · MongoDB · Express · JavaScript</p>
        <p>200+ LeetCode Problems Solved</p>
        <div className="hero-buttons">
          <a href="#projects">View Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
      </header>

      <section id="about" className="section">
        <h2 data-label="Who I Am">About Me</h2>
        <div className="section-body">
          <p>
            I am a Computer Science student passionate about software
            development and problem solving. I enjoy building full-stack
            web applications and solving Data Structures &amp; Algorithms
            problems.
          </p>
          <p>
            I have solved 200+ LeetCode problems and built projects using
            React, Node.js, Express, MongoDB and WebRTC — always pushing
            for clean, production-quality code.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 data-label="What I Know">Skills</h2>
        <div className="skills">
          {["HTML", "CSS", "JavaScript", "React", "Node.js",
            "Express.js", "MongoDB", "Git", "GitHub", "C++"].map(s => (
            <div className="skill" key={s}>{s}</div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 data-label="What I've Built">Projects</h2>
        <div className="projects">

          <div className="project-card">
            <h3><b>Video Conferencing Website</b></h3>
            <p>
              Real-time video conferencing application built using React,
              WebRTC and Socket.io. Enables peer-to-peer communication and
              live video streaming.
            </p>
            <div className="tech">
              <span>React</span>
              <span>WebRTC</span>
              <span>Socket.io</span>
              <span>Node.js</span>
            </div>
            <div className="project-links">
              <a href="https://mera-video-call-1frontend2.onrender.com"
                 target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/neerajsutha973r/Mera-Video-Call"
                 target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

          <div className="project-card">
            <h3><b>Password Generator</b></h3>
            <p>
              Password generator built with React. Generates strong passwords
              with uppercase, lowercase, numbers and symbols — fully
              customisable in real time.
            </p>
            <div className="tech">
              <span>React</span>
              <span>JavaScript</span>
              <span>CSS</span>
            </div>
            <div className="project-links">
              <a href="https://password-generator-ns15.vercel.app/"
                 target="_blank" rel="noreferrer">Live Demo</a>
              <a href="https://github.com/neerajsutha973r/password-generator"
                 target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>

        </div>
      </section>

      <section className="section">
        <h2 data-label="Milestones">Achievements</h2>
        <div className="achievement">
          <h3>200+ LeetCode Problems Solved</h3>
          <p>
            Strong understanding of Arrays, Strings, Linked Lists, Trees,
            Graphs, Dynamic Programming, Sliding Window and Backtracking.
          </p>
          <a href="https://leetcode.com/u/NeerajSuthar/" target="_blank">
              View LeetCode Profile
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 data-label="Let's Talk">Contact</h2>
        <div className="contact-box">
          <p><strong>Name</strong>Neeraj Suthar</p>
          <p><strong>Email</strong>neerajsuthar227@gmail.com</p>
          <p><strong>Mobile</strong>+91 8005710341</p>
          <p>
            <strong>GitHub</strong>
            <a href="https://github.com/neerajsutha973r"
               target="_blank" rel="noreferrer">
              github.com/neerajsutha973r
            </a>
          </p>
        </div>
      </section>

      <footer>© 2026 Neeraj Suthar</footer>
    </>
  );
}

export default App;
