<?php

$is_invalid = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $mysqli = require __DIR__ . "/database.php";

    $sql = sprintf(
        "SELECT * FROM user
                    WHERE email = '%s'",
        $mysqli->real_escape_string($_POST["email"])
    );

    $result = $mysqli->query($sql);

    $user = $result->fetch_assoc();

    if ($user) {

        if (password_verify($_POST["password"], $user["password_hash"])) {

            session_start();

            session_regenerate_id();

            $_SESSION["user_id"] = $user["id"];

            header("Location: profile.php");
            exit;
        }
    }

    $is_invalid = true;
}

?>
<!DOCTYPE html>
<html>

<head>
    <title>Home</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="CSS/login.css" />
    <link rel="stylesheet" href="CSS/Template.css" />
    <script defer src="JS/Template.js"></script>
</head>

<body>

    <nav class="navbar-container">
        <a href="Home.html" class="nav-icon" aria-label="homepage" aria-current="page">
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
                    <p>Hello <?= htmlspecialchars($user["name"]) ?></p>
                    <div>
                        <p><a href="logout.php" class="btn-login">Log out</a></p>
                        <p><a href="signup.html" class="btn-sign">S'inscrire</a></p>
                    </div>
                <?php else : ?>
                    <a href="login.php" class="btn-login">Se connecter</a>
                    <a href="signup.html" class="btn-sign">S'inscrire</a>
                <?php endif; ?>
            </div>
        </div>
    </nav>
    

    <?php if ($is_invalid) : ?>
        <em>Mauvais login</em>
    <?php endif; ?>


    



    <div class="form-container">
        <h1>Connection</h1>
        <form method="post">
        
        <input type="email" placeholder="Adresse mail" name="email" id="email" value="<?= htmlspecialchars($_POST["email"] ?? "") ?>">

        <input type="password" placeholder="Mot de passe" name="password" id="password">

        <button>Se connecter</button>
    </form>
    </div>
</body>

</html>