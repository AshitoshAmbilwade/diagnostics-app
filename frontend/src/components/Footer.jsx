const FooterColumn = ({ title, links }) => (
  <div className="min-w-[150px]">
    <h3 className="text-white font-semibold text-sm">{title}</h3>
    <ul className="space-y-0">
      {links.map((link, index) => (
        <li key={index}>
          <a
            href="#"
            style={{
              color: "#F0F2F6",
              fontSize: "12px",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              e.target.style.textDecoration = "underline";
              e.target.style.color = "#e0e0e0";
            }}
            onMouseLeave={(e) => {
              e.target.style.textDecoration = "none";
              e.target.style.color = "#F0F2F6";
            }}
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const footerData = [
    {
      title: "Practo",
      links: ["About", "Blog", "Careers", "Press", "Contact Us"],
    },
    {
      title: "For patients",
      links: [
        "Search for doctors",
        "Search for clinics",
        "Search for hospitals",
        "Practo Plus",
        "Covid Hospital listing",
        "Practo Care Clinics",
        "Read health articles",
        "Read about medicines",
        "Practo drive",
        "Health app",
      ],
    },
    {
      title: "For doctors",
      links: ["Practo Profile"],
    },
    {
      title: "For clinics",
      links: ["Ray by Practo", "Practo Reach", "Ray Tab", "Practo Pro"],
    },
    {
      title: "For hospitals",
      links: [
        "Insta by Practo",
        "Qikwell by Practo",
        "Practo Profile",
        "Practo Reach",
        "Practo Drive",
      ],
    },
    {
      title: "For Corporates",
      links: ["Wellness Plans"],
    },
    {
      title: "More",
      links: [
        "Help",
        "Developers",
        "Privacy Policy",
        "Terms & Conditions",
        "PCS T&C",
        "Healthcare Directory",
        "Practo Health Wiki",
      ],
    },
    {
      title: "Social",
      links: ["Facebook", "Twitter", "LinkedIn", "Youtube", "Github"],
    },
  ];

  return (
    <footer className="bg-[#2C348A] text-white pt-5 pb-5">
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Main grid - split into 6 columns, flex-wrap handles overflow */}
        <div className="flex flex-wrap justify-center gap-1 mb-12">
          {footerData.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>

        {/* Logo and copyright */}
        <div className="flex flex-col items-center justify-center gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
            <h1 className="text-white text-3xl font-bold">practo</h1>
            <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
          </div>
          <p className="text-sm text-white mt-1">
            Copyright © 2017, Practo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
