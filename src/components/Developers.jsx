export default function Developers() {
    return (
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-base/7 font-semibold text-orange-500">
                        Built for how regulated teams actually work</h2>
                    <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-zinc-100 sm:text-5xl">
                        Developers stay in GitHub. Your compliance team gets the dashboard. </p>
                    <p className="mt-6 text-lg/8 text-zinc-400">
                        Terracotta delivers governance in two places. Developers see policy findings
                        and security violations as a PR comment at review time. Security and compliance
                        teams see organization-wide posture across every repo, every team, every environment.
                        Nobody changes their workflow. Everyone has an audit trail. </p>
                </div><div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                    <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-700/50 overflow-hidden">
                        <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60 p-6">
                            <div className="space-y-2.5 max-w-sm mx-auto">
                                <div className="rounded-lg bg-zinc-800/50 px-4 py-3 ring-1 ring-zinc-700/50">
                                    <div className="flex items-center gap-1.5 mb-2 transition-all duration-500 opacity-100">
                                        <img src="/logo.svg" className="w-3.5 h-3.5" alt="" />
                                        <span className="text-[10px] text-orange-400 font-medium">
                                            Terracotta</span>
                                        <span className="text-[8px] text-zinc-600">bot</span>
                                    </div>
                                    <div className="space-y-1.5 text-[10px]">
                                        <div className="flex items-center gap-1.5 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "300ms" }}>
                                            <span className="text-green-400">✓</span>
                                            <span className="text-zinc-300">Code Review</span>
                                            <span className="text-zinc-600 ml-auto">passed</span></div>
                                        <div className="flex items-center gap-1.5 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "500ms" }}>
                                            <span className="text-green-400">✓</span>
                                            <span className="text-zinc-300">Cost Analysis</span>
                                            <span className="text-zinc-600 ml-auto">+$42/mo</span></div>
                                        <div className="flex items-center gap-1.5 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "700ms" }}>
                                            <span className="text-amber-400">!</span><span className="text-zinc-300">
                                                Drift Detection</span><span className="text-zinc-600 ml-auto">
                                                1 drifted</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "900ms" }}>
                                            <span className="text-green-400">✓</span>
                                            <span className="text-zinc-300">
                                                Security &amp; IAM</span>
                                            <span className="text-zinc-600 ml-auto">passed</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 px-1 transition-all duration-500 opacity-100 translate-y-0" style={{ "transition-delay": "1200ms" }}>
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    <span className="text-[10px] text-green-400 font-medium">
                                        Ready to merge
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 pt-5">
                            <h3 className="text-xl font-semibold text-zinc-100">
                                PR Governance
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Developers see security findings, policy violations, cost impact, and drift status as a PR
                                comment before anyone clicks merge. Every finding is an audit record. No context switching.
                                No extra tool. </p>
                        </div>
                    </div>
                    <div className="rounded-2xl bg-zinc-900 ring-1 ring-zinc-700/50 overflow-hidden">
                        <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60 p-6">
                            <div className="space-y-2.5 max-w-sm mx-auto">
                                <div className="grid grid-cols-3 gap-2">
                                    <div className="rounded-lg bg-zinc-800/50 px-3 py-2.5 ring-1 ring-zinc-700/50 text-center transition-all duration-500 opacity-100 translate-y-0" style={{ "transition-delay": "0ms" }}>
                                        <p className="text-base font-bold text-zinc-100">247</p>
                                        <p className="text-[9px] text-zinc-500">PRs reviewed</p>
                                    </div>
                                    <div className="rounded-lg bg-zinc-800/50 px-3 py-2.5 ring-1 ring-zinc-700/50 text-center transition-all duration-500 opacity-100 translate-y-0" style={{ "transition-delay": "200ms" }}>
                                        <p className="text-base font-bold text-green-400">98%</p>
                                        <p className="text-[9px] text-zinc-500">Compliant</p></div>
                                    <div className="rounded-lg bg-zinc-800/50 px-3 py-2.5 ring-1 ring-zinc-700/50 text-center transition-all duration-500 opacity-100 translate-y-0" style={{ "transition-delay": "400ms" }}>
                                        <p className="text-base font-bold text-amber-400">$2.1k</p>
                                        <p className="text-[9px] text-zinc-500">Cost saved</p>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-zinc-800/50 px-3 py-2.5 ring-1 ring-zinc-700/50 space-y-1.5">
                                    <p className="text-[10px] text-zinc-500 font-medium transition-all duration-500 opacity-100" style={{ "transition-delay": "700ms" }}>
                                        Fleet activity</p>
                                    <div className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "900ms" }}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400"></div>
                                        <span className="text-[10px] text-zinc-400">
                                            acme/infra PR #312: all checks passed</span>
                                    </div>
                                    <div className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "1150ms" }}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div>
                                        <span className="text-[10px] text-zinc-400">
                                            acme/platform: drift in us-east-1</span>
                                    </div>
                                    <div className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0" style={{ "transition-delay": "1400ms" }}>
                                        <div className="w-1.5 h-1.5 rounded-full bg-red-400"></div>
                                        <span className="text-[10px] text-zinc-400">
                                            acme/core PR #89: blocked by guardrail</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 pt-5">
                            <h3 className="text-xl font-semibold text-zinc-100">
                                Governance Dashboard
                            </h3>
                            <p className="mt-2 text-sm text-zinc-400">
                                Security and compliance teams get fleet-wide visibility: drift posture, policy compliance rates, security findings, and cost governance across every repo. Audit-ready reporting in one place. </p>
                        </div>
                    </div>
                </div>
                <div className="mt-12 text-center">
                    <a href="/features" className="inline-flex items-center gap-2 text-sm font-semibold text-orange-500 hover:text-orange-400 duration-150"> Explore the full platform
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                    </a>
                </div>
            </div>
        </div>
    );
}