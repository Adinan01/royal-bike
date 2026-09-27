pipeline{
    agent none
    stages{
        stage('checkout'){
          agent{
              label 'build'
          }
            steps{
                deleteDir()
                sh '''
                git clone https://github.com/Adinan01/royal-bike.git
                ls -l
                '''
                stash name: 'web', includes: 'royal-bike/**'
            }
        }
        stage('deploy'){
            agent{
                label 'deploy'
            }
            steps{
                deleteDir()
                unstash 'web'
                sh '''
                sudo mkdir -p /var/www/html
                sudo rm -rf /var/www/html/*
                sudo cp -r royal-bike/index.html royal-bike/script.js royal-bike/style.css /var/www/html
                '''
            }
        }
    }
}
