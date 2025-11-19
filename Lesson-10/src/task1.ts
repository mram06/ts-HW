// 1. Чернетка товару:
// Описати тип Auto (id, марка, колір, рік_випуску, власник).
// Потім описати DraftAuto для збереження неповних описів даних про авто у localStorage.

interface IAuto {
  id: number;
  make: string;
  color: string;
  year: number;
  owner: string;
}

type DraftAuto = Partial<IAuto>;

const auto1: DraftAuto = {
  id: 1,
  make: "Rivian",
  year: 2023,
};

function saveAuto(auto: DraftAuto) {
  localStorage.setItem("autoData", JSON.stringify(auto));
}

saveAuto(auto1);
console.log(localStorage.getItem("autoData"));
