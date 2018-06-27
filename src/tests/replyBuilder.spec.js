const ReplyBuilder = require('../replyBuilder')

test('reply with card option', () => {
  const expected = {
    response: {
      'buttons': [],
      'card': {
        'type': 'ItemsList',
        'header': {
          'text': 'Можете поиграть вот в такие игры из серии Cut the Rope:'
        },
        'items': [
          {
            'image_id': '213044/348dd4cfa13795ca2f30',
            'title': 'Cut the Rope 2',
            'description': 'Приключения монстрика Ам Няма',
            'button': {
              'text': 'Играть',
              'url': 'http://games.gamepix.com/play/40214?sid=110835'
            }
          }
        ]
      },
      'end_session': false
    },
    version: '1.0'
  }
  const reply = new ReplyBuilder()
  reply.card(expected.response.card.items, 'Можете поиграть вот в такие игры из серии Cut the Rope:')
  expect(reply.get()).toEqual(expected)
})
