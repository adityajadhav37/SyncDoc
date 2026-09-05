const mongoose = require("mongoose");

const nodeSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["document", "heading", "paragraph", "list", "listItem", "code"],
    },

    content: {
      type: String,
      default: "",
    },

    children: {
      type: [mongoose.Schema.Types.Mixed],
      default: [],
    },
  },
  {
    _id: false,
  }
);

const documentSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    nodes: {
      type: [nodeSchema],
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

const Document = mongoose.model("Document", documentSchema);

module.exports = Document;