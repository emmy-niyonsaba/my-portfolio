// Navbar.jsx
const Navbar = () => {
    return (
        <nav className="bg-black text-white p-4 flex gap-6 sticky top-0">
            <a href="#resume" className="hover:text-amber-400">Resume</a>
            <a href="#skills" className="hover:text-amber-400">Skills</a>
            <a href="#projects" className="hover:text-amber-400">Projects</a>
            <a href="#footer" className="hover:text-amber-400">Footer</a>
        </nav>
    );
};

export default Navbar;
