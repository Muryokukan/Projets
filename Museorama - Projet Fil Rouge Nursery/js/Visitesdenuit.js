class Musee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const musees = [
    new Musee("imgMaisonPhoto.jpg", "La maison de la Photographie"),
    new Musee("imgCentreDartSacre.jpg", "Le Centre d'Art sacré de Lille"),
    new Musee("imgMuseeResistance.jpg", "Le musée de la Résistance"),
    new Musee("imgMuba.jpg", "Le MUba Eugène Leroy"),
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