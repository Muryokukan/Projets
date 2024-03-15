<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Navbar</title>
    <link rel="stylesheet" href="CSS/Template.css" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Roboto+Flex:opsz,wght@8..144,100;8..144,300;8..144,500;8..144,700;8..144,900&display=swap"
      rel="stylesheet"
    />
    <script src="JS/Template.js" defer></script>
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
              <a href="services.html">Nos Services</a>
              <a href="muscu.html">Musculation</a>
              <a href="crossfit.html">Cross-Fit</a>
              <a href="meditation.html">Méditation</a>
              <a href="yoga.html">Yoga</a>
          </div>
      </div>

      <div class="nav-authentication">
          <div class="sign-btns">
              <?php if (isset($user)) : ?>

                  <a href="logout.php" class="btn-login">Log out</a>

              <?php else : ?>
                  <a href="login.php" class="btn-login">Se connecter</a>
                  <a href="signup.html" class="btn-sign">S'inscrire</a>
              <?php endif; ?>
          </div>
      </div>
  </nav>

    <div class="wrapper">
      <!------------------- login form -------------------------->
      <span class="icon-close">&#10006;</span>
      <form action="Back/login.php" method="post" class="login-container login">
        <h2>Connection</h2>
        <div class="input-box">
            <input type="text" class="input-field" placeholder="Adresse mail" name="username" />
        </div>
        <div class="input-box">
            <input type="password" class="input-field" placeholder="Mot de passe" name="password" />
        </div>
        <div class="input-box btn">
            <input type="submit" class="submit" value="Se connecter" />
        </div>
        <div class="two-col">
            <div class="one">
                <input type="checkbox" id="login-check" />
                <label for="login-check"> Se souvenir de moi</label>
            </div>
            <div class="two">
                <label><a href="#">Mot de passe oublié ?</a></label>
            </div>
        </div>
        <div class="top">
            <span>Pas encore de compte ?<a href="#" class="registerLog">S'inscrire</a></span>
        </div>
    </form>

      <!--------------- registration form -------------------->

      <form class="register-container register">
        <h2>Inscription</h2>

        <div class="input-box">
          <input type="text" class="input-field" placeholder="Nom de compte" />
        </div>
        <div class="input-box">
          <input
            type="text"
            class="input-field"
            placeholder="Adresse mail"
            required
          />
        </div>
        <div class="input-box">
          <input
            type="password"
            class="input-field"
            placeholder="Mot de passe"
            required
          />
        </div>
        <div class="input-box btn">
          <input type="submit" class="submit" value="S'inscrire" />
        </div>

        <div class="two">
          <input type="checkbox" id="conditions" /><label id="white"
            >J'accepte les</label
          >
          <label><a href="#"> conditions d'utilisations</a></label>
        </div>

        <div class="top">
          <span
            >Déjà un compte ?
            <a href="#" class="loginLog">Se connecter</a></span
          >
        </div>
      </form>
    </div>
  </body>
</html>