"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function Navbar() {

  const pathName = usePathname();
  // console.log(pathName)
  const router = useRouter()

  const navLinks = [
    {
      path: '/',
      title: 'Home',
    },
    {
      path: '/about',
      title: 'About',
    },
    {
      path: '/blog',
      title: 'Blog',
    },
    {
      path: '/posts',
      title: 'Posts',
    },
    {
      path: '/dashboard',
      title: 'Dashboard',
    },
  ];

  const handler = () => {
router.push('/login')
  }
  

  return (
    <nav
      className={`py-4 bg-blue-950 bg-opacity-45 text-green-600 font-semibold flex gap-6 justify-between items-center px-4 h-16 font-mono`}
    >
      {/* logo */}
      <h4 className="text-xl italic">Next <span className="text-yellow-600 not-italic">Hero</span></h4>
      {/* menu */}
      <ul className="flex gap-4">
        {navLinks.map((link, idx) => <li key={link.title}>
          <Link className={`${pathName === link.path && 'text-yellow-600 border-b px-1 border-yellow-600'}`} href={link.path}>{link.title}</Link>
        </li>)}
      </ul>

      {/* login */}
      <button  className="border px-4 py-1 rounded-lg border-green-600 text-yellow-600">
        <Link href="/login">Login</Link>
      </button>
    </nav>
  );
}
export default Navbar