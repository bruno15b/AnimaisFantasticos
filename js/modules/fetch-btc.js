export default function initFetchBtc() {
  const spanBtc = document.querySelector(".btc-preco");
  if (spanBtc) {
    async function fetchBtc(url) {
      try {
        const response = fetch(url);
        const precoBtc = await (await response).json();
        spanBtc.innerText = (spanBtc.innerText =
          1000 / precoBtc.BRL.last).toFixed(6);
      } catch (error) {
        console.log(error);
      }
    }
    fetchBtc("https://blockchain.info/ticker");
  }
}
