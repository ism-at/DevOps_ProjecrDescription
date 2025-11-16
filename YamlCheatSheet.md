# GitHub Actions – Important Keys (Short & Simple)

## Core Keys
- **name**  
  Workflow or job title.

- **on**  
  Defines triggers (push, pull_request, schedule).

- **jobs**  
  Contains all jobs and their configuration.

- **steps**  
  List of actions/commands inside a job.

---

## Step Keys
- **run**  
  Run shell commands.

- **uses**  
  Use a prebuilt GitHub Action.

- **with**  
  Pass inputs/parameters to an action.

- **env**  
  Set environment variables.

---

## Job Keys
- **runs-on**  
  OS the job runs on (e.g., ubuntu-latest).

- **needs**  
  Job dependency (run after another job).

- **if**  
  Condition to run a job or step.

- **timeout-minutes**  
  Max allowed runtime for a job.

- **strategy**  
  Configure job strategy (matrix builds).

- **matrix**  
  Run job with multiple versions (e.g., Node 18 & 20).

- **permissions**  
  Control GITHUB_TOKEN permissions.

- **defaults**  
  Default settings for all `run` steps.

- **outputs**  
  Export data from a job for other jobs.

---

## Secrets & Security
- **secrets**  
  Access secure values stored in repo/organization.

---

## YAML Basics
- **key: value** – basic pair  
- **- item** – list  
- Indentation defines structure  
- `#` for comments  

------------------------------Example-----------------------------------

name: CSharp Windows CI   # Workflow title

on:                       # Triggers
  push:
    branches: [ "main" ]
  pull_request:
    branches: [ "main" ]
  schedule:               # Runs every day at midnight
    - cron: "0 0 * * *"

jobs:
  build:                  # First job
    runs-on: windows-latest   # Job runs on Windows Server
    timeout-minutes: 20       # Max runtime

    env:                      # Job-level environment variables
      CONFIGURATION: Release

    steps:                    # Job steps
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Setup .NET
        uses: actions/setup-dotnet@v4
        with:                  # Passing parameters to an action
          dotnet-version: "8.0.x"

      - name: Restore packages
        run: dotnet restore    # Shell commands to execute

      - name: Build project
        run: dotnet build --configuration $env:CONFIGURATION

      - name: Run unit tests
        run: dotnet test --no-build --verbosity normal

      - name: Publish app
        run: dotnet publish -c Release -o output

    outputs:                    # Job output
      build-path: output

    deploy:                       # Second job
    runs-on: windows-latest
    needs: build               # Depends on "build" job (job order)

    if: github.ref == 'refs/heads/main'   # Only run on main branch

    environment: production

    steps:
      - name: Download built artifact
        uses: actions/download-artifact@v4
        with:
          name: published-app

      - name: Deploy to server
        run: |
          echo "Deploying application..."
          # Here you would deploy using PowerShell, FTP, WinRM, etc.

