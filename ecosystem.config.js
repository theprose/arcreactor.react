module.exports = {
  apps: [{
    name: 'arc-webserver',
    script: './dist/index.js'
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'ec2-34-211-50-107.us-west-2.compute.amazonaws.com',
      key: '~/.ssh/arc-webserver.pem',
      ref: 'origin/master',
      repo: 'git@github.com:CaptainStiggz/arcreactor.react.git',
      path: '/home/ubuntu/apps/arcreactor.react',
      'post-deploy': 'sudo npm install && npm run build && pm2 startOrRestart ecosystem.config.js'
    }
  }
}

//host: 'ec2-54-202-55-124.us-west-2.compute.amazonaws.com', // old host