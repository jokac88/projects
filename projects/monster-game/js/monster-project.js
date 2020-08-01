new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    computed: {
        playerHealths: function () {
            return {
                width: this.playerHealth + "%"
            }
        },
        monsterHealths: function () {
            return {
                width: this.monsterHealth + "%"
            }
        },
        button: function () {
            return {
                textTransform: "uppercase",
                padding: "8px 10px",
                margin: "0 5px",
                letterSpacing: "1px",
                webkitBoxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
                mozBoxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
                boxShadow: "0px 10px 10px -10px rgba(0,0,0,0.75)",
            }
        },
        isPlayer: function () {
            return {
                color: "blue"
            }
        }
    },
    methods: {
        newGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function () {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits Monster for " + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        specialAttack: function () {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits Monster hard for " + damage
            });
            if (this.checkWin()) {
                return;
            }
            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }
            this.turns.unshift({
                isPlayer: true,
                text: "Player heals for " + 10
            });
            this.monsterAttacks();
        },
        giveUp: function () {
            this.gameIsRunning = false;
        },
        monsterAttacks: function () {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits Player for " + damage
            });
            this.checkWin();
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! New Game?")) {
                    this.newGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! New Game?")) {
                    this.newGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
});