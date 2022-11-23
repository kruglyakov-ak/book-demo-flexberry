export default {
  projections: {
    ApplicationE: {
      applicationDate: {
        __caption__: 'Дата заявки'
      },
      speaker: {
        __caption__: 'Спикер',
        surname: {
          __caption__: '~'
        },
        name: {
          __caption__: '~'
        },
        patronymic: {
          __caption__: '~'
        }
      },
      book: {
        __caption__: 'Название книги',
        name: {
          __caption__: '~'
        }
      }
    },
    ApplicationL: {
      applicationDate: {
        __caption__: 'Дата заявки'
      },
      speaker: {
        __caption__: 'Спикер',
        surname: {
          __caption__: 'Спикер'
        }
      },
      book: {
        __caption__: 'Название книги',
        name: {
          __caption__: 'Название книги'
        }
      }
    }
  },
  validations: {
    applicationDate: {
      __caption__: 'Дата заявки'
    },
    speaker: {
      __caption__: 'Спикер'
    },
    book: {
      __caption__: 'Название книги'
    }
  }
};
