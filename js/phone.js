const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    searchField.value = '';

    if (searchText == '') {


    }


    else {

        const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;

        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.data));


    }


}



const displaySearchResult = data => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    if (data.leangth == 0) {



    }


    data.forEach(data => {
        // console.log(data);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="phoneDetail(${data.data})" class="card h-100">
                <img src="${data.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title"> ${data.phone_name}</h5>
                    <p class="card-text"> ${data.brand}</p>
                  
                    <h5> ${data.slug}</h5>
                    <button>Button<button>
                     
                </div >
                </div >

    `;
        searchResult.appendChild(div);
    })
}
const phoneDetail = phoneId => {
    const url = `https://openapi.programming-hero.com/api/phone/$ {id}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearch(data[0]));
}


const displaySearch = data => {

    // console.log(data);

    const phoneData = document.getElementById('phone');
    phoneData.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src=" ${data.image}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"> ${data.phone_name}</h5>
    <p class="card-text"> ${data.brand}</p>
  
    <h5> ${data.slug}</h5>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    `;
    phoneData.appendChild(div);

}
