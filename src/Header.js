import Man from './avatar.jpg';

function Header () {
    return (
     <>
         <div className="flex items-center justify-between px-6 py-6 mx-auto bg-black">
            <h1 className="pl-6 text-2xl font-bold text-white lg:text-4xl">Gradus</h1>
               
            <div className="block lg:">
               
        </div>
            <div className="flex items-center">
                <ul className="flex items-center text-white space-x-2">
                    <li><a className="px-4 hover:underline hover:text-yellow-400" href="index.html">Home</a></li>
                    <li><a className="px-4 hover:underline hover:text-yellow-400" href="/">Job Seekers</a></li>
                    <li><a className="px-4 hover:underline hover:text-yellow-400" href="/">Employers</a></li>
                    <li><a className="px-4 hover:underline hover:text-yellow-400" href="/">About</a></li>
                    <li><a className="px-4 hover:underline hover:text-yellow-400" href="contact.html">Contact Us</a></li>
                    <li><img className="h-10 w-10 rounded-full" src={Man} alt=""></img></li>
                    <li><a className="px-4 font-bold hover:underline hover:text-yellow-400" href="landing-page.html">Sign Out</a></li>
                </ul>
            </div>
        </div>
     </>

    );
}

export default Header;