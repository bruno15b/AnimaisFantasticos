export default class initFuncionamento {
  constructor(funcionamento) {
    this.funcionamento = document.querySelector(funcionamento);
  }

  dadosFuncionamento() {
    this.diasSemana = this.funcionamento.dataset.semana.split(",").map(Number);
    this.horarioSemana = this.funcionamento.dataset.horario.split(",").map(Number);
  }

  dadosTempoReal() {
    this.dataAgora = new Date();
    this.diaAgora = this.dataAgora.getDay();
    this.horaAgora = this.dataAgora.getUTCHours() - 3;
  }

  abrirFechar() {
    if (this.diasSemana.includes(this.diaAgora) && this.horaAgora >= this.horarioSemana[0] && this.horaAgora <= this.horarioSemana[1]) {
      this.funcionamento.classList.add("aberto");
    }
  }

  init() {
    if (this.funcionamento) {
      this.dadosFuncionamento();
      this.dadosTempoReal();
      this.abrirFechar();
    }
    return this;
  }
}
