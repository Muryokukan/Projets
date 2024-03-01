class Musee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const musees = [
  
    new Musee("imgMuseeCannoniers.jpg", "Le musée des Cannoniers"),
    new Musee("imgMuseeEcoles.jpg", "Le musée des Écoles"),
    new Musee("imgMuseeArtsForains.jpg", "Le musée des Arts Forains"),
    new Musee("imgMuseeTerroir.jpg", "Le musée du Terroir"),
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