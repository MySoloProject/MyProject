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


              
function displayCommonSymptoms()
{
	
	var pids=["#QC1","#QC2","#QC3"]

	for(var index=0;index<commonSymptoms.length;index++){
	 $(pids[index]).text(commonSymptoms[index].symptom)
	  $(".Qcommon1").text(commonSymptoms[0].choices[0])
	 $(".Qcommon2").text(commonSymptoms[0].choices[1])
	    
	}

}

function displayOtherSymptoms()
{
	var pids=["#AC1","#AC2","#AC3","#AC4","#AC5","#AC6","#AC7"]
	for(var index=0;index<otherSymptoms.length;index++){
	 $(pids[index]).text(otherSymptoms[index].symptom)
	  $(".Qcommon1").text(otherSymptoms[0].choices[0])
	 $(".Qcommon2").text(otherSymptoms[0].choices[1])
	    
	}

}
function dangerousOtherSymptoms()
{
	var pids=["#DS1","#DS2","#DS3","#DS4","#DS5"]
	for(var index=0;index<dangerousSymptoms.length;index++){
	 $(pids[index]).text(dangerousSymptoms[index])    
	}

}
 displayCommonSymptoms();
 displayOtherSymptoms();
 dangerousOtherSymptoms();











                      
