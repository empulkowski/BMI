$(document).ready(function () {
    $("button").on("click", calculate);
});

function calculate() {
    $("p#bmi").empty();
    //get input for weight in pounds from user
    let weight = parseInt($("#weight").val());

    //if it is false (outside of 88 and 353) display error message
    if (weight < 88 || weight > 353) {
        $("p#error").text(`Please stay in weight range`);
        return;
    }

    //get input for height from user
    let height = parseInt($("#height").val());

    //if it is false (outside 59 & 69) display message
    if (height < 59 || height > 69) {
        $("p#error").text(`Please stay in height range`);
        return;
    }

    //multiply lbs by 703
    let weightAfterMath = (weight * 703).toFixed(2);

    //square of body height)
    let heightAfterMath = (height **2).toFixed(2);

    //divide lbs by height
    let bmi = weightAfterMath / heightAfterMath;


    //if result is < 18.6) return underweight
        if (bmi < 18.6) {
        $("p#bmi").text(`Eat up Buttercup`);
    }
    //else if >= 18.6 && < 24.9) return normal weight
        else if (bmi >= 18.6 && bmi < 24.9) {
        $("p#bmi").text(`You are good to go`);
    }
        else if (bmi > 24.9) {
        $("p#bmi").text('Hit the Gym');
    }
  $("p#number").text(bmi).toFixed(2);

}

