const  urlSite = "https://kenzie-olimpiadas.herokuapp.com/paises"

fetch(urlSite)
.then(response => response.json())
.then(data => tratarDadosMedalhas(data))

let quadro = document.querySelector(".Quadro")

//Cria Section Linha
function criaLinha(rank, imgUrl, country, goldenMedal, silverMedal, bronzeMedal, total) {
    let section = document.createElement("section")
    section.classList.add("Linha")
    section.appendChild(criaColunaRanking(`${rank}º`))
    section.appendChild(criaColunaCountry(imgUrl, country))
    section.appendChild(criaColunaGoldenMedal(goldenMedal))
    section.appendChild(criaColunaSilverMedal(silverMedal))
    section.appendChild(criaColunaBronzeMedal(bronzeMedal))
    section.appendChild(criaColunaTotal(total))
    quadro.appendChild(section)
}

function tratarDadosMedalhas(arrayPaises) {
    let arrayPaisesOrdenados = arrayPaises.map((pais)=> pais).sort((a,b) =>  b.medal_gold - a.medal_gold)

    for(let i = 0; i<arrayPaisesOrdenados.length; i++){
        let pais = arrayPaisesOrdenados[i]
        criaLinha(
            i+1,
            pais.flag_url,
            pais.country,
            pais.medal_gold,
            pais.medal_silver,
            pais.medal_bronze,
            pais.medal_gold + pais.medal_silver + pais.medal_bronze
        )
    }
}

//Cria div ColunaRanking
function criaColunaRanking(rank) {
    let colunaRanking = document.createElement("div")
    colunaRanking.classList.add("ColunaRanking")
    colunaRanking.innerText = rank
    return colunaRanking
}

//Cria Div ColunaCountry
function criaColunaCountry(imgUrl, country) {
    let colunaCountry = document.createElement("div")
    let colunaCountryImg = document.createElement("img")
    colunaCountry.classList.add("ColunaCountry") 
    colunaCountryImg.src = imgUrl
    colunaCountryImg.alt = country
    colunaCountry.appendChild(colunaCountryImg)
    return colunaCountry
}

//Cria Div ColunaGoldenMedal
function criaColunaGoldenMedal(goldenMedal) {
    let colunaGoldenMedal = document.createElement("div")
    colunaGoldenMedal.classList.add("ColunaGoldenMedal")
    colunaGoldenMedal.innerText = goldenMedal
    return colunaGoldenMedal
}

//Cria Div ColunaSilverMedal
function criaColunaSilverMedal(silverMedal) {
    let colunaSilverMedal = document.createElement("div")
    colunaSilverMedal.classList.add("ColunaSilverMedal")
    colunaSilverMedal.innerText = silverMedal
    return colunaSilverMedal
}

//Cria div ColunaBronzeMedal
function criaColunaBronzeMedal(bronzeMedal) {
    let colunaBronzeMedal = document.createElement("div")
    colunaBronzeMedal.classList.add("ColunaBronzeMedal")
    colunaBronzeMedal.innerText = bronzeMedal
    return colunaBronzeMedal
}

//Cria div ColunaTotal
function criaColunaTotal(total) {
    let colunaTotal = document.createElement("div")
    colunaTotal.classList.add("ColunaTotal")
    colunaTotal.innerText = total
    return colunaTotal
}
