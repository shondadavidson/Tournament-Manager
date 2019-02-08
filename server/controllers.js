let tournaments = [
    {
        id: 1,
        date: `March 22-24, 2019`,
        name: `TheLakes`,
        location: `Palm Springs, CA`,
        entered: false,
        details: "Fun tournament!"
    },
    {
        id: 2,
        date: `April 15-19, 2019`,
        name: `USOpen`,
        location: `Naples, FL`,
        entered: false,
        details: 'hot and humid.'
    }
];

let idCounter = 3

module.exports = {
    getTourneys: (req, res, next) => {
        // console.log(res)
        res.status(200).send(tournaments);
    },

    createTourney: (req, res) => {
        // console.log(1, req);
        const { date, name, location, entered } = req.body;
        const id = idCounter;
        idCounter++
        // console.log(2, date, name, location, entered)
        tournaments.push({
          id,
          date,
          name,
          location,
          entered,
          
        });
        res.status(201).send(tournaments);
      },
    
      deleteTourney: (req, res) => {
        console.log(req.params)
        const { id } = req.params;

        const index = tournaments.findIndex(tourney => tourney.id == id);

        tournaments.splice(index, 1);

        res.status(200).send(tournaments)

    },

    updateTourney: (req, res) => {
        const { id } = req.params;
        const { date, name, location, entered, details } = req.body;

        let index = tournaments.findIndex(tourney => tourney.id == id);

        let foundTournament = tournaments[index];

        foundTournament = {
            id: foundTournament.id,
            date: date || foundTournament.date,
            name: name || foundTournament.name,
            location: location || foundTournament.location,
            entered: entered || foundTournament.entered,
            details: details || foundTournament.details
        };

        tournaments.splice(index, 1, foundTournament);

        res.status(200).send(tournaments)
    }
}