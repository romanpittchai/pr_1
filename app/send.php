<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8" />
    <title>Residential complex</title>
    <meta name="description" content="Startup HTML template OptimizedHTML 5" />
    <meta name="viewport" content="width=device-width" />
    <link rel="icon" href="images/favicon.png" />
    <link rel="stylesheet" href="css/app.min.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <div class="container__under">
        <div class="screen-messege">
          <?php
          $emailbase = "your-email@gmail.com";
          $fio = $_POST['fio'];
          $email = $_POST['email'];
          $fio = htmlspecialchars($fio);
          $email = htmlspecialchars($email);
          $fio = urldecode($fio);
          $email = urldecode($email);
          $fio = trim($fio);
          $email = trim($email);
          if (mail($emailbase, "Заявка с сайта",
          "ФИО: ".$fio.". E-mail: ".$email ,"From: vip@housevip.ru \r\n")) { ?>
          <div class="messege__under">
            <p class="messege__under-text">
             <?php echo "<script> 
                        document.write('Сообщение успешно отправлено'); 
                        </script>"; } 
                       
             else { ?>
            </p>
          </div>
          <div class="messege__under">
            <p class="messege__under-text">
            <?php echo 'При отправке сообщения возникли ошибки' ;}  ?>
            </p>
          </div>
        </div>
        </div>
      </div>
    </div>
    <script src="js/libs/jquery.js"></script>
    <script src="js/libs/jquery.min.js"></script>
    <script src="js/libs/jquery.slim.js"></script>
    <script src="js/libs/jquery.magnific-popup.min.js"></script>
    <script src="js/libs/jquery.magnific-popup.js"></script>
    <script src="js/app.min.js"></script>
    <script src="js/app.js"></script>
  </body>
</html>


