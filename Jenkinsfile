pipeline {
    agent { label 'api-backend-server-dev' }
    tools { nodejs('20.15.0') }
    stages {
        stage('install dependencies') {
            steps {
                script {
                    sh "npm install --verbose --force"
                }
            }
        }   
        stage('acceptation test') {
            steps {
                script {
                    sh "npm run build && find dist/index.html"
                }
            }
        }   
        stage('deploy to stage') {
            steps {
                withAWS(credentials: 'AWS_CREDENCIAL', region: 'us-east-1') {
                    script {
                        sh "aws s3 sync dist s3://infraccess"
                    }
                    
                }
            }
        }
    }
    /*
    post {
        always {
            slackSend(
                channel: "tutu-infraestructura",
                color: COLOR_MAP[currentBuild.currentResult],
                message: "Find Status of Pipeline:- ${currentBuild.currentResult} \n Job Name: ${env.JOB_NAME} \n Branch: ${env.BRANCH_NAME} \n Build Number: ${env.BUILD_NUMBER} \n Link: ${BUILD_URL}"
            )
            
        }
    }
    */
}

