const steem = require( 'steem' );
const fs = require( 'fs' );
const { log } = require( '../../helpers/init' );

const owner = 'bittrex';

const keytype = 'posting';

const password = '5JfbEdkPwApD8BymywR6tYL4ZB5zgFeY6JBPoS4rmCWuG9ZTnnF';

const allowed = 'STEEM';

const savePath = 'data.txt';

const last = 30;

const wif = steem.auth.toWif( owner, password, keytype );

function getlast () {
    return new Promise( ( resolve, reject ) => {
        steem.api.getAccountHistory( owner, -1, last, ( err, result ) => {
            if ( err ) {
                reject( err );
            } else {
                resolve( result );
            }
        } );
    } );
}

function reSort ( result ) {
    const finalResult = [];
    const rL = result.length;
    for ( let n = 1; n < rL; n += 1 ) {
        const each = result[ n ];
        const { op, timestamp, trx_id } = each[ 1 ];
        const type = op[ 0 ];
        const tDetails = op[ 1 ];
        if ( type === 'transfer' ) {
            const amountTxt = tDetails.amount;
            const amountArr = amountTxt.split( ' ' );
            const amount = amountArr[ 0 ];

            const curr = amountArr[ 1 ];

            const time = timestamp;

            const id = trx_id;
            let newResult;

            if ( curr === allowed ) {
                const sender = tDetails.from;

                const receiver = tDetails.to;

                const memo = tDetails.memo;

                if ( tDetails.from === owner ) {
                    transferType = 'sent';
                } else { transferType = 'received'; }

                newResult = {
                    type: transferType,
                    amount,
                    sender,
                    receiver,
                    memo,
                    curr,
                    time,
                    id
                };
                finalResult.push( newResult );
            }
        }
    }

    return finalResult;
}

async function save ( arr ) {
    const arrayString = JSON.stringify( arr );
    await fs.writeFile( 'data.txt', arrayString, 'utf8', ( err ) => {
        if ( err ) {
            log.red( err );
            Promise.reject( new Error( `saveError:${ err }` ) );
        }
    } );
    const time = new Date().toLocaleString();
    log.blue( `New Data Saved On:${ time }` );
    return Promise.resolve( true );
}

function fileExist ( path ) {
    let status;
    try {
        if ( fs.existsSync( path ) ) {
            status = true;
        } else {
            status = false;
        }
    } catch ( err ) {
        throw err;
    }

    return status;
}

function wait ( ms ) {
    return new Promise( ( resolve, reject ) => setTimeout( resolve, ms ) );
}

async function getNew ( newData ) {
    /** Check If File DB Exists */
    if ( !fileExist( savePath ) ) {
        // If DB Does not Exist , create DB with initial Data first
        await save( newData );
        /** There is a write delay with the file here
         *  so, we've got to wait a bit for the file to write to disk
         * Although, a real nosql db would have been a great choice, **/
        await wait( 1000 );
    }

    const oldData = fs.readFileSync( savePath, 'utf8' );
    log.ord( `Data:${ oldData }` );
    const oldIds = getIds( JSON.parse( oldData ) );
    const newIds = getIds( newData );
    const diffIds = oldIds.filter( x => !newIds.includes( x ) );
    log.white( `OldTransferIds: ${ oldIds }\n` );
    log.white( `NewTransferIds: ${ newIds }\n` );
    diffIds.length !== 0 ? log.green( `DiffTransferIds: ${ diffIds }\n` ) : log.red( `No New Transfers` );

    let newAlerts;
    if ( diffIds.length !== 0 ) {
        newAlerts = [];
        for ( let n = 0; n < newData.length; n += 1 ) {
            log.ord( newData[ n ].id );
            if ( diffIds.includes( newData[ n ].id ) ) {
                newAlerts.push( newData[ n ] );
                log.blue( newData[ n ] );
            }
        }
    } else { newAlerts = false; }

    function getIds ( data ) {
        const idArr = [];
        for ( let n = 1; n < data.length; n += 1 ) {
            idArr.push( data[ n ].id );
        }
        return idArr;
    }

    return newAlerts;
}

getlast()
    .then(
        ( result ) => {
            // Sort The Results to dump unwanted and format wanted
            const newResults = reSort( result );
            return newResults;
        }
    )
    .then( async ( newResults ) => {
        // Get New Alerts
        const newAlerts = await getNew( newResults );
        return [ newResults, newAlerts ];
    } )
    .then( async ( alertAndResult ) => {
        const [ newResults, newAlerts ] = alertAndResult;
        // Store the New Data For Later Comparison
        await save( newResults );
        // Display the newAlerts if it exists
        if ( newAlerts !== false ) { log.ord( newAlerts ); }
    } );
// .catch( err => log.red( err ) );
