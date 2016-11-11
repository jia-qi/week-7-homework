
  // Initialize Firebase


var config = {
    apiKey: "AIzaSyAkBTInxF6N7Pwq5h-6zGfFIcNAkw5IvSQ",
    authDomain: "train-schedule-41045.firebaseapp.com",
    databaseURL: "https://train-schedule-41045.firebaseio.com",
    storageBucket: "train-schedule-41045.appspot.com",
    messagingSenderId: "1001300063004"
  };
  firebase.initializeApp(config);



//get a reference to the database service
    var database = firebase.database();
    
// 2. button for adding 
    $("#addTrainBtn").on("click",function(){
      
     //grabbing user input
        
        var trainName = $("#nameInput").val().trim();
         var trainDes = $("#desInput").val().trim();
        var firstTrain= moment($("#startInput").val().trim(),"HH/MM").format("X");
        //what is moment????!!!!!!!!
        var trainFreq = $("#freqInput").val().trim();    
                console.log("hi from js"); debugger;

    
    //create local temporary object for holding train data
    
    var newTrain ={
        name: trainName,
        destination: trainDestination,
        start: trainStart,
        frequency:trainFreq
    }
    
    //upload train data to database
    database.ref().push(newTrain);
    
    //log everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.start);
    console.log(newTrain.frequency);
        
    });  



    