const fs = required('fs');
const f = 'node_modules/@angular-devkit/build-angular/src/angular-cli-files/models/webpack-configs/browser.js'

fs.readFile(f, 'uft-8', function(err, data){
    if(err){
        return console.error(err);
    }
    var result = data.replace(/node: false/g, 'node: {crypto:true, stream: true}');
    fs.writeFile(f, result,'uft-8',function(err){
        if(err) return console.error(err)
    });
});
