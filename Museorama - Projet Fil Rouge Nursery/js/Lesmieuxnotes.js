class Musee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const musees = [
    new Musee("imgPiscineRoubaix.jpg", "La piscine de Roubaix"),
    new Musee("imgLam.jpg", "Le LaM"),
    new Musee("imgChateauFlers.jpeg", "Le musée du Château de Flers"),
    new Musee("imgInstitutPasteur.jpg", "Le musée de l'institut Pasteur"),
]

const containerMusee = document.getElementById("musees");

for (const musee of musees) {

const item = document.createElement("div");
item.classList.add("item");
const imageItem = document.createElement("img");
imageItem.src = `../Images/${musee.image}`;
const h3Item = document.createElement("h3");
h3Item.textContent = musee.nom;
item.appendChild(imageItem);
item.appendChild(h3Item);

containerMusee.appendChild(item);
}