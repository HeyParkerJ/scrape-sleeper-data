const { exec } = require("child_process")
const league_id = "687728692536893440"

const fetchAndWrite = (url, outputFilename) => {
  exec(`curl ${url} --output data/${outputFilename}.json`, (err, stdout, stderr) => {
    if (err) {
      console.error(`error: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout ${stdout}`)
  })
}

// get league
fetchAndWrite(`https://api.sleeper.app/v1/league/${league_id}`, `league_${league_id}`)


// get users
fetchAndWrite(`https://api.sleeper.app/v1/league/${league_id}/users`, `league_${league_id}_users`)


for (let i = 1; i <= 17; i++) {
  fetchAndWrite(`https://api.sleeper.app/v1/league/${league_id}/matchups/${i}`, `league_${league_id}_matchups_week${i}`)
  fetchAndWrite(`https://api.sleeper.app/v1/league/${league_id}/transactions/${i}`, `league_${league_id}_transactions_week${i}`)
}
