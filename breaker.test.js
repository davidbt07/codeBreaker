const breaker = require('./breaker');
describe('', ()=>{
    test('Todos coinciden XXXX', ()=>{
        var result = breaker.breaker(1234);
        expect(result).toBe("XXXX");
    });

    test('Ninguno coincide ', ()=>{
        var result = breaker.breaker(6789);
        expect(result).toBe("");
    })

    test('Todos coinciden en diferente orden ----',()=>{
        var result = breaker.breaker(4321);
        expect(result).toBe("----")
    })
});

describe('Coinciden en numero y posición', ()=>{
    test('Coincide parcialmente los primeros tres digitos XXX',()=>{
        var result = breaker.breaker(1235);
        expect(result).toBe("XXX");
    });

    test('Coinciden los primeros dos digitos y el último XXX',()=>{
        var result = breaker.breaker(1254);
        expect(result).toBe("XXX");
    });
});

describe('Coinciden en numero pero no posición', ()=>{
    test('Contiene tres digitos en diferente posición ---',()=>{
        var result = breaker.breaker(3521);
        expect(result).toBe("---");
    });
});

describe('Coinciden algunos en numero y algunos en posición', ()=>{
    test('Coinciden los dos primeros en pos y num, & otro solo en num',()=>{
        var result = breaker.breaker(1293);
        expect(result).toBe("XX-");
    });
});