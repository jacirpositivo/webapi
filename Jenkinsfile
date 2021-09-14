pipeline {
    agent any
     triggers {
        githubPush()
      }
    stages {
        stage('Restore packages'){
           steps{
               sh 'dotnet restore WebApi.sln'
            }
         }        
        stage('Clean'){
           steps{
               sh 'dotnet clean WebApi.sln --configuration Release'
            }
         }
        stage('Build'){
           steps{
               sh 'dotnet build WebApi.sln --configuration Release --no-restore'
            }
         }
        stage('Test: Unit Test'){
           steps {
                sh 'dotnet test NUnitTest/NUnitTest.csproj --configuration Release --no-restore'
             }
          }
        stage('Publish'){
             steps{
               sh 'dotnet publish WebApi/WebApi.csproj --configuration Release --no-restore'
             }
        }            
    }
}
