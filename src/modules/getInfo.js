
// async/await function to get info
const api = '0aff7433d8134f0e52e316a4d33747ad'
const getInfo = async function(place){
    const url =`http://api.openweathermap.org/data/2.5/weather?q=${place}&APPID=${api}`;

    try{
        const response = await fetch(url, {
            mode:'cors'
        })
        if(response.ok){
            const data = await response.json()
            return data;
        }
        else{
            throw new Error(response.status + " Failed Fetch ");
        }     

    }

    catch(e){
        console.log(e)

    }
}



export default getInfo;