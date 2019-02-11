let tournaments = [
    {
        id: 1,
        date: `March 22-24, 2019`,
        name: `The Lakes`,
        location: `Palm Springs, CA`,
        entered: false,
        details: "Great tournament. Register Jan 1, 2019. Partners: Rob & Jaci"
    },
    {
        id: 2,
        date: `April 15-19, 2019`,
        name: `US Open`,
        location: `Naples, FL`,
        entered: false,
        details: `Register Jan 15, 2019.  Partners Mixed Age- Rob, Mixed Open- Rob, Women's age- Jessica, Women's Open- Jaci`
    },
    {
        id: 3,
        date: `July 14, 2019`,
        name: `Shonda's Birthday Bash`,
        location: `St George, UT`,
        entered: false,
        details: 'You really can play pickleball and eat your cake too!'
    },
    {
        id: 4,
        date: `September 12-25, 2019`,
        name: `Texas Open`,
        location: `Dallas, TX`,
        entered: false,
        details: `Everything is bigger in Texas, including the cash payouts!  Enter April 15, 2019.  Partners: Mixed- Rob, Women's- ??`
    }
];

let idCounter = 5

module.exports = {
    getTourneys: (req, res, next) => {
        // console.log(res)
        res.status(200).send(tournaments);
    },

    createTourney: (req, res) => {
        // console.log(1, req);
        const { date, name, location, entered, details } = req.body;
        const id = idCounter;
        idCounter++
        // console.log(2, date, name, location, entered)
        tournaments.push({
          id,
          date,
          name,
          location,
          entered,
          details          
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