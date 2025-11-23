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

# STOP git tracking
    git status
    git ls-files -- myNotes.md
    git check-ignore -v myNotes.md

## stop tracking and commit the change
    git rm --cached myNotes.md

## stage .gitignore and commit the change
    git add .gitignore
    git commit -m "Stop tracking myNotes.md and update .gitignore"

## Add the file again to git
    git add .gitignore
    git commit -m "Allow tracking myNotes.md"

## add the file (if .gitignore still blocks it, force with -f)
    git add myNotes.md
    git commit -m "Add myNotes.md"

## push to remote
    git push origin main