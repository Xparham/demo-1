import heroImage from './hero3.jpeg';

function Hero () {
    return (
        <>
            <div class="flex flex-col h-screen text-center" style= {{ backgroundImage: 'url(' + heroImage + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} >
                <div class="flex flex-col px-10 py-8 m-32 mx-48 text-center bg-black border-2 border-yellow-400 rounded-md">
                    <h1 class="text-6xl text-white bold pb-6">Welcome <span id="user"></span></h1>
                    <h1 class="text-3xl text-white bold">You may begin your journey looking for the right career via our search portal.</h1>
                </div>
                <button id="search" class="flex justify-center p-6 font-bold text-white bg-black shadow-xl rounded-md hover:bg-yellow-400"><a href="results.html">Begin Searching Now</a></button>
            </div>
        </>
    );
}

export default Hero;