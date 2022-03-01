import GameModel from './game';
import DeckModel from './deck';
import PlayerModel from './player';
import HandModel from './hand';
import Cemetary from './cemetary';
import Pawn from './pawn';
import Board from './board';

export default {
    "cemetary": {
        'class': Cemetary,
        'param': '{}'
    },
    "pawn": {
        'class': Pawn,
        'param': '{"life": "10", "strength":"3","def":"2"}'
    },
    "board": {
        'class': Board,
        'param': '{}'
    },
    "hand": {
        'class': HandModel,
        'param':'{}'
    },
    "game": {
        "class": GameModel,
        "param": '{}'
    },
    "deck": {
        "class": DeckModel,
        "param": '{"cards" : [{"face":"card-1"}, {"face":"card-2"}]}'
    },
    "player": {
        "class": PlayerModel,
        "param": '{}'
    }
}