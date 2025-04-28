const ifc = new Ifc(new Date());

const date = document.querySelector(".date");
date.innerHTML = ifc.now();
