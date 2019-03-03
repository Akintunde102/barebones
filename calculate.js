const calculateArea = ( shape, values ) => {
    const Nshape = shape.toLowerCase();
    const Nvalues = values.split( ',' );
    let area;
    const pi = 3.14;

    if ( Nshape === 'square' ) {
        area = Nvalues[ 0 ] * Nvalues[ 0 ];
    } else if ( Nshape === 'rectangle' ) {
        area = Nvalues[ 0 ] * Nvalues[ 1 ];
    } else if ( Nshape === 'circle' ) {
        area = pi * Nvalues[ 0 ];
    } else if ( Nshape === 'triangle' ) {
        area = 0.5 * Nvalues[ 0 ] * Nvalues[ 1 ];
    } else {
        throw -1;cls
    }
    
    return Promise.resolve( area );
};

const getAreas = ( shapes, values_arr ) => {
    const ret = [];
    try {
        for ( let n = 0; n < shapes.length; n += 1 ) {
            calculateArea( shapes[ n ], values_arr[ n ] )
                .then( ( area ) => {
                    ret.push( area );
                } );
        }

        return Promise.resolve( ret );
    } catch ( error ) {
        console.log( error );
        return Promise.reject( error );
    }
};

getAreas( [ 'square', 'trapezium', 'rectangle' ], [ '2', '3,3,4', '1,3' ] ).then( areas => console.log( areas ) ).catch(err=>err);
