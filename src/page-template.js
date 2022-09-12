

const templateData = (team) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        
        ${generateCards(team)}
    
    </body>
    </html>`;
}

const generateCards = (team) => {

    cards = "";
    for (let i = 0;i < team.length;i++) {
        if (team[i].getRole() === "Manager") {
            cards += `
            <div class="employee-card">
            <h2>${team[i].getName()}</h2>
            <h3>${team[i].getRole()}</h3>
            <p>${team[i].getId()}</p>
            <p>${team[i].getEmail()}</p>
            <div class="other-data">${team[i].office}</div>
            </div>
            `;
        }
        else if (team[i].getRole() === "Engineer") {
            cards += `
            <div class="employee-card">
            <h2>${team[i].getName()}</h2>
            <h3>${team[i].getRole()}</h3>
            <p>${team[i].getId()}</p>
            <p>${team[i].getEmail()}</p>
            <div class="other-data">${team[i].github}</div>
            </div>
            `;
        }
        else {
            cards += `
            <div class="employee-card">
            <h2>${team[i].getName()}</h2>
            <h3>${team[i].getRole()}</h3>
            <p>${team[i].getId()}</p>
            <p>${team[i].getEmail()}</p>
            <div class="other-data">${team[i].school}</div>
            </div>
            `;
        }
    }
    return cards;
}

module.exports = templateData;