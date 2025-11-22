import Link from "next/link";
import { FaLinkedin ,FaSquareInstagram, FaXTwitter } from "react-icons/fa6";


const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  { label: <FaLinkedin size={30} color="black"/>, href: "https://www.linkedin.com" },
  { label: <FaSquareInstagram size={30} color="black" />, href: "https://www.instagram.com" },
  { label: <FaXTwitter size={30} color="black" />, href: "https://twitter.com" },
];

const Footer = () => {
  return (
    <footer className=" bg-[#FFFAFB] text-slate-700">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">
            Stay in the loop
          </h3>
          <p className="mt-3 text-sm text-slate-600">
            Join our mailing list for people-first HR ideas, leadership tips, and
            event invitations.
          </p>
          <form className="mt-5 flex flex-col gap-3 sm:flex-row">
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-full border border-slate-200 px-4 py-2 text-sm outline-none transition focus:border-green-900 focus:ring-1 focus:ring-green-900"
            />
            <button
              type="submit"
              className="rounded-full bg-green-950 px-6 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Contact</h3>
          <p className="mt-3 text-sm text-slate-600">
            Let&apos;s talk about supporting you to next chapter.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            <a href="tel:+447789646216" className="block font-medium text-slate-900">
              +44 (0) 7789646216
            </a>
            <a
              href="mailto:Info@cultivatehr.co.uk"
              className="block font-medium text-slate-900"
            >
              Info@cultivatehr.co.uk
            </a>
            <div className="flex flex-wrap gap-3 pt-2">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-slate-600 transition hover:text-emerald-600"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-slate-900">Quick Links</h3>
          <ul className="mt-4 space-y-2 text-sm font-medium">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-slate-600 transition hover:text-emerald-600"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-[#FFFAFB]">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>&copy; {new Date().getFullYear()} Cultivate HR. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <Link href="/privacy" className="transition hover:text-emerald-600">
              Privacy
            </Link>
            <Link href="/terms" className="transition hover:text-emerald-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
