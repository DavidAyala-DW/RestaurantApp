if( 'serviceWorker' in navigator ){
    navigator.serviceWorker.register("../../sw.js" )
        .then(()=> console.log("PWA is activated... "))
        .catch(error=>console.log(error))
}else{
    console.log("XD");  
};
