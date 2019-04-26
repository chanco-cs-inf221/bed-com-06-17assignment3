
  function ageValidity(){
        	var age, candidateList;
        	age= document.getElementById("age").value;
        	candidateList= (age<18)? " Your age is less than 18 years. You are not allowed to vote !" :"Follow the instructions by clicking the button below :"  ;
        	document.getElementById("candidates").innerHTML= candidateList;

        	
        }
        function getVotingInstructions(){
        	var age= document.getElementById("age").value;
        	var readInstructions= (age<18)? document.getElementById("readInstructions").innerHTML= "Remember your age is less than 18 years.You cannot read these instructions!": document.getElementById("readInstructions").innerHTML="Enter number in the box below to vote for a candidate of your choice; 1 refers to John Doe, 2 refers to Emily Munami, 3 refers to Victoria Banda, and 4 refers to Jonech Mwale";
        }
  

        
      
        	

        function getTheVotedCandidate() {
        	var invalid = "Invalid input! Either your age is less than 18 years or you entered a wrong vote code."
        	var age= document.getElementById("age").value;
        	var voteCode = document.getElementById("enteredVoteCode").value;
        	if (voteCode==1 && age>=18) {
        		return document.getElementById("youVoted").innerHTML= "You voted for John Doe";
        	}
        	else if (voteCode==2 && age>= 18) {
        		return document.getElementById("youVoted").innerHTML= "You voted for Emily Munami";
        	}
        	else if (voteCode== 3 && age>=18) {
        		return document.getElementById("youVoted").innerHTML= "You voted for Victoria Banda";
        	}
        	else if (voteCode== 4 && age>=18) {
        		return document.getElementById("youVoted").innerHTML= "You voted for Jonech Mwale";
        	}
        	else { document.getElementById("youVoted").innerHTML= invalid;

        	}

        	


        }
        
        
   
	     
	       var date = Date();
	       document.getElementById("time").innerHTML= date;


      
        

