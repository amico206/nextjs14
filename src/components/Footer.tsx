import styles from '@/styles/components/Footer.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className={`${styles.footer} bg-dark text-white text-center py-4`}>
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>About Us</h5>
            <p className="mb-0">MyApp is a demo application built with Next.js and Bootstrap.</p>
          </div>
          <div className="col-md-4 mb-3 mb-md-0">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><Link href="/" className="text-white">Home</Link></li>
              <li><Link href="/about" className="text-white">About</Link></li>
              <li><Link href="/contact" className="text-white">Contact</Link></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact</h5>
            <p className="mb-0">Email: contact@myapp.com</p>
            <p className="mb-0">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="mb-0">© {new Date().getFullYear()} MyApp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;