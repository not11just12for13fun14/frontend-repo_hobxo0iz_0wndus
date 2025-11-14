function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-indigo-50 text-gray-800">
      {/* Simple Navigation */}
      <header className="bg-white/70 backdrop-blur border-b border-indigo-100 sticky top-0 z-10">
        <nav className="max-w-4xl mx-auto flex items-center justify-between px-4 py-3">
          <span className="font-bold text-indigo-700">My Simple Site</span>
          <ul className="flex items-center gap-6 text-sm">
            <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
            <li><a href="#about" className="hover:text-indigo-600">About</a></li>
            <li><a href="#contact" className="hover:text-indigo-600">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-10 space-y-16">
        {/* Heading, paragraph, and image */}
        <section id="home" className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-indigo-800">A Simple Webpage</h1>
            <p className="mt-3 text-gray-600 leading-relaxed">
              This page demonstrates a clean heading, a short paragraph, and an image using
              basic HTML and CSS (styled here with utility classes). It also includes a
              minimal navigation menu and a basic form.
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
              alt="Laptop on desk with code on screen"
              className="w-full h-64 md:h-72 object-cover rounded-xl shadow-lg border border-indigo-100"
            />
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
          <h2 className="text-2xl font-semibold text-indigo-800">About</h2>
          <div className="mt-4 grid gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                We craft practical, human-centered technology that removes friction and unlocks value.
                Every feature we ship aims to make someone's day a little easier—reliable, secure, and
                thoughtfully designed.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                To set the bar for modern consulting by pairing deep technical expertise with genuine
                partnership. We imagine a world where great software feels invisible—fast, intuitive,
                and trusted by the people who use it.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Our Team</h3>
              <p className="mt-2 text-gray-600 leading-relaxed">
                We're a curious crew of engineers, designers, and strategists who love solving
                tricky problems together. We hire for character and craft, champion mentorship,
                and learn in public so we can level up as one.
              </p>
            </div>
          </div>
        </section>

        {/* Basic Form with a single input and submit */}
        <section id="contact" className="bg-white rounded-xl shadow-sm border border-indigo-100 p-6">
          <h2 className="text-xl font-semibold text-indigo-800">Subscribe</h2>
          <p className="mt-2 text-gray-600">Enter your email and submit the form.</p>

          <form
            className="mt-4 flex flex-col sm:flex-row gap-3"
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const data = new FormData(form);
              const value = data.get('email');
              alert(`Submitted: ${value}`);
              form.reset();
            }}
          >
            <input
              name="email"
              type="email"
              required
              placeholder="your@email.com"
              className="flex-1 rounded-lg border border-indigo-200 px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-300"
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-lg bg-indigo-600 text-white px-5 py-2 font-medium shadow hover:bg-indigo-700 active:bg-indigo-800 transition"
            >
              Submit
            </button>
          </form>
        </section>
      </main>

      <footer className="text-center text-xs text-gray-500 py-8">Made with HTML & CSS</footer>
    </div>
  );
}

export default App;
