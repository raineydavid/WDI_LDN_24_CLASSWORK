$(()=>{

  function stateProvider(){
    this.el = $('.ui-view');

    this.states ={
      home: {
        template: `<h1>Home </h1>`
      },
      about:{
          template: `<h1>About</h1>`
      }
    }

    this.render('home');

    // //Setting up some events
    // $('.ui-sref-home').on('click', (e) =>{
    //   e.preventDefault();
    //   this.render('home');
    // });
    // $('.ui-sref-about').on('click', (e) =>{
    //   e.preventDefault();
    //   this.render('about');
    // });

    //Making it more generic
    $('.ui-sref').on('click', (e) =>{
      e.preventDefault();
      console.log($(e.target).data());
      const state =  $(e.target).data('state');
      if(!this.states[state]){
        return alert('No state setup');
      }else{
        this.render('home');
      }

    });
  }

  stateProvider.prototype.render = function(state){
    $(this.el).html(this.states[state].template);
  };

  //Constructor function
  new stateProvider();

});
