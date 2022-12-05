let btn = document.querySelector('#btn')
btn.onclick=function (){
    let value = document.querySelector('#btn').value;
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        let datalist = ''
         data.Countries.forEach(countries => {
            if (countries.TotalDeaths>10000) {
            datalist+=` 
            <tbody>
            <tr>
             <td>"${countries.Country}"</td>   
             <td> "${countries.TotalDeaths}"</td>
             </tr>
             </tbody>
            `
        }    
        })
        document.getElementById('tbody').innerHTML=datalist
        })
       } 