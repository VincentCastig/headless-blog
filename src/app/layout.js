import { Lato, Open_Sans } from "next/font/google";
import './styles/styles.scss';
import Header from '../components/header';
import Footer from '../components/footer';


const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-lato',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
});

export const metadata = {
  title: "Headless Blog"
};

const Rootlayer = ({ children }) => (
  <html lang="en">
    <body className={`${openSans.className} ${lato.variable} ${openSans.variable}`}>
      <Header />
    {children}
    <Footer />
      </body>
  </html>
);

export default Rootlayer;

