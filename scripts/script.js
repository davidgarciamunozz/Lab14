const container = document.getElementById("main-container")

async function getCharacters() {

    const response = await fetch(' https://rickandmortyapi.com/api/character ');
    const data = await response.json();
    console.log(data);

    const characters = 
         data.results.map((element) => {
            return parseJsonToCharacter(element)
        })

    // TODO: Recorra la lista json obtenida y convierta cada elemento (mapa) en un objeto Character y agreguelo a la lista characters
    

    renderAllCharacters(characters)
}

function parseJsonToCharacter(element) {
    // TODO: Retorna un objeto de tipo "Character" a partir de un mapa (element) pasado como parametro
    return new Character(element.name, element.image, element.status, element.species, element.location.name)

}

function renderAllCharacters(characters) {
    characters.forEach(character => {
        container.innerHTML += character.toHtml()
    })
}

getCharacters()