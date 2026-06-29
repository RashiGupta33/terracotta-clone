export default function Goverance() {
    return (
        <>
            <div id="how-it-works" className="py-24 sm:py-32">
                <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                    <h2 className="text-center text-base/7 font-semibold text-orange-500">
                        The Zero-Migration Governance Path
                    </h2>
                    <p className="mx-auto mt-2 -ml-10 text-center text-6xl font-semibold tracking-[-0.05em] text-zinc-100 sm:text-5xl">
                        Governed in two minutes. Auditing every PR immediately. </p>
                    <p className="mt-6 text-lg/8 text-zinc-400 text-center max-w-3xl mx-auto">
                        No agents. No CLI. No infrastructure to manage. Install the GitHub or GitLab app and every <br /> IaC pull request gets a
                        full governance audit automatically.
                    </p>
                    <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
                        <div className="flex flex-col">
                            <div className="rounded-2xl bg-zinc-900 p-6 flex items-center justify-center h-[280px] overflow-hidden">
                                <div className="flex flex-col items-center gap-5">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-zinc-800 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-x-0">
                                            <svg className="w-8 h-8 text-zinc-300" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="w-8 h-px transition-all duration-700 bg-orange-500/50" style={{ transitionDelay: "500ms" }}></div>
                                            <div className="flex gap-1">
                                                <div className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-orange-500 animate-pulse" style={{ transitionDelay: "600ms" }}></div>
                                                <div className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-orange-500/50 animate-pulse" style={{
                                                    animationDelay: "150ms",
                                                    transitionDelay: "750ms",
                                                }}></div>
                                                <div className="w-1.5 h-1.5 rounded-full transition-all duration-300 bg-orange-500/30 animate-pulse" style={{
                                                    animationDelay: "300ms",
                                                    transitionDelay: "900ms",
                                                }}></div>
                                            </div>
                                            <div className="w-8 h-px transition-all duration-700 bg-orange-500/50" style={{
                                                transitionDelay: "500ms",
                                            }}>
                                            </div>
                                        </div>
                                        <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-orange-500/10 ring-1 ring-orange-500/30 transition-all duration-500 opacity-100 translate-x-0" style={{ transitionDelay: "300ms" }}>
                                            <img src="/logo.svg" className="w-8 h-8" alt="Terracotta" />
                                        </div>
                                    </div>
                                    <div className="w-full max-w-[240px] space-y-2">
                                        <div className="rounded-lg bg-zinc-800 px-4 py-2.5 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: "800ms" }}>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 bg-green-500/20" style={{ transitionDelay: "1000ms" }}>
                                                    <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-[11px] transition-colors duration-300 text-green-400" style={{ transitionDelay: "1000ms" }}>
                                                    Connected to acme/infra
                                                </p>
                                            </div>
                                        </div>
                                        <div className="rounded-lg bg-zinc-800 px-4 py-2.5 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: "1100ms" }}>
                                            <div className="flex items-center gap-2">
                                                <div className="w-4 h-4 rounded-full flex items-center justify-center transition-all duration-300 bg-green-500/20" style={{ transitionDelay: "1300ms" }}>
                                                    <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                                                    </svg>
                                                </div>
                                                <p className="text-[11px] transition-colors duration-300 text-green-400" style={{ transitionDelay: "1300ms" }}>
                                                    Connected to acme/platform
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="flex items-center gap-2 text-sm font-mono">
                                    <span className="text-orange-500">01</span>
                                    <span className="text-zinc-600">/</span>
                                    <span className="text-zinc-100 font-semibold">
                                        Connect your repos
                                    </span>
                                </p>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Install the GitHub or GitLab app. Read-only source control access, nothing to deploy
                                    or maintain. AWS credentials optional for drift detection and compliance verification. </p>
                            </div>
                        </div>
                        <div className="flex flex-col"><div className="rounded-2xl bg-zinc-900 p-6 flex items-center justify-center h-[280px] overflow-hidden">
                            <div className="w-full max-w-[240px] space-y-3">
                                <div className="rounded-lg bg-zinc-800 px-4 py-3 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0">
                                    <p className="text-[11px] text-zinc-500 mb-1.5">Guardrail</p>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        <span>"Block any PR that exposes a database publicly or opens port 22"</span>
                                    </p>
                                </div>
                                <div className="flex items-center gap-2 px-1 transition-all duration-500 opacity-100 translate-y-0">
                                    <div className="w-4 h-4 rounded-full bg-green-500/20 flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                                        </svg>
                                    </div>
                                    <p className="text-[11px] text-green-400">Policy created</p>
                                </div>
                                <div className="rounded-lg bg-zinc-800 px-4 py-3 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0"
                                ><p className="text-[11px] text-zinc-500 mb-1.5">Guardrail</p>
                                    <p className="text-xs text-zinc-300 leading-relaxed">
                                        <span>"Require cost review on any change over $500/mo"</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                            <div className="mt-6">
                                <p className="flex items-center gap-2 text-sm font-mono">
                                    <span className="text-orange-500">02</span>
                                    <span className="text-zinc-600">/</span>
                                    <span className="text-zinc-100 font-semibold">
                                        Set your governance policies</span></p>
                                <p className="mt-2 text-sm text-zinc-400">
                                    Write your policies in plain English. Block risky changes, enforce tagging standards, require
                                    cost approval above your threshold. Most teams start with two or three policies and expand as audit requirements grow.
                                </p>
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <div className="rounded-2xl bg-zinc-900 p-6 flex items-center justify-center h-[280px] overflow-hidden">
                                <div className="w-full max-w-[240px] space-y-2.5">
                                    <div className="rounded-lg bg-zinc-800 px-4 py-3 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center">
                                                <svg className="w-3 h-3 text-purple-400" fill="currentColor" viewBox="0 0 16 16"><path d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z"></path>
                                                </svg></div>
                                            <p className="text-xs text-zinc-300 font-medium">PR #247 reviewed</p></div>
                                        <p className="text-[11px] text-zinc-500 leading-relaxed transition-all duration-500 opacity-100" style={{ transitionDelay: "400ms" }}> 2 guardrails passed, 1 drift detected, $12/mo cost impact </p></div>
                                    <div className="flex items-center gap-3 px-1"><div className="flex items-center gap-1.5 transition-all duration-400 opacity-100 translate-y-0" style={{ transitionDelay: "600ms" }}>
                                        <div className="w-2 h-2 rounded-full bg-green-400"></div><span className="text-[11px] text-zinc-500">Security</span></div>
                                        <div className="flex items-center gap-1.5 transition-all duration-400 opacity-100 translate-y-0" style={{ transitionDelay: "850ms" }}>
                                            <div className="w-2 h-2 rounded-full bg-green-400"></div><span className="text-[11px] text-zinc-500">Cost</span></div>
                                        <div className="flex items-center gap-1.5 transition-all duration-400 opacity-100 translate-y-0" style={{ transitionDelay: "1100ms" }}>
                                            <div className="w-2 h-2 rounded-full bg-amber-400"></div><span className="text-[11px] text-zinc-500">Drift</span></div></div>
                                    <div className="rounded-lg bg-zinc-800 px-4 py-3 ring-1 transition-all duration-500 opacity-100 translate-y-0 ring-green-500/20" style={{ transitionDelay: "200ms" }}>
                                        <div className="flex items-center gap-2"><div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5"></path></svg></div>
                                            <p className="text-xs text-green-400 font-medium">Ready to merge</p></div></div></div></div><div className="mt-6"><p className="flex items-center gap-2 text-sm font-mono"><span className="text-orange-500">03</span><span className="text-zinc-600">/</span><span className="text-zinc-100 font-semibold">Stay audit-ready</span></p><p className="mt-2 text-sm text-zinc-400"> Every PR gets security, drift, compliance, and cost governance before merge. Developers get findings in the PR comment. Your compliance team gets the dashboard. Nobody waits on a manual review gate. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}