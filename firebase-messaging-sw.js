importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

var firebaseConfig = {
				apiKey: "AIzaSyB3lXeGQi4j2-VrWoE6_zxqmVQZ3R3cm1k",
				authDomain: "mytestproject-40ba1.firebaseapp.com",
				databaseURL: "https://mytestproject-40ba1.firebaseio.com",
				projectId: "mytestproject-40ba1",
				storageBucket: "mytestproject-40ba1.appspot.com",
				messagingSenderId: "620166299438",
				appId: "1:620166299438:web:b543b1634ad35fccc484bf",
				measurementId: "G-5T5T4LCJJG"
			  };
			  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const messaging=firebase.messaging();	

messaging.setBackgroundMessageHandler(function(payload){
	console.log(payload);
});		  