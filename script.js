
let APIKEY = "sZMUgxIfDXiN8FUNlRf9KF6o5c36DouX";
document.addEventListener("DOMContentLoaded", init);
function init() {
    document.getElementById("btnSearch").addEventListener("click", ev => {
        ev.preventDefault(); //to stop the page reload
        let url = `https://api.giphy.com/v1/gifs/search?api_key=${APIKEY}&limit=20&q=`;
        let str = document.getElementById("search").value.trim();
        url = url.concat(str);
        console.log(url);
        fetch(url)
            .then(response => response.json())
            .then(content => {

                console.log(content.data);
                console.log("META", content.meta);
                let fig = document.createElement("figure");
                let img = document.createElement("img");




                img.src = content.data[0].images.downsized.url;

                img.alt = content.data[0].title;

                fig.appendChild(img);


                let fig1 = document.createElement("figure1");
                let img1 = document.createElement("img");




                img1.src = content.data[1].images.downsized.url;

                img.alt = content.data[1].title;

                fig1.appendChild(img1);


                let fig2 = document.createElement("figure2");
                let img2 = document.createElement("img");




                img2.src = content.data[2].images.downsized.url;

                img2.alt = content.data[2].title;

                fig2.appendChild(img2);


                let gif = document.querySelector(".gif");
                gif.insertAdjacentElement("afterbegin", fig2);
                gif.insertAdjacentElement("afterbegin", fig1);
                gif.insertAdjacentElement("afterbegin", fig);

                document.querySelector("#search").value = "";
            })
            .catch(error => {
                console.error("error");
            });
    });
}