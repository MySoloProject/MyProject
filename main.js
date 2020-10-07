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

// $("#QC1").text(commonSymptoms[0].symptom)
//  $("#l1").text((commonSymptoms[0].choices)[0])
//  $("#l2").text((commonSymptoms[0].choices)[1])
              
function displayCommonSymptoms()
{
	
	var pids=["#QC1","#QC2","#QC3"]

	for(var index=0;index<commonSymptoms.length;index++){
	 $(pids[index]).text(commonSymptoms[index].symptom)
	  $(".Qcommon1").text(commonSymptoms[index].choices[0])
	 $(".Qcommon2").text(commonSymptoms[index].choices[1])
	    
	}


 }
displayCommonSymptoms();

function displayOtherSymptoms()
{
	var pids=["#AC1","#AC2","#AC3","#AC4","#AC5","#AC6","#AC7"]
	for(var index=0;index<otherSymptoms.length;index++){
	 $(pids[index]).text(otherSymptoms[index].symptom)
	  $(".Qcommonc1").text(otherSymptoms[0].choices[0])
	 $(".Qcommonc2").text(otherSymptoms[0].choices[1])
	    
	}

}
function dangerousOtherSymptoms()
{
	var pids=["#DS1","#DS2","#DS3","#DS4","#DS5"]
	for(var index=0;index<dangerousSymptoms.length;index++){
	 $(pids[index]).text(dangerousSymptoms[index])    
	}

}


$("#strb").on("click",function(){

	 displayCommonSymptoms();
	 displayOtherSymptoms()
	 dangerousOtherSymptoms();
})

function pushresult(){
	var firstcheck=0;
	var secondcheck=0;
	var thirdcheck=0;
	var check=[];
	var valueCommonSymptoms=["#formQC1","#formQC2","#formQC3"];
	var valueOtherSymptoms=["formAQ1","formAQ2","formAQ3","formAQ4","formAQ5","formAQ6","formAQ7"];
	for(var index=0;index<commonSymptoms.length;index++)
	{
		var choice=$(" :checked",valueCommonSymptoms[index]).val();
		if(choice==="Yes")
		{
		firstcheck++;
	    }

	}
	for(var index=0;index<otherSymptoms.length;index++)
	{
		var choice=$(" :checked",valueOtherSymptoms[index]).val();
		if(choice==="Yes")
		{
		secondcheck++;
	    }

	}
	var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
   for (var i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value)
  }

  thirdcheck=array.length;
  check=[firstcheck,secondcheck,thirdcheck];

  return check;

}
	  
           

$("#f").click(function count(){
	var r=pushresult();
	
	 
     
})



 











                      
