<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="AFFICHER animaux"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="2" arrondiAuto="vrai" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="2"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#CHAINE#prenom" algoitem="prenom EST_DU_TYPE CHAINE"/>
        <item code="1#NOMBRE#age" algoitem="age EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#animaux" algoitem="animaux EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#prenom#&quot;Roger&quot;#pasliste" algoitem="prenom PREND_LA_VALEUR &quot;Roger&quot;"/>
        <item code="3#prenom#1#pasliste" algoitem="AFFICHER prenom"/>
        <item code="2#prenom#pasliste" algoitem="LIRE prenom"/>
        <item code="4#Bonjour #0" algoitem="AFFICHER &quot;Bonjour &quot;"/>
        <item code="3#prenom#0#pasliste" algoitem="AFFICHER prenom"/>
        <item code="2#age#pasliste" algoitem="LIRE age"/>
        <item code="4# vous avez #0" algoitem="AFFICHER &quot; vous avez &quot;"/>
        <item code="3#age#0#pasliste" algoitem="AFFICHER age"/>
        <item code="4# ans#1" algoitem="AFFICHER &quot; ans&quot;"/>
        <item code="2#animaux#pasliste" algoitem="LIRE animaux"/>
        <item code="4#Vous aimez les #0" algoitem="AFFICHER &quot;Vous aimez les &quot;"/>
        <item code="3#animaux#1#pasliste" algoitem="AFFICHER animaux"/>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
