import addMonths from 'date-fns/addMonths';
import format from 'date-fns/format'

const today = new Date();

// This is a replication of what our api might return
export const data = [
  {
    id: 1,
    name: 'Chestnut Residence and Conference Centre',
    description: 'Centrally located in Toronto city center, this student residence is just 10 minutes’ walk from shops and restaurants on Yonge Street. On-site dining and rooms with private bathroom are available.',
    imagePath: 'https://cf.bstatic.com/xdata/images/hotel/square600/210248815.webp?k=d62e061f1f1f0c99b9539ebb2de01700ce830663e411c2e1bb0a1db967fe02e9&o=&s=1',
    costs: [
      {
        startDate: format(today, 'yyyy-MM-dd'),
        endDate: format(addMonths(today, 1), 'yyyy-MM-dd'),
        rooms: {
          SINGLE: {
            cost: 59.99,
          },
          DOUBLE: {
            cost: 79.99
          },
          TRIPLE: {
            const: 89.99
          }
        }
      },
      {
        startDate: format(addMonths(today, 1), 'yyyy-MM-dd'),
        endDate: format(addMonths(today, 2), 'yyyy-MM-dd'),
        rooms: {
          SINGLE: {
            cost: 68.99,
          },
          DOUBLE: {
            cost: 88.99
          },
          TRIPLE: {
            const: 98.99
          }
        }
      }
    ]
  }, {
    id: 2,
    name: 'Holiday Inn Toronto Downtown Centre',
    description: 'This hotel is located next door to Maple Leaf Gardens in downtown Toronto. Guest rooms offer free WiFi.',
    imagePath: 'https://cf.bstatic.com/xdata/images/hotel/square600/247267582.webp?k=7d52fe1bed4d06025e17332064047c3c3e8f5cc8e3645c55ed2d3057737610f1&o=&s=1',
    costs: [
      {
        startDate: format(today, 'yyyy-MM-dd'),
        endDate: format(addMonths(today, 1), 'yyyy-MM-dd'),
        rooms: {
          SINGLE: {
            cost: 59.99,
          },
          DOUBLE: {
            cost: 79.99
          },
          TRIPLE: {
            const: 89.99
          }
        }
      },
      {
        startDate: format(addMonths(today, 1), 'yyyy-MM-dd'),
        endDate: format(addMonths(today, 2), 'yyyy-MM-dd'),
        rooms: {
          SINGLE: {
            cost: 68.99,
          },
          DOUBLE: {
            cost: 88.99
          },
          TRIPLE: {
            const: 98.99
          }
        }
      }
    ]
  }, {
    id: 3,
    name: 'One King West Hotel and Residence',
    description: 'Built in 1914, this downtown Toronto hotel blends historic charm and elegance with modern conveniences. St. Lawrence Market and the Hockey Hall of Fame are less than 10 minutes\' walk away.',
    imagePath: 'https://cf.bstatic.com/xdata/images/hotel/square600/39679015.webp?k=71f692719fe9d02d2cae96c72e707c872f9eb8cf713e436c1bb7af283ee2569c&o=&s=1',
    costs: [
      {
        startDate: format(today, 'yyyy-MM-dd'),
        endDate: format(addMonths(today, 1), 'yyyy-MM-dd'),
        rooms: {
          SINGLE: {
            cost: 59.99,
          },
          DOUBLE: {
            cost: 79.99
          },
          TRIPLE: {
            const: 89.99
          }
        }
      },
      {
        startDate: format(addMonths(today, 1), 'yyyy-MM-dd'),
        endDate: format(addMonths(today, 2), 'yyyy-MM-dd'),
        rooms: {
          SINGLE: {
            cost: 68.99,
          },
          DOUBLE: {
            cost: 88.99
          },
          TRIPLE: {
            const: 98.99
          }
        }
      }
    ]
  }
]

export default data;