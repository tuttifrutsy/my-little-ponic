character = "";
sonics = "";
function characterF(c) {
  if (c == "poni1") {
    character = {
      name: "Rainbow Dash",
      image1: "/Ponic/client/assets/images/back-blue.png",
      image2: "/Ponic/client/assets/images/front-blue.png",
      image3: "/Ponic/client/assets/images/right-blue.png",
      image4: "/Ponic/client/assets/images/left-blue.png",
      logo: "/Ponic/client/assets/images/ponic-nube-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni2") {
    character = {
      name: "Fluttershy",
      image1: "/Ponic/client/assets/images/back-flut.png",
      image2: "/Ponic/client/assets/images/front-flut.png",
      image3: "/Ponic/client/assets/images/right-flut.png",
      image4: "/Ponic/client/assets/images/left-flut.png",
      logo: "/Ponic/client/assets/images/ponic-mariposas-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni3") {
    character = {
      name: "Celestia",
      image1: "/Ponic/client/assets/images/back-c.png",
      image2: "/Ponic/client/assets/images/front-c.png",
      image3: "/Ponic/client/assets/images/right-c.png",
      image4: "/Ponic/client/assets/images/right-c.png",
      logo: "/Ponic/client/assets/images/celestia-cutie-mark-crusaders.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni4") {
    character = {
      name: "Luna",
      image1: "/Ponic/client/assets/images/back-l.png",
      image2: "/Ponic/client/assets/images/front-l.png",
      image3: "/Ponic/client/assets/images/roght-l.png",
      image4: "/Ponic/client/assets/images/left-l.png",
      logo: "/Ponic/client/assets/images/princess-luna-cutie-mark-.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni5") {
    character = {
      name: "Pinkie Pie",
      image1: "/Ponic/client/assets/images/back-pink.png",
      image2: "/Ponic/client/assets/images/front-pink.png",
      image3: "/Ponic/client/assets/images/right-pink.png",
      image4: "/Ponic/client/assets/images/left-pink.png",
      logo: "/Ponic/client/assets/images/ponic-pie-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c ==" poni6") {
    character = {
      name: "Apple Jack",
      image1: "/Ponic/client/assets/images/back-jack.png",
      image2: "/Ponic/client/assets/images/front-jack.png",
      image3: "/Ponic/client/assets/images/right-jack.png",
      image4: "/Ponic/client/assets/images/left-jack.png",
      logo: "/Ponic/client/assets/images/ponic-manzana-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni7") {
    character = {
      name: "Twilight",
      image1: "/Ponic/client/assets/images/back-tw.png",
      image2: "/Ponic/client/assets/images/front-tw.png",
      image3: "/Ponic/client/assets/images/rrigt-tw.png",
      image4: "/Ponic/client/assets/images/left-tw.png",
      logo: "/Ponic/client/assets/images/ponic-estrella-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni8") {
    character = {
      name: "Rarity",
      image1: "/Ponic/client/assets/images/back-r.png",
      image2: "/Ponic/client/assets/images/front-r.png",
      image3: "/Ponic/client/assets/images/right-r.png",
      image4: "/Ponic/client/assets/images/left-r.png",
      logo: "/Ponic/client/assets/images/ponic-cristales-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  }
}

// function characterSonic(c){
//   if (c == "sonic1") {
//     sonics = {
//       name: "Sonic",
//       image1: "/Ponic/client/assets/images/sonic_002.png",
//       logo: "/Ponic/client/assets/images/sonic-logo-500x375.png"
//     };
//     localStorage.setItem("character", JSON.stringify(character));
//   } else if (c == "sonic2") {
//     sonics = {
//       name: "Sonic",
//       image1: "/Ponic/client/assets/images/sonic_004.png",
//       logo: "/Ponic/client/assets/images/sonic-logo-500x375.png"
//     };
//     localStorage.setItem("character", JSON.stringify(character));
//   }
// }
