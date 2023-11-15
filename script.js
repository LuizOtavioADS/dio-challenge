alert("Olá, vamos ver os heróis mais fortes da galáxia!!!")

let opcao = prompt("Vamos adicionar os heróis?")

let herois = " "

while(opcao.toLowerCase() === "sim"){

    let classe = " "
    let nomeHeroi = " "
    let xp = 0
    
    nomeHeroi = prompt("Qual nome do herói?")
    xp = prompt("Qual XP do herói?")

    if (xp <= 1000){
        classe = "Ferro"
    }else if(xp > 1000 && xp <= 2000){
        classe = "Bronze"
    }else if(xp > 2000 && xp < 5000){
        classe = "Prata"
    }else if(xp > 5000 && xp <= 7000){
        classe = "Ouro"
    }else if(xp > 7000 && xp <= 8000){
        classe = "Platina"
    }else if(xp > 8000 && xp <= 9000){
        classe = "Ascendente"
    }else if(xp > 9000 && xp <= 10000){
        classe = "Imortal"
    }else if(xp > 10000){
        classe = "Radiante"
    }

    alert(`O ${nomeHeroi} tem ${xp} de XP e é da classe ${classe}`)
    opcao = prompt("Deseja adicionar mais heróis? (Sim/Não)");
    herois += `${nomeHeroi} - XP: ${xp}, Classe: ${classe}\n`;
}
alert("Lista de Heróis Adicionados:\n" + herois);












