'use strict';

app.controller('newsletterCtrl', ['$scope', function ($scope) {
  $scope.submit = function () {
    var data = {
      email   : this.email
    };

    $('#newsletter-form').fadeOut(250, function () {
      $('#newsletter-in-progress').fadeIn(250);
    });

    $.ajax({
      type: 'POST',
      url: '/newsletter/subscribe',
      data: data,
      success: function (resp) {
        $('#newsletter-in-progress').fadeOut(250, function () {
          $('#newsletter-success').fadeIn(250);
        });
      },
      error: function (err) {
        $('#newsletter-in-progress').fadeOut(250, function () {
          if(err.status === 400) {
            $('#newsletter-already').fadeIn(250);
          } else {
            $('#newsletter-error').fadeIn(250);
          }
        });

      }
    });

  };

  $scope.retry = function () {
    $('#newsletter-error').fadeOut(250, function () {
      $('#newsletter-form').fadeIn(250);
    });
  }
}]);
