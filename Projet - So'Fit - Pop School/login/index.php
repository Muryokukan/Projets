<?php

session_start();

if (isset($_SESSION["user_id"])) {

    $mysqli = require __DIR__ . "/database.php";

    $sql = "SELECT * FROM user
            WHERE id = {$_SESSION["user_id"]}";

    $result = $mysqli->query($sql);

    $user = $result->fetch_assoc();
}

?>
<!DOCTYPE html>
<html>

<head>
    <title>Home</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="CSS/index.css" />
    <link rel="stylesheet" href="CSS/Template.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Flex:opsz,wght@8..144,100;8..144,300;8..144,500;8..144,700;8..144,900&display=swap" rel="stylesheet" />
    <script defer src="JS/Template.js"></script>
</head>

<body>

    <nav class="navbar-container">
        <a href="index.php" class="nav-icon" aria-label="homepage" aria-current="page">
            <img src="images/Logo4.png" alt="Logo Sofit accueil" />
        </a>

        <div class="main-navlinks">
            <button type="button" class="hamburger" aria-label="Toggle Navigation" aria-expanded="false">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <div class="navlinks-container">
                <a href="index.php" aria-current="page">Accueil</a>
                <a href="services.php">Nos Services</a>
                <a href="muscu.php">Musculation</a>
                <a href="crossfit.php">Cross-Fit</a>
                <a href="meditation.php">Méditation</a>
                <a href="yoga.php">Yoga</a>
            </div>
        </div>

        <div class="nav-authentication">
            <div class="sign-btns">
                <?php if (isset($user)) : ?>
                    <a href="profile.php" class="btn-login">Mon Compte</a>
                    <a href="logout.php" class="btn-login">Déconnexion</a>

                <?php else : ?>
                    <a href="login.php" class="btn-login">Se connecter</a>
                    <a href="signup.html" class="btn-sign">S'inscrire</a>
                <?php endif; ?>
            </div>
        </div>



    </nav>
    <section class="bg-fit">
        <img src="./images/bghome2.jpg" alt="Image de gauche">
        <div class="content-container">
            <h1>Entraînez-vous <br> pour une meilleure vie avec <br> <span id="sofit">So'Fit</span></h1>
            <p>Rejoignez-nous et commencez votre voyage de remise en forme aujourd'hui.</p>
            <a href="signup.html" class="cta-btn">S'inscrire</a>
        </div>
        <img src="./images/bghome.jpg" alt="Image de droite">
    </section>



</body>

</html>