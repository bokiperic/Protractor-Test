var nodemailer = require("nodemailer");
var fs = require('fs');
var path = require('path');

var transport = nodemailer.createTransport({

	service: 'Gmail',
    auth: {
        user: "trainer@way2automation.com",
        pass: "abcd1234"
    }
});

//console.log("SMTP Configured");

var mailOptions = {
    from: 'trainer@way2automation.com', // sender address
    to: 'seleniumcoaching@gmail.com', // list of receivers
    subject: 'Report for Test Result', // Subject line
	//text: info.body,
    text: 'Contains the test result for the smoke test in html file', // plaintext body
    attachments: [
        {
            
            'path': 'F:/protractor/abcd.jpg',
			
        }]
};
transport.sendMail(mailOptions, function (error, info) {
    if (error) {
        console.log(error);
		response.send(err);
    } else {
        console.log("Message sent: " + info.response);
		response.send(info);
    }

});