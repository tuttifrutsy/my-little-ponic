character = "";

function characterF(c) {
  if (c == "poni1") {
    character = {
      name: "Rainbow Dash",
      image1: "/Ponic/client/assets/images/poni_001.png",
      logo: "/Ponic/client/assets/images/ponic-nube-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni2") {
    character = {
      name: "Fluttershy",
      image1: "/Ponic/client/assets/images/poni_002.png",
      logo: "/Ponic/client/assets/images/ponic-mariposas-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni3") {
    character = {
      name: "Celestia",
      image1: "/Ponic/client/assets/images/poni_003.png",
      logo: "/Ponic/client/assets/images/ponic-flor-02.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni4") {
    character = {
      name: "Luna",
      image1: "/Ponic/client/assets/images/poni_004.png",
      logo: "/Ponic/client/assets/images/ponic-flor-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni5") {
    character = {
      name: "Pinkie Pie",
      image1: "/Ponic/client/assets/images/poni_005.png",
      logo: "/Ponic/client/assets/images/ponic-pie-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c =="poni6") {
    character = {
      name: "Apple Jack",
      image1: "/Ponic/client/assets/images/poni_006.png",
      logo: "/Ponic/client/assets/images/ponic-manzana-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni7") {
    character = {
      name: "Twilight",
      image1: "/Ponic/client/assets/images/poni_007.png",
      logo: "/Ponic/client/assets/images/ponic-estrella-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  } else if (c == "poni8") {
    character = {
      name: "Rarity",
      image1: "/Ponic/client/assets/images/poni_008.png",
      logo: "/Ponic/client/assets/images/ponic-cristales-01.png"
    };
    localStorage.setItem("character", JSON.stringify(character));
  }
}
