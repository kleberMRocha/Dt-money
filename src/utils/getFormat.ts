export const format = {
  date: (value: string | number, dataFormat?: 'mes' | 'dia') => {
    const dataFormatada = new Date(value);
    const ano = dataFormatada.getFullYear();
    const mes = (dataFormatada.getMonth() + 1).toString().padStart(2, '0');
    const dia = dataFormatada.getDate();

    if (dataFormat) {
      return dataFormat === 'dia' ? `${dia}/${mes}/${ano}` : `${mes}/${ano}`;
    }

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
  value: number | string,
  dataFormat?: 'mes' | 'dia'
): string | number => {
  return format[type](value, dataFormat);
};
