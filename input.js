function countChange ( money, coins ) {
    const cArr = coins.length;
    let cc = 0;
    let ret = [];
    for ( let n = 0; n < cArr; n += 1 ) {
        const div = money / coins[ n ];

        if ( div - Math.floor( div ) !== 0 ) {
            cc += 1;

            for ( let mu = 0; mu < div.length; mu += 1 ) {
                ret.push( coins[ n ] );
            }

            console.log( ret ); ret = [];
        }

        const total = [];
        const b = 0;
        for ( let a = 0; total >= money; a += 1 ) {
            if ( total.reduce( ( x, z ) => x + z ) <= money ) {
                total.push( coins[ n + a ] );
            } else {
                total.pop();

                const nn = 0;
                for ( let b = 0; ;b += 1 ) {
                    total.push( coins[ nn + b ] );
                }
            }

            if ( total.reduce( ( x, z ) => x + z ) === money ) {
                cc += 1;

                console.log(total);
            }
        }
    }

    return cc;
}

console.log( countChange( 10, [ 5, 2, 3 ] ) );
