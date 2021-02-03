import Body from './body.jpg';
import Body2 from './body-image2.png' ;
import Body3 from './body-3.jpeg';

function Midde () {
    return (
        <>
            <hr />
            <div class="flex flex-col">
                <h1 class="flex text-5xl text-white text-center py-96 px-10" style={{ backgroundImage: 'url(' + Body2 + ')', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>Our various partnerships that allow our members access to hundreds of jobs in the Web Development/Software Tech Industry.</h1>
            </div>

            <div class="flex">
                <img class="text-center w-1/2 h-1/2" src={Body} alt=""></img>
                <img class="w-1/2"src={Body3} alt=""></img>
            </div>
        
        
        
        </>


    );
}

export default Midde;