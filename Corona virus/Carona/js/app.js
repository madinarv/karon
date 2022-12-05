let btn = document.querySelector('#btn')
btn.onclick=function () {
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        let datalist = ''
        data.summary.forEach(countries => {
            datalist+=` 
            <tbody>
            <tr>
             <td>"${countries.Country}"</td>   
             <td>"${countries.NewConfirmed}"</td>             
             <td>"${countries.TotalRecovered}"</td>
             <td>"${countries.TotalDeaths}"</td>
             </tr>
             </tbody>
            `    
        });
        document.getElementById('tbody').innerHTML=datalist
    })
      .catch(error=> console.log(error))
}
function Search() {
    let value = document.querySelector('#form input').value;
    fetch('https://api.covid19api.com/summary')
    .then(response => response.json())
    .then(data => {
        let datalist = ''
         data.Countries.forEach(countries => {
            if (countries.Country.includes(value)) {
            datalist+=` 
            <tbody>
            <tr>
             <td>"${countries.Country}"</td>   
             <td>"${countries.NewConfirmed}"</td>             
             <td>"${countries.TotalRecovered}"</td>
             <td>"${countries.TotalDeaths}"</td>
             </tr>
             </tbody>
            `
        }    
        })
        document.getElementById('tbody').innerHTML=datalist
        })
       } 
       

     
    
 
