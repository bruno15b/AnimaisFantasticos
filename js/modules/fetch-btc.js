export default function initFetchBtc(url, target) {
  const spanBtc = document.querySelector(target);

  async function fetchBtc() {
    try {
      const response = fetch(url);
      const precoBtc = await (await response).json();
      spanBtc.innerText = (spanBtc.innerText = 1000 / precoBtc.BRL.last).toFixed(6);
    } catch (error) {
      console.log(error);
    }
  }

  return fetchBtc();
}
