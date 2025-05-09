import Image from "next/image"
import Link from "next/link"
import {SignedIn, SignedOut} from "@clerk/nextjs"
export function NavBar() {
    return <nav>
        {" "}
        <div>
            <Link href="/">
                <Image src="/logo3.png" width={60} height={60} alt="logo" />
            </Link>
        </div>
        <div>
            {" "}
            <SignedIn>

            </SignedIn>

            <SignedOut>
                
            </SignedOut>
        </div>
    </nav>
}