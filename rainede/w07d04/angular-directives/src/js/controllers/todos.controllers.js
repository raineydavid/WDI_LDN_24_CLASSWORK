angular
  .module('toDoApp')
  .controller('ToDosCtrl', ToDosCtrl);

ToDosCtrl.$inject =[];

function ToDosCtrl(){
  const vm = this;

  vm.items =[
    {task: 'sleep', done: false},
    {task: 'food', done: false},
    {task: 'buy shoes', done: false},
    {task: 'go to bed', done: false}

  ];

  vm.addItem = addItem;
  vm.newItem ={task: '', done: false};
  vm.done=done;

  function addItem(){
    vm.items.push(vm.newItem);
    vm.newItem ={task: '', done: false};
  }


  function done(item){
    item.done =true;
    console.log('clicked');
  }

}
