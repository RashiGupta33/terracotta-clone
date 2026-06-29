import githubDashboard from "../assets/github_dashboard.png";

export default function DemoSection() {
  return (
    <section className="mt-10 sm:-mt-25 px-4 sm:px-6 lg:px-8 mb-40">
      <div
        className="w-full max-w-5xl mx-auto rounded-2xl bg-zinc-950 p-3 sm:p-5 ring-1 ring-zinc-800/60"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(63,63,70,0.3) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }} 
      >
        <img
          src={githubDashboard}
          alt="GitHub Preview"
          className="w-full rounded-xl border border-zinc-800 shadow-2xl"
        />
      </div>
    </section>
  );
}