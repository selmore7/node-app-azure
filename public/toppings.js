document
    .querySelector('.request-toppings')
    .addEventListener('click', function() {
        fetch('/toppings')
          .then(function(res) {
            // console.log(res.json());
            return res.json();
          })
          .then(function(data) {
            console.log(data);
            document.querySelector('.toppings').innerText = data.topping;
          })
          .catch((err) => {
            console.error(err);
          });
    });