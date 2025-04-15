import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-black to-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6 sm:px-8 lg:px-12">
        {/* About Us Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">About Us</h2>
          <p className="mb-4 text-sm leading-relaxed">
            Music School is a premier institution dedicated to teaching the art
            and science of music. We nurture talent from the ground up,
            fostering a vibrant community of musicians.
          </p>
        </div>

        {/* Quick Links Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="hover:text-white transition-colors duration-300"
              >
                Contact
              </Link>
            </li>
            
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <FaFacebookF size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-white transition-colors duration-300"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </Link>
          </div>
        </div>

        {/* Contact Us Section */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">Contact Us</h2>
          <p className="text-sm">Jalgaon, Maharashtra, India</p>
          <p className="text-sm">425001</p>
          <p className="text-sm">Email: info@musicschool.com</p>
          <p className="text-sm">Phone: (123) 456-7890</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center">
        <p className="text-xs text-gray-500">
          © 2025 Music School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;