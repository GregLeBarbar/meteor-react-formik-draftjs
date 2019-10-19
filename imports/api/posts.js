import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';

export const postsSchema = new SimpleSchema({
    // _id use to update a lex
    _id: {
      type: String,
      optional: true,
    },
    description1: {
      type: String,
      label: "Description1",
      optional: false,
    },
    description2: {
      type: String,
      label: "Description2",
      optional: false,
  },
}, { check });

export const Posts = new Mongo.Collection('posts');
