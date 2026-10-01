export default function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <img src="" alt="" className="rounded-full w-32" />
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
        Hi! I&apos;m Muhammad Umair
        <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-Ovo">
     MERN Stack Developer From <span className="text-blue-800">SMIT</span>
      </h1>
      <p className="max-w-2xl mx-auto font-Ovo">
        MERN Stack Developer with hands-on experience in building responsive,
        user-friendly, and scalable web applications using MongoDB, Express.js,
        React.js, and Node.js. Skilled in developing modern frontend interfaces,
        RESTful APIs, database integration, authentication, and application
        functionality. Strong knowledge of JavaScript, React.js, Tailwind CSS,
        Git/GitHub, Firebase, and responsive web design. Passionate about
        solving problems, learning new technologies, and creating clean,
        efficient, and maintainable web applications.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a
          href="#contact"
          className="px-10 py-2.5 border rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 dark:border-transparent"
        >
          contact me{" "}
          <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
        </a>

       
      </div>
    </div>
  );
}
