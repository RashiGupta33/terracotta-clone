import Laminated from "../assets/Laminated.png";
import Support from "../assets/support.svg";
import Nvision from "../assets/Nvision.svg";

export default function TrustedBy() {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <p className="mb-8 text-center text-sm font-semibold text-zinc-500 tracking-wide">
          Trusted by platform engineering teams at
        </p>

        <div className="mask-fade relative overflow-hidden">
          <div className="animate-scroll flex w-max items-center gap-16 sm:gap-24">
            {/* Laminated Labs */}
            <img
              src={Laminated}
              alt="Laminated Labs"
              className="h-8 shrink-0 object-contain opacity-50 invert sm:h-10"
            />

            {/* SupportLogic */}
            <img
              src={Support}
              alt="SupportLogic"
              className="h-8 shrink-0 object-contain opacity-50 invert sm:h-10"
            />

            {/* NVISIONx */}
            <img
              src={Nvision}
              alt="NVISIONx"
              className="h-8 shrink-0 object-contain opacity-50 sm:h-10"
              style={{ filter: "brightness(0) invert(1)" }}
            />

            {/* Duplicate logos for infinite scrolling */}
            <img
              src={Laminated}
              alt="Laminated Labs"
              className="h-8 shrink-0 object-contain opacity-50 invert sm:h-10"
            />

            <img
              src={Support}
              alt="SupportLogic"
              className="h-8 shrink-0 object-contain opacity-50 invert sm:h-10"
            />

            <img
              src={Nvision}
              alt="NVISIONx"
              className="h-8 shrink-0 object-contain opacity-50 sm:h-10"
              style={{ filter: "brightness(0) invert(1)" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}