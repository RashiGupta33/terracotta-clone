export default function Hero() {
  return (
    <section className="py-24 sm:py-32 lg:pb-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto text-center">
          {/* Y Combinator Badge */}
          <div className="mt-4 mb-12 flex justify-center">
            <a
              href="https://www.ycombinator.com/companies/terracotta-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-1 py-1 pr-2 text-sm font-medium text-zinc-100 ring-2 ring-zinc-800 duration-150 hover:bg-zinc-950 hover:ring-orange-500"
            >
              <img
                src="/yc.svg"
                alt="Y Combinator"
                className="h-8 w-8 rounded-full"
              />

              <span>Backed by Y Combinator</span>
            </a>
          </div>

          {/* Orange Badge */}
          <div className="mb-6 flex justify-center">
            <span className="items-center rounded-full bg-orange-500/10 px-5 py-2 text-[0.9rem] text-orange-400 ring-1 ring-orange-500/30 leading-5 tracking-wide">
              Infrastructure change governance for regulated organizations
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-balance text-4xl font-semibold tracking-tighter text-zinc-100 sm:text-6xl">
            Every infrastructure change governed before it reaches production
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-3xl text-lg text-pretty text-zinc-400 sm:text-xl/8 tracking-normal">
            Every IaC pull request automatically audited for security
            violations, compliance <br/> gaps, drift, and cost impact against your
            live infrastructure. Tamper-evident audit <br/> trails on every change.
            No pipeline changes. No migration. Connect your repos and see
            results in minutes.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="https://app.tryterracotta.com"
              className="rounded-3xl bg-orange-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-orange-600 tracking-wide"
            >
              Start governing your infrastructure

              <span className="duration-150 group-hover:translate-x-0.5">
                →
              </span>
            </a>

            <a
              href="#demo"
              className="button-secondary group flex items-center gap-2"
            >
              See how it works

              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 transition-transform duration-150 group-hover:rotate-20"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 10c0-3.967 3.69-7 8-7s8 3.033 8 7-3.69 7-8 7a9.165 9.165 0 01-1.504-.123 5.976 5.976 0 01-3.935 1.107.75.75 0 01-.584-1.143 3.478 3.478 0 00.522-1.756C2.979 13.825 2 12.025 2 10z"
                />
              </svg>
            </a>
          </div>

          {/* Bottom Badges */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-3 text-sm text-zinc-400">
            <a
              href="/trust"
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-300"
            >
              <svg
                className="h-3.5 w-3.5 text-green-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>

              SOC 2 Type II
            </a>

            <a
              href="/trust"
              className="flex items-center gap-1.5 transition-colors hover:text-zinc-300"
            >
              <svg
                className="h-3.5 w-3.5 text-green-400"
                fill="currentColor"
                viewBox="0 0 8 8"
              >
                <circle cx="4" cy="4" r="3" />
              </svg>

              HIPAA Compliant
            </a>

            <span className="h-4 w-px bg-zinc-700"></span>

            <span className="flex items-center gap-1.5">
              GitHub
            </span>

            <span className="flex items-center gap-1.5">
              GitLab
            </span>

            <span>Terraform</span>

            <span>OpenTofu</span>
          </div>
        </div>
      </div>
    </section>
  );
}