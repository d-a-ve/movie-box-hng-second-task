const SOCIALS = ["facebook", "instagram", "twitter", "youtube"];

const SocialIconsList = () => {
  return (
    <div className="flex items-center gap-8 xs:flex-wrap">
      {SOCIALS.map((social, i) => (
        <a key={i} href="#" target="_blank" className="block">
          <img
            src={`/assets/svg/${social}.svg`}
            alt={`${social} logo`}
            className="h-6 w-6 transition duration-200 hover:scale-125"
          />
        </a>
      ))}
    </div>
  );
};

export default SocialIconsList;
