let title = document.getElementById ('titulo')
console.log(title)
let tituloLength = document.getElementById ('titulo-length')
title.addEventListener ('input', function (event) {
let inputLenght = title.value.length
tituloLength.innerText = `${inputLenght}/70`
}
)

let introduction = document.getElementById ('important')
console.log(introduction)
let importantLength = document.getElementById ('important-length')
introduction.addEventListener ('input', function (event) {
let inputLenght = introduction.value.length
importantLength.innerText = `${inputLenght}/5000`
}
)

let climax = document.getElementById ('amazing')
console.log(climax)
let amazingLength = document.getElementById ('amazing-length')
climax.addEventListener ('input', function (event) {
let inputLenght = climax.value.length
amazingLength.innerText = `${inputLenght}/5000`
}
)

let know = document.getElementById ('knowledge')
console.log(know)
let knowledgeLength = document.getElementById ('knowledge-length')
know.addEventListener ('input', function (event) {
let inputLenght = know.value.length
knowledgeLength.innerText = `${inputLenght}/5000`
}
)

let end = document.getElementById ('learning')
console.log(end)
let learningLength = document.getElementById ('learning-length')
end.addEventListener ('input', function (event) {
let inputLenght = end.value.length
learningLength.innerText = `${inputLenght}/5000`
}
)

let source = document.getElementById ('bibliography')
console.log(source)
let bibliographyLength = document.getElementById ('bibliography-length')
source.addEventListener ('input', function (event) {
let inputLenght = source.value.length
bibliographyLength.innerText = `${inputLenght}/5000`
}
)


