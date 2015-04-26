app.controller('contactCtrl', ['$scope', function ($scope) {
  $scope.submit = function () {
    var data = {
      email   : this.email,
      name    : this.name,
      message : this.message,
      tag     : 'contact'
    };

    $.ajax({
      type: 'POST',
      url: '/api/sendEmail',
      data: data,
      success: function (resp) {
        $('#contact-form').fadeOut(500, function () {
          $('#contact-form-validation').fadeIn(500);
        });
      },
      error: function (err) {
        $('#contact-form').fadeOut(500, function () {
          $('#contact-form-error').fadeIn(500);
        });
      }
    });

  };
}]);
