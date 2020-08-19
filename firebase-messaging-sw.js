importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');

var firebaseConfig = {
                apiKey: "AAAAkGTKvy4:APA91bHCbNqOC3DWWSb3ZvXr1POoRzfxoTJs6mfEksTbKcOJArZM5vcCyjR2kUJhLVHUWdBqprVe7D2RbmVAdUQ8aQlx3KrCl-LNBZlvpShdGqE7UuD4hjNUcfO_THTUY5wdqDDpOR-_",
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
    
    const notification=JSON.parse(payload);
    const notificationMessage={
        body:notification.body,
        title:notification.title
    };
    return self.registration.showNotification(payload.notification.title, notificationMessage);

});		  