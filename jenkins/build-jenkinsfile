pipeline {
    environment {
        registry = 'aabdelhady/venus-webapp'
        registryCredential = 'docker-hub-credentials'
        dockerImage = ''
    }

    agent any

    stages {
        stage('Build dist') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Build image') {
            steps {
                script {
                   dockerImage = docker.build registry + ":$BUILD_NUMBER"
                }
            }
        }
        stage('Push image') {
            steps {
                script {
                    docker.withRegistry('', registryCredential) {
                        dockerImage.push("${env.BUILD_NUMBER}")
                        dockerImage.push("latest")
                    }
                }
            }
        }
    }
}