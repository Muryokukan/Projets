class Musee{
    constructor(image, nom){
        this.image = image;
        this.nom = nom;
    }
}

const musees = [
    new Musee("imgPba.jpg", "Le palais des Beaux-Arts"),
    new Musee("imgMuseeHistoireNat.jpg", "Le musée d'Histoire naturelle de Lille"),
    new Musee("imgCathedraleNddlt.jpg", "La cathédrale Notre-Dame-de-la-Treille"),
    new Musee("imgHospiceComtesse.jpg", "Le musée de l'hospice comtesse"),
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