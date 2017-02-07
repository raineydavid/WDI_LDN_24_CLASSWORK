angular
  .module('CardsAgainstAssembly')
  .directive('card', cardView);


cardView.$inject =[];
function cardView(){
  var directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '_cardView.html'
  directive.scope = {

    question: '@'
    // figureThisOut: '&',
    // thisData: '=',
     //@ - whatever is passed in here is going to be a string ie print out exactly whatever you get in there, = suggests two way data-binding, there wouldn't be curly braces card.question&
  };
    return directive;
}

// <div scope-example this-data="variableName" figure-this-out ="sendMail(email)" question ="This is a string">
//
// </div>
