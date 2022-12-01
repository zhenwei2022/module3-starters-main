target = document.querySelector("#target")
target.setAttribute('class','my-list')

li1= document.createElement('li')
li2= document.createElement('li')
li3= document.createElement('li')
li1.innerHTML = 'First item'
li2.innerHTML = 'Second item'
li3.innerHTML = 'Third item'
target.appendChild(li1)
target.appendChild(li2)
target.appendChild(li3)
