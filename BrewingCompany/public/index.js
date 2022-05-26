let btn = document.getElementById("btn");
      btn.addEventListener("click", function run(e) {
        e.preventDefault();
        swal.fire({
          title: "Warning",
          text: "You can order only if you are 18+",
          icon: "warning",
        });
      });

      let formbtn = document.getElementById("formbtn");
      formbtn.addEventListener("click", function run(e) {
        e.preventDefault();

        const username = document.getElementById("username").value;
        const email = document.getElementById("email").value;
        const usermessage = document.getElementById("usermessage").value;

        swal.fire("Submitted successfully");

        let nullmessage = document.getElementById("usermessage");
        nullmessage.value = "";
        let inputs = document.querySelectorAll("input");
        inputs.forEach((input) => (input.value = ""));
      });
