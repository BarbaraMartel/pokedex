const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value;

  if(pokeName == ""){
    pokeName = "null";
  }
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;

  fetch(url).then((res) => {
    if (res.status != "200") {
      console.log(res);
    }
    else {
      return res.json();
    }
  }).then((data) => {
    if (data) {

      let myPokeName = data.name;
      console.log(myPokeName);

      let pokeImg = data.sprites.other["official-artwork"].front_default;

      let pokeMoves = data.moves;

      let pokeType = data.types[0].type.name;

      let pokeAltura = data.height;

      let pokePeso = data.weight;

      myPokeImg(pokeImg);
      myPokeType(pokeType);
      myPokeMoves(pokeMoves);
      pokemonName(myPokeName);

      myPokeAltura(pokeAltura);
      myPokePeso(pokePeso);

    }
  }).catch((error) => {
    console.log("Error: " + error);
    alert("Debe ingresar un nombre válido.");
  });
}

const myPokeImg = (url) => {
  const pokePhoto = document.getElementById("poke-img");
  pokePhoto.src = url;
}

const myPokeType = (text) => {
  const pokemonType = document.getElementById("poke-type");
  pokemonType.textContent = text;
}

const myPokeAltura = (text) => {
  const pokemonAltura = document.getElementById("poke-altura");
  pokemonAltura.textContent = text;
}

const myPokePeso = (text) => {
  const pokemonPeso = document.getElementById("poke-peso");
  pokemonPeso.textContent = text;
}

const myPokeMoves = (moves) => {
  const ulPokeMove = document.getElementById("ulMove");
  const movesNames = moves.map((item) => item.move.name);
  ulPokeMove.innerHTML = "";

  movesNames.forEach(item => {
        pokeMove = ulPokeMove.appendChild(document.createElement('li'));
        pokeMove.textContent = item;
      })
}

const pokemonName = (textName) => {
  const myPokemonName = document.getElementById("poke-name");
  myPokemonName.innerHTML = textName;
}
