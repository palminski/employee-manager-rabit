

const templateData = (team) => {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>

    <div class="jumbotron jumbotron-fluid bg-primary mb-5 text-center">
        <h1 class="text-light py-3">Your Team</h1>
    </div>

    <div class="container">
        <div class="row gx-3 gy-3 justify-content-center">

            ${generateCards(team)}

        </div>
    </div>

</body>
</html>`;
}

const generateCards = (team) => {

    cards = "";
    for (let i = 0;i < team.length;i++) {
        if (team[i].getRole() === "Manager") {
            cards += `
            <div class="col-4">
                <div class="card bg-primary" style="max-width: 18rem;">
                    <div class="card-title text-light px-3 pt-1">${team[i].getRole()}</div>
                    <div class="card-body text-center bg-secondary">
                        <h5 class="card-title text-light">${team[i].getName()}</h5>
                            <p class="card-text text-light">Employee ID: ${team[i].getId()}</p>
                            <p class="card-text text-light">Email: ${team[i].getEmail()}</p>
                            <p class="card-text text-light">Office Number ${team[i].getOffice()}</p>
                    </div>
                </div>
            </div>
            `;
        }
        else if (team[i].getRole() === "Engineer") {
            cards += `
            <div class="col-4">
                <div class="card bg-danger" style="max-width: 18rem;">
                    <div class="card-title text-light px-3 pt-1">${team[i].getRole()}</div>
                    <div class="card-body text-center bg-secondary">
                        <h5 class="card-title text-light">${team[i].getName()}</h5>
                            <p class="card-text text-light">Employee ID: ${team[i].getId()}</p>
                            <p class="card-text text-light">Email: ${team[i].getEmail()}</p>
                            <a href="https://github.com/${team[i].getGithub()}" class="card-text text-light">Github: ${team[i].getGithub()}</a>
                    </div>
                </div>
            </div>
            `;
        }
        else {
            cards += `
            <div class="col-4">
                <div class="card bg-success" style="max-width: 18rem;">
                    <div class="card-title text-light px-3 pt-1">${team[i].getRole()}</div>
                    <div class="card-body text-center bg-secondary">
                        <h5 class="card-title text-light">${team[i].getName()}</h5>
                            <p class="card-text text-light">Employee ID: ${team[i].getId()}</p>
                            <p class="card-text text-light">Email: ${team[i].getEmail()}</p>
                            <p class="card-text text-light">School: ${team[i].getSchool()}</p>
                    </div>
                </div>
            </div>
            `;
        }
    }
    return cards;
}

module.exports = templateData;