import { log } from 'console';
import { Importer, ImporterField } from 'react-csv-importer';

// include the widget CSS file whichever way your bundler supports it
import 'react-csv-importer/dist/index.css';

const Exporter = () =>{

    return(
        
// in your component code:
<Importer
  dataHandler={async (rows, { startIndex }) => {
    // required, may be called several times
    // receives a list of parsed objects based on defined fields and user column mapping;
    // (if this callback returns a promise, the widget will wait for it before parsing more data)
    console.log("------------dataHandler--------------START")
    rows.map((row:any)=>{
        console.log(row)
         // await myAppMethod(row);
    })
    console.log("------------dataHandler----------------END")
  }}
  defaultNoHeader={false} // optional, keeps "data has headers" checkbox off by default
  restartable={false} // optional, lets user choose to upload another file when import is complete
  onStart={({ file, preview, fields, columnFields }) => {
    // optional, invoked when user has mapped columns and started import
    console.log("------------onStart--------------START")
    console.log({file})
    console.log({preview})
    console.log({fields})
    console.log({columnFields})
    console.log("------------onStart----------------END")
    //prepMyAppForIncomingData();
  }}
  onComplete={({ file, preview, fields, columnFields }) => {
    // optional, invoked right after import is done (but user did not dismiss/reset the widget yet)
    console.log("------------onComplete--------------START")
    console.log({file})
    console.log({preview})
    console.log({fields})
    console.log({columnFields})
    console.log("------------onComplete----------------END")
   // showMyAppToastNotification();
  }}
  onClose={({ file, preview, fields, columnFields }) => {
    // optional, if this is specified the user will see a "Finish" button after import is done,
    // which will call this when clicked
    console.log("------------onClose--------------START")
    console.log({file})
    console.log({preview})
    console.log({fields})
    console.log({columnFields})
    console.log("------------onClose----------------END")
    //goToMyAppNextPage();
  }}

  // CSV options passed directly to PapaParse if specified:
  // delimiter={...}
  // newline={...}
  // quoteChar={...}
  // escapeChar={...}
  // comments={...}
  // skipEmptyLines={...}
  // delimitersToGuess={...}
  // chunkSize={...} // defaults to 10000
  // encoding={...} // defaults to utf-8, see FileReader API
>
  <ImporterField name="fullName" label="Full Name" />
  <ImporterField name="email" label="Email" />
  <ImporterField name="isActive" label="isActive" optional />
</Importer>
    )
}

export {Exporter}