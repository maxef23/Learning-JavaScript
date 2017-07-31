<?php

class B extends A
{



    private function PRIVATE_class_A() {
        echo "sdas";
    }

    public function PUBLIC_class_A() {
        echo "sdas";
    }

    protected function PROTECTED_class_A() {
        echo "sdas";
    }





    private function PRIVATE_class_B() {
        echo "sdas";
    }

    public function PUBLIC_class_B(){
        echo $this->first_product;
    }

    protected function PROTECTED_class_B() {
        echo "sdas";
    }


    public function show_products($query){
        while ($row = $query->fetch_assoc()) {
            echo $row['name']."<br />".'<img src="'.$row["photo"].'" width="200px" height="200px" />'."<br />"."<br />";
        }
    }
}

?>