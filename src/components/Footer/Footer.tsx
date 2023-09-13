import SocialIconsList from "@components/List/SocialsIconsList";
import FooterLinksList from "./FooterLinksList";

const Footer = () => {
  return (
    <div className="grid-center">
      <footer className="mb-16 flex flex-col items-center justify-center gap-8 sm:items-start">
        <SocialIconsList />
        <FooterLinksList />
        <p className="text-fs--1 font-bold text-gray-500">
          &copy; {new Date().getFullYear()} MovieBox by DaimaouDave
        </p>
      </footer>
    </div>
  );
};

export default Footer;
