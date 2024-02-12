import Link from "next/link"
export default function Navbar(){
    return <div><div>Logo</div><div>
        <Link href="/About">About</Link>
        <Link href="/Contact">Contact</Link>
        <Link href="/blog">Blog</Link>

        </div></div>
}