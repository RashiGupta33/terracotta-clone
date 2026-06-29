export default function PullRequest() {
    return (
        <>
        <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
                <h2 className="text-center text-base/7 font-semibold text-orange-500">
                Automated governance on every change
                </h2>
                <p className="mx-auto mt-2 text-center text-4xl font-semibold tracking-tight text-balance text-zinc-100 sm:text-5xl"> 
                    Every pull request audited for security, compliance, cost, and drift. Automatically. </p>
                    <p className="mt-6 text-lg/8 text-zinc-400 text-center max-w-4xl mx-auto"> 
                    Policy enforcement, security analysis, cost governance, and drift detection on every IaC pull request.
                    Delivered as a PR comment with a full audit trail. No extra tools. 
                    No manual review gates.
                    </p>
                    <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2">
                        <div className="group relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col">
                            <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60">
                            <div className="relative h-85 overflow-hidden flex items-center justify-center p-6">
                                <div className="w-full max-w-sm space-y-3">
                                    <div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700">
                                        <div className="flex items-center gap-2 mb-3 transition-all duration-500 opacity-100 translate-y-0">
                                            <img src="/logo.svg" className="w-4 h-4" alt=""/>
                                            <p className="text-[11px] text-orange-400 font-medium">
                                                Cost Analysis
                                                </p>
                                            </div>
                                            <div className="space-y-2.5">
                                                <div className="flex items-center justify-between transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 300ms;">
                                                    <span className="text-[11px] text-zinc-400">aws_rds_instance.main</span>
                                                    <span className="text-[11px] font-medium text-red-400">+$342/mo</span>
                                                    </div>
                                                    <div className="flex items-center justify-between transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 550ms;">
                                                        <span className="text-[11px] text-zinc-400">aws_elasticache_cluster.cache</span>
                                                        <span className="text-[11px] font-medium text-red-400">+$128/mo</span>
                                                        </div>
        <div className="flex items-center justify-between transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 800ms;">
            <span className="text-[11px] text-zinc-400">aws_nat_gateway.private</span>
        <span className="text-[11px] font-medium text-green-400">$32/mo</span>
        </div>
        <div className="border-t border-zinc-700 pt-2 flex items-center justify-between transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 1100ms;">
            <span className="text-xs text-zinc-300 font-medium">Total impact</span>
            <span className="text-xs text-red-400 font-semibold">+$438/mo</span>
            </div>
            </div>
            </div>
            <div className="rounded-lg bg-zinc-800 px-5 py-3 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 1400ms;">
                <div className="flex items-center justify-between">
                    <span className="text-[11px] text-zinc-500">Annual projection</span>
                    <span className="text-[11px] text-amber-400 font-medium">+$5,256/yr</span>
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    <div className="p-8 pt-5">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 tracking-wide uppercase">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3"></circle>
                            </svg> 
                            Cost Governance </span>
                            <a href="/features/cost-analysis" className="mt-3 block text-xl font-semibold text-zinc-100 hover:text-orange-400 transition-colors duration-150">
                            Know exactly what a change costs before it's approved</a>
                            <p className="mt-2 text-sm text-zinc-400">
                                Per-resource cost breakdown with annual projections. 
                                Enforce cost approval thresholds so no change ships without budget sign-off. 
                                </p>
                                </div>
                                </div>
                                <div className="group relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col">
                                    <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60">
                                    <div className="relative h-85 overflow-hidden flex items-center justify-center p-6">
                                        <div className="w-full max-w-sm space-y-3">
                                            </div>
                                            <div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700">
                <div className="flex items-center gap-2 mb-3 transition-all duration-500 opacity-100">
                    <img src="/logo.svg" className="w-4 h-4" alt=""/>
                    <p className="text-[11px] text-orange-400 font-medium">Drift Report</p>
                    <span className="ml-auto rounded-full bg-amber-500/15 px-2 py-0.5 text-[10px] text-amber-400 font-medium transition-all duration-300 opacity-100 scale-100" style="transition-delay: 900ms;">3 drifted</span>
                    </div>
                    <div className="space-y-2">
                        <div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 200ms;">
                        <div className="flex items-center justify-between">
                            <span className="text-[11px] text-zinc-300">aws_security_group.web</span>
                            <span className="text-[10px] text-amber-400">modified</span>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-1">
                                ingress rule added outside of Terraform</p>
                                </div>
                                <div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 500ms;">
                                <div className="flex items-center justify-between">
                                    <span className="text-[11px] text-zinc-300">aws_iam_role.lambda</span>
        <span className="text-[10px] text-amber-400">modified</span>
        </div>
        <p className="text-[10px] text-zinc-500 mt-1">policy document changed via console</p></div>
        <div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 800ms;">
        <div className="flex items-center justify-between">
            <span className="text-[11px] text-zinc-300">aws_s3_bucket.assets</span>
            <span className="text-[10px] text-red-400">deleted</span>
            </div>
            <p className="text-[10px] text-zinc-500 mt-1">
                resource removed outside of code</p>
                </div>
                </div>
                </div>
                </div>
                </div>
                </div>
                <div className="p-8 pt-5">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 tracking-wide uppercase">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8">
                        <circle cx="4" cy="4" r="3"></circle></svg>
                        Drift Detection </span>
                        <a href="/features/drift-detection" className="mt-3 block text-xl font-semibold text-zinc-100 hover:text-orange-400 transition-colors duration-150">
                        See what's drifted before your next audit</a>
                        <p className="mt-2 text-sm text-zinc-400"> 
                            Field-level drift comparison across 119 AWS resource types. Surface 
                            console edits, manual applies, and deleted resources that create compliance gaps 
                            between your code and your live environment. 
                            </p>
                            </div>
                            </div>
                            <div className="group relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col">
                                <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60">
                                <div className="relative h-85 overflow-hidden flex items-center justify-center p-6">
                                    <div className="w-full max-w-sm space-y-3">
                                        <div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700">
                                            <div className="flex items-center gap-2 mb-3 transition-all duration-500 opacity-100">
                                                <img src="/logo.svg" className="w-4 h-4" alt=""/><p className="text-[11px] text-orange-400 font-medium">
                                                    Security Findings</p>
                                                    </div>
                                                    <div className="space-y-2">
                                                        <div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 300ms;">
        <div className="flex items-center gap-2">
            <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] text-red-400 font-medium transition-transform duration-300 scale-100" style="transition-delay: 500ms;">Critical</span>
            <span className="text-[11px] text-zinc-300">Public S3 bucket</span>
            </div>
            <p className="text-[10px] text-zinc-500 mt-1">aws_s3_bucket.uploads has public read enabled</p>
            </div>
            <div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 650ms;">
            <div className="flex items-center gap-2">
                <span className="rounded-full bg-red-500/15 px-2 py-0.5 text-[10px] text-red-400 font-medium transition-transform duration-300 scale-100" style="transition-delay: 850ms;">High</span>
                <span className="text-[11px] text-zinc-300">Open port 22</span>
                </div>
                <p className="text-[10px] text-zinc-500 mt-1">
                    Security group allows SSH from 0.0.0.0/0</p>
                    </div>
                    </div>
                    </div>
                    <div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 1100ms;">
                        <p className="text-[11px] text-zinc-500 mb-2">IAM Least-Privilege Check</p>
                        <div className="space-y-1.5">
                            <div className="flex items-center gap-2 transition-all duration-400 opacity-100" style="transition-delay: 1300ms;">
                                <div className="w-2 h-2 rounded-full bg-amber-400"></div>
                                <span className="text-[11px] text-zinc-400">iam_role.deploy has <span className="text-amber-400">s3:*</span>. Overly permissive</span></div>
                                <div className="flex items-center gap-2 transition-all duration-400 opacity-100" style="transition-delay: 1500ms;">
                                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                    <span className="text-[11px] text-zinc-400">iam_role.reader follows least-privilege</span>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    <div className="p-8 pt-5">
                                        <span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 tracking-wide uppercase">
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg> 
        Security &amp; IAM </span>
        <a href="/features/security" className="mt-3 block text-xl font-semibold text-zinc-100 hover:text-orange-400 transition-colors duration-150">Security violations flagged and documented before merge</a>
        <p className="mt-2 text-sm text-zinc-400"> 
            Open ports, public buckets, and overly permissive IAM flagged with severity and blast radius context. 
            Every finding creates an audit record. Your team reviews a finding, not a 400-line plan diff. </p>
            </div></div>
            <div className="group relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col">
                <div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60">
                <div className="relative h-85 overflow-hidden flex items-center justify-center p-6">
                    <div className="w-full max-w-sm space-y-3">
                        <div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0">
                            <p className="text-[11px] text-zinc-500 mb-2">Guardrail input</p>
                            <p className="text-xs text-zinc-300 leading-relaxed">
            <span>"All S3 buckets must be private"</span></p>
            <div className="mt-3 inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-[11px] transition-all duration-300 bg-orange-500/20 text-orange-400 ring-1 ring-orange-500/30" style="transition-delay: 100ms;"> 
            Create Guardrail <svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path></svg>
                </div></div>
                <div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700 transition-all duration-600 opacity-100 translate-y-0" style="transition-delay: 200ms;">
                    <div className="flex items-center gap-2 mb-3">
                        <p className="text-xs text-zinc-300 font-medium">Require private S3 buckets</p>
                        <div className="flex gap-1.5 ml-auto"><span className="rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] text-green-400 font-medium transition-all duration-300 scale-100 opacity-100" style="transition-delay: 600ms;">Enabled</span>
                        <span className="rounded-full bg-zinc-700 px-2 py-0.5 text-[10px] text-zinc-400">Global</span></div></div><div className="space-y-2"><div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 400ms;"><p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Rule</p><p className="text-[11px] text-zinc-400">S3 buckets must block public access.</p></div><div className="rounded-md bg-zinc-900/60 px-3 py-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 650ms;"><p className="text-[10px] text-zinc-500 uppercase tracking-wider mb-0.5">Rule</p><p className="text-[11px] text-zinc-400">Require cost review on anything over $500/mo.</p></div></div></div></div></div></div><div className="p-8 pt-5"><span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 tracking-wide uppercase">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg> 
            Policy Enforcement </span>
            <a href="/features/guardrails" className="mt-3 block text-xl font-semibold text-zinc-100 hover:text-orange-400 transition-colors duration-150">Write your governance policies in plain English. Enforce them on every PR.</a><p className="mt-2 text-sm text-zinc-400"> Define your organization's standards: "All S3 buckets must be private." "Require cost approval over $500/mo." "No public database endpoints." Enforced automatically across every repo. No Rego. No Sentinel. No policy-as-code expertise required. </p></div></div><div className="group relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col"><div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60"><div className="relative h-85 overflow-hidden flex items-center justify-center p-6"><div className="w-full max-w-sm space-y-3"><div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0"><div className="flex items-center gap-2 mb-2"><div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div><p className="text-[11px] text-zinc-300 font-medium">S3 bucket publicly accessible</p></div><p className="text-[10px] text-zinc-500">aws_s3_bucket.uploads missing public access block</p></div><div className="flex justify-center transition-all duration-500 opacity-100 scale-100" style="transition-delay: 600ms;"><div className="w-6 h-6 rounded-full bg-orange-500/10 flex items-center justify-center"><svg className="w-3 h-3 text-orange-400" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"></path></svg></div></div><div className="rounded-lg bg-zinc-800 px-5 py-4 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 900ms;"><div className="flex items-center gap-2 mb-2.5">
                <img src="/logo.svg" className="w-4 h-4" alt=""/>
            <p className="text-[11px] text-orange-400 font-medium">Auto-Fix Applied</p>
            <span className="ml-auto rounded-full bg-green-500/15 px-2 py-0.5 text-[10px] text-green-400 font-medium transition-all duration-300 opacity-100 scale-100">Committed</span></div><p className="text-[10px] text-zinc-500 mb-1.5">aws_s3_bucket_public_access_block.uploads</p><div className="font-mono text-[11px] space-y-0.5"><p className="text-green-400/80 transition-all duration-400 opacity-100 translate-x-0" style="transition-delay: 1200ms;"><span className="text-green-500/50 select-none">+ </span>block_public_acls       = true</p><p className="text-green-400/80 transition-all duration-400 opacity-100 translate-x-0" style="transition-delay: 1400ms;"><span className="text-green-500/50 select-none">+ </span>block_public_policy     = true</p><p className="text-green-400/80 transition-all duration-400 opacity-100 translate-x-0" style="transition-delay: 1600ms;">
            <span className="text-green-500/50 select-none">+ </span>ignore_public_acls      = true</p>
            <p className="text-green-400/80 transition-all duration-400 opacity-100 translate-x-0" style="transition-delay: 1800ms;"><span className="text-green-500/50 select-none">+ </span>restrict_public_buckets = true</p></div></div></div></div></div><div className="p-8 pt-5"><span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 tracking-wide uppercase"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg> Auto-Remediation </span><h3 className="mt-3 text-xl font-semibold text-zinc-100">Don't just flag violations. Fix them.</h3><p className="mt-2 text-sm text-zinc-400"> Remediation proposals generated and applied directly to the PR branch. Your team reviews a compliant solution, not a violation report. </p></div></div><div className="group relative rounded-2xl bg-zinc-900 overflow-hidden flex flex-col"><div className="m-3 mb-0 rounded-xl bg-zinc-950 ring-1 ring-zinc-800/60"><div className="relative h-85 overflow-hidden flex items-center justify-center p-6"><div className="w-full max-w-sm space-y-3"><div className="grid grid-cols-3 gap-2"><div className="rounded-lg bg-zinc-800 px-3 py-3 ring-1 ring-zinc-700 text-center transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 0ms;"><p className="text-lg font-bold text-zinc-100">247</p><p className="text-[10px] text-zinc-500">PRs reviewed</p></div><div className="rounded-lg bg-zinc-800 px-3 py-3 ring-1 ring-zinc-700 text-center transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 200ms;"><p className="text-lg font-bold text-green-400">98%</p><p className="text-[10px] text-zinc-500">Policy compliance</p></div><div className="rounded-lg bg-zinc-800 px-3 py-3 ring-1 ring-zinc-700 text-center transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 400ms;">
                <p className="text-lg font-bold text-orange-400">3</p>
                <p className="text-[10px] text-zinc-500">Active alerts</p></div></div>
                <div className="rounded-lg bg-zinc-800 px-4 py-3 ring-1 ring-zinc-700 space-y-2.5">
                    <p className="text-[11px] text-zinc-500 font-medium transition-all duration-500 opacity-100" style="transition-delay: 700ms;">Recent activity</p><div className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 900ms;"><div className="w-1.5 h-1.5 rounded-full bg-green-400"></div><span className="text-[11px] text-zinc-400">acme/infra PR #312 passed all guardrails</span></div><div className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 1200ms;"><div className="w-1.5 h-1.5 rounded-full bg-amber-400"></div><span className="text-[11px] text-zinc-400">acme/platform drift detected in us-east-1</span></div><div className="flex items-center gap-2 transition-all duration-500 opacity-100 translate-x-0" style="transition-delay: 1500ms;"><div className="w-1.5 h-1.5 rounded-full bg-red-400"></div><span className="text-[11px] text-zinc-400">acme/core PR #89 blocked by security guardrail</span></div></div><div className="rounded-lg bg-zinc-800 px-4 py-3 ring-1 ring-zinc-700 transition-all duration-500 opacity-100 translate-y-0" style="transition-delay: 1800ms;"><div className="flex items-center justify-between"><span className="text-[11px] text-zinc-400">Teams using Terracotta</span><div className="flex -space-x-1.5"><div className="w-5 h-5 rounded-full ring-1 ring-zinc-700 transition-all duration-300 bg-blue-500/30 opacity-100 scale-100" style="transition-delay: 2000ms;"></div><div className="w-5 h-5 rounded-full ring-1 ring-zinc-700 transition-all duration-300 bg-purple-500/30 opacity-100 scale-100" style="transition-delay: 2100ms;"></div><div className="w-5 h-5 rounded-full ring-1 ring-zinc-700 transition-all duration-300 bg-green-500/30 opacity-100 scale-100" style="transition-delay: 2200ms;"></div>
                <div className="w-5 h-5 rounded-full bg-zinc-600 ring-1 ring-zinc-700 flex items-center justify-center transition-all duration-300 opacity-100 scale-100" style="transition-delay: 2300ms;"><span className="text-[8px] text-zinc-300">+4</span></div></div></div></div></div></div></div><div className="p-8 pt-5"><span className="inline-flex items-center gap-1.5 rounded-full bg-orange-500/10 border border-orange-500/20 px-3 py-1 text-xs font-semibold text-orange-400 tracking-wide uppercase"><svg className="w-3 h-3" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="3"></circle></svg> Governance Dashboard </span><a href="/features" className="mt-3 block text-xl font-semibold text-zinc-100 hover:text-orange-400 transition-colors duration-150">Security posture, drift status, and compliance across every repo. One view.</a><p className="mt-2 text-sm text-zinc-400"> The fleet-wide governance view your CISO keeps asking for. Drift posture, policy compliance rates, security findings, and cost trends across every repo and every team. </p></div></div></div></div></div>
        </>
    );
}