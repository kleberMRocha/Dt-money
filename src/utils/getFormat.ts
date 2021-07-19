export const format = {
  date: (value: string | number) => {
    const dataFormatada = new Date(value);
    const ano = dataFormatada.getFullYear();
    const mes = dataFormatada.getMonth();
    const dia = dataFormatada.getDate();

    return `${dia}/${mes}/${ano}`;
  },
  money: (value: number | string) => {
    const money = Number(value);
    return money.toLocaleString('pt-br', {
      style: 'currency',
      currency: 'BRL',
    });
  },
};

export const getFomat = (
  type: 'date' | 'money',
  value: number | string
): string | number => {
  return format[type](value);
};
