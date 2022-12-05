let btn = document.querySelector('#btn')
btn.onclick = function () {
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => {
            let datalist = ''
            data.summary.forEach(countries => {
                console.log(countries);
                datalist += ` 
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
            document.getElementById('tbody').innerHTML = datalist
        })
        .catch(error => console.log(error))
}
function Search() {
    let value = document.querySelector('#form input').value;
    fetch('https://api.covid19api.com/summary')
        .then(response => response.json())
        .then(data => {
            let count = 0
            let datalist = ''
            data.Countries.forEach(countries => {
                if (condition) {

                }
                if (countries.Country.includes(value)) {
                    datalist += ` 
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
            if (count === 0) {
                document.querySelector('.page_404').classList.remove('d-none')
            }
            else {
                document.querySelector('.page_404').classList.add('d-none')
            }
            document.getElementById('tbody').innerHTML = datalist
        })
        .catch(error => console.log(error))
}





