let contador = 0;

        document.getElementById('subirparriba').addEventListener('click', () => {
            contador++;
            document.getElementById('contador').textContent = contador;
        }); 

        document.getElementById('bajarpabajo').addEventListener('click', () => {
            contador--;
            document.getElementById('contador').textContent = contador;
        });

