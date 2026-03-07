import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import FooterRow from "./FooterRow";

export default function FooterContact() {
  return (
    <section className="relative w-full min-h-screen flex flex-col pt-32 text-zinc-100">
      <div className="flex flex-col items-start w-full px-4 md:px-12 mb-24">
        <p className="text-xs md:text-sm uppercase tracking-widest text-gray-400 mb-6">
          04 // Initiate Contact
        </p>

        <div className="flex flex-row items-center gap-4 flex-nowrap whitespace-nowrap">
          <h1 className="text-[13vw] md:text-[9vw] tracking-tighter font-brolimo uppercase text-white leading-none">
            HAVE AN
          </h1>

          <h1 className="text-[13vw] md:text-[9vw] tracking-tighter font-brolimo uppercase text-orange-700 leading-none">
            IDEA?
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col mt-auto border-b border-white/20">
        <FooterRow
          title="Send a Message"
          label="arnabmistry05@gmail.com"
          icon={<MailIcon className="w-10 h-10 md:w-16 md:h-16 text-white" />}
        />

        <FooterRow
          title="GitHub"
          label="Open Source"
          icon={<GithubIcon className="w-10 h-10 md:w-16 md:h-16 text-white" />}
        />

        <FooterRow
          title="X / Twitter"
          label="Thoughts & Updates"
          icon={<TwitterIcon className="w-10 h-10 md:w-16 md:h-16 text-white" />}
        />

        <FooterRow
          title="LinkedIn"
          label="Hire Me"
          icon={<LinkedinIcon className="w-10 h-10 md:w-16 md:h-16 text-white" />}
        />
      </div>
    </section>
  );
}
