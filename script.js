let timer = 10;
      let time = document.getElementById("display");
      time.style.margin = " 250px auto";
      time.style.textAlign = "center";

      time.style.maxWidth = "200px";
      setTimeout(() => {
        time.innerHTML = timer--;
        setTimeout(() => {
          time.className = "badge rounded-pill bg-primary text-dark";
          time.innerHTML = timer--;
          setTimeout(() => {
            time.className = "badge rounded-pill bg-danger";
            time.innerHTML = timer--;
            setTimeout(() => {
              time.className = "badge rounded-pill bg-primary text-dark";
              time.innerHTML = timer--;
              setTimeout(() => {
                time.className = "badge rounded-pill bg-danger";
                time.innerHTML = timer--;
                setTimeout(() => {
                  time.className = "badge rounded-pill bg-primary text-dark";
                  time.innerHTML = timer--;
                  setTimeout(() => {
                    time.className = "badge rounded-pill bg-danger";
                    time.innerHTML = timer--;
                    setTimeout(() => {
                      time.className =
                        "badge rounded-pill bg-primary text-dark";
                      time.innerHTML = timer--;
                      setTimeout(() => {
                        time.className = "badge rounded-pill bg-danger";
                        time.innerHTML = timer--;
                        setTimeout(() => {
                          time.className =
                            "badge rounded-pill bg-primary text-dark";
                          time.innerHTML = timer--;
                          setTimeout(() => {
                            time.style.fontSize = "36px";
                            time.style.maxWidth = "500px";
                            time.className = "badge rounded-pill bg-warning";
                            time.innerHTML = "Happy Independance Day!";
                          }, 1000);
                        }, 1000);
                      }, 1000);
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);