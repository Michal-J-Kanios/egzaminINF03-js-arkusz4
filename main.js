
        function dodaj(){
            let a = +document.getElementById("A").value;
            let b = +document.getElementById("B").value;

            let wynik = document.getElementById("wynik");
            wynik.innerHTML = "Wynik: " + (a+b);
        }

        function odejmij(){
            let a = +document.getElementById("A").value;
            let b = +document.getElementById("B").value;

            let wynik = document.getElementById("wynik");
            wynik.innerHTML = "Wynik: " + (a-b);
        }

        function mnoz(){
            let a = +document.getElementById("A").value;
            let b = +document.getElementById("B").value;

            let wynik = document.getElementById("wynik");
            wynik.innerHTML = "Wynik: " + (a*b);
        }

        function dziel(){
            let a = +document.getElementById("A").value;
            let b = +document.getElementById("B").value;

            let wynik = document.getElementById("wynik");
            wynik.innerHTML = "Wynik: " + (a/b);
        }

        function poteguj(){
            let a = +document.getElementById("A").value;
            let b = +document.getElementById("B").value;

            let wynik = document.getElementById("wynik");
            wynik.innerHTML = "Wynik: " + (a**b);
        }