let curHeight = 0;

const bada = document.querySelector(".bada");
const chotas = document.querySelectorAll(".chota");
const pani = document.querySelector(".pani");
const hogya = document.querySelector("#hogya");
const baki = document.querySelector(".baki");
const uper = document.querySelector(".uperBhejo");

chotas.forEach(function (el, ind) {
  el.addEventListener("click", function (e) {
    const target = +e.target.closest(".chota").classList[2][6];

    let st = 0;

    console.log(target);
    if (target > 4) {
      st = 4;
    }

    for (let i = st; i < target; i++) {
      if (!chotas[i].classList.contains("fill")) {
        chotas[i].classList.add("fill");
        curHeight += 12.5;
      }
    }
    // console.log(target);
    pani.style.height = `${curHeight}%`;
    hogya.textContent = `${curHeight}%`;
    baki.textContent = `${2 - curHeight / 100}`;
    uper.style.transform = `translateY(-${120 * (curHeight / 100)}px)`;
  });
});
