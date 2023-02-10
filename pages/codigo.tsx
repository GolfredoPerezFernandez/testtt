const ccxt = require('ccxt');
const exchange = new ccxt.binance();
const symbol = 'AVAX/USDT';
const timeframe = '1m';
const limit = 100;

const Binance = require('binance-api-node').default;

// Instanciar una nueva conexión a la API de Binance
const client = Binance({
  apiKey: 'your-binance-api-key',
  apiSecret: 'your-binance-api-secret'
});

async function main() {
  let candles = await exchange.fetchOHLCV(symbol, timeframe, limit);
  let prices = candles.map(candle => candle[4]);
  let ema12 = calculateEMA(prices, 12);
  let ema26 = calculateEMA(prices, 26);
  let rsi = calculateRSI(prices);

  let currentPrice = prices[prices.length - 1];
  let currentEma12 = ema12[ema12.length - 1];
  let currentEma26 = ema26[ema26.length - 1];
  let currentRsi = rsi[rsi.length - 1];

  let leverage = 5;
  let stopLoss = 0.2;
  const liquidationPoint = await getLiquidationPoint(symbol, currentPrice, 50);

  if (currentPrice >= liquidationPoint.long && currentPrice <= liquidationPoint.short) {
    
  if (currentEma12 > currentEma26 && currentRsi < 30) {
    let amount = exchange.amountToPrecision(symbol, 0.01);

    let order = await client.order({
        symbol: symbol,
        side: 'BUY',
        type: 'LIMIT',
        quantity: amount,
        price: currentPrice,
        timeInForce: 'GTC',
        stopPrice: currentPrice * (1 - stopLoss),
        leverage: leverage
      });


    console.log('Comprado a ' + currentPrice + ' con orden: ', order);
  } else if (currentEma12 < currentEma26 && currentRsi > 70) {
    let amount = exchange.amountToPrecision(symbol, 0.00088);
    let order = await exchange.createOrder(symbol, 'limit', 'sell', amount, currentPrice);
   
    let orderResult = await client.order({
        symbol: symbol,
        side: 'SELL',
        type: 'LIMIT',
        quantity: amount,
        price: currentPrice,
        timeInForce: 'GTC',
        stopPrice: currentPrice * (1 - stopLoss),
        leverage: leverage
      });

    console.log('Vendido a ' + currentPrice + ' con orden: ', order);
  }
    }
}

function calculateEMA(prices, period) {
  let k = 2 / (period + 1);
  let ema = [];
  for (let i = 0; i < prices.length; i++) {
    if (i == 0) {
      ema[i] = prices[i];
    } else {
      ema[i] = (prices[i] - ema[i - 1]) * k + ema[i - 1];
    }
  }
  return ema;
}

async function getLiquidationPoint(symbol, price, leverage) {
    // Obtener la tasa de margen actual para el símbolo
    const marginInfo = await client.marginInfo({
      symbol: symbol,
    });
    const initialMargin = marginInfo.initialMargin;
    const maintenanceMargin = marginInfo.maintenanceMargin;
  
    // Calcular los puntos de liquidación
    const longLiquidation = price - (price * initialMargin / leverage);
    const shortLiquidation = price + (price * initialMargin / leverage);
  
    return {
      long: longLiquidation,
      short: shortLiquidation,
    };
  }

function calculateRSI(prices) {
  let rsi = [];
  for (let i = 0; i < prices.length; i++) {
    if (i < 14) {
      rsi[i] = 0;
    } else {
      let gains = [];
      let losses = [];
      for (let j = 0; j < 14; j++) {
        if (prices[i - j] > prices[i - j - 1]) {
          gains.push(prices[i - j] - prices[i - j - 1]);
        } else if (prices[i - j] < prices[i - j - 1]) {
            losses.push(prices[i - j - 1]-prices[i - j]);
}
}
let avgGain = gains.reduce((a, b) => a + b, 0) / 14;
let avgLoss = losses.reduce((a, b) => a + b, 0) / 14;
let relativeStrength = avgGain / avgLoss;
rsi[i] = 100 - (100 / (1 + relativeStrength));
}
}
return rsi;
}
setInterval(main, 60000);