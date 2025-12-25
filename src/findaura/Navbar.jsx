import React from 'react';
import CardNav from '../components/CardNav';

const Navbar = () => {
    const items = [
        {
            label: "About",
            bgColor: "#0D0716",
            textColor: "#fff",
            links: [
                { label: "Company", ariaLabel: "About Company", href: "#" },
                { label: "Careers", ariaLabel: "About Careers", href: "#" }
            ]
        },
        {
            label: "Projects",
            bgColor: "#170D27",
            textColor: "#fff",
            links: [
                { label: "Featured", ariaLabel: "Featured Projects", href: "#" },
                { label: "Case Studies", ariaLabel: "Project Case Studies", href: "#" }
            ]
        },
        {
            label: "Contact",
            bgColor: "#271E37",
            textColor: "#fff",
            links: [
                { label: "Email", ariaLabel: "Email us", href: "#" },
                { label: "Twitter", ariaLabel: "Twitter", href: "#" },
                { label: "LinkedIn", ariaLabel: "LinkedIn", href: "#" }
            ]
        }
    ];

    return (
        <div className="sticky top-0 z-50 h-32 w-full">
            <CardNav
                logo="/FindAura..png"
                logoAlt="Findaura Logo"
                items={items}
                baseColor="#fff"
                menuColor="#000"
                buttonBgColor="#111"
                buttonTextColor="#fff"
                ease="power3.out"
                showLogo={false}
                showButton={false}
            />
        </div>
    );
};

export default Navbar;
