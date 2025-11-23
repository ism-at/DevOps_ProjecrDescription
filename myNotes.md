# Branch name:
        main

# Techstack

        Neon: Serverless PostgresSQL
        Warp: Warp writes code tailored to your codebase --> https://www.warp.dev/
        Arject: Bot detection. Rate limiting. Email validation. Attack protection. Data redaction
        Drizzel: ORM
        NodeJS
        Doker
        Kubernated
        Jest: Unit-Testing
        CI/CD

# ELK:
        The ELK Stack, now called the Elastic Stack, is a set of three (or four with the addition of Beats) open-source tools used for searching, analyzing, and visualizing large volumes of data in real-time.

# Min:  
        1:40 - 1:45 Vol and reflect the changes
        1:47 --> EXAMPLE OF DOCKER COMPOSE

# Video Paused at:
        1:55 Kubernated

# About Docker:
        Build Image --> Container --> mapping to host
        All those steps can be complished with 'composite'/ docker compose up

# Kubernates installation
        kubectl: Tasks-install-Tool https://kubernetes.io/docs/tasks/tools/install-kubectl-macos/#install-with-homebrew-on-macos

        minikube: https://minikube.sigs.k8s.io/docs/start/?arch=%2Fmacos%2Fx86-64%2Fstable%2Fbinary+download

        After dockerizing the app and deploye it on Dockerhub, we can begin with kubernates
        * minikube start
        * kubectl get nodes
        * kubectl cluster-info ==> To check if my cluster working well 
        * kubectl apply -f FolderName/ ==> this foolder contains yml files
        * kubectl get pods -w ==> check the dployed pods
        * kubectl get services ==> get access to services
        * minikube service ServiceName ==> check our server is live 
        * minikube stop ==> Stop the
        * Finally we can make all those step from docker to kubernates into one pwsh/bash script