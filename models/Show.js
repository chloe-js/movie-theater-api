//import our db, Model, DataTypes
const { db, DataTypes, Model} = require('../db')

class Show extends Model {}

Show.init(
    {

        title: DataTypes.STRING,
        genre: DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
        rating: DataTypes.INTEGER,
        status: DataTypes.STRING,

    },
    {
        sequelize: db,
        modelName: "Show",
    }
);


//Creating a User child class from the Model parent class
// const Show = db.define("shows", {
//     title: DataTypes.STRING,
//     genre: DataTypes.ENUM("Comedy", "Drama", "Horror", "Sitcom"),
//     rating: DataTypes.INTEGER,
//     status: DataTypes.STRING,
// });

//exports
module.exports = { Show }
