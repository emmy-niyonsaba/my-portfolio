const Navbar = ({ sections = [], activeSection, onNavigate }) => {
    return (
        <header className="navbar">
            <div className="navbar__inner">
                <div className="navbar__brand" aria-label="Emmanuel Niyonsaba brand">
                    <span className="navbar__mark">EN</span>
                    <span className="navbar__text">Portfolio</span>
                </div>

                <nav className="navbar__links" aria-label="Primary">
                    {sections.map(({ id, label }) => (
                        <button
                            key={id}
                            type="button"
                            className={`navbar__link ${activeSection === id ? 'is-active' : ''}`}
                            onClick={() => onNavigate?.(id)}
                        >
                            {label}
                        </button>
                    ))}
                </nav>

                <button
                    type="button"
                    className="navbar__cta"
                    onClick={() => onNavigate?.('footer')}
                >
                    Hire me
                </button>
            </div>
        </header>
    );
};

export default Navbar;
