"use client";

import { GithubIcon, LinkedinIcon, MailIcon, TwitterIcon } from "lucide-react";
import FooterRow from "./FooterRow";

export default function FooterContact() {
  const openExternal = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="relative w-full min-h-screen flex flex-col pt-16 sm:pt-24 md:pt-36 text-zinc-100 justify-between">
      <div className="flex flex-col items-start w-full px-4 sm:px-8 md:px-12 mb-12 sm:mb-16 md:mb-24">
        <p className="text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-widest text-zinc-400 mb-4 sm:mb-6">
          04 // Initiate Contact
        </p>

        <div className="flex flex-row items-center gap-2 sm:gap-4 flex-nowrap whitespace-nowrap">
          <h1 className="text-[11.5vw] sm:text-[11vw] md:text-[9vw] tracking-tighter font-brolimo uppercase text-white leading-none">
            HAVE AN
          </h1>

          <h1 className="text-[11.5vw] sm:text-[11vw] md:text-[9vw] tracking-tighter font-brolimo uppercase text-orange-700 leading-none">
            IDEA?
          </h1>
        </div>
      </div>

      <div className="w-full flex flex-col mt-auto border-b border-white/20">
        <FooterRow
          title="Send a Message"
          label="arnabmistry05@gmail.com"
          icon={<MailIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white" />}
          onClick={() => {
            window.location.href = "mailto:arnabmistry05@gmail.com";
          }}
        />

        <FooterRow
          title="GitHub"
          label="Open Source"
          icon={<GithubIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white" />}
          onClick={() => openExternal("https://github.com/ArnabMistry")}
        />

        <FooterRow
          title="X / Twitter"
          label="Thoughts & Updates"
          icon={
            <TwitterIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white" />
          }
          onClick={() => openExternal("https://x.com/arnabcore")}
        />

        <FooterRow
          title="LinkedIn"
          label="Hire Me"
          icon={
            <LinkedinIcon className="w-8 h-8 sm:w-10 sm:h-10 md:w-16 md:h-16 text-white" />
          }
          onClick={() =>
            openExternal("https://www.linkedin.com/in/arnabmistry")
          }
        />
      </div>

      {/* FOOTER BOTTOM META BAR */}
      <div className="w-full px-4 sm:px-8 md:px-12 py-6 sm:py-8 md:py-10 flex flex-col sm:flex-row justify-between items-center text-[10px] sm:text-xs text-zinc-400 uppercase tracking-[0.25em] gap-2 pb-10 sm:pb-8">
        <span>© {new Date().getFullYear()} ARNAB MISTRY</span>
        <span>KOLKATA, IN — 22.5726° N, 88.3639° E</span>
      </div>
    </section>
  );
}
