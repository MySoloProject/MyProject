var commonSymptoms=[{symptom:"Q1: Is your body temperature greater than 37.8?",
                     choices:["Yes","No"]},
                     {symptom:"Q2: Have a dry cough?",
                     choices:["Yes","No"]},
                     {symptom:"Q3: Do you feel tiredness?",
                     choices:["Yes","No"]}];

var otherSymptoms= [{symptom:"Q1: Do you have a chills",
                    choices:["Yes","No"]},
                    {symptom:"Q2: Do you have muscle or body pain?",
                    choices:["Yes","No"]},
                    {symptom:"Q3: Do you have a sore throat?",
                    choices:["Yes","No"]},
                    {symptom:"Q4: do you have a runny nose?",
                    choices:["Yes","No"]},
                    {symptom:"Q5: do you have a headache?",
                    choices:["Yes","No"]},
                    {symptom:"Q6: do you have a chest pain?",
                    choices:["Yes","No"]},
                    {symptom:"Q7: do you have a Pink eye (conjunctivitis)?",
                    choices:["Yes","No"]},];


var dangerousSymptoms=["Trouble breathing","Persistent chest pain or pressure","Inability to stay awake","New confusion","Blue lips or face"];


              
function displayCommonSymptoms(){

	var pids=["#QC1","#QC2","#QC3"]
	for(var index = 0; index < commonSymptoms.length; index++)
	{
		$(pids[index]).text(commonSymptoms[index].symptom)
		$(".Qcommon1").text(commonSymptoms[index].choices[0])
		$(".Qcommon2").text(commonSymptoms[index].choices[1])
		    
	}

}
// displayCommonSymptoms();

function displayOtherSymptoms(){

	var pids=["#AC1","#AC2","#AC3","#AC4","#AC5","#AC6","#AC7"];

	for(var index = 0; index < otherSymptoms.length; index++){
		 $(pids[index]).text(otherSymptoms[index].symptom)
		 $(".Qcommonc1").text(otherSymptoms[0].choices[0])
		 $(".Qcommonc2").text(otherSymptoms[0].choices[1])
	    
	}

}

function dangerousOtherSymptoms()
{
	var pids=["#DS1","#DS2","#DS3","#DS4","#DS5"];

	for(var index=0;index<dangerousSymptoms.length;index++){
		 $(pids[index]).text(dangerousSymptoms[index])    
	}

}

//Start Button
$("#strb").on("click",function(){
		$("#secondDiv").css("display","block");
		$("#result").css("display","block");
	     displayCommonSymptoms();
		 displayOtherSymptoms()
		 dangerousOtherSymptoms();
		 
});


function ckeckresult(){

	var firstcheck=0;
	var secondcheck=0;
	var thirdcheck=0;
	var check1=true;
	var check2=true;
	var result="";
	var valueCommonSymptoms=["#formQC1","#formQC2","#formQC3"];
	var valueOtherSymptoms=["#formAQ1","#formAQ2","#formAQ3","#formAQ4","#formAQ5","#formAQ6","#formAQ7"];
	
	//to get avalue from raido input
	for(var index = 0; index < commonSymptoms.length; index++){
	
		var choice=$(" :checked",valueCommonSymptoms[index]).val();

		if(choice===undefined){

			alert("You didn't answer all question");
			check1=false;
			break;

		}else{
		
			if(choice==="Yes"){
			  firstcheck++;
			}
		}
    }

    //to get avalue from raido input
	for(var index = 0; index < otherSymptoms.length; index++){

		var choice=$(" :checked",valueOtherSymptoms[index]).val();

		if(choice===undefined){
		
			alert("You didn't answer all question");
			check2=false;
			break;

		}else{
			if(choice==="Yes"){	
			  secondcheck++;
		    }
	    }
	    
	}

	//to get avalue from checkbox input
	var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

   for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
   }

  thirdcheck=array.length;
 
   if(thirdcheck>0){
  
	  	result="You are infected with Covid-19 virus\nFollow these instructions:\n"+	  	
	  	       "Call your health care provider in advance, so he/she can direct you to\n the right health facility."
  }

  else if(firstcheck === 3 && secondcheck >= 1 && check1 && check2){
  
  	 result="You are infected with Covid-19 virus\nFollow these instructions:\n"+
  	"1-Stay at home.\n2-Self-isolate and monitor your symptoms.\n3-Follow national guidance on self-isolation."
  }

  else if(check1&&check2){
  	result="You are not infected with the Covid-19 virus, but take care to protect \nyourself and your family"
  }

  return result;

}
	  
           
//Result Button
$("#result").click(function(){
		$("#p2").text(ckeckresult());
		$("#p2").css("display","block");
		$("#secondDiv").css("display","none");
		$("#result").css("display","none");
		$("#p1").css("display","none");
		$("#strb").css("display","none");

	     
});

//image in the top left 
$("#logo").click(function(){
	$('input[name=CS]').prop('checked', false);
	$('input[name=AS]').prop('checked', false);

	$('input[type=checkbox]').each(function(){ 
        this.checked = false; 
    });

	$("#startDiv").css("display","block");
	$("#p1").css("display","block")
	$("#strb").css("display","block")
	$("#strb").css("margin","auto")
	 $("#p2").css("display","none");
	
});

//open the new window(Advice)
$("#target1").click(function(){
    	window.open("advice.html");
});
$("#target2").click(function(){
    	window.open("about.html");
});











                      
