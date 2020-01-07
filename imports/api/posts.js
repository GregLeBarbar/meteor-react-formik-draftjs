import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
import { check } from 'meteor/check';
import { stringify } from 'querystring';

export const postsSchema = new SimpleSchema({
    // _id use to update a lex
    _id: {
      type: String,
      optional: true,
    },
    title: {
      type: String,
      label: "Titre",
      optional: false,
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
