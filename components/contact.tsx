"use client";

import { useState } from "react";
import Image from "next/image";

function BankDetails() {
  const [isOpen, setIsOpen] = useState(false);

  return (
<div className="mt-4 max-w-[320px]">
  <div className="border border-gold/20 rounded-xl overflow-hidden bg-cream/5">
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className="w-full flex items-center justify-between px-3 py-2.5"
    >
      <span className="text-gold font-medium uppercase tracking-wider text-[11px]">
        Bank Details
      </span>

      <svg
        className={`w-4 h-4 text-gold transition-transform duration-300 ${
          isOpen ? "rotate-180" : ""
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M19 9l-7 7-7-7"
        />
      </svg>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-[300px]" : "max-h-0"
      }`}
    >
      <div className="p-3 border-t border-gold/10">
        <div className="grid grid-cols-[90px_1fr] gap-x-2 gap-y-2 text-xs text-cream/90">

          <span className="text-gold/60 uppercase text-[10px]">
            Account No
          </span>
          <span className="font-mono text-[11px]">
            0000 0000 0000
          </span>

          <span className="text-gold/60 uppercase text-[10px]">
            IFSC
          </span>
          <span className="font-mono text-[11px]">
            ABCD0000000
          </span>

          <span className="text-gold/60 uppercase text-[10px]">
            Name
          </span>
          <span className="text-[11px]">
            Dummy Name
          </span>

          <span className="text-gold/60 uppercase text-[10px]">
            Branch
          </span>
          <span className="text-[11px]">
            Dummy Branch
          </span>

          <span className="text-gold/60 uppercase text-[10px]">
            Bank
          </span>
          <span className="text-[11px]">
            Dummy Bank Ltd.
          </span>

        </div>

        <p className="mt-3 pt-2 border-t border-gold/10 text-[9px] text-cream/60 italic">
          * Fees may vary based on the student's country or region.
        </p>
      </div>
    </div>
  </div>
</div>
  );
}

function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    const text = `Hello Vedhya School,%0A%0AI would like to get in touch.%0A%0A*Name:* ${name}%0A*Email:* ${email}%0A*Phone:* ${phone}%0A*Message:* ${message}`;

    window.open(
      `https://wa.me/919249027951?text=${text}`,
      "_blank"
    );
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
      <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
        <div>
          <label
            htmlFor="contact-name"
            className="block text-[10px] font-bold tracking-wider uppercase text-maroon/60 mb-2"
          >
            Your Name
          </label>

          <input
            id="contact-name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full bg-transparent border-b border-maroon/20 py-2.5 text-maroon focus:outline-none focus:border-gold transition-colors text-sm font-semibold"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="block text-[10px] font-bold tracking-wider uppercase text-maroon/60 mb-2"
          >
            Email Address
          </label>

          <input
            id="contact-email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full bg-transparent border-b border-maroon/20 py-2.5 text-maroon focus:outline-none focus:border-gold transition-colors text-sm font-semibold"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="contact-phone"
          className="block text-[10px] font-bold tracking-wider uppercase text-maroon/60 mb-2"
        >
          Phone Number
        </label>

        <input
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className="w-full bg-transparent border-b border-maroon/20 py-2.5 text-maroon focus:outline-none focus:border-gold transition-colors text-sm font-semibold"
        />
      </div>

      <div>
        <label
          htmlFor="contact-message"
          className="block text-[10px] font-bold tracking-wider uppercase text-maroon/60 mb-2"
        >
          Your Message
        </label>

        <textarea
          id="contact-message"
          name="message"
          rows={4}
          required
          className="w-full bg-transparent border-b border-maroon/20 py-2.5 text-maroon focus:outline-none focus:border-gold transition-colors resize-none text-sm font-semibold"
        />
      </div>

      <button
        type="submit"
        className="w-full inline-flex items-center justify-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-cream bg-saffron px-8 py-4 rounded-full hover:bg-saffron/90 transition-all shadow-md group"
      >
        <span>Send via WhatsApp</span>

        <svg
          className="w-4 h-4 bg-cream text-saffron rounded-full p-0.5 transition-transform duration-300 group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </form>
  );
}

export function Contact({
  isHeaderH1 = false,
}: {
  isHeaderH1?: boolean;
}) {
  const HeadingTag = isHeaderH1 ? "h1" : "h2";

  return (
    <section
      id="contact"
      className="relative py-20 md:py-32 bg-ink text-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-12 relative z-10 font-sans">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
          {/* Left Side */}
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start">
              <div className="hidden sm:block shrink-0 w-[120px] md:w-[140px]">
                <div className="relative aspect-[1/2] rounded-[1.5rem] overflow-hidden border border-gold/15 shadow-xl">
                  <Image
                    src="/contact_diya.webp"
                    alt="Lit traditional brass diya lamp"
                    width={140}
                    height={280}
                    quality={85}
                    className="w-full h-full object-cover"
                    sizes="140px"
                  />
                </div>
              </div>

              <div className="space-y-5 flex-1">
                <span className="text-[10px] font-bold tracking-[0.25em] text-saffron uppercase block">
                  GET IN TOUCH
                </span>

                <HeadingTag className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight text-cream">
                  Let's begin your journey together.
                </HeadingTag>

                <div className="space-y-4 pt-2 text-sm text-cream/80">
                  <a
                    href="mailto:connect@vedhyaschool.com"
                    className="flex items-start gap-3 hover:text-gold transition-colors"
                  >
                    <span>📧</span>
                    <span className="break-all">
                      connect@vedhyaschool.com
                    </span>
                  </a>

                  <a
                    href="tel:+919249027951"
                    className="flex items-center gap-3 hover:text-gold transition-colors"
                  >
                    <span>📞</span>
                    <span>+91 9249027951</span>
                  </a>

                  <div className="flex items-start gap-3">
                    <span>📍</span>
                    <span>
                      Vedhya School Of Arts & Wellness, India
                    </span>
                  </div>
                </div>

                <BankDetails />
              </div>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-cream text-maroon rounded-[2rem] sm:rounded-[2.5rem] p-6 sm:p-8 md:p-10 shadow-2xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}