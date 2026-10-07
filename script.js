const username=
"Compassion678";
const repositoriesContainer=document.getElementById("github-repositories");
const loadingMessage=document.getElementById("github-loading");
const errorMessage=document.getElementById("github-error");
fetch(`https://api.github.com/users/${username}/repos`)
    .then(Response=>{
        if(!Response.ok) {
            throw new
            Error("Unable to fetch Github repositories");
        }
        return Response.json();
    })
    .then(repositories =>{
        loadingMessage.style.display="none";
        
        repositories
        .filter(repo => repo.name
            === "portfolio-website-2026")
            .forEach(repo =>  {
            const repository =
            document.createElement("div");

            const name =
            document.createElement("h3");
            name.textContent =
            repo.name;
             const description = document.createElement("p");

             description.textContent=
             repo.description || "No description available.";

             const link = document.createElement("a");
             link.textContent= "View on Github";
             link.href =
             repo.html_url;
             link.target ="_blank";
             link.rel ="noopener noreferrer"

             repository.appendChild(name);
             repository.appendChild(description);
             repository.appendChild(link);

             repositoriesContainer.appendChild(repository);
        })
    })
        .catch(error => { loadingMessage.style.display ="none";
            errorMessage.textContent
            =
            "Sorry,we could not load the Github repositories. Please try again later.";
        });
