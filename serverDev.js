import path from 'path'
import express from 'express'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackConfigDev from './webpack.config.dev'
import webpackConfigProd from './webpack.config.prod'
import {domain, port} from './config'

const app = express();

const env = process.env.NODE_ENV || 'development'

if(env == 'development' || env == 'test') {
	app.use(webpackDevMiddleware(webpack(webpackConfigDev), {
	  publicPath: webpackConfigDev.output.publicPath,
	  stats: { colors: true }
	}));
}
else if(env == 'production' || env == 'qa' || env=='demo'){
	app.use(webpackDevMiddleware(webpack(webpackConfigProd), {
	  publicPath: webpackConfigProd.output.publicPath,
	  stats: { colors: true }
	}));
}

app.use('/public', express.static(__dirname + '/public'))

app.use('/assets', express.static(__dirname + '/assets'))


app.use(express.static('assets'));


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

var http = require('http').Server(app);

console.log('process.env.PORT ',process.env.PORT)

http.listen(process.env.PORT || port, domain, function (err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('listening on http://'+domain+':'+process.env.PORT || port)
})
