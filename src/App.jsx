import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>
          <b>Neeraj Suthar</b>
        </h2>

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
        <p>React · Node.js · Express · PostgreSQL · JavaScript</p>
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
            development and problem solving. I enjoy building scalable
            full-stack web applications and solving Data Structures &
            Algorithms problems.
          </p>

          <p>
            I have solved 200+ LeetCode problems and built real-world
            projects using React, Node.js, Express, PostgreSQL, MongoDB,
            WebRTC and AI technologies while focusing on writing clean,
            maintainable and production-quality code.
          </p>
        </div>
      </section>

      <section id="skills" className="section">
        <h2 data-label="What I Know">Skills</h2>

        <div className="skills">
          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "PostgreSQL",
            "MongoDB",
            "Git",
            "GitHub",
            "C++",
          ].map((skill) => (
            <div className="skill" key={skill}>
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <h2 data-label="What I've Built">Projects</h2>

        <div className="projects">
          {/* Video Conferencing Project */}

          <div className="project-card">
            <h3>
              <b>Video Conferencing Website</b>
            </h3>

            <p>
              Real-time video conferencing application built using React,
              WebRTC and Socket.io. Enables peer-to-peer communication,
              live video streaming and instant messaging.
            </p>

            <div className="tech">
              <span>React</span>
              <span>WebRTC</span>
              <span>Socket.io</span>
              <span>Node.js</span>
            </div>

            <div className="project-links">
              <a
                href="https://mera-video-call-1frontend2.onrender.com"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/neerajsutha973r/Mera-Video-Call"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* AI Interview Platform */}

          <div className="project-card">
            <h3>
              <b>AI Interview Platform</b>
            </h3>

            <p>
              A full-stack AI-powered mock interview platform that helps
              users prepare for technical interviews through voice-based
              interaction, AI-generated questions, instant feedback and
              performance tracking.
            </p>

            <div className="tech">
              <span>React</span>
              <span>Node.js</span>
              <span>Express.js</span>
              <span>PostgreSQL</span>
              <span>Groq AI</span>
              <span>Speech Recognition</span>
            </div>

            <ul className="project-features">
              <li>🎤 Voice-based interview using Speech Recognition</li>
              <li>🤖 AI-generated interview questions</li>
              <li>📝 AI evaluation and personalized feedback</li>
              <li>📊 Interview score and performance analysis</li>
              <li>🔐 User Authentication (JWT)</li>
              <li>📜 Interview history and answer tracking</li>
              <li>⚡ Responsive and modern UI</li>
            </ul>

            <div className="project-links">
              <a
                href="https://ai-interview-platform-mocha-six.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>

              <a
                href="https://github.com/neerajsutha973r/Groq_GPT"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
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
            Graphs, Dynamic Programming, Sliding Window, Backtracking,
            Binary Search and Greedy Algorithms.
          </p>

          <a
            href="https://leetcode.com/u/NeerajSuthar/"
            target="_blank"
            rel="noreferrer"
          >
            View LeetCode Profile
          </a>
        </div>
      </section>

      <section id="contact" className="section">
        <h2 data-label="Let's Talk">Contact</h2>

        <div className="contact-box">
          <p>
            <strong>Name:</strong> Neeraj Suthar
          </p>

          <p>
            <strong>Email:</strong> neerajsuthar227@gmail.com
          </p>

          <p>
            <strong>Mobile:</strong> +91 8005710341
          </p>

          <p>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/neerajsutha973r"
              target="_blank"
              rel="noreferrer"
            >
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