let fs = require("fs");
let path = require("path");
let express = require("express");
let graphqlHTTP = require("express-graphql");
let { buildSchema } = require("graphql");

let schema = buildSchema(
  fs.readFileSync(path.resolve(__dirname, "schema.graphql")).toString()
);

let mongoose = require("mongoose");
let Employee = require("./models/employee");

let root = {
  employees: () => {
    return Employee.find()
      .then(employees => {
        return employees.map(employee => ({
          ...employee._doc,
          _id: employee._doc._id.toString()
        }));
      })
      .catch(err => {
        console.log(err);
      });
  },
  createEmployee: args => {
    const employee = new Employee({
      ...args,
      createDate: Date.now(),
    });

    return employee
      .save()
      .then(result => ({ ...result._doc }))
      .catch(err => {
        console.log(err);
      });
  },
  updateEmployee: args => {
    return Employee.updateOne({ _id: args.id }, { ...args })
      .then(result => {
        return { ...args };
      })
      .catch(err => {
        console.log(err);
      });
  },
  removeEmployee: args => {
    Employee.deleteOne({ _id: args.id })
      .then(() => "success")
      .catch(() => "fail");
  }
};

let app = express();
const PORT = process.env.PORT || 4000

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Headers', "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
  })
);


// const connection = "mongodb+srv://admin:OmegaZero0@crud-cluster.afad9.mongodb.net/test?authSource=admin&replicaSet=atlas-s9qgmo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
const connection = process.env.MONGODB_URL || 'mongodb+srv://admin:OmegaZero0@crud-cluster.afad9.mongodb.net/employees?authSource=admin&replicaSet=atlas-s9qgmo-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true';

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('../front/build'));
}

mongoose
  .connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
  .then(() => {
    app.listen(PORT, () => console.log("Now browse to localhost:4000/graphql"));
  })
  .catch(err => {
    console.log(err);
  });
