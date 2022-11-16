function showGrade() {
    var score = document.getElementById("score").value;
    var result_input = document.getElementById("result_input");
    var result = "คะแนน คือ "+score+" ได้เกรด ";

    if( score >= 90 ) {
        result += "A";
    } else if( score >= 80 ) {
        result += "B";
    } else if( score >= 70 ) {
        result += "C";
    } else if( score >= 60 ) {
        result += "D";
    } else {
        result += "E";
    }
    
    result_input.innerHTML = result;
}