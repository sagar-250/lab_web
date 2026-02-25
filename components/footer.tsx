import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-bold mb-4">About HGC Lab</h3>
            <p className="text-sm opacity-75">
              Advancing hydro-climatology and geospatial data science for sustainable water resources management.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-75 hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/people" className="opacity-75 hover:opacity-100 transition">
                  People
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-75 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h4 className="font-bold mb-4">Research</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Publications
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="opacity-75 hover:opacity-100 transition">
                  Data
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-sm opacity-75">
              IIT Madras
              <br />
              Chennai, India
            </p>
            <p className="text-sm opacity-75 mt-2">Email: hgclab@iitm.ac.in</p>
          </div>
        </div>

        <div className="border-t border-secondary-foreground/20 pt-8">
          <p className="text-center text-sm opacity-75">
            © 2025 HydroGeoClimatic Lab, IIT Madras. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
