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
        <p>290+ LeetCode Problems Solved</p>

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
            I have solved 290+ LeetCode problems and built real-world
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

  {/* Legal GPT */}
  <div className="project-card">
    <h3>
      <b>Legal GPT — AI Legal Assistant</b>
    </h3>

    <p>
      An AI-powered legal assistant that uses Retrieval-Augmented Generation
      (RAG) to provide context-aware answers from legal documents. Users can
      upload documents, ask natural-language questions and receive
      document-grounded responses with relevant context.
    </p>

    <div className="tech">
      <span>React</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>Python</span>
      <span>RAG</span>
      <span>ChromaDB</span>
      <span>Gemini</span>
    </div>

    <ul className="project-features">
      <li>🤖 AI-powered legal question answering</li>
      <li>📄 Document upload and intelligent processing</li>
      <li>🔎 Retrieval-Augmented Generation (RAG)</li>
      <li>🧠 Semantic search using vector embeddings</li>
      <li>📚 Context-aware responses from uploaded documents</li>
      <li>💬 Natural-language conversational interface</li>
      <li>⚡ Fast and responsive React interface</li>
    </ul>

    <div className="project-links">
      <a
        href="https://legal-gpt.manishsuthar.dev"
        target="_blank"
        rel="noreferrer"
      >
        Live Demo
      </a>
      <a
        href="https://github.com/neerajsutha973r/Rag.git"
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
      A full-stack AI-powered mock interview platform designed to simulate
      real interview experiences through voice interaction, dynamically
      generated questions, AI evaluation and personalized performance
      analysis.
    </p>

    <div className="tech">
      <span>React</span>
      <span>Node.js</span>
      <span>Express.js</span>
      <span>PostgreSQL</span>
      <span>Gemini</span>
      <span>Groq AI</span>
      <span>pgvector</span>
      <span>Speech Recognition</span>
    </div>

    <ul className="project-features">
      <li>🎤 Voice-based conversational interviews</li>
      <li>🤖 Dynamically generated technical interview questions</li>
      <li>🔎 Semantic question similarity detection</li>
      <li>📝 AI-powered answer evaluation and feedback</li>
      <li>📊 Interview scoring and performance analysis</li>
      <li>📜 Interview history and answer tracking</li>
      <li>🔐 JWT-based authentication</li>
      <li>📱 Responsive and modern user interface</li>
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
        href="https://github.com/neerajsutha973r/AiInterviewPlatform.git"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>
    </div>
  </div>


  {/* Video Conferencing Project */}
  <div className="project-card">
    <h3>
      <b>Video Conferencing Website</b>
    </h3>

    <p>
      A real-time video conferencing application that enables users to
      communicate through peer-to-peer video, audio and instant messaging.
      Built with WebRTC and Socket.io for low-latency real-time
      communication.
    </p>

    <div className="tech">
      <span>React</span>
      <span>WebRTC</span>
      <span>Socket.io</span>
      <span>Node.js</span>
      <span>Express.js</span>
    </div>

    <ul className="project-features">
      <li>📹 Real-time peer-to-peer video communication</li>
      <li>🎙️ Live audio and video streaming</li>
      <li>💬 Real-time messaging using Socket.io</li>
      <li>🔗 WebRTC-based peer connections</li>
      <li>⚡ Low-latency real-time communication</li>
      <li>📱 Responsive interface for different screen sizes</li>
    </ul>

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

</div>


      </section>

      <section className="section">
        <h2 data-label="Milestones">Achievements</h2>

        <div className="achievement">
          <h3>290+ LeetCode Problems Solved</h3>

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