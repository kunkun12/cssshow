const path = require('path');
const express = require('express');
const webpack = require('webpack');
const webpackMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('./webpack.config.js');
var bodyParser = require('body-parser')
 var sass = require('node-sass');
const isDeveloping = process.env.NODE_ENV !== 'production';
const port = isDeveloping ? 4000 : process.env.port;
const app = express();

if (isDeveloping) {
  const compiler = webpack(config);
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'build',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  });

  app.use(middleware);
  app.use(webpackHotMiddleware(compiler));
  // app.get('*', function response(req, res) {
  //   res.write(middleware.fileSystem.readFileSync(path.join(__dirname, 'build/index.html')));
  //   res.end();
  // });
} else {
  app.use(express.static(__dirname + '/build'));
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'build/index.html'));
  });
}
app.use( bodyParser.json() );  
app.post("/sass",function(req,res){
    var result = sass.renderSync({
      data: req.body.name,
      indentedSyntax:true,
      indentWidth:4,
      outputStyle:'expanded'
    });
    res.status(200).json({
      data:result.css.toString('utf8')
    })
});
app.listen(port, '0.0.0.0', function onStart(err) {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://0.0.0.0:%s/ in your browser.', port, port);
});