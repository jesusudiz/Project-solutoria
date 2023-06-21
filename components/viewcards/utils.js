export   const sortOptions = [
    { name: 'All Indicators', href: '#', current: true },
    { name: 'Valor Indicator: Low to High', href: '#', current: false },
    { name: 'Valor Indicator: High to Low', href: '#', current: false },
  ]
export   const subCategories = [
    { name: 'Create Indicator', href: 'api/indicator/create' },
    
  ]
export   const filters = [
    
    {
      id: 'sorted',
      name: 'Sorted By',
      options: [
        { value: 'UF', label: 'UF', checked: false },
        { value: 'IPC', label: 'IPC', checked: false },
        { value: 'BITCOIN', label: 'Bitcoin', checked: false },
        { value: 'TASA_DESEMPLEO"', label: 'Tasa de Desempleo', checked: false },
        { value: 'LIBRA_COBRE', label: 'Libra de Cobre', checked: false },
        { value: 'IMACEC', label: 'IMACEC', checked: false },
        { value: 'IVP', label: 'Indice de valor Promedio', checked: false },
        { value: 'EURO', label: 'EURO', checked: false },
        { value: 'TPM', label: 'TPM', checked: false },
        { value: 'DOLAR', label: 'Dólar Observado', checked: false },
      ],
    },
    {
      id: 'years',
      name: 'Years',
      options: [
        { value: '2020', label: '2020', checked: false },
        { value: '2021', label: '2021', checked: false },
       
      ],
    },
  ]