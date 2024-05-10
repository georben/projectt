const axios = require('axios');

axios.get('https://api.spotify.com/v1/search?q=Heaven+Knows&type=track', {
    headers: {
    'Authorization': 'Bearer BQBCOU2K9EIUiiaT9FsmLBSIbGH21AtlnHKPiTBgwCdICO6XQQ3liry2kqFq_QnhoQkCBE94nW84S-E9qoFsamxRg3d1a6HbZ1r4YVS_FF2ZV0Ooh18fwONzUkcT0g2Pb_fWLsbZJLrVX2RfnQlxqnDe_ex_uDOez8ZVAjHiXTx78GvxNpeK2vbjzzelgPun_3joIdJqhoSGruhh5ND4ULBkJ5ELU3IsXtY5a6T4KH3B7Ug3Mo3arBT3r8r2nkeALAtvArUm4YNKg7T-Ggi7g7GxrooiiBm4gcCA9UgBYCyoPVx1WM_zZhvY2ZIDi7YL2YJv_ehbFIm3GWzLotP3M2g'
}
}).then((data)=>{
    console.log(data.data.tracks.items[0].id);
})