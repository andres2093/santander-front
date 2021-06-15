# Iniciar proyecto de git
git init

# Preparar archivos que se convertirán en commit
git add .
## El punto es para agregar todos los archivos modificados

# Crear commit con su mensaje
git commit -m "Aqui va el mensaje"

# Agregar remoto "Solo la primera vez"
git remote add origin https://github.com/andres2093/santander-front.git

# Enviar commits al servidor de GitHub
git push -u origin master