export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0.8 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        {/* Logo */}
        <div className="flex lg:flex-1">
          <a
            href="/"
            className="-m-1.5 flex items-center gap-2 p-1.5 outline-none"
          >
            <img
              src="/logo.svg"
              alt="Terracotta"
              className="h-8 w-8"
            />

            <span className="text-lg font-semibold text-zinc-200">
              Terracotta
            </span>
          </a>
        </div>

        {/* Mobile Menu */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-zinc-400"
          >
            <span className="sr-only">Open main menu</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-x-12 lg:flex">
          {["Features", "Enterprise", "Compare"].map((item) => (
            <div key={item} className="relative">
              <button className="flex items-center gap-1 text-sm font-semibold leading-6 text-zinc-200 outline-none">
                {item}

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-4 w-4 text-zinc-400 transition-transform duration-150"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                  />
                </svg>
              </button>
            </div>
          ))}

          <a
            href="/pricing"
            className="text-sm font-semibold leading-6 text-zinc-200 outline-none"
          >
            Pricing
          </a>

          <a
            href="/docs"
            className="text-sm font-semibold leading-6 text-zinc-200 outline-none"
          >
            Docs
          </a>

          <a
            href="/blog"
            className="text-sm font-semibold leading-6 text-zinc-200 outline-none"
          >
            Blog
          </a>
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 lg:flex lg:flex-1 lg:justify-end">
          <a
            href="https://app.tryterracotta.com/signup"
            className="rounded-3xl bg-orange-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
          >
            Sign Up
          </a>

          <a
            href="https://app.tryterracotta.com/login"
            className="text-sm font-semibold leading-6 text-zinc-100 outline-none duration-150 hover:text-orange-500"
          >
            Log in <span aria-hidden="true">→</span>
          </a>
        </div>
      </nav>
    </header>
  );
}