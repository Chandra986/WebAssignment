let population = {};
let worldPop = 0;
let languageAndCountries = {};
for (let i = 0; i < countries_data.length; i++) {
	let name = countries_data[i].name;
	let pop = Number(countries_data[i].population);
	worldPop += pop;
	population[name] = pop;
	for (let j = 0; j < countries_data[i]["languages"].length; j++) {
		let language = countries_data[i]["languages"][j];
		console.log(language)
		if(languageAndCountries.hasOwnProperty(language)){
			languageAndCountries[language] += 1;
		}else{
			languageAndCountries[language] = 1;
		}
	}
}


// sorting the languages according to countries

let sortedLanguage = [];
for (let data in languageAndCountries) {
	sortedLanguage.push([data, languageAndCountries[data]]);
}

sortedLanguage.sort(function (a, b) {
	return b[1] - a[1];
})


// top 10 sorted language 

sortedLanguage = sortedLanguage.splice(0,10);



// Insertion of language data in DOM

for(let i = 0; i < sortedLanguage.length; i++) {
	let name = sortedLanguage[i][0];
	let count = sortedLanguage[i][1];
	let bigBox = document.getElementsByClassName('bigBox')[0];
	let span = document.createElement('span');
	span.innerHTML = `
	<p>${name}</p>
	<div style="width:35%"> <div class="bar" style="width:${count}%"> </div></div>
	<p class="zero"> ${count} </p>`
	bigBox.appendChild(span);
}



// sorting the population of all countries
let sortable = [];
for (let data in population) {
	sortable.push([data, population[data]]);
}

sortable.sort(function (a, b) {
	return b[1] - a[1];
})

//console.log(sortable)

//top 10 polulation sorted 
sortable = sortable.splice(0, 10);

for (let i = -1; i < sortable.length; i++) {
	let name;
	let pop;
	let width;
	if (i == -1) {
		name = "World";
		pop = worldPop;
		width = 100;
	}
	else {
		name = sortable[i][0];
		pop = sortable[i][1];
		let num = worldPop/pop;
		width = 100/num;
	}
	   let parent = document.getElementsByClassName('bigBox_2')[0];
		let span = document.createElement('span');
		span.innerHTML = `<p style="width: 90px">${name}</p>
		  <div style="width:35%"> <div class="bar" style="width:${width}%"> </div> </div>
		  <p> ${pop} </p>`
		parent.appendChild(span);	
}

let button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
	let parent = document.getElementsByClassName('bigBox_2')[0];
	parent.style.display = "block"
	let bigBox = document.getElementsByClassName('bigBox')[0];
	bigBox.style.display = "none"
	let pTag = document.getElementsByTagName('p')[1];
	pTag.innerText = "10 Most populated countries in the world"

})

let langButton = document.getElementsByTagName('button')[1];
langButton.addEventListener('click', () => {
	let pTag = document.getElementsByTagName('p')[1];
	pTag.innerText = "10 Most Spoken languages in the world"
	let display = document.getElementsByClassName('bigBox_2')[0];
	display.style.display = "none"
	let bigBox = document.getElementsByClassName('bigBox')[0];
    bigBox.style.display = "block"
})




let pTag = document.getElementsByClassName("zero");