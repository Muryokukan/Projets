<?xml version="1.0" encoding="UTF-8"?>
<Algo>
    <description texte="" courant="LIRE continuer"/>
    <extension extnom="inactif"/>
    <fonction fctcode="" fctetat="inactif"/>
    <F2 F2defaut="" F2para="" F2etat="inactif" F2lignes=""/>
    <repere repcode="-10#10#-10#10#2#2" repetat="inactif"/>
    <param epaisseurPoint="5" arrondiAuto="vrai" totalBoucles="5000000" maxBoucle="500000" nbDecimales="8" totalAffichages="1000" epaisseurLigne="5"/>
    <item code="200#declarationfonctions" algoitem="FONCTIONS_UTILISEES"/>
    <item code="100#declarationsvariables" algoitem="VARIABLES">
        <item code="1#NOMBRE#passagers" algoitem="passagers EST_DU_TYPE NOMBRE"/>
        <item code="1#NOMBRE#i" algoitem="i EST_DU_TYPE NOMBRE"/>
        <item code="1#CHAINE#continuer" algoitem="continuer EST_DU_TYPE CHAINE"/>
    </item>
    <item code="101#debutalgo" algoitem="DEBUT_ALGORITHME">
        <item code="5#passagers#5#pasliste" algoitem="passagers PREND_LA_VALEUR 5"/>
        <item code="2#passagers#pasliste" algoitem="LIRE passagers"/>
        <item code="12#i#1#passagers" algoitem="POUR i ALLANT_DE 1 A passagers">
            <item code="13#debutpour" algoitem="DEBUT_POUR"/>
            <item code="4#Bienvenu au passager n°#0" algoitem="AFFICHER &quot;Bienvenu au passager n°&quot;"/>
            <item code="3#i#1#pasliste" algoitem="AFFICHER i"/>
            <item code="14#finpour" algoitem="FIN_POUR"/>
        </item>
        <item code="5#continuer#&quot;oui&quot;#pasliste" algoitem="continuer PREND_LA_VALEUR &quot;oui&quot;"/>
        <item code="15#continuer == &quot;oui&quot;" algoitem="TANT_QUE (continuer == &quot;oui&quot;) FAIRE">
            <item code="16#debuttantque" algoitem="DEBUT_TANT_QUE"/>
            <item code="4#Vous avez visiter notre site#1" algoitem="AFFICHER &quot;Vous avez visiter notre site&quot;"/>
            <item code="4#voulez vous continuer ?#1" algoitem="AFFICHER &quot;voulez vous continuer ?&quot;"/>
            <item code="2#continuer#pasliste" algoitem="LIRE continuer"/>
            <item code="17#fintantque" algoitem="FIN_TANT_QUE"/>
        </item>
    </item>
    <item code="102#finalgo" algoitem="FIN_ALGORITHME"/>
</Algo>
