var names = [];
var scores = [];

var $ = function (id) { return document.getElementById(id); }

var addScore = function(){
    var name = $("name").value;
    var score = $("score").value;
    
    names[names.length] = name;
    scores[scores.length] = parseFloat(score);
}

var displayResults = function(){
    var sum = 0.0;
    var AGPA;
    var res = 0.0;
    
    for(i=0;i<scores.length;i++){
        sum = sum + names[i];
    }
    
    
        for(i=0;i<scores.length;i++){
            res = res + names[i] / parseFloat(sum) * scores[i];
        
    
        
        if(res > 3.0 && res <=4.0){
            AGPA = "A";
            
        }
        else if(res > 2.0 && res <= 3.0){
            AGPA = "B";
            
        }
        else if(res > 1.0 && res <= 2.0){
            AGPA = "C";
            
        }
        else if(res > 0.0 && res <= 1.0){
            AGPA = "D";
            
        }
        else{
            AGPA = "F";
            
        }
    }
    
    
    
    $("results").innerHTML = "<h2>Results</h2><p>Average GPA with a score of "+AGPA+"</p>";
    
}

var displayScores = function(){
    var html = "<h2>Scores</h2><tr><td><b>Name</b></td><td><b>Score</b></td></tr>"
    for(var i=0;i<scores.length;i++){
        html = html + "<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>";
        
    }
    $("scores_table").innerHTML = html;
}



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
}

var displayScores = function(){
    var html = "<h2>Array</h2><tr><td><b>CreditHours</b></td><td><b>LetterGrade</b></td></tr>"
    for(var i=0;i<scores.length;i++){
        html = html + "<tr><td>"+names[i]+"</td><td>"+scores[i]+"</td></tr>";
        
    }
    $("scores_table").innerHTML = html;
}


