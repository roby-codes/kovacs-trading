import { FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-kt-black px-4 py-8 text-gray-300 text-center">
      <p className="text-kt-yellow text-md sm:text-lg font-bold">
        GET IN TOUCH
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <a
          href="https://twitter.com/robert_cfx"
          target="_blank"
          className="hover:text-gray-50"
          aria-label="Twitter Link"
        >
          <FaTwitter className="h-6 w-6" />
        </a>
        <a
          href="https://www.instagram.com/aka_ale_xander/"
          target="_blank"
          className="hover:text-gray-50"
          aria-label="Instagram Link"
        >
          <FaInstagram className="h-6 w-6" />
        </a>
      </div>
    </footer>
  );
}
