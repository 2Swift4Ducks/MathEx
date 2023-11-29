// Import Parent Element (Body) Into JS-File
let parent = document.getElementById('parent')

// Function To Declare Headers Per Section
function declareHeader(text) {
	// Create Header 2 Element
	let header = document.createElement('h2')
	header.textContent = text

	// Create Horizontal Rule Element
	let hr = document.createElement('hr')

	// Append Both Elements To Parent
	parent.appendChild(header)
	parent.appendChild(hr)
}

// Create DOM
declareHeader('Aufgabe 6: Anwendungsaufgabe')



// Create Task 6

let timeHour = Math.round(Math.random() * 6 + 10)
let pointQ = {x: Math.round(Math.random() * 10 - 5) / 10, y: Math.round(Math.random() * 10 - 5) / 10, z: -1}

// Create General Containers
let section = document.createElement('div')
section.classList = 'section'

let hstack = document.createElement('div')
hstack.classList = 'hstack'

let vstack = document.createElement('div')
vstack.classList = 'vstack'

parent.appendChild(section)
section.appendChild(hstack)
hstack.appendChild(vstack)



// Create Description
let description = document.createElement('p')
description.textContent = `Ein U-Boot befindet sich im Ozean um ${timeHour}:00 Uhr am Punkt P(0|0|0) an der Wasseroberfläche, die durch die x1-x2-Ebene beschrieben wird. Nach einer Stunde befindet das U-Boot sich am Punkt Q.`

let equation_1 = document.createElement('p')
equation_1.textContent = `\\[Q(${pointQ.x}|${pointQ.y}|${pointQ.z})\\]`
equation_1.classList = 'latex'

// Create Description Image
let image = document.createElement('img')
image.src = './assets/submarine.png'

// Create Information Text
let information = document.createElement('p')
information.textContent = 'Alle Koordinaten sind in Kilometern angegeben. Die x3-Achse zeigt nach oben, die x1-x2-Ebene verläuft auf dem Boden.'

// Append Description and Image
vstack.appendChild(description)
vstack.appendChild(equation_1)
hstack.appendChild(image)
section.appendChild(information)



// Create Subtasks
let tasks = document.createElement('ol')

let a_time = Math.round(Math.random() * 4) / 2 + 2
let task_a = document.createElement('li')
task_a.textContent = `Bestimmen Sie, wo das U-Boot sich bei gleichbleibender Geschwindigkeit und konstantem Kurs nach ${a_time} Stunden befindet.`

let b_depthParam = Math.round(Math.random() * 2 + 1) / 2 + 4
let task_b = document.createElement('li')
task_b.textContent = `Ermitteln Sie, wo das U-Boot sich in einer tiefe von ${b_depthParam * 1000}m befindet.`

let c_depthParam = Math.round(Math.random() * 3 + 1) + 0.5
let c_mineOffset = Math.round(Math.random())
console.log(c_mineOffset)
let task_c = document.createElement('li')
task_c.textContent = 'Eine Unterwassermine befindet sich im Punkt R. Wird das U-Boot mit der Unterwassermine kollidieren?'

let task_d = document.createElement('li')
task_d.textContent = 'Berechnen Sie die Geschwindigkeit des U-Boots.'

let task_e = document.createElement('li')
task_e.textContent = 'In welchem Winkel sinkt das U-Boot? Nutzen Sie die Wasseroberfläche als Bezugspunkt.'

let f_depthCoords = {x: pointQ.x * 6, y: pointQ.y * 6, z: pointQ.x * 6}
let f_vecV = {x: Math.round(Math.random() * 4) + 3, y: Math.round(Math.random() * 4) + 3, z: Math.round(Math.random() * 2 - 1)}
console.log(f_vecV)
let task_f = document.createElement('li')
task_f.textContent = 'In einer Tiefe von 6000m schießt das U-Boot einen Torpedo in die Richtung des Vektors v. Ermitteln Sie, ob der Torpedo die 100x100m große Zielscheibe E treffen wird.'

section.appendChild(tasks)
tasks.appendChild(task_a)
tasks.appendChild(task_b)
tasks.appendChild(task_c)
tasks.appendChild(task_d)
tasks.appendChild(task_e)
tasks.appendChild(task_f)

// Additional Information

let notice = document.createElement('p')
notice.textContent = 'Hinweise zu den Aufgaben'
notice.classList = 'notice'

let pointR = document.createElement('p')
pointR.textContent = `\\[R(${(Math.round(pointQ.x * c_depthParam * 100) + c_mineOffset) / 100}|${Math.round(pointQ.y * c_depthParam * 100) / 100}|${pointQ.z * c_depthParam})\\]`
pointR.classList = 'latex'

let vecV = document.createElement('p')
vecV.textContent = `\\[\\vec{v}=\\begin{pmatrix}${f_vecV.x}\\\\${f_vecV.y}\\\\${f_vecV.z}\\end{pmatrix}\\]`
vecV.classList = 'latex'

let planeE = document.createElement('p')
planeE.textContent = `\\[E:\\vec{x}=\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}+r\\cdot\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}+s\\cdot\\begin{pmatrix}x\\\\y\\\\z\\end{pmatrix}\\]`
planeE.classList = 'latex'

section.appendChild(notice)
section.appendChild(pointR)
section.appendChild(vecV)
section.appendChild(planeE)



// End of Document
let btn_solutions = document.createElement('button')
btn_solutions.textContent = 'Lösungen anzeigen'

parent.appendChild(btn_solutions)
