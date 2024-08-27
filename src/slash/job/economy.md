# Akira Economy Modules

- [Akira Economy Modules](#akira-economy-modules)
  - [Incomming](#incomming)
    - [Work](#work)
      - [Normal Work](#normal-work)
      - [Special Work](#special-work)
    - [Special income](#special-income)
      - [Collect](#collect)
  - [Shop](#shop)
  - [Outgoing](#outgoing)
  - [Jobs](#jobs)
    - [Normal Jobs](#normal-jobs)
      - [SuperMarket](#supermarket)
        - [SuperMarket Levels](#supermarket-levels)
        - [SuperMarket Exp](#supermarket-exp)
      - [Programmer](#programmer)
        - [Programmer Requirements](#programmer-requirements)
        - [Programmer Levels](#programmer-levels)
        - [Programmer Exp](#programmer-exp)
  - [Ideas](#ideas)

## Incomming

### Work

`Normal Work = normal stamina usage | normal hours | Cooldown`

`c/H = Coins per hour.` | `w/H = wood per hour` | `a/H = Artifects per hour` | `s/H = Stone per hour` | `f/H = Fish per hour`

`(A) = Rare` | `(S) = Super Rare`

#### Normal Work

| Work Name                   | Description | Default Income   | Type of income       | Cooldown |
|-----------------------------|-------------|------------------|----------------------|----------|
| No Work                     | No Work     | 120 c/Day        | Coins (If collected) | 24Hours  |
| [supermarket](#supermarket) | Normal Work | 18.5 c/h         | Coins                | 2 Hours  |
| [Programmer](#programmer)   | Normal Work | 18.5 c/h         | Coins                | 2 Hours  |

#### Special Work

| Work Name | Description | Default Income   | Type of income | Work Time | Cooldown | note                    |
|-----------|-------------|------------------|----------------|-----------|----------|-------------------------|
| Timer     | Hard Work   | 2 to 3 W/H       | Wood/Coins(R)  | 7H to 12H | 15 Hours | Min = 175    \| Max 450 |
| Explorer  | Hard Work   | 0.25 to 1.50 a/H | Artifect/Coins | 7H to 13H | 14 Hours | Min = 49.35  \| Max 550 |
| Miner     | Hard Work   | 10/25 s/H        | Stone/Ruby(S)  | 7H to 12H | 15 Hours | Min = 187    \| Max 510 |
| Fishher   | Hard Work   | 0.33 to 12 f/H   | Fish/Boot(R)   | 10 Hours  | 10 Hours | Min = 14.025 \| max 510 |

### Special income

#### Collect

| Name        | Type   | Amount   | Cooldown | Extra |
|-------------|--------|----------|----------|-------|
| Voter       | Easy   | 65 Coins | 12 Hours | Gained by voting for akira on one of the vote sites. |
| Owner       | Easy   | 150Coins | 24 Hours | Gained if the user is the owner of a server with akira in it. |
| Donator     | Easy   | 150Coins | 24 Hours | Gained from donating atleast 1 EUR. Or getting akira premium from discord app (needed to have once).|
| Beta Tester | Normal | 250Coins | 24 Hours | Gained if the user is part of the closed beta testers.|

## Shop

| Amount | Item     | Sell Price | Buy Price |
|--------|----------|------------|-----------|
| 1x     | Fish     | 3.5 Coins  | 4.5 Coins |
| 1x     | Boot     | 7.0 Coins  | 15  Coins |
| 1X     | Stone    | 1.7 Coins  | 3.0 Coins |
| 1x     | Ruby     | 120 Coins  | 175 Coins |
| 1x     | Artifect | 28.2 Coins | 45  Coins |

## Outgoing

## Jobs

### Normal Jobs

#### SuperMarket

##### SuperMarket Levels

| Level  | Name               | Income /Hour | Exp / Shift        | Exp Requirement / Level               | Weekend Multiplier Coin | Weekend Multiplier Exp |
|--------|--------------------|--------------|--------------------|---------------------------------------|-------------------------|------------------------|
| 1      | Bagger             | 15.33 Coins  | 10   to 25 Exp     | + 125 Exp Every Level from 1 to 4     | Sat 1.5x / Sun 2.0x     | Sat 1.5x / Sun 2.0x    |
| 5      | Stock Clerk        | 18.5  Coins  | 13.5 to 35 Exp     | + 175 Exp Every Level from 5 to 9     | Sat 1.5x / Sun 2.0x     | Sat 1.8x / Sun 2.3x    |
| 10     | Janitor            | 21    Coins  | 18   to 43 Exp     | + 230 Exp Every Level from 10 to 29   | Sat 1.5x / Sun 2.0x     | Sat 2.1x / Sun 2.75x   |
| 30     | Cashier            | 25.8  Coins  | 24.5 to 58 Exp     | + 300 Exp Every Level from 30 to 74   | Sat 1.5x / Sun 2.0x     | Sat 2.5x / Sun 3.33x   |
| 75     | Department Manager | 42.5  Coins  | 31.3 to 66 Exp     | + 375 Exp Every Level from 75 to 174  | Sat 1.5x / Sun 2.0x     | Sat 2.9x / Sun 3.85x   |
| 175    | Assistant Manager  | 68.9  Coins  | 38   to 70 Exp     | + 465 Exp Every Level from 175 to 499 | Sat 1.5x / Sun 2.0x     | Sat 3.5x / Sun 4.6x    |
| 500    | Store Manager      | 94.5  Coins  | 0 EXP (Max level)  | + 0 EXP (MAX Level)                   | Sat 1.5x / Sun 2.0x     | Sat 0x   / Sun 0x      |

##### SuperMarket Exp

| level | Exp Gained Every Shift | Cumulative Exp Requirement | Required Shifts to level up  |
|-------|------------------------|----------------------------|------------------------------|
|       |                        |                            | Max / Mid / Min              |
| 1     | 10   to 25 Exp         | 125  Exp                   | 12.5 / 8.5 / 5               |
| 2     | 10   to 25 Exp         | 250  Exp                   | 12.5 / 8.5 / 5               |
| 3     | 10   to 25 Exp         | 375  Exp                   | 12.5 / 8.5 / 5               |
| ...   | ...                    | ...                        | ...                          |
| 9     | 13.5 to 35 Exp         | 1375 Exp                   | 12.9 / 8.5 / 5               |
| 10    | 18   to 43 Exp         | 1605 Exp                   | 12.7 / 8.5 / 5               |
| 11    | 18   to 43 Exp         | 1835 Exp                   | 12.7 / 8.5 / 5               |
| ...   | ...                    | ...                        | ...                          |
| 29    | 18   to 43 Exp         | 7270 Exp                   | 12.7 / 8.5 / 5               |
| 30    | 24.5 to 58 Exp         | 7500 Exp                   | 12.2 / 8.5 / 5               |
| 31    | 24.5 to 58 Exp         | 7800 Exp                   | 12.2 / 8.5 / 5               |
| ...   | ...                    | ...                        | ...                          |
| 75    | 31.3 to 66 Exp         | 29700 Exp                  | 12.2 / 8.5 / 5               |
| 75    | 31.3 to 66 Exp         | 30000 Exp                  | 12.0 / 8.5 / 5               |
| 76    | 31.3 to 66 Exp         | 30375 Exp                  | 12.0 / 8.5 / 5               |
| ...   | ...                    | ...                        | ...                          |
| 174   | 38   to 70 Exp         | 79625 Exp                  | 12.0 / 8.5 / 5               |
| 175   | 38   to 70 Exp         | 80000 Exp                  | 12.2 / 9   / 6               |
| 176   | 38   to 70 Exp         | 80465 Exp                  | 12.2 / 9   / 6               |
| ...   | ...                    | ...                        | ...                          |
| 499   | 38   to 70 Exp         | 208385 Exp                 | 12.2 / 9   / 6               |
| 500   | 0 EXP (Max level)      | 208850 Exp                 | N/A                          |

#### Programmer

##### Programmer Requirements

| Level | Requirement | Obtain          |
|-------|-------------|-----------------|
| 1     | Computer    | [Store](#shop)  |
| 5     | Certificate | [PC Store](#shop)  |

##### Programmer Levels

| Level  | Name               | Income /Hour  | Exp / Shift        | Exp Requirement / Level  | Weekend Multiplier Coin | Weekend Multiplier Exp |
|--------|--------------------|---------------|--------------------|--------------------------|-------------------------|------------------------|
| 1      | Junior Developer   | 22.7  Coins   | 12.5 to 22 Exp     | 125 Exp                  | Sat 1.25x / Sun 1.50x   | Sat 1.5x / Sun 2.2x    |
| 5      | Developer          | 34.2  Coins   | 15.9 to 33 Exp     | 175 Exp                  | Sat 1.25x / Sun 1.50x   | Sat 1.8x / Sun 2.5x    |
| 10     | Senior Developer   | 48.5  Coins   | 21.2 to 41 Exp     | 225 Exp                  | Sat 1.25x / Sun 1.50x   | Sat 2.1x / Sun 2.9x    |
| 30     | Lead Developer     | 69.9  Coins   | 28.7 to 55 Exp     | 270 Exp                  | Sat 1.25x / Sun 1.50x   | Sat 2.4x / Sun 3.0x    |
| 75     | Technical Manager  | 82.5  Coins   | 34.0 to 67 Exp     | 350 Exp                  | Sat 1.25x / Sun 1.50x   | Sat 2.7x / Sun 3.4x    |
| 175    | IT Director        | 103.5 Coins   | 44.4 to 74 Exp     | 470 Exp                  | Sat 1.25x / Sun 1.50x   | Sat 3.3x / Sun 4.0x    |
| 500    | CTO                | 132.6 Coins   | 0 Exp (MAX LEVEL)  | 0 Exp (MAX LEVEL)        | Sat 1.25x / Sun 1.50x   | Sat 0x / Sun 0x        |

##### Programmer Exp

| level | Exp Gained Every Shift | Cumulative Exp Requirement | Required Shifts to level up  |
|-------|------------------------|----------------------------|------------------------------|
|       |                        |                            | Max / Mid / Min              |
| 1     | 12.5 to 22 Exp         | 125  Exp                   |  10 / 8.5 / 7                |
| 2     | 12.5 to 22 Exp         | 250  Exp                   |  10 / 8.5 / 7                |
| 3     | 12.5 to 22 Exp         | 375  Exp                   |  10 / 8.5 / 7                |
| 4     | 15.9 to 33 Exp         | 500  Exp                   |  10 / 8.5 / 7                |
| 5     | 15.9 to 33 Exp         | 675  Exp                   |  10 / 8.5 / 7                |
| 6     | 15.9 to 33 Exp         | 850  Exp                   |  10 / 8.5 / 7                |
| ...   | ...                    | ...                        | ...                          |
| 9     | 18   to 43 Exp         | 1530 Exp                   | TO LAZY TO CALCULATE THE REST|
| 10    | 21.2 to 41 Exp         | 1605 Exp                   | SHOULD BE FINE, RIGHT?!?     |
| 11    | 21.2 to 41 Exp         | 1835 Exp                   | |
| ...   | ...                    | ...                        | ...                          |
| 29    | 21.2 to 41 Exp         | 7275 Exp                   | |
| 30    | 28.7 to 55 Exp         | 7500 Exp                   | |
| 31    | 28.7 to 55 Exp         | 7770 Exp                   | |
| ...   | ...                    | ...                        | ...                          |
| 74    | 28.7 to 55 Exp         | 29730 EXP                  | |
| 75    | 34.0 to 67 Exp         | 30000 Exp                  | |
| 76    | 34.0 to 67 Exp         | 30350 Exp                  | |
| ...   | ...                    | ...                        | ...                          |
| 174   | 34.0 to 67 Exp         | 79650 EXP                  | |
| 175   | 44.4 to 74 Exp         | 80000 Exp                  | |
| 176   | 44.4 to 74 Exp         | 80470 Exp                  | |
| ...   | ...                    | ...                        | ...                          |
| 499   | 44.4 to 74 Exp         | 79650 EXP                  | |
| 500   | 0 Exp                  | 206525 Exp                 | |

## Ideas

`!Work` collects over time and than on friday week you can collect it with `!collect`

- Saves in var like `sa + su + mo + th + we + tu + fr`
- If not collected it stays as `sa + su + mo + th + we + tu + fr + sa + su + ma + etc`

[Normal work](#normal-work) has an increase of money on weekends and holidays.
