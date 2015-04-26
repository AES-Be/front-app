'use strict';

angular.module('directives.slideshow', [])
  .directive('slideshow', function () {

    var directiveDefinitionObject = {
      link: function () {

        $(document).ready(function () {
          $('#slideshow').slideshow({
            pauseSeconds : 5,
            height       : 230,
            fadeSpeed    : 0.5,
            width        : 857,
            caption      : false
          });
        });

      }
    };

    return directiveDefinitionObject;
  });
