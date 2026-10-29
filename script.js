function getProjects(){
  const urlGithub = 'https://api.github.com/users/leosantosCODED77/repos'
  var loadingElement = document.getElementById('loading')

  fetch(urlGithub,{
    method:'GET'
  })
  .then((response) => response.json())
  .then((response) => {
    loadingElement.style.display = 'none'
    showProjects(response)
  }
)
.catch((e) =>{
  console.log(e)
})
}

function showProjects(data){
 var listElement = document.getElementById('projects-list')

 for(let i = 0; i < data.length; i++)
 {
  let a = document.createElement("a")
  a.href = data[i] ['clone_url']
  a.target = '_blank'
  a.title = data[i] ['descripition']
  let linkText = document.createTextNode( data[i] ['name'])
  a.appendChild(linkText)
  listElement.appendChild(a)
 }
}

getProjects()

