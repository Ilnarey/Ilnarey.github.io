<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Document</title>
  <link rel="stylesheet" href="css/bootstrap.css">
  <link rel="stylesheet" href="css/main.css">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</head>
<body>
    <header class="container-fluid d-flex  align-items-center">  
      <div class="cont col-12 d-flex justify-content-between align-items-center">

      <div class="container-list col-8 d-flex justify-content-between align-items-center">
        <a href="#" class="b0 col-4" >PiPiLaPu</a>
        <a href="#" class="b1 col-1">Главное</a>
        <a href="#" class="b3 col-1">Корзина</a>
        <a href="file:///D:/VisualStudio/РПИ/start-clean/profil.html" class="b4 col-1">Профиль</a>
      </div>
      <div class="container-menu col-2">  
        <a href="Регистрация.html" class="badge badge-pill badge-primary ">Регистрация</a>
        <a href="file:///D:/VisualStudio/РПИ/start-clean/Вход.html" class="badge badge-pill badge-secondary ">Вход</a>
      </div>
        </div>
    </header>

    <main class="main">
      <div class="search col-12 d-flex justify-content-center">
        <form id="form" role="search">
          <input type="search" id="query" name="q"
           placeholder="Поиск"
           aria-label="Search through site content">
          <button>Найти</button>
        </form>
        </div>
        <p></p>
      <div class="container-carusel col-12 d-flex justify-content-center align-items-center"> 
        <div id="carouselExampleCaptions" class="carousel slide col-10"> 
          <div class="carousel-indicators"> 
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button> 
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button> 
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> 
          </div> 
          <div class="carousel-inner"> 
            <div class="carousel-item active"> 
              <img src="img/1.jpg" class="d-block w-100" alt="..."> 
              <div class="carousel-caption d-none d-md-block"> 
                <h5>Покупай цветы с доставкой</h5> 
                <p>Тел. 8-800-555-35-35</p> 
              </div> 
            </div> 
            <div class="carousel-item"> 
              <img src="img/2ц.jpg" class="d-block w-100" alt="..."> 
              <div class="carousel-caption d-none d-md-block"> 
                <h5>Принимаем заказы ежедневно и круглосуточно</h5> 
                <p></p> 
              </div> 
            </div> 
            <div class="carousel-item"> 
              <img src="img/3ц.jpg" class="d-block w-100" alt="..."> 
              <div class="carousel-caption d-none d-md-block"> 
                <h5>Авторские букеты и композиции с доставкой</h5> 
                <p></p> 
              </div> 
            </div> 
            <div class="carousel-item"> 
              <img src="img/4ц.jpg" class="d-block w-100" alt="..."> 
              <div class="carousel-caption d-none d-md-block"> 
                 
                <p>Сборные букеты от 2 590 руб.</p>
                <p> Монобукеты от 2 590 руб.</p>
                <p> Композиции в коробке от 2 990 руб.</p>
                <p> Композиции в корзинеот от 2 990 руб. </p>
              </div> 
            </div> 
          </div> 
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev"> 
            <span class="carousel-control-prev-icon" aria-hidden="true"></span> 
            <span class="visually-hidden">Previous</span> 
          </button> 
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next"> 
            <span class="carousel-control-next-icon" aria-hidden="true"></span> 
            <span class="visually-hidden">Next</span> 
          </button> 
        </div> 
      </div>
    <div class="container-card">
    <div class="card-group col-12 d-flex justify-content: between marjin-top: 10px">
      <div class="card">
        <img src="img/РОзы.jpg" class="card-img-top" height="45%" alt="...">
        <div class="card-body">
          <h5 class="card-title">Розы</h5>
          <p class="card-text">3000 руб.</p>
          <p class="card-text"><small class="text-body-secondary">3500 руб.</small></p>
          <div class="card-body">
            <a href="#" class="card-link">Добавить в корзину</a>
          </div>
        </div>
      </div>
      <div class="card">
        <img src="img/Гипосфилы.jpg" class="card-img-top" height="45%" alt="...">
        <div class="card-body">
          <h5 class="card-title">Гипсофилы</h5>
          <p class="card-text">2600 руб.</p>
          <p class="card-text"><small class="text-body-secondary">2900 руб.</small></p>
          <div class="card-body">
            <a href="#" class="card-link">Добавить в корзину</a>
          </div>
        </div>
      </div>
      <div class="card" > 
        <img src="img/Тюльпаны.jpg" class="card-img-top" height="45%" alt="...">
        <div class="card-body">
          <h5 class="card-title">Тюльпаны</h5>
          <p class="card-text">2700 руб.</p>
          <p class="card-text"><small class="text-body-secondary">3000 руб.</small></p>
          <div class="card-body">
            <a href="#" class="card-link">Добавить в корзину</a>
          </div>
        </div>
        </div>
      </div>
    </div>
  </main>
  <dno class="dno">
    <div class="dnoo">
      <img src="img/dno.png" alt="dnooo">
    </div>
  </div>
    
  <script src="js/main.js"></script>
</body>
</html>
