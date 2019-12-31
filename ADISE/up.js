function create_user() {
  var username = document.getElementById('username');
  var pwd = document.getElementById('pwd');
      if (username.value != '' && pwd.value != '') {
          $.ajax({
              url: "game.php/game/addPlayer",
              method: 'PUT',
              dataType: "json",
              contentType: 'application/json',
              data: JSON.stringify({
                  x: username.value,
                  y: pwd.value
              })
          });
      }
}

function find_user(){
  var username = document.getElementById('username');
  var pwd = document.getElementById('pwd');
      if (username.value != '' && pwd.value != '') {
          $.ajax({
              url: "game.php/game/find_user",
              method: 'PUT',
              dataType: "json",
              contentType: 'application/json',
              data: JSON.stringify({
                  x: username.value,
                  y: pwd.value
              })
          });
      }
}
