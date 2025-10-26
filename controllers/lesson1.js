const ChooseRoute = (req, res) => {
    res.send("Enter either /MyWife Or /Myself")
};

const MyWifeRoute = (req, res) => {
    res.send("Meissa My Beloved")
};

const MyRoute = (req, res) => {
    res.send("I am JT");
};

module.exports = {
    ChooseRoute,
    MyWifeRoute,
    MyRoute
};