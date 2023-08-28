import GameSavingLoader from '../GameSavingLoader';

test('test', () => GameSavingLoader.load().then((result) => {
  expect(result)
    .toEqual({
      id: 9,
      created: 1546300800,
      userInfo: {
        id: 1, name: 'Hitman', level: 10, points: 2000,
      },
    });
}));
