import Deamon from '../deamon.js';

test('New Deamon', () => {
    const deamon = new Deamon('Deamy');
    expect(deamon).toEqual({
        name: 'Deamy',
        type: 'Deamon',
        health: 100,
        level: 1,
        attack: 10,
        defence: 40,
    });
});
