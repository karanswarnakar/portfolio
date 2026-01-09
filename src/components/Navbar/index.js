

export const LoadPageTrangition = (nextPage)=>{
    console.log("Lodding " + nextPage + " .......")
    setTimeout(() => {
        console.log(nextPage + " Loaded")

    }, 2000);
}