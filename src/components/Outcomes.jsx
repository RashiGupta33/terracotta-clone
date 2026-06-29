import Laminated from '../assets/Laminated.png';
import Support from '../assets/support.svg';

export default function Outcomes() {
    return (
        <section className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8 tracking-wide">
                <p className="text-center text-lg font-medium text-zinc-400 mb-16">
                    Real outcomes from teams that connected their repos.</p>
                <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="flex flex-col pb-10 sm:pb-16 lg:pr-8 lg:pb-0 xl:pr-20">
                        <a href="/case-study/laminatedlabs" className="self-start">
                            <img className="h-18 invert hover:opacity-80 transition-opacity duration-150" src={Laminated} alt="Laminated Labs case study" /></a>
                        <figure className="mt-8 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg/8 text-white tracking-wide">
                                <p> “The most time-consuming part of managing infra teams is the iterative loop of running Terraform,
                                    watching CI, and cleaning <br /> up failed deploys. Terracotta short-circuits that loop.” </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img className="size-14 rounded-full bg-gray-800" src="/assets/rob-christensen-DDLYqhik.jpeg" alt="Our friend Rob" />
                                <div className="text-base"><div className="font-semibold text-white">Robert Christensen</div>
                                    <div className="mt-1 text-gray-400">
                                        Former Bison Trails &amp; Coinbase Engineering Leader
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                    <div className="flex flex-col border-t border-white/10 pt-6 sm:pt-7 lg:border-t-0 lg:border-l lg:-pt-18 lg:pl-8 xl:pl-15">
                        <img className="-mt-19 -ml-8 h-33 self-start invert" src={Support} alt="" />
                        <figure className="mt-1 flex flex-auto flex-col justify-between">
                            <blockquote className="text-lg/8 text-white ml-2 -mt-4">
                                <p> “It catches cost impacts, exposed secrets, and cross PR <br /> conflicts before we trigger our pipelines.
                                    It's been a huge win <br /> for speed, compliance, and
                                    confidence across all our <br /> environments.” </p>
                            </blockquote>
                            <figcaption className="mt-10 flex items-center gap-x-6">
                                <img className="size-14 rounded-full bg-gray-800" src="/assets/tyler-pinckard-D6cTkt-E.jpeg" alt="Our friend Tyler" />
                                <div className="text-base">
                                    <div className="font-semibold text-white">
                                        Tyler Pinckard
                                    </div>
                                    <div className="mt-1 text-gray-400">
                                        Head of Software Engineering, DevOps &amp; Security at SupportLogic
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}