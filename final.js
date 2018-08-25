let button01 = document.getElementById("button-01");
let button02 = document.getElementById("button-02");
let button03 = document.getElementById("button-03");
let currentQuestion = document.getElementById("question");
let resultTEXT = document.getElementById("resultTEXT")

let result = [];


// is clicked function
function checkClick(){
    let answerChoice = this.innerHTML;

    if(typeof answerChoice === 'string'){
    result.push(answerChoice);
    console.log(result);
}
    changeText();

}

// function
function changeText(){

    // changes text of button
      //let text = this.innerHTML;
      // questions
      let question1 = "What's your favorite pastime?";
      let question2 = "What's your favorite animal?";
      let question3 = "What's your favorite color?";


      let c1 = "Exercising";
      let c2 = "Reading";
      let c3 = "Sleeping";
      let c4 = "Shark";
      let c5 = "Bear";
      let c6 = "Eagle";
      let c7 = "Red";
      let c8 = "Yellow";
      let c9 = "Blue";
     
       // change text to next question
      if(result.length === 1){
          button01.innerHTML = c4;
          button02.innerHTML = c5;
          button03.innerHTML = c6;
          currentQuestion.innerHTML = question2;
          return;
      } else if(result.length === 2){
          button01.innerHTML = c7;
          button02.innerHTML = c8;
          button03.innerHTML = c9;
          currentQuestion.innerHTML = question3;
          return;
      } else if(result.length === 3){
          showResults();

      }
   }
   
   function showResults(){
    //results starting at Question1 Answer1
    if(result.includes("Exercising")===true){
        //Q1A1 to Q2A1
        if(result.includes("Shark")===true){
            //Q1A1 to Q2A1 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "Hey there! Maybe take a few deep breaths, you look stressed";
        }
            //Q1A1 to Q2A1 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4701.JPG";
                currentQuestion.innerHTML = "You are a bright shining star of a person";
            }else{
                //Q1A1 to Q2A1 to Q3A3
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "Hey there! Maybe take a few deep breaths, you look stressed";
            }
        }
        //Q1A1 to Q2A2
        if(result.includes("Bear")===true){
            //Q1A1 to Q2A2 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                currentQuestion.innerHTML = "You are a bright shining star of a person";
            }
            //Q1A1 to Q2A2 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "Hey there! Maybe take a few deep breaths, you look stressed";
            }else{
                //Q1A1 to Q2A2 to Q3A3
                img01.src = "IMG_4704.JPG";
                currentQuestion.innerHTML = "Uh oh! Are you a little sleepy today?";
            }
        }
        //Q1A1 to Q2A3
        if(result.includes("Eagle")===true){
            //Q1A1 to Q2A3 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                currentQuestion.innerHTML = "You are a bright shining star of a person";
            }
            //Q1A1 to Q2A3 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4708.JPG"
                currentQuestion.innerHTML = "Interesting answers! You must be the strong sensitive type";
            }else{
                //Q1A1 to Q2A3 to Q3A3
                img01.src = "IMG_4704.JPG";
                currentQuestion.innerHTML = "Uh oh! Are you a little sleepy today?";
            }
        }
    }
    //results starting at Question1 Answer2
    if(result.includes("Reading")===true){
        //Q1A2 to Q2A1
        if(result.includes("Shark")===true){
            //Q1A2 to Q2A1 to Q3A1
            if(result.includes("Red")==true){
                img01.src = "IMG_4708.JPG"
                currentQuestion.innerHTML = "Interesting answers! You must be the strong sensitive type";
            }
            //Q1A2 to Q2A1 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4704.JPG";
                currentQuestion.innerHTML = "Uh oh! Are you a little sleepy today?";
            }else{
                //Q1A2 to Q2A1 to Q3A3
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "Hey there! Maybe take a few deep breaths, you look stressed";

            }
        }
        //Q1A2 to Q2A2
        if(result.includes("Bear")===true){
            //Q1A2 to Q2A2 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                currentQuestion.innerHTML = "You are a bright shining star of a person";
            }
            //Q1A2 to Q2A2 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4697.JPG";
                currentQuestion.innerHTML = "You must be having a great year!";
            }else{
                //Q1A2 to Q2A2 to Q3A3
                img01.src = "IMG_4708.JPG"
                currentQuestion.innerHTML = "Interesting answers! You must be the strong sensitive type";
            }
        }
        //Q1A2 to Q2A3
        if(result.includes("Eagle")===true){
            //Q1A2 to Q2A3 to Q3A1
            if(result.includes("Q3A1")===true){
                img01.src = "IMG_4697.JPG";
                currentQuestion.innerHTML = "You must be having a great year!";
            }
            //Q1A2 to Q2A3 to Q3A2
            if(result.includes("Q3A2")===true){
                img01.src = "IMG_4708.JPG"
                currentQuestion.innerHTML = "Interesting answers! You must be the strong sensitive type";
            }else{
                //Q1A2 to Q2A3 to Q3A3
                img01.src = "IMG_4704.JPG";
                currentQuestion.innerHTML = "Uh oh! Are you a little sleepy today?";
            }

        }
    }
    ////results starting at Question1 Answer 3
    if(result.includes("Sleeping")===true){
        //Q1A3 to Q2A1
        if(result.includes("Shark")===true){
            //Q1A3 to Q2A1 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4704.JPG";
                currentQuestion.innerHTML = "Uh oh! Are you a little sleepy today?";
            }
            //Q1A3 to Q2A1 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "Hey there! Maybe take a few deep breaths, you look stressed";
            }else{
                //Q1A3 to Q2A1 to Q3A3
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "You're a burger.";
            }
        }
        //Q1A3 to Q2A2
        if(result.includes("Bear")===true){
            //Q1A3 to Q2A2 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                currentQuestion.innerHTML = "You are a bright shining star of a person";
            }
            //Q1A3 to Q2A2 to Q3A2
            if(result.includes("Yellow")===true){
                currentQuestion.innerHTML = "You must be having a great year!";
            }else{
                //Q1A3 to Q2A2 to Q3A3
                currentQuestion.innerHTML = "You're a burger.";
            }
        }
        //Q1A3 to Q2A3
        if(result.includes("Eagle")===true){
            //Q1A3 to Q2A3 to Q3A1
            if(result.includes("Red")===true){
                img01.src = "IMG_4701.JPG";
                currentQuestion.innerHTML = "You are a bright shining star of a person";
            }
            //Q1A3 to Q2A3 to Q3A2
            if(result.includes("Yellow")===true){
                img01.src = "IMG_4704.JPG";
                currentQuestion.innerHTML = "Uh oh! Are you a little sleepy today?";
            }else{
                //Q1A3 to Q2A3 to Q3A3
                img01.src = "IMG_4709.JPG";
                currentQuestion.innerHTML = "Hey there! Maybe take a few deep breaths, you look stressed";
            }
        }
    }
}


// event listener
button01.addEventListener('click',checkClick);
button02.addEventListener('click',checkClick);
button03.addEventListener('click',checkClick);
