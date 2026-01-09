

export const LoadPageTransition = (nextPage)=>{
    console.log("Lodding " + nextPage + " .......")
    setTimeout(() => {
        console.log(nextPage + " Loaded")

    }, 2000);
}