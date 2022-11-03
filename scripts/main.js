const button = document.getElementById("sortBtn")

button.addEventListener("click", () => {
    getData()
})


async function getData(){
    const response= await fetch("https://rickandmortyapi.com/api/character")
    const data= await response.json();
    console.log(response)
    console.log(data)
    length=data.results.length;
    console.log(length)
    var temp="";
    
    for(i=0;i<length;i++)
    {
        // temp+="<tr>";
        // temp+="<td>"+data.drinks[i].strDrink+"</td>";
        // temp+="<td>"+data.drinks[i].strInstructions+"</td>";
        temp +=
        `
        <div class="container"  >
            <div class="child">
                <img id="image" src="${data.results[i].image}" id="image" alt="">     
            </div>      
            <div class="about">
                <b>Name : </b>${data.results[i].name} <br>
                <b>Species : </b>${data.results[i].species} <br>
                <b>Status : </b>${data.results[i].status} <br>
                <b>Gender : </b>${data.results[i].gender} <br>
                <b>Location : </b>${data.results[i].location.name}
            </div>           
        </div>
        `
    }
    document.body.innerHTML +=temp;
}   









