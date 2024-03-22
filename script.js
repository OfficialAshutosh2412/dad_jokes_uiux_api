let jokeBox = document.querySelector(".jokes");
let btn = document.querySelector(".btn");

btn.addEventListener("click", generateJokes);

generateJokes();

async function generateJokes() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const res = await fetch("https://icanhazdadjoke.com", config);
  const data = await res.json();
  jokeBox.innerHTML = data.joke;
  //   fetch("https://icanhazdadjoke.com", config)
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data.joke);
  //       jokeBox.innerHTML = data.joke;
  //     });
}
