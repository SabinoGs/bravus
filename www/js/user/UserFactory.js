angular.module('todo')


.factory('Entry',function($resource,BASE_URL){
  return $resource.query(BASE_URL.url+'alunos/')

  .success(function(data){
    return data;
  })
})

.factory('Register',function($resource,BASE_URL){
  return $resource(BASE_URL.url+'alunos/')
})
