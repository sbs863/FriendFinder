// constructor
function Friend(name, photoLink, question1, question2, question3, question4, question5, question6, question7, question8, question9, question10) {
    this.name = name;
    this.photoLink = photoLink;
    this.question1 = question1;
    this.question2 = question2;
    this.question3 = question3;
    this.question4 = question4;
    this.question5 = question5;
    this.question6 = question6;
    this.question7 = question7;
    this.question8 = question8;
    this.question9 = question9;
    this.question10 = question10;

}


// user fills out the form and hits 'submit'
$('#submit').on('click', function() {


    var userSubmit = [{
        name: $('#name').val().trim(),
        photoLink: $('#photoLink').val(),
        question1: $('#question_1').val(),
        question2: $('#question_2').val(),
        question3: $('#question_3').val(),
        question4: $('#question_4').val(),
        question5: $('#question_5').val(),
        question6: $('#question_6').val(),
        question7: $('#question_7').val(),
        question8: $('#question_8').val(),
        question9: $('#question_9').val(),
        question10: $('#question_10').val(),
    }];


    var userProfile = new Friend(userSubmit[0].name, userSubmit[0].photoLink, userSubmit[0].question1, userSubmit[0].question2, userSubmit[0].question3, userSubmit[0].question4, userSubmit[0].question5, userSubmit[0].question6, userSubmit[0].question7, userSubmit[0].question8, userSubmit[0].question9, userSubmit[0].question10);
    console.log(userProfile);

    var postUserData = function() {

        $.ajax({
            method: "POST",
            url: "/api/friends",
            data: JSON.stringify(userProfile),
            contentType: "application/json; charset=utf-8",
            dataType: 'json'
        }).done(function(userProfile) {

        });
    };

    postUserData();

    function sum(obj) {
        return Object.keys(obj)
            .reduce(function(sum, key) {
                return sum + parseFloat(obj[key]);
            }, 0);
    }

    var summed = sum(userProfile.question1 + userProfile.question2 + userProfile.question3 + userProfile.question4 + userProfile.question5 + userProfile.question6 + userProfile.question7 + userProfile.question8 + userProfile.question9 + userProfile.question10);
    console.log(typeof summed);

    var postUserScores = function() {

        $.ajax({
            method: "POST",
            url: "/api/friends/scores",
            dataType: "json",
            data: JSON.stringify(summed),
        }).done(function(summed) {

        });
    };
    postUserScores();

});
