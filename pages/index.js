import Link from "next/link"

function HomePage() {
  return (
    <div>this is home page.
        <ul>
            <li><Link href="/about">about</Link></li>
            <li><Link href={`/${1}/2`}>Client Page</Link></li>
            <li><Link href={`/blog/${123}/${456}`}>Blog</Link></li>
        </ul>
    </div>
  )
}

export default HomePage