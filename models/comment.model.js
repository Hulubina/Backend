const Sequelize = require("sequelize");
const db = require("../config/db.config");

const issue = require("./issue.model");

const comment = db.define("Comment", {
  name: {
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

  issue_id: {
    type: Sequelize.INTEGER,
    references: {
      model: issue,
      key: "id",
      deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE,
    },
  },
});

module.exports = comment;
