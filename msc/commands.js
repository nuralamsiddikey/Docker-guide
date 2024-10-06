// docker --version
// docker pull Image
// docker images
// docker run Image
// docker run -d Image
// docker ps
// docker stop Container-id/name
// docker start Container-id/name
// docker ps -a
// docker remove Container-id/name
// docker remove -f Container-id/name
// docker container prune
// docker run -d --rm --name customName Image
// docker run -d --rm --name customName -p 8080:80 Image
// docker logs Container-id/name
// docker logs -f Container-id/name
// docker attach Container-id/name
// docker inspect Container-id/name
// docker exec -it Container-id/name bash/sh
// docker exec --user root -it Container-id/name sh
// exit
// docker exec Container-id/name  ls  /
// docker cp fileName Container-id/name:/directory
// docker cp Container-id/name:/directory fileName .(currentDirectory)
// /usr/share/nginx/html
// docker build -t imageName:tag .
// docker run -d --rm --env PORT=5000 --name -p 8080:80 customName Image
// docker run -d --rm -v volumeName:/cont.directory/ --env PORT=5000 --name customName -p 8080:80 Image
// docker volume ls
// docker volume create volumeName
// docker run -d --rm -v exactFolderORexactFilename:/cont.directoryOrFilename/ --env PORT=5000 --name -p 8080:80 customName Image
// docker login
// docker-compose up -d
// docker-compose down
// docker network ls
// docker network create networkName


// image - a package that contains all codes and configuration files
// container - a lightweight virtual isolated environment with some installed software or configuratgion that runs the slim/scratch images
// volumes - a filesystem in the host machine that controlled only by the docker where data is persisted(kept in long-lasting way)
// network - to establish communication amoung the containers and the host machine.