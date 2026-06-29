export default function Infrastructure() {
    return (
        <>
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-orange-500">
                The governance gap
                </h2>
                <p className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-balance text-zinc-100 sm:text-5xl"> Your infrastructure changes have no audit trail. And you know it. </p><p className="mt-6 text-lg/8 text-zinc-400 text-center max-w-4xl mx-auto"> Every organization has the same blind spot. Infrastructure changes merge through pull requests with no policy enforcement, no security review, and no record of what was approved or why. When the auditor asks for proof, you're left reconstructing history from git logs. That's not governance. That's exposure. </p><div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 sm:grid-cols-3"><div className="relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col"><div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60"><div className="relative h-65 overflow-hidden flex items-center justify-center p-5"><div className="w-full max-w-70 space-y-3"><div className="grid grid-cols-2 gap-2"><div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 ring-1 ring-zinc-700/50 transition-all duration-500 opacity-100 translate-x-0"><p className="text-[9px] text-zinc-500 uppercase tracking-wider mb-1.5">Your code</p><div className="font-mono text-[10px] space-y-1 text-zinc-400"><p>instance_type</p><p className="text-zinc-200">"t2.micro"</p><p className="mt-1.5">ingress</p><p className="text-zinc-200">port 443 only</p></div></div><div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 ring-1 ring-red-500/20 transition-all duration-500 opacity-100 translate-x-0"  style={{ transitionDelay: "300ms" }}><p className="text-[9px] text-red-400/70 uppercase tracking-wider mb-1.5">Live infra</p><div className="font-mono text-[10px] space-y-1 text-zinc-400"><p>instance_type</p><p className="text-red-400 font-medium">"t3.xlarge"</p><p className="mt-1.5">ingress</p><p className="text-red-400 font-medium">port 22, 443, 8080</p></div></div></div><div className="relative h-px mx-4"><div className="absolute inset-0 bg-zinc-700"></div><div className="absolute inset-0 bg-red-500/60 transition-all duration-2000 ease-out origin-center" style={{ transform: "scaleX(1)" }}></div></div><div className="flex items-center justify-between px-1 transition-all duration-500 opacity-100" style={{ transitionDelay: "800ms" }}><span className="text-[10px] text-zinc-500">Last state check</span><span className="text-[10px] text-red-400/80 font-mono font-medium">47 days ago</span></div></div></div></div><div className="p-6 pt-4 flex-1"><p className="text-lg font-medium tracking-tight text-zinc-100">Undetected Drift</p><p className="mt-2 text-sm/6 text-zinc-400"> Resources change outside of code. Console edits, manual applies, partial deployments. Your Terraform state says one thing. Your live infrastructure says another. The gap between them is your compliance exposure. </p></div></div><div className="relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col"><div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60"><div className="relative h-65 overflow-hidden flex items-center justify-center p-5"><div className="w-full max-w-70 space-y-3"><div className="rounded-lg bg-zinc-800/60 px-4 py-3 ring-1 ring-zinc-700/50"><div className="flex items-center justify-between mb-3"><p className="text-[9px] text-zinc-500 uppercase tracking-wider">Monthly AWS spend</p><span className="text-[10px] font-mono font-medium transition-all duration-500 text-red-400" style={{ transitionDelay: "1600ms" }}>$7,400/mo</span></div><svg viewBox="0 0 240 80" className="w-full h-auto"><line x1="0" y1="20" x2="240" y2="20" stroke="rgb(63 63 70 / 0.3)" stroke-width="0.5"></line><line x1="0" y1="40" x2="240" y2="40" stroke="rgb(63 63 70 / 0.3)" stroke-width="0.5"></line><line x1="0" y1="60" x2="240" y2="60" stroke="rgb(63 63 70 / 0.3)" stroke-width="0.5"></line><polyline points="0,55 30,55 60,54 90,55 120,54 150,55 170,54 195,12 220,14 240,13" fill="none" stroke="rgb(161 161 170)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="transition-all duration-2500 ease-out" stroke-dasharray="350" stroke-dashoffset="0"></polyline><polygon points="150,55 170,54 195,12 220,14 240,13 240,80 150,80" className="transition-all duration-500" fill="rgb(239 68 68 / 0.08)" style={{ transitionDelay: "2200ms" }}></polygon><g className="opacity-100 transition-opacity duration-500" style={{ transitionDelay: "2400ms" }}><line x1="195" y1="12" x2="195" y2="55" stroke="rgb(239 68 68 / 0.4)" stroke-width="0.5" stroke-dasharray="2 2"></line><circle cx="195" cy="12" r="2.5" fill="rgb(239 68 68)"></circle></g></svg></div><div className="flex items-center gap-2 px-1 transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: "2500ms" }}><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><span className="text-[10px] text-zinc-500">PR #312 merged Mar 3</span></div><div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 ring-1 ring-zinc-700/50 transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: "2700ms" }}>
        <div className="font-mono text-[10px]">
            <p className="text-zinc-500">aws_rds_instance.api</p>
            <p className="mt-0.5">
                <span className="text-zinc-600 line-through">db.t3.medium</span> 
                <span className="text-red-400">→ db.r6g.2xlarge</span>
            </p>
            </div>
            </div>
            </div>
            </div>
            </div>
            <div className="p-6 pt-4 flex-1">
                <p className="text-lg font-medium tracking-tight text-zinc-100">
                    Ungoverned Cost Changes
                </p>
                <p className="mt-2 text-sm/6 text-zinc-400"> 
                A developer provisions an oversized RDS instance. No cost policy exists. 
                No approval is required. The bill arrives next month with a $5,000 surprise. 
                By then, the PR is merged and forgotten. 
                </p>
                </div>
                </div>
                <div className="relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col">
                    <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60">
                    <div className="relative h-65 overflow-hidden flex items-center justify-center p-5">
                        <div className="w-full max-w-70 space-y-2.5">
                            <div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 ring-1 ring-zinc-700/50 transition-all duration-500 opacity-100 translate-y-0">
                            <div className="flex items-center justify-between mb-1.5">
                                <p className="text-[10px] text-zinc-300 font-medium">
                                    Update security group rules
                                    </p>
                                    <span className="rounded-full bg-purple-500/15 px-2 py-0.5 text-[9px] text-purple-400 font-medium transition-all duration-300 opacity-100 scale-100">
                                    Merged
                                    </span>
                                    </div>
                                    <div className="flex items-center gap-3 text-[9px] text-zinc-500">
                                        <span>Files changed: 12</span>
                                        <span>+847 -203</span>
                                        </div>
                                        </div>
                                        <div className="flex items-center justify-between px-1 transition-all duration-500 opacity-100" style={{ transitionDelay: "600ms" }}>
                                            <div className="flex items-center gap-1.5">
                                                <svg className="w-3 h-3 text-green-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5"></path>
                                                    </svg><span className="text-[10px] text-zinc-500">
                                                        Approved by: 
                                                        <span className="text-zinc-400">bot-ci</span>
                                                        </span>
                                                        </div>
                                                        <span className="text-[10px] text-zinc-600">Fri 4:58 PM</span>
                                                        </div>
                                                        <div className="rounded-lg bg-zinc-800/60 px-3 py-2.5 ring-1 ring-zinc-700/50 transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: "900ms" }}>
                                                        <p className="text-[9px] text-zinc-600 mb-1">Line 847 of 1,050</p>
                                                        <div className="font-mono text-[10px] space-y-0.5">
                                                            <p className="text-zinc-600"> ingress </p><p className="relative">
                                                                <span className="text-green-400/60">+</span>
                                                                <span className="text-zinc-400"> cidr_blocks = [</span><span className="text-red-400">"0.0.0.0/0"</span>
                                                                <span className="text-zinc-400">]</span>
                                                                <span className="absolute bottom-0 left-4 right-0 h-px bg-red-500/60 origin-left transition-transform duration-1500 ease-out" style={{
  transform: "scaleX(1)",
  transitionDelay: "1800ms",
}}>
                                                                </span>
                                                                </p>
                                                                <p className="text-zinc-600"></p>
                                                                </div>
                                                                </div>
                                                                <div className="flex items-center gap-1.5 px-1 transition-all duration-500 opacity-100 translate-y-0" style={{ transitionDelay: "200ms" }}>
                                                                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 animate-pulse">
                                                                        </div>
                                                                        <span className="text-[10px] text-red-400/80">Exposure: SSH from any IP worldwide</span>
                                                                        </div>
                                                                        </div>
                                                                        
                                                                        </div>
                                                                        </div>
                                                                        <div className="p-6 pt-4 flex-1">
                                                                            <p className="text-lg font-medium tracking-tight text-zinc-100">
                                                                                Silent Security Gaps
                                                                                </p>
                                                                                <p className="mt-2 text-sm/6 text-zinc-400"> 
                                                                                Open ports, public S3 buckets, overly permissive IAM roles.
                                                                                Buried in noisy plan diffs that get rubber-stamped at 5pm on a Friday. 
                                                                                No policy caught it. No audit trail recorded it. </p>
                                                                                </div>
                                                                                </div>
                                                                                </div>
                                                                                <p className="mt-12 text-lg/8 text-zinc-400 text-center max-w-3xl mx-auto"> 
                                                                                Every ungoverned change is a risk that compounds silently. Drift creates compliance gaps.
                                                                                Security misconfigurations get exploited. Cost overruns burn budget with no approval trail.
                                                                                 The question isn't whether it's happening. It's how many are slipping through right now. </p>
                                                                                </div>
                                                                                </div>
        </>
    );
}