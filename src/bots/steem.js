const steem = require( 'steem' );
const fs = require( 'fs' );
const { log } = require( '../helpers/init' );

const owner = 'ned';

const keytype = 'posting';

const password = '5JfbEdkPwApD8BymywR6tYL4ZB5zgFeY6JBPoS4rmCWuG9ZTnnF';

const allowed = 'STEEM';

const wif = steem.auth.toWif( owner, password, keytype );

function getlast100 () {
    return new Promise( ( resolve, reject ) => {
        steem.api.getAccountHistory( owner, -1, 100, ( err, result ) => {
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

function save ( arr ) {
    const arrayString = JSON.stringify( arr );
    fs.writeFile( 'data.txt', arrayString, ( err ) => {
        if ( err ) {
            log.red( err );
            throw new Error( `saveError:${ err }` );
        }
    } );
    const time = new Date().toLocaleString();
    log.blue( `Data Saved On:${ time }` );
    return true;
}

function getNew ( newData ) {
    const oldData = fs.readFileSync( 'data.txt' );
    const oldIds = getIds( JSON.parse( oldData ) );
    const newIds = getIds( newData );
    const diffIds = oldIds.filter( x => !newIds.includes( x ) );
    log.white( `OldTransferIds: ${ oldIds }\n` );
    log.white( `NewTransferIds: ${ newIds }\n` );
    diffIds.length !== 0 ? log.green( `DiffTransferIds: ${ diffIds }\n` ) : log.red( `No New Transfers` );

    let newAlerts;
    if ( diffIds.length !== 0 ) {
        newAlerts = [];
        for ( let n = 1; n < newData.length; n += 1 ) {
            if ( diffIds.includes( newData[ n ].id ) ) {
                newAlerts.push( newData[ n ] );
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

getlast100()
    .then(
        ( result ) => {
            const newResults = reSort( result );
            getNew( newResults );
        }
    )
    .then(

    );
