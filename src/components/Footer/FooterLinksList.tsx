const FOOTERLINKS = [
  {
    linkName: "Conditions of use",
    url: "#",
  },
  {
    linkName: "Privacy & Policy",
    url: "#",
  },
  {
    linkName: "Press Room",
    url: "#",
  },
];

const FooterLinksList = () => {
  return (
    <div className="flex items-center gap-8 sm:flex-col sm:items-start sm:gap-y-4">
      {FOOTERLINKS.map((link, i) => (
        <a
          key={i}
          href={link.url}
          target="_blank"
          className="text-lg font-bold text-gray-900 transition duration-200 hover:text-secondary-500"
          rel="noreferrer"
        >
          {link.linkName}
        </a>
      ))}
    </div>
  );
};

export default FooterLinksList;
