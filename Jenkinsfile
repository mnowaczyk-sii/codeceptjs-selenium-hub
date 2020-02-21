pipeline {
    
    agent any

    environment {
        HOME = '.'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'master',
                    credentialsId: '',
                    url: 'https://github.com/mnowaczyk-sii/codeceptjs-selenium-hub.git'
            }
        }
        stage('Install dependencies') {
            steps {
                sh 'npm -v'
                sh 'npm install'
            }
        }
        stage('Test') {
                parallel {
                stage('Chrome') {
                    steps {
                        echo 'Testing on Chrome'
                        sh 'npm run test-chrome'
                    }
                }
                stage('Firefox') {
                    steps {
                        echo 'Testing on Firefox'
                        sh 'npm run test-firefox'
                    }
                }
            }
        }
    }

    post {
        always {
            archiveArtifacts artifacts: 'reports/mochawesome-report/**/*', fingerprint: true
            publishHTML target: [
            allowMissing: false,
            alwaysLinkToLastBuild: false,
            keepAll: true,
            reportDir: './reports/mochawesome-report',
            reportFiles: 'mochawesome.html',
            reportName: 'Test results'
          ]
        }
    }
}