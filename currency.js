const select = document.getElementById("currency");

const btc_const = 20310.2;
const eth_const = 1130.57;
const gala_const = 0.04997;
const sand_const = 1.1;
const bnb_const = 228.92;
const real_const = 0.19;
const euro_const = 1;
const dolar_const = 1;

const real = () => {
  const amount = Number(billTotalInput.value);

  let bitcoin_token = (amount * real_const) / btc_const;
  let ether_token = (amount * real_const) / eth_const;
  let gala_token = (amount * real_const) / gala_const;
  let sand_token = (amount * real_const) / sand_const;
  let bnb_token = (amount * real_const) / bnb_const;
  let dolar_token = (amount * real_const) / dolar_const;
  let euro_token = (amount * real_const) / euro_const;
  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = "  " + dolar_token.toFixed(2);
  idSete.innerText = "  " + euro_token.toFixed(2);
  idOito.innerText = "" + amount;
};

const bitcoin = () => {
  const amount = Number(billTotalInput.value);
  let bitcoin_token = amount * btc_const + " ";
  let ether_token = bitcoin_token / eth_const;
  let gala_token = bitcoin_token / gala_const;
  let sand_token = bitcoin_token / sand_const;
  let bnb_token = bitcoin_token / bnb_const;
  let dolar_token = bitcoin_token / dolar_const;
  let euro_token = bitcoin_token / euro_const;
  let real_token = bitcoin_token / real_const;
  idUm.innerText = "  " + amount;
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = "  " + dolar_token.toFixed(2);
  idSete.innerText = "  " + euro_token.toFixed(2);
  idOito.innerText = "  " + real_token.toFixed(4);
};

const ethereum = () => {
  const amount = Number(billTotalInput.value);
  let ether_token = amount * eth_const;
  let bitcoin_token = ether_token / btc_const;
  let gala_token = ether_token / gala_const;
  let sand_token = ether_token / sand_const;
  let bnb_token = ether_token / bnb_const;
  let dolar_token = ether_token / dolar_const;
  let euro_token = ether_token / euro_const;
  let real_token = ether_token / real_const;
  space.innerText = " ";
  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + amount;
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = " " + dolar_token.toFixed(2);
  idSete.innerText = " " + euro_token.toFixed(2);
  idOito.innerText = " " + real_token.toFixed(2);
};

const gala = () => {
  const amount = Number(billTotalInput.value);
  let gala_token = amount * gala_const;
  let ether_token = gala_token / eth_const;
  let bitcoin_token = gala_token / btc_const;

  let sand_token = gala_token / sand_const;
  let bnb_token = gala_token / bnb_const;
  let dolar_token = gala_token / dolar_const;
  let euro_token = gala_token / euro_const;
  let real_token = gala_token / real_const;
  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + amount;
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = "  " + dolar_token.toFixed(2);
  idSete.innerText = " " + euro_token.toFixed(2);
  idOito.innerText = "  " + real_token.toFixed(2);
};

const sand = () => {
  const amount = Number(billTotalInput.value);
  let sand_token = amount * sand_const;
  let gala_token = sand_token / gala_const;
  let ether_token = sand_token / eth_const;
  let bitcoin_token = sand_token / btc_const;
  let bnb_token = sand_token / bnb_const;
  let dolar_token = sand_token / dolar_const;
  let euro_token = sand_token / euro_const;
  let real_token = sand_token / real_const;
  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + amount;
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = "  " + dolar_token.toFixed(2);
  idSete.innerText = "  " + euro_token.toFixed(2);
  idOito.innerText = "" + real_token.toFixed(2);
};

const binance = () => {
  const amount = Number(billTotalInput.value);
  let bnb_token = amount * bnb_const;
  let sand_token = bnb_token / sand_const;
  let gala_token = bnb_token / gala_const;
  let ether_token = bnb_token / eth_const;
  let bitcoin_token = bnb_token / btc_const;
  let dolar_token = bnb_token / dolar_const;
  let euro_token = bnb_token / euro_const;
  let real_token = bnb_token / real_const;
  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + amount;
  idSeis.innerText = "  " + dolar_token.toFixed(2);
  idSete.innerText = "  " + euro_token.toFixed(2);
  idOito.innerText = " " + real_token.toFixed(4);
};

const dolar = () => {
  const amount = Number(billTotalInput.value);
  let dolar_token = amount * dolar_const;
  let bnb_token = dolar_token / bnb_const;
  let sand_token = dolar_token / sand_const;
  let gala_token = dolar_token / gala_const;
  let ether_token = dolar_token / eth_const;
  let bitcoin_token = dolar_token / btc_const;

  let euro_token = dolar_token / euro_const;
  let real_token = dolar_token / real_const;

  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = "  " + amount;
  idSete.innerText = "  " + euro_token.toFixed(2);
  idOito.innerText = " " + real_token.toFixed(2);
};

const euro = () => {
  const amount = Number(billTotalInput.value);
  let euro_token = amount * euro_const;
  let bnb_token = euro_token / bnb_const;
  let sand_token = euro_token / sand_const;
  let gala_token = euro_token / gala_const;
  let ether_token = euro_token / eth_const;
  let bitcoin_token = euro_token / btc_const;
  let dolar_token = euro_token / dolar_const;

  let real_token = euro_token / real_const;
  idUm.innerText = "  " + bitcoin_token.toFixed(4);
  idDois.innerText = "  " + ether_token.toFixed(4);
  idTres.innerText = "  " + gala_token.toFixed(2);
  idQuatro.innerText = "  " + sand_token.toFixed(2);
  idCinco.innerText = "  " + bnb_token.toFixed(4);
  idSeis.innerText = " " + dolar_token.toFixed(2);
  idSete.innerText = " " + amount;
  idOito.innerText = " " + real_token.toFixed(2);
};

const exchance = () => {
  if (select.value == "R$") {
    real();
  } else if (select.value == "BTC") {
    bitcoin();
  } else if (select.value == "ETH") {
    ethereum();
  } else if (select.value == "GALA") {
    gala();
  } else if (select.value == "SAND") {
    sand();
  } else if (select.value == "BNB") {
    binance();
  } else if (select.value == "$") {
    dolar();
  } else if (select.value == "€") {
    euro();
  }
};
