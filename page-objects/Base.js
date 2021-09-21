class Base{
    pauseShort() {
        browser.pause(3000)
    }

    pauseMedium() {
        browser.pause(5000)
    }

    pauseLong() {
        browser.pause(8000)
    }

    imageExists(image_url){
        console.log(image_url)
            // var XMLHttpRequest = require('xhr2');
            // var request = new XMLHttpRequest();
            // request.open("GET", image_url, true);
            // request.send();
            // request.onload = function() {
            //     console.log("TESTTEST")
            //   status = request.status;
            //   if (request.status == 200) //if(statusText == OK)
            //   {
            //     return true
            //   } else {
            //     return false
            //   }
            // }

        const https = require('https')
        const options = {
        hostname: 'https://demoqa.com',
        port: 443,
        path: 'image_url',
        method: 'GET'
        }

        const req = https.request(options, res => {
        console.log('statusCode' + res.statusCode)

        res.on('data', d => {
            process.stdout.write(d)
        })
        })

        req.on('error', error => {
        console.error(error)
        })

        req.end()

    }
}

export default Base