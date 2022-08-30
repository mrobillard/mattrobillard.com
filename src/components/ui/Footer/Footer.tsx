import FooterForm from './FooterForm';
import FooterLogo from './FooterLogo';

const Footer: React.FC = () => (
  <footer className="flex justify-center w-full h-[31rem] md:h-[21rem] border-t border-prussian-blue pt-[3.2rem] pb-[1.6rem]">
    <div className="flex flex-col w-full max-w-[144rem] items-center justify-between md:flex-row md:items-center  px-[2.4rem] md:px-[4rem] lg:px-[11rem]">
      <FooterForm />
      <FooterLogo />
    </div>
  </footer>
);

export default Footer;
