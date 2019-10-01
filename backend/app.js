var fs = require("fs");
var path = require("path");
var express = require("express");
var graphqlHTTP = require("express-graphql");
var { buildSchema } = require("graphql");

var schema = buildSchema(
  fs.readFileSync(path.resolve(__dirname, "schema.graphql")).toString()
);

var mongoose = require("mongoose");
var Employee = require("./models/employee");

var root = {
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
      ...args.employee,
      create_date: Date.now(),
      company_id: 1
    });

    return employee
      .save()
      .then(result => ({ ...result._doc }))
      .catch(err => {
        console.log(err);
      });
  },
  updateEmployee: args => {
    return Employee.updateOne({ _id: args.id }, { ...args.employee })
      .then(result => {
        return { ...args.employee };
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

var app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
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

mongoose
  .connect(`mongodb://localhost:27017/vakho`)
  .then(() => {
    app.listen(4000, () => console.log("Now browse to localhost:4000/graphql"));
  })
  .catch(err => {
    console.log(err);
  });
