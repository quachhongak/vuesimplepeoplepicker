<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css' />
    <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.7.0/css/all.css'>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css' />

    <!-- Jquery -->
    <script src='https://code.jquery.com/jquery-3.5.1.min.js'></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.1/umd/popper.min.js"></script>

    <!-- Vue -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.js'></script>
    <!-- 3rd party -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/js/bootstrap.min.js'></script>

    <!-- Bootstrap select -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/css/bootstrap-select.min.css">

    <script src="https://cdn.jsdelivr.net/npm/bootstrap-select@1.13.14/dist/js/bootstrap-select.min.js"></script>

    <script src='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js'></script>
    <!-- Pnp -->
    <script src='https://cdnjs.cloudflare.com/ajax/libs/sp-pnp-js/3.0.10/pnp.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/7.4.4/polyfill.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/es6-promise/4.1.1/es6-promise.min.js'></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/fetch/3.0.0/fetch.min.js'></script>

    <script src="js/app.js"></script>
    <script src="js/peoplepicker.js?ver=1.0"></script>
</head>
<body>
    <div id="app">
        <div v-if="test">
            <peoplepicker
            baseurl="https://niftitusa.sharepoint.com/sites/khoa/vusppeoplepicker/"
            label="Selected user"
            :multiple="true"
            :displaydesc="true"
            rootdata="selectedPeople"
            :defaultdata="users"
        ></peoplepicker>
        </div>
    </div>
</body>
</html>