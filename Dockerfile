# Utilisez une image de base, par exemple, un serveur web Nginx pour le frontend
FROM nginx:latest

# Copiez les fichiers du frontend dans le conteneur
COPY . /usr/share/nginx/html

# Exposez le port sur lequel le serveur web du frontend écoute
EXPOSE 80
