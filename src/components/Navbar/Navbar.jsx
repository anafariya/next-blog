import { auth } from "@/lib/auth";
import Links from "./links/Links";
import Link from "next/link";

const Navbar = async () => {
    const session = await auth()
    console.log(session)
    return (
        <div>
            <div className="flex items-center justify-between bg-pink-100 p-4">
                <Link href="/">
                    <button className="bg-pink-300 hover:bg-pink-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Logo</button>
                </Link>
            </div>
            <div>
                <Links session = {session} />
            </div>
        </div>
    );
};

export default Navbar;
