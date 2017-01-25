angular
  .module('museum-artists', [])
  .controller('HomeCtrl', HomeCtrl)
  .controller('ExhibitCtrl', ExhibitCtrl)
  .controller('DonorCtrl', DonorCtrl);

HomeCtrl.$inject = [];

function HomeCtrl(){
  vm = this;
  vm.name= 'The Metropolitan Museum of Art'
}

function ExhibitCtrl(){
  vm =this;

  vm.name='Exhibit';
  vm.image = 'https://cloud.githubusercontent.com/assets/25366/9002041/f942dad0-3713-11e5-838f-8670fd50c5cd.png';
  vm.imagedesc ='Sargaent Portraits of Artists & Friends';
  vm.artist ='John Sargent' ;
}

function InfoCtrl(){
  vm =this;
  vm.name = 'General Info';
  vm.nameHours ='Hours';
  daysofWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  hours =['10.00am -  5:30pm','10.00am -  9:00pm'];
  vm.openingHours=[{`${daysofWeek[0]:hours[1]}`,{`${daysofWeek[1]:hours[1]}`,{`${daysofWeek[2]:hours[1]}`,{`${daysofWeek[3]:hours[1]}`,{`${daysofWeek[4]:hours[1]}`,{`${daysofWeek[5]:hours[1]}`,{`${daysofWeek[6]:hours[1]}`}
];

//
vm.nameAdmission = 'Suggested Admission:'
vm.category = ['Adults','Seniors','Students'];
vm.prices = [12,17,25]
}

function DonorCtrl(){
  vm =this;
  vm.contact;
  vm.amounts =[50, 100, 250, 500, 1000, 5000];
}
