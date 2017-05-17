function countdown(callback) { window.setTimeout( callback, 2000 ) }

function createMultiplier(multi) { return n => { return multi * n } }

var doubler = createMultiplier(2)
var tripler = createMultiplier(3)

function multiplier(multi, n) { return multi * n }

var doublerWithBind = multiplier.bind(null, 2)
var triplerWithBind = multiplier.bind(null, 3)
