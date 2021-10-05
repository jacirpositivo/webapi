 pipeline {   
    agent any
    parameters {
        booleanParam(name: "RELEASE", defaultValue: false)
    }

    def isOnWindows(){
    def os = "windows"
    def List nodeLabels  = NODE_LABELS.split()
    for (i = 0; i <nodeLabels.size(); i++) 
    {
        if (nodeLabels[i]==os){
        return true
        }
   }
    return false
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
         stage('Email') {
                  steps {
                     script {
                           def mailRecipients = 'jkravetz@positivo.com.br'
                           def jobName = currentBuild.fullDisplayName
                           emailext body: '''${SCRIPT, template="groovy-html.template"}''',
                           mimeType: 'text/html',
                           subject: "[Jenkins] ${jobName}",
                           to: "${mailRecipients}",
                           replyTo: "${mailRecipients}",
                           recipientProviders: [[$class: 'CulpritsRecipientProvider']]
                     }
                  }
               }

      //    stage("Publish") {
      //       steps {
      //           script {
      //                if (params.RELEASE) {
      //                   sh "echo release"
      //               } else {
      //                   sh "echo preRelease"
      //               }
      //           }
      //       }
      //   }

     stage("Publish Pre-Release") {
            when { expression { !params.RELEASE } }
            steps {
               sh "echo preRelease"
            }
        }
        
        stage("Publish Release") {
            when { expression { params.RELEASE } }
            steps {
               sh "echo release"
            }
        }

      //   stage ('Deploy') {
      //        steps{
      //             sh 'ssh user@server rm -rf /var/www/temp_deploy/dist/'
      //             sh 'ssh user@server mkdir -p /var/www/temp_deploy'
      //             sh 'scp -r dist user@server:/var/www/temp_deploy/dist/'
      //             sh 'ssh user@server “rm -rf /var/www/example.com/dist/ && mv /var/www/temp_deploy/dist/ /var/www/example.com/”'
      //             }
      //    }

      //    stage('Publish IIS Local'){
      //        steps{
      //          sh 'dotnet publish WebApi/WebApi.csproj -o C:\\inetpub\\wwwroot\\webAPI --configuration Release --no-restore'
      //        }
      //   }       

    }
}

    
