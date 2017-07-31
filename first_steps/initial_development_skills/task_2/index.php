<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Task 2</title>
    <link rel="stylesheet" href="styles.css" type="text/css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



    <script>


        /* When the user clicks on the button,
         toggle between hiding and showing the dropdown content */
        function myFunction() {
            document.getElementById("myDropdown").classList.toggle("show");
        }

        // Close the dropdown menu if the user clicks outside of it
        window.onclick = function(event) {
            if (!event.target.matches('.dropbtn')) {

                var dropdowns = document.getElementsByClassName("dropdown-content");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }
    </script>
</head>
<body>

<div class="dropdown">
    <button onclick="myFunction()" class="dropbtn">Dropdow Menu</button>
    <div id="myDropdown" class="dropdown-content">
        <button class="option1" >Option 1</button> <br />
        <button class="option2" >Option 2</button>
    </div>
</div>

<button onclick="show_hide('document')">Show/Hide</button>





<script>
    function show_hide(id) {
        if (document.getElementById(id)) {
            //Записываем ссылку на элемент в переменную obj
            var obj = document.getElementById(id);
            //Если css-свойство display не block, то:
            if (obj.style.display != "block") {
                obj.style.display = "block"; //Показываем элемент
            }
            else obj.style.display = "none"; //Скрываем элемент
        }

    }

</script>





<div id="document">
<div id="outFileText"></div>
</div>


<script>

    $.ajax({
        type: "POST",
        url: "test1.php",
        success:  function (data) {
            $("#outFileText").empty();
            $("#outFileText").append(data);
        }
    })

</script>


<script type="text/javascript">
    $('.option1').click( function(){
        $.ajax({
            type: "POST",
            url: "test1.php",
            success:  function (data) {
                $("#outFileText").empty();
                $("#outFileText").append(data);
            }
        })
    });
</script>


<script type="text/javascript">
    $('.option2').click( function(){
        $.ajax({
            type: "POST",
            url: "test2.php",
            success:  function (data) {
                $("#outFileText").empty();
                $("#outFileText").append(data);
            }
        })
    });
</script>


</body>
</html>