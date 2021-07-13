const Sequelize = require("sequelize");
const db = require("../config/db.config");

const issue = db.define("Issue", {
  title: {
    type: Sequelize.STRING(50),
    validate: {
      notNull: true,
    },
  },
  description: {
    type: Sequelize.STRING,
    validate: {
      notNull: true,
    },
  },
  gps_lat: {
    type: Sequelize.DOUBLE,
    validate: {
      notNull: true,
    },
  },
  gps_long: {
    type: Sequelize.DOUBLE,
    validate: {
      notNull: true,
    },
  },
  location: {
    type: Sequelize.STRING(50),
  },
  status: {
    type: Sequelize.STRING(20),
    validate: {
      isIn: [["NEW"], ["DELAYED"], ["IN PROGRESS"], ["DONE"]],
    },
  },
  isPrivate: {
    type: Sequelize.BOOLEAN,
  },
  dateCreated: {
    type: Sequelize.DATE,
    validate: {
      notNull: true,
      isDate: true,
    },
  },
  dateUpdated: {
    type: Sequelize.DATE,
    validate: {
      isDate: true,
    },
  },
  attachments: [
    {
      //id
      parent_id: {},
      image: {
        type: Sequelize.STRING, //.BLOB
        validate: {
          notNull: true,
        },
      },
    },
  ],
  owner_id: {}, //the id of the citizen
  assignee_id: {}, //the id of the agent
  validator_id: {},
});

module.exports = issue;
