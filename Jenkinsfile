pipeline {
    agent any
   //   triggers {
   //      githubPush()
   //    }
    stages {
        stage('Restore packages'){
           steps{
               bat 'dotnet restore WebApi.sln'
            }
         }        
        stage('Clean'){
           steps{
               bat 'dotnet clean WebApi.sln --configuration Release'
            }
         }
        stage('Build'){
           steps{
               bat 'dotnet build WebApi.sln --configuration Release --no-restore'
            }
         }
        stage('Test: Unit Test'){
           steps {
                bat 'dotnet test NUnitTest/NUnitTest.csproj --configuration Release --no-restore'
             }
          }
        stage('Publish'){
             steps{
               bat 'dotnet publish WebApi/WebApi.csproj --configuration Release --no-restore'
             }
        }

          stage('Publish IIS Local'){
             steps{
               bat 'dotnet publish WebApi/WebApi.csproj -o C:\inetpub\wwwroot --configuration Release --no-restore'
             }
        }      

               
    }
}
