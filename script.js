const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

// Creating a function to strip band names of the articles "a", "an" and "the"

const strip = (bandName) => {
    return bandName.replace(/^(a |the |an )/i, '').trim();
}

// Sorting the band array based on stripped band names

const sortedBands = bands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);

// Displaying the list

document.querySelector("#bands").innerHTML = sortedBands
                            .map(band => `<li>${band}</li>`)
                            .join('');    // needed in order to get rid of the commas that appear when DOM transforms the bands array into a string
